import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Comment } from 'src/comments/comments.model';

@Table({ tableName: 'clothes_items' })
export class Clothes extends Model<Clothes> {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'T-shirt with Tape Details',
    description: 'Назва одягу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 't-shirt-image.webp',
    description: 'Посилання на фотографію одягу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  images_url: string;

  @ApiProperty({
    example: '120',
    description: 'Ціна на одяг',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ApiProperty({
    example: '4.5',
    description: 'Рейтинг одягу',
  })
  @Column({
    type: DataType.DECIMAL(2, 1),
    allowNull: false,
  })
  rating: number;

  @ApiProperty({
    example: 't-shirt',
    description: 'Тип одягу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;

  @ApiProperty({
    example:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    description: 'Опис одягу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: ['Small', 'Medium', 'Large', 'X-Large'],
    description: 'Розмір одягу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sizes: string[];

  @HasMany(() => Comment, { foreignKey: 'clothes_item_id' })
  comments: Comment[];
}
