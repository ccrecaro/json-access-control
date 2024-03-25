"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnvironmentAttributes_1 = require("./services/EnvironmentAttributes");
var env = new EnvironmentAttributes_1.EnvironmentAttributes();
var result = env.setEnvironmentDate("urn:oasis:names:tc:xacml:1.0:environment:current-time");
console.log("HOLA");
console.log(result);
