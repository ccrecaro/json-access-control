"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EnvironmentAttributes_1 = require("./services/EnvironmentAttributes");
const env = new EnvironmentAttributes_1.EnvironmentAttributes();
const resultTime = env.setEnvironmentDate("urn:oasis:names:tc:xacml:1.0:environment:current-time");
const resultDate = env.setEnvironmentDate("urn:oasis:names:tc:xacml:1.0:environment:current-date");
const resultDateTime = env.setEnvironmentDate("urn:oasis:names:tc:xacml:1.0:environment:current-dateTime");
console.log("HOLA");
//const data = defaultSerializer.serialize(policyTest);
//# sourceMappingURL=index.js.map