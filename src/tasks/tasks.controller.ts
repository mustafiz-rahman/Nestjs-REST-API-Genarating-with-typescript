import { Controller, Get, Post ,Body, Param} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createMessageDto } from './dtos/create-message.dto';
 
@Controller('tasks')
export class TasksController {
  @Get()
  listMessages() {}
  @Post()
  createMessage(@Body() body:createMessageDto) {
      console.log(body);
  }
  @Get('/:id')
  getMessages(@Param('id') id:string) {
      console.log(id);
  }
}
