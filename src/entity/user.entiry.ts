import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Rol } from './rol.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('increment', { name: 'use_id', type: 'smallint' })
  id: number;

  @Column({ name: 'use_names', type: 'varchar', length: 500 })
  names: string;

  @Column({ name: 'use_surnames', type: 'varchar', length: 500 })
  surnames: string;

  @Column({ name: 'use_username', type: 'varchar', length: 500, unique: true })
  username: string;

  @Column({ name: 'use_password', type: 'varchar', length: 500 })
  password: string;

  @Column({ name: 'use_email', type: 'varchar', length: 500, unique: true })
  email: string;

  @Column({ name: 'use_status', type: 'smallint' })
  status: number;

  @ManyToOne(() => Rol)
  @JoinColumn({ name: 'use_rol' })
  role: Rol;
}
