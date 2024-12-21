import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ MongooseModule.forRoot(`mongodb://127.0.0.1:27017/nestapp`) , UsersModule, TodosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService ,],
})
export class AppModule {}
