import { JsonSerializer } from "typescript-json-serializer";
import { readJSONFile } from "./readJSONFile";
import { RequestCtx } from "../../components/objects/architecture/context/RequestCtx";

export function loadRequest(location: string): RequestCtx {
    let jsonData = readJSONFile(location);
    var request: RequestCtx;
    const defaultSerializer = new JsonSerializer();

    request = defaultSerializer.deserialize(jsonData, RequestCtx) as RequestCtx; //cast para anular nulls            

    return request;
}