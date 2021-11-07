import { Injectable } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';



export class TasksService {
    tsakRepo:TasksRepository;

    constructor(){
        this.tsakRepo= new TasksRepository();
    }

    async findOne(id:string){
        return this.tsakRepo.findOne(id);
    }
    async findAll(){
        return this.tsakRepo.findAll();
    }
    async createMessages(content:string){
        return this.tsakRepo.create(content);
    }
    
}
