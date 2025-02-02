import { Module } from '@nestjs/common';
import { ClothesItemController } from './clothes_item.controller';
import { ClothesItemService } from './clothes_item.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClothesItem } from './clothes_item.model';

@Module({
  controllers: [ClothesItemController],
  providers: [ClothesItemService],
  imports: [SequelizeModule.forFeature([ClothesItem])],
})
export class ClothesItemModule {}
