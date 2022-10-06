import {Controller,Post,Body} from "@nestjs/common"
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto/login.dto";
import {ApiTags} from '@nestjs/swagger'


@ApiTags('Auth')
@Controller('login')
export class AuthController {
    constructor(private AuthService: AuthService) { }

@Post()
 async  login(@Body() user:AuthDTO) {
   return await this.AuthService.login(user)
}

@Post('auth')
 async AuthJWT(@Body() user:AuthDTO) {
  // return await this.AuthService.login(user)
   return await this.AuthService.authJwt(user);
}
}