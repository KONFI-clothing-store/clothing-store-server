import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment } from './comments.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [SequelizeModule.forFeature([Comment])],
})
export class CommentsModule {}
