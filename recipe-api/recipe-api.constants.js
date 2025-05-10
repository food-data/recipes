"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECIPE_INGREDIENT_REPOSITORY = exports.RECIPE_INSTRUCTION_REPOSITORY = exports.RECIPE_REPOSITORY = void 0;
const crypto_1 = require("crypto");
exports.RECIPE_REPOSITORY = (0, crypto_1.randomUUID)();
exports.RECIPE_INSTRUCTION_REPOSITORY = (0, crypto_1.randomUUID)();
exports.RECIPE_INGREDIENT_REPOSITORY = (0, crypto_1.randomUUID)();
//# sourceMappingURL=recipe-api.constants.js.map