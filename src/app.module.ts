import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://ConDish:respikaf123@cluster0-3hlbm.mongodb.net/test?retryWrites=true', {
     useNewUrlParser: true 
  })],
  controllers: [AppController],
  providers : [AppService]
})
export class AppModule {}
