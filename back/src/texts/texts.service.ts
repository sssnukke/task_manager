import { Injectable } from '@nestjs/common';
import {DeleteResult, FindManyOptions, FindOneOptions, Repository} from "typeorm";
import {Text} from "./entities/text.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {CreateTextDto} from "./dto/create-text.dto";
import {UpdateTextDto} from "./dto/update-text.dto";

@Injectable()
export class TextsService {
    constructor(
        @InjectRepository(Text)
        private readonly textsRepository: Repository<Text>
    ) {}

    async save(text: CreateTextDto | UpdateTextDto): Promise<Text> {
        return await this.textsRepository.save(text)
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.textsRepository.delete(id)
    }

    async find(options?: FindManyOptions<Text>): Promise<Text[]> {
        return await this.textsRepository.find(options)
    }

    async findOne(options: FindOneOptions<Text>): Promise<Text | null> {
        return await this.textsRepository.findOne(options)
    }
}
