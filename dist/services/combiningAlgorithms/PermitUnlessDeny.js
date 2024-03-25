"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permitUnlessDenyCombiningAlgorithm = void 0;
function permitUnlessDenyCombiningAlgorithm(request, elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].evaluate(request) == DecisionResult.DENY) {
            return DecisionResult.DENY;
        }
    }
    return DecisionResult.PERMIT;
}
exports.permitUnlessDenyCombiningAlgorithm = permitUnlessDenyCombiningAlgorithm;
//# sourceMappingURL=PermitUnlessDeny.js.map