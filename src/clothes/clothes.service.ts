import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Clothes } from './clothes.model';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

@Injectable()
export class ClothesService {
  constructor(
    @InjectModel(Clothes) private clothesRepository: typeof Clothes,
  ) {}

  async getClothes(limit: number, offset: number) {
    try {
      const clothes = await this.clothesRepository.findAll({
        limit,
        offset,
      });

      return clothes;
    } catch (err) {
      console.log('Error fetching clothes:', err);

      throw new InternalServerErrorException('Could not get clothes');
    }
  }

  async getClothesBySelling(limit: number, offset: number) {
    try {
      const clothes = await this.clothesRepository.findAll({
        limit,
        offset,
        where: {
          rating: {
            [Op.gte]: 5.0,
          },
        },
      });

      return clothes;
    } catch (err) {
      console.log('Error fetching clothes:', err);

      throw new InternalServerErrorException('Could not get clothes by rating');
    }
  }

  async getClothesByLatest(limit: number, offset: number, order?: string) {
    try {
      const clothes = await this.clothesRepository.findAll({
        limit,
        offset,
        order: [
          ['createdAt', order],
          ['id', 'ASC'],
        ],
      });

      return clothes;
    } catch (err) {
      console.log('Error fetching clothes:', err);

      throw new InternalServerErrorException('Could not get latest clothes');
    }
  }

  async getClothesByType(type: string) {
    try {
      const clothes = await this.clothesRepository.findAll({
        limit: 9,
        where: {
          type,
        },
      });

      return clothes;
    } catch (err) {
      console.log('Error fetching clothes:', err);

      throw new InternalServerErrorException('Could not get clothes by type');
    }
  }
}
