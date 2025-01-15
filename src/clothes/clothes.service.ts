import { Injectable } from '@nestjs/common';
import { Clothes } from './clothes.model';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

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

  async getClothesBySelling(limit: number, offset: number) {
    const clothes = await this.clothesRepository.findAll({
      limit,
      offset,
      where: {
        rating: {
          [Op.gte]: 4.5,
        },
      },
    });
    return clothes;
  }

  async getClothesByLatest(limit: number, offset: number, order?: string) {
    const clothes = await this.clothesRepository.findAll({
      limit,
      offset,
      order: [
        ['createdAt', order],
        ['id', 'ASC'],
      ],
    });
    return clothes;
  }
}
