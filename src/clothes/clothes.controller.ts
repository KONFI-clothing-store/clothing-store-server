import { Controller, Get, Query } from '@nestjs/common';
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
  getClothes(
    @Query('limit') limit: number = 4,
    @Query('offset') offset: number = 0,
  ) {
    return this.clothesService.getClothes(limit, offset);
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

  @ApiOperation({ summary: 'Отримати 4 картки одягу по типу' })
  @ApiResponse({ status: 200, type: [Clothes] })
  @Get('/type')
  getClothesByType(
    @Query('type') type: string,
    @Query('limit') limit: number = 4,
  ) {
    return this.clothesService.getClothesByType(type, limit);
  }
}
