import { Controller, Get, Post ,Body, Param,NotFoundException} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createMessageDto } from './dtos/create-message.dto';
 
@Controller('tasks')
export class TasksController {
    messagesService:TasksService;
    constructor(){
        this.messagesService = new TasksService();
    }
  @Get()
  listMessages() {
      return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() body:createMessageDto) {
      return this.messagesService.createMessages(body.content)
  }
  @Get('/:id')
  async getMessages(@Param('id') id:string) {
      const message = await this.messagesService.findOne(id);

      if(!message){
          throw new NotFoundException('Message Not Found!');

      }
      return message;
  }
}
