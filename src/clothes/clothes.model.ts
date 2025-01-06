import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'clothes' })
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
  image_url: string;

  @ApiProperty({
    example: '120',
    description: 'Ціна на одяг',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price: string;

  @ApiProperty({
    example: '4.5',
    description: 'Рейтинг одягу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  rating: string;

  @ApiProperty({
    example: 'Футболка',
    description: 'Тип одягу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;
}
