import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class Slug {
  @PrimaryColumn()
  id: string;

  @Column()
  url: string;

  @Column()
  visitCount: number;
}
