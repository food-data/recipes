"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    console.log('========= BEGIN: Environment NestJs Server =========');
    console.log('process.cwd()         =', process.cwd());
    console.log('process.env.PORT      =', process.env.PORT);
    console.log('process.env.GRAPHQL      =', process.env.GRAPHQL);
    console.log('========= END:   Environment NestJs Server =========');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map