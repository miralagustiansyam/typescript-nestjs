import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService){}

  @Get()
  getAllTask(): Task[] {
    return this.tasksService.getAllTask()
  }

  @Post()
  postTask(@Body() body) {
    this.tasksService.post(body);
  }

  @Patch(':id/status')
  updated(@Body('status') status: any, @Param('id') id: string ) {
    this.tasksService.updated(status, id);
  }

  @Delete(':id')
  deleted(@Param('id') id: string) {
    this.tasksService.deleted(id);
  }
}
