import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('wallets')
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column({ default: 0 })
  kdohBalance: number; // KDOH Coin balance

  @Column('jsonb', { default: [] })
  transactions: any[];

  @CreateDateColumn()
  createdAt: Date;
}
