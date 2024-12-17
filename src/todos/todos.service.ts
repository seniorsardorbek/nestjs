import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './entities/todo.entity';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo> , @InjectModel(User.name) private userModel: Model<User>) {}
 async create(createTodoDto: CreateTodoDto) {
    const user = await  this.userModel.findById(createTodoDto?.userId)
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const todo = await this.todoModel.create(createTodoDto);
    return todo;
   
  }

  async findAll() {
    return await this.todoModel.find().populate('userId',"full_name phonenumber");
  }

 async findOne(id: string) {
    return await this.todoModel.findById(id).populate('userId',"full_name phonenumber");
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true });
  }

  remove(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
