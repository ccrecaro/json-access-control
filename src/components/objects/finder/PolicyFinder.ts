import * as fs from 'fs';
import { STATUS_PROCESSING_ERROR } from '../../../constants/Status';
import { JsonSerializer, throwError } from 'typescript-json-serializer';
import { Policy } from '../../Policy';
import { RequestCtx } from '../architecture/context/RequestCtx';
import { StatusCode } from '../StatusCode';
import { Status } from '../Status';
import { PolicyFinderResult } from './PolicyFinderResult';

class PolicyFinder {
    private _policies: Map<string, Policy>;
    private _policiesLocation: string[]; //lista de path de cada politica. Debe ser el path completo hacia cada archivo
    
    constructor(policiesLocation: string[]) {
        this._policies = new Map<string, Policy>();
        this._policiesLocation = policiesLocation;
    }

    public get policies(): Map<string, Policy> {
        return this._policies;
    }

    public loadPolicies() {

        this.policies.clear();

        for(let location of this._policiesLocation) {
            if(!fs.existsSync(location)) {
                continue;
            }

            let rawData = fs.readFileSync(location, 'utf8');
            let jsonData = JSON.parse(rawData); //Fix this de acuerdo al test que hice

            this.loadPolicy(jsonData);
        }
    }

    public loadPolicy(jsonPolicy: JSON) {
        var policySet: PolicySet;
        var policy: Policy;
        const defaultSerializer = new JsonSerializer();

/*         if(jsonPolicy.hasOwnProperty("PolicySet")) {
            policySet = PolicySet.createPolicySetFromJSON(jsonPolicy);
            this._policies.set(policySet.policySetId, policySet);
            console.log(`PolicySet with id ${policySet.policySetId} added to policies`);

        } else  */if(jsonPolicy.hasOwnProperty("Policy")) {
            const policy = (defaultSerializer.deserialize(jsonPolicy, Policy) as Policy); //cast para anular nulls

            this._policies.set(policy.policyId, policy);
            console.log(`Policy with id ${policy.policyId} added to policies`);
        }
    }

    public findPolicy(request: RequestCtx): PolicyFinderResult {
        var selectedPolicies: Policy[] = [];
        
        for(let policy of this._policies.values()) {
            let matchResult: MatchResult = policy.match(request);

            if (matchResult == MatchResult.INDETERMINATE)
                return new PolicyFinderResult(policy, matchResult);

            if (matchResult == MatchResult.MATCH) {
                let ruleCombiningAlgId = policy.ruleCombiningAlgId;
                if ((ruleCombiningAlgId == null || ruleCombiningAlgId == "" ) && (selectedPolicies.length > 0)) {
                    // we found a match before, so this is an error
                    let statusCode: StatusCode = new StatusCode(STATUS_PROCESSING_ERROR);
                    let statusMessage: string = "too many applicable top-level policies";
                    let status: Status = new Status(statusMessage, "", statusCode);
                    return new PolicyFinderResult(policy, MatchResult.ERROR, status);
                }

                // this is the first match we've found, so remember it
                selectedPolicies.push(policy);
            }
        }
                // no errors happened during the search, so now take the right
        // action based on how many policies we found
        switch (selectedPolicies.length) {
            case 0:
                console.log("No matching XACML policy found");
                return new PolicyFinderResult();
            case 1:
                return new PolicyFinderResult(selectedPolicies[0]);
            default:
                return new PolicyFinderResult(new PolicySet(null, combiningAlg, null, selectedPolicies)); //arreglar esto
        }
    }
}