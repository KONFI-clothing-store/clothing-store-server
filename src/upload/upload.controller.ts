import {
  Controller,
  //   Post,
  //   UploadedFile,
  //   UseInterceptors,
  Get,
  Param,
  Res,
} from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
import * as path from 'path';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Upload images')
@Controller('/api/v1/files')
export class UploadController {
  // Завантаження файлу
  //   @Post('upload')
  //   @UseInterceptors(
  //     FileInterceptor('file', {
  //       storage: diskStorage({
  //         destination: './uploads', // Локальна папка для збереження файлів
  //         filename: (req, file, callback) => {
  //           const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  //           const extension = path.extname(file.originalname); // Зберігаємо розширення файлу
  //           callback(null, `${uniqueSuffix}${extension}`); // Унікальне ім'я файлу
  //         },
  //       }),
  //       fileFilter: (req, file, callback) => {
  //         // Фільтрація файлів за типом
  //         if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
  //           return callback(new Error('Only image files are allowed!'), false);
  //         }
  //         callback(null, true);
  //       },
  //     }),
  //   )
  //   uploadFile(@UploadedFile() file: Express.Multer.File) {
  //     // Повертаємо URL до збереженого файлу
  //     return {
  //       url: `http://localhost:${process.env.PORT || 8080}/files/${file.filename}`,
  //     };
  //   }

  // Обслуговування статичних файлів
  @ApiOperation({ summary: 'Отримати картинку одягу' })
  @Get('/:filename')
  getFile(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = path.join(__dirname, '../../uploads', filename);
    return res.sendFile(filePath);
  }
}
