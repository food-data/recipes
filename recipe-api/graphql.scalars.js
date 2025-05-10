"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomUuidScalar = void 0;
const graphql_1 = require("graphql");
const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function validate(uuid) {
    if (typeof uuid !== 'string' || !regex.test(uuid)) {
        throw new Error('invalid uuid');
    }
    return uuid;
}
exports.CustomUuidScalar = new graphql_1.GraphQLScalarType({
    name: 'UUID',
    description: 'A simple UUID parser',
    serialize: (value) => validate(value),
    parseValue: (value) => validate(value),
    parseLiteral: (ast) => validate(ast),
});
//# sourceMappingURL=graphql.scalars.js.map