import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from "./auth.constant";
import { JwtStrategy } from "./jwt.strategy";


@Module({
providers:[AuthService,JwtStrategy],
controllers:[AuthController],

 imports: [
    // UsersModule,
    // PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],


})
export class AuthModule{


}