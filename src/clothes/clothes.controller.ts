import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ClothesService } from './clothes.service';
import { Clothes } from './clothes.model';

@ApiTags('Clothes')
@Controller('/api/v1/clothes')
export class ClothesController {
  constructor(private clothesService: ClothesService) {}

  @ApiOperation({ summary: 'Отримати 4 картки одягу' })
  @ApiResponse({ status: 200, type: [Clothes] })
  @Get('')
  getClothes() {
    return this.clothesService.getClothes();
  }

  @ApiOperation({ summary: 'Отримати 4 картки одягу по рейтингу' })
  @ApiResponse({ status: 200, type: [Clothes] })
  @Get('/rating')
  getClothesBySelling(
    @Query('limit') limit: number = 4,
    @Query('offset') offset: number = 0,
  ) {
    return this.clothesService.getClothesBySelling(limit, offset);
  }

  @ApiOperation({ summary: 'Отримати 4 картки одягу по новизні' })
  @ApiResponse({ status: 200, type: [Clothes] })
  @Get('/latest')
  getClothesByLatest(
    @Query('limit') limit: number = 4,
    @Query('offset') offset: number = 0,
    @Query('order') order: string = 'DESC',
  ) {
    return this.clothesService.getClothesByLatest(limit, offset, order);
  }

  @ApiOperation({ summary: 'Отримати картки одягу по типу' })
  @ApiResponse({ status: 200, type: [Clothes] })
  @Get('/types/:type')
  getClothesByType(@Param('type') type: string) {
    return this.clothesService.getClothesByType(type);
  }

  @ApiOperation({ summary: 'Отримати дані при одяг' })
  @ApiResponse({ status: 200, type: [Clothes] })
  @Get(':id')
  getClothesItemById(@Param('id') id: number) {
    console.log('id:', id);
    return this.clothesService.getClothById(id);
  }
}
