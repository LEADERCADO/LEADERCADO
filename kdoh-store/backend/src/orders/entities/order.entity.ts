import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column('jsonb')
  items: any[];

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column({ default: 'pending' })
  status: string; // pending, paid, shipped, delivered

  @Column({ nullable: true })
  paymentIntentId: string; // Stripe/PayPal

  @CreateDateColumn()
  createdAt: Date;
}
