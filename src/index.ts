import { Policy } from "./components/Policy";
import { RequestCtx } from "./components/objects/architecture/context/RequestCtx";
import { dataPolicy } from "./resources/policies/ts/testPolicy";
import { JsonSerializer } from 'typescript-json-serializer';
import { dataRequest } from "./resources/policies/ts/testRequest";


const defaultSerializer = new JsonSerializer();

const policyTest:Policy = defaultSerializer.deserialize(dataPolicy, Policy) as Policy;
const requestTest:RequestCtx = defaultSerializer.deserialize(dataRequest, RequestCtx) as RequestCtx;

console.log("===== Objeto ======");
var res = policyTest.evaluate(requestTest);
console.log(res);

console.log("====== JSON =====");
const data = defaultSerializer.serialize(res);
console.log(JSON.stringify(data));