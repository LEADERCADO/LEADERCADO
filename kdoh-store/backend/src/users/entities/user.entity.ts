import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string; // 'admin' or 'user'

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ default: 0 })
  kdohBalance: number; // KDOH Coin balance

  @Column({ nullable: true })
  referralCode: string;

  @Column({ nullable: true })
  referredBy: string;

  @CreateDateColumn()
  createdAt: Date;
}
