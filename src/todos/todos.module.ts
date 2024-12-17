import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './entities/todo.entity';
import { User, UserSchema } from 'src/users/entities/user.entity';

@Module({
  imports:[MongooseModule.forFeature([{name :Todo.name , schema : TodoSchema} , {name: User.name  , schema : UserSchema}])] ,
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
