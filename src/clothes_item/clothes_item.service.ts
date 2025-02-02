import { Injectable } from '@nestjs/common';
import { ClothesItem } from './clothes_item.model';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from 'src/comments/comments.model';

@Injectable()
export class ClothesItemService {
  constructor(
    @InjectModel(ClothesItem) private clothesItemRepository: typeof ClothesItem,
  ) {}

  async getClothesItemById(id: number) {
    const clothes_item = await this.clothesItemRepository.findOne({
      where: {
        id,
      },
      include: {
        model: Comment,
        required: false, // Для LEFT JOIN (якщо хочете всі записи, навіть без коментарів)
      },
    });

    return clothes_item;
  }
}
