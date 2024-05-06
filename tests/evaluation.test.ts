import { Policy } from "../src/components/Policy";
import { RequestCtx } from "../src/components/objects/architecture/context/RequestCtx";
import { dataPolicy } from "../src/resources/policies/ts/testPolicy";
import { JsonSerializer } from 'typescript-json-serializer';
import { dataRequest } from "../src/resources/policies/ts/testRequestWithComillas";
import { PDP } from "../src/components/objects/architecture/PDP";
import { PolicyFinder } from "../src/components/objects/finder/PolicyFinder";
import { parseRequestToJSON } from "../src/utils/Functions/parseRequestToJSON";
import { loadRequest } from "../src/utils/Functions/loadRequest";
import { ResponseCtx } from "../src/components/objects/architecture/context/ResponseCtx";
import { Result } from "../src/components/objects/Result";
import { PolicyIdentifier } from "../src/components/objects/PolicyIdentifier";
import { IdReference } from "../src/components/objects/IdReference";

// const defaultSerializer = new JsonSerializer();

// const policyTest:Policy = defaultSerializer.deserialize(dataPolicy, Policy) as Policy;
// const requestTest:RequestCtx = defaultSerializer.deserialize(dataRequest, RequestCtx) as RequestCtx;

test('Check request for Doctor', () => {
    const req:RequestCtx = loadRequest("/Users/carolinacontreras/Desktop/TFM/PAP/policies/json/requestDoctor.json");

    console.log("===== TEST ======");
    var policyFinder: PolicyFinder = new PolicyFinder(["/Users/carolinacontreras/Desktop/TFM/PAP/policies/json/testPolicyDoctor.json"]);
    var pdp:PDP = new PDP(policyFinder);
    pdp.policyFinder.loadPolicies();
    
    var res: ResponseCtx = pdp.evaluateContext(req);
    console.log(JSON.stringify(res));
    
    var polIdListExpected: PolicyIdentifier[] = [
        new PolicyIdentifier(
            [new IdReference("urn:oasis:names:tc:xacml:3.0:example:SimplePolicy1", "1.0")],
            undefined
        )
    ]
    var resExpected: Result = new Result("Permit", undefined, undefined, undefined, undefined, polIdListExpected);
    var expected: ResponseCtx = new ResponseCtx([resExpected]);
    
    expect(res).toEqual(expected);
})