import { ZodSerializerInterceptor } from "nestjs-zod";

import { Logger, Module } from "@nestjs/common";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApiConfigModule } from "./config/config.module";
import { GlobalValidationPipe } from "./pipes/global.pipe";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [ApiConfigModule, PrismaModule],
  controllers: [AppController],
  providers: [
    AppService,
    Logger,
    {
      provide: APP_PIPE,
      useClass: GlobalValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
  ],
})
export class AppModule {}
