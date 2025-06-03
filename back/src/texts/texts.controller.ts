import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {TextsService} from "./texts.service";
import {CreateTextDto} from "./dto/create-text.dto";
import {Text} from "./entities/text.entity";

@Controller('texts')
export class TextsController {
    constructor(private readonly textService: TextsService) {}

    @Post('create')
    async create(
        @Body() createTextDto: CreateTextDto,
    ): Promise<Text> {
        return await this.textService.save(createTextDto);
    }

    @Patch(':id')
    async update(
        @Param('id') id: number
    ): Promise<Text | null> {
        const text = await this.textService.findOne({
            where: { id: id }
        })
        if (text) {
            text.done = true
            return await this.textService.save(text);
        }
        return null
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.textService.delete(id);
    }

    @Get('all')
    async getAll(): Promise<Text[]> {
        return await this.textService.find()
    }
}
