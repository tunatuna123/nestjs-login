import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [AuthModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
