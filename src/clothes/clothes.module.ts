import { Module } from '@nestjs/common';
import { ClothesController } from './clothes.controller';
import { ClothesService } from './clothes.service';
import { Clothes } from './clothes.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [ClothesController],
  providers: [ClothesService],
  imports: [SequelizeModule.forFeature([Clothes])],
})
export class ClothesModule {}
