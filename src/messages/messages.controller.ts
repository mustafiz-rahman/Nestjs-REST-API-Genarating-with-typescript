import { Controller, Get,Post,Body,Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import {CreateMessageDto} from './dto/create-message.dto'

@Controller('messages')
export class MessagesController {

    messageServices: MessagesService;
    constructor(){
        this.messageServices= new MessagesService();
    }

    @Get('/:id')
    async findOne(@Param('id') id:string){
       return await this.messageServices.findOne(id);
    }
    @Get()
    findAll(){
        return this.messageServices.findAll();
    }
    @Post()
    createMessage(@Body() body:CreateMessageDto){
        return this.messageServices.createMessage(body.content);
    }
}
