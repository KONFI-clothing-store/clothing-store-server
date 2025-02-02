import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { ClothesItem } from 'src/clothes_item/clothes_item.model';

@Table({ tableName: 'comments' })
export class Comment extends Model<Comment> {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: '1',
    description: 'Ідентифікатор одягу',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  clothes_item_id: number;

  @ApiProperty({
    example: 'Дуже стильна футболка, якісна тканина!',
    description: 'Комент до одягу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  comment: string;

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
    example: 'Alex',
    description: "Ім'я користувача",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @ApiProperty({
    example: 'Rudniy',
    description: 'Прізвище користувача',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  second_name: string;

  @BelongsTo(() => ClothesItem, { foreignKey: 'clothes_item_id' })
  clothes_item: ClothesItem;
}
