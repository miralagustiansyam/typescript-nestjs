import { Injectable, Res } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v1 as uuid1 } from 'uuid';
import * as _ from "lodash";

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  post(@Res() body: any): Task {
    const { title, description } = body;
    const task: Task = {
      id: uuid1(),
      title,
      description,
      status: TaskStatus.OPEN
    }

    this.tasks.push(task);
    return task;
  }

  updated(@Res() status: any, id: string) {
    const result = this.tasks.find(item => item.id === id);
    result.status = status;
    return result;
  }

  deleted(@Res() id: string) {
    _.remove(this.tasks, ( (item: any) => {
      return item.id === id;
    }));
  }
}