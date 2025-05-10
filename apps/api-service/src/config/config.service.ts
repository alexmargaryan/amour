import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { Environment } from "./environment";

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return this.configService.get<number>("PORT")!;
  }

  get apiUrl(): string {
    return this.configService.get<string>("API_URL")!;
  }

  get webClientUrl(): string {
    return this.configService.get<string>("WEB_CLIENT_URL")!;
  }

  get isDevelopment(): boolean {
    return (
      this.configService.get<string>("NODE_ENV") === Environment.Development
    );
  }

  get isTesting(): boolean {
    return this.configService.get<string>("NODE_ENV") === Environment.Test;
  }

  get isProduction(): boolean {
    return (
      this.configService.get<string>("NODE_ENV") === Environment.Production
    );
  }
}
