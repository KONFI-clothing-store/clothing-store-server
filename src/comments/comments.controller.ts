import { Controller, Get, Param, Query } from '@nestjs/common';
import { Comment } from './comments.model';
import { CommentsService } from './comments.service';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Comments')
@Controller('/api/v1/comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @ApiOperation({ summary: 'Отримати коментарі до айді одягу' })
  @ApiResponse({ status: 200, type: [Comment] })
  @Get(':id')
  getCommentsByClothesId(@Param('id') id: number) {
    return this.commentsService.getCommentsByClothesId(id);
  }

  @ApiOperation({ summary: 'Отримати останні записані коментарі' })
  @ApiResponse({ status: 200, type: [Comment] })
  @Get('/latest')
  getLatestComments(@Query('limit') id: number) {
    return this.commentsService.getLatestComments(id);
  }
}
