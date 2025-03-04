import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

import { Clothes } from './clothes.model';
import { Comment } from 'src/comments/comments.model';

@Injectable()
export class ClothesService {
  constructor(
    @InjectModel(Clothes) private clothesRepository: typeof Clothes,
  ) {}

  finalResultFormat(data: any, count: number) {
    return {
      data,
      numberOfElements: count,
    };
  }

  async getClothes() {
    try {
      const { count, rows: clothes } =
        await this.clothesRepository.findAndCountAll();

      return this.finalResultFormat(clothes, count);
    } catch (err) {
      console.log('Error fetching clothes:', err);

      throw new InternalServerErrorException('Could not get clothes');
    }
  }

  async getClothesBySelling(limit: number, offset: number) {
    try {
      const { count, rows: clothes } =
        await this.clothesRepository.findAndCountAll({
          limit,
          offset,
          where: {
            rating: {
              [Op.gte]: 4.5,
            },
          },
        });

      return this.finalResultFormat(clothes, count);
    } catch (err) {
      console.log('Error fetching clothes:', err);

      throw new InternalServerErrorException('Could not get clothes by rating');
    }
  }

  async getClothesByLatest(limit: number, offset: number, order?: string) {
    try {
      const { count, rows: clothes } =
        await this.clothesRepository.findAndCountAll({
          limit,
          offset,
          order: [
            ['createdAt', order],
            ['id', 'ASC'],
          ],
        });

      return this.finalResultFormat(clothes, count);
    } catch (err) {
      console.log('Error fetching clothes:', err);

      throw new InternalServerErrorException('Could not get latest clothes');
    }
  }

  async getClothesByType(type: string) {
    try {
      const { count, rows: clothes } =
        await this.clothesRepository.findAndCountAll({
          limit: 9,
          where: {
            type,
          },
        });

      return this.finalResultFormat(clothes, count);
    } catch (err) {
      console.log('Error fetching clothes:', err);

      throw new InternalServerErrorException('Could not get clothes by type');
    }
  }

  async getClothById(id: number) {
    try {
      const cloth = await this.clothesRepository.findOne({
        where: {
          id,
        },
        include: {
          model: Comment,
          required: false, // Для LEFT JOIN (якщо хочете всі записи, навіть без коментарів)
        },
      });

      return cloth;
    } catch (err) {
      console.log('Error fetching clothes:', err);

      throw new InternalServerErrorException('Could not get cloth by id');
    }
  }
}
