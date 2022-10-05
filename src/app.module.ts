import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ PrismaModule, UserModule,AuthModule, CategoryModule,ProductModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
