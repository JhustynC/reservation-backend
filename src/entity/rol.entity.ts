import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'rol' })
export class Rol {
  @PrimaryGeneratedColumn('increment', { name: 'rol_id', type: 'smallint' })
  id: number;

  @Column({ name: 'rol_caption', type: 'varchar', length: 500 })
  caption: string;

  @Column({ name: 'rol_name', type: 'varchar', length: 500 })
  name: string;

  @Column({ name: 'rol_status', type: 'smallint' })
  status: number;
}
