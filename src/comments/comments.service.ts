import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comments.model';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment) private commentsRepository: typeof Comment,
  ) {}

  async getCommentsByClothesId(id: number) {
    try {
      const comments = this.commentsRepository.findAll({
        where: {
          clothes_item_id: id,
        },
      });

      return comments;
    } catch (err) {
      console.log('Error fetching comments:', err);

      throw new InternalServerErrorException('Could not get comments');
    }
  }

  async getLatestComments() {
    try {
      const comments = this.commentsRepository.findAll({
        limit: 10,
        order: [
          ['createdAt', 'DESC'],
          ['id', 'ASC'],
        ],
      });

      return comments;
    } catch (err) {
      console.log('Error fetching comments:', err);

      throw new InternalServerErrorException('Could not get comments');
    }
  }
}
