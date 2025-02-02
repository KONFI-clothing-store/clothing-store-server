import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ClothesItemService } from './clothes_item.service';
import { ClothesItem } from './clothes_item.model';

@ApiTags('Clothes items')
@Controller('/api/v1/clothes_items')
export class ClothesItemController {
  constructor(private clothesItemsService: ClothesItemService) {}

  @ApiOperation({ summary: 'Отримати дані при одяг' })
  @ApiResponse({ status: 200, type: [ClothesItem] })
  @Get(':id')
  getClothesItemById(@Param('id') id: number) {
    return this.clothesItemsService.getClothesItemById(id);
  }
}
