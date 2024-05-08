import * as fs from 'fs';
import { STATUS_PROCESSING_ERROR } from '../../../constants/Status';
import { JsonSerializer } from 'typescript-json-serializer';
import { Policy } from '../../Policy';
import { RequestCtx } from '../architecture/context/RequestCtx';
import { StatusCode } from '../StatusCode';
import { Status } from '../Status';
import { PolicyFinderResult } from './PolicyFinderResult';
import { MatchResult } from '../../../enums/MatchResult';
import { dataPolicy } from '../../../resources/policies/ts/testPolicy';
import { readJSONFile } from '../../../utils/Functions/readJSONFile';


export class PolicyFinder {
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

            let jsonData = readJSONFile(location);
            this.loadPolicy(jsonData);
        }

    }

    public loadPoliciesTest() {
        const defaultSerializer = new JsonSerializer();

        const policyTest:Policy = defaultSerializer.deserialize(dataPolicy, Policy) as Policy;
        this._policies.set(policyTest.policyId, policyTest);
    }

    public loadPolicy(jsonPolicy: any) {
        //var policySet: PolicySet;
        var policy: Policy;
        const defaultSerializer = new JsonSerializer();

        if(jsonPolicy.hasOwnProperty("PolicyId")) {
            policy = defaultSerializer.deserialize(jsonPolicy, Policy) as Policy; //cast para anular nulls            
            this._policies.set(policy.policyId, policy);
        }
    }

    public findPolicy(request: RequestCtx): PolicyFinderResult {
        var selectedPolicies: Policy[] = [];
        
        for(let policy of this._policies.values()) {
            let matchResult: MatchResult;
            if(policy.getTarget()){
                matchResult = policy.match(request);
            } else { //El target viene vacio, por lo que la politica se aplica a todas
                return new PolicyFinderResult(policy);
            }

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
                return new PolicyFinderResult();
            case 1:
                return new PolicyFinderResult(selectedPolicies[0]);
            default:
                return new PolicyFinderResult();
                //return new PolicyFinderResult(new PolicySet(null, combiningAlg, null, selectedPolicies)); //arreglar esto
        }
    }

}