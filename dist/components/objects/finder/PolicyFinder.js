"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const Status_1 = require("../../../constants/Status");
const typescript_json_serializer_1 = require("typescript-json-serializer");
const Policy_1 = require("../../Policy");
const StatusCode_1 = require("../StatusCode");
const Status_2 = require("../Status");
const PolicyFinderResult_1 = require("./PolicyFinderResult");
class PolicyFinder {
    constructor(policiesLocation) {
        this._policies = new Map();
        this._policiesLocation = policiesLocation;
    }
    get policies() {
        return this._policies;
    }
    loadPolicies() {
        this.policies.clear();
        for (let location of this._policiesLocation) {
            if (!fs.existsSync(location)) {
                continue;
            }
            let rawData = fs.readFileSync(location, 'utf8');
            let jsonData = JSON.parse(rawData); //Fix this de acuerdo al test que hice
            this.loadPolicy(jsonData);
        }
    }
    loadPolicy(jsonPolicy) {
        var policySet;
        var policy;
        const defaultSerializer = new typescript_json_serializer_1.JsonSerializer();
        /*         if(jsonPolicy.hasOwnProperty("PolicySet")) {
                    policySet = PolicySet.createPolicySetFromJSON(jsonPolicy);
                    this._policies.set(policySet.policySetId, policySet);
                    console.log(`PolicySet with id ${policySet.policySetId} added to policies`);
        
                } else  */ if (jsonPolicy.hasOwnProperty("Policy")) {
            const policy = defaultSerializer.deserialize(jsonPolicy, Policy_1.Policy); //cast para anular nulls
            this._policies.set(policy.policyId, policy);
            console.log(`Policy with id ${policy.policyId} added to policies`);
        }
    }
    findPolicy(request) {
        var selectedPolicies = [];
        for (let policy of this._policies.values()) {
            let matchResult = policy.match(request);
            if (matchResult == MatchResult.INDETERMINATE)
                return new PolicyFinderResult_1.PolicyFinderResult(policy, matchResult);
            if (matchResult == MatchResult.MATCH) {
                let ruleCombiningAlgId = policy.ruleCombiningAlgId;
                if ((ruleCombiningAlgId == null || ruleCombiningAlgId == "") && (selectedPolicies.length > 0)) {
                    // we found a match before, so this is an error
                    let statusCode = new StatusCode_1.StatusCode(Status_1.STATUS_PROCESSING_ERROR);
                    let statusMessage = "too many applicable top-level policies";
                    let status = new Status_2.Status(statusMessage, "", statusCode);
                    return new PolicyFinderResult_1.PolicyFinderResult(policy, MatchResult.ERROR, status);
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
                return new PolicyFinderResult_1.PolicyFinderResult();
            case 1:
                return new PolicyFinderResult_1.PolicyFinderResult(selectedPolicies[0]);
            default:
                return new PolicyFinderResult_1.PolicyFinderResult(new PolicySet(null, combiningAlg, null, selectedPolicies)); //arreglar esto
        }
    }
}
//# sourceMappingURL=PolicyFinder.js.map