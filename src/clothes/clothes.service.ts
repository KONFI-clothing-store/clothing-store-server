import { Injectable } from '@nestjs/common';
import { Clothes } from './clothes.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ClothesService {
  constructor(
    @InjectModel(Clothes) private clothesRepository: typeof Clothes,
  ) {}

  async getClothes(limit: number, offset: number) {
    const clothes = await this.clothesRepository.findAll({
      limit,
      offset,
    });
    return clothes;
  }

  async getClothesByRating(limit: number, offset: number, order?: string) {
    const clothes = await this.clothesRepository.findAll({
      limit,
      offset,
      order: [['rating', order]],
    });
    return clothes;
  }

  async getClothesByLatest(limit: number, offset: number, order?: string) {
    const clothes = await this.clothesRepository.findAll({
      limit,
      offset,
      order: [['createdAt', order]],
    });
    return clothes;
  }
}
