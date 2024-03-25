"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentAttributes = void 0;
var EnvironmentAttributes = /** @class */ (function () {
    function EnvironmentAttributes() {
    }
    EnvironmentAttributes.prototype.setEnvironmentDate = function (identifier) {
        var date = new Date();
        switch (identifier) {
            case "urn:oasis:names:tc:xacml:1.0:environment:current-time":
                return date.getTime();
            case "urn:oasis:names:tc:xacml:1.0:environment:current-date":
                return date.getUTCDate();
            case "urn:oasis:names:tc:xacml:1.0:environment:current-dateTime":
                return date;
        }
    };
    return EnvironmentAttributes;
}());
exports.EnvironmentAttributes = EnvironmentAttributes;
