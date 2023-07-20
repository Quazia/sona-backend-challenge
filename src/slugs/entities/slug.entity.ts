import { Column, Entity, PrimaryColumn } from 'typeorm';
import { nanoid } from 'nanoid';
@Entity()
export class Slug {
  @PrimaryColumn('varchar', { default: () => `'${nanoid(6)}'`, length: 6 })
  id: string;

  @Column()
  url: string;

  @Column()
  visitCount: number;
}
