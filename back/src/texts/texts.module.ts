import { Module } from '@nestjs/common';
import { TextsController } from './texts.controller';
import { TextsService } from './texts.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Text} from "./entities/text.entity";

@Module({
  controllers: [TextsController],
  providers: [TextsService],
  imports: [TypeOrmModule.forFeature([Text])],
})
export class TextsModule {}
