import { Logger, Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApiConfigModule } from "./config/config.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [ApiConfigModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
