import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('affiliations')
export class Affiliation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column({ unique: true })
  referralCode: string;

  @Column({ nullable: true })
  referredUsers: string[];

  @Column({ default: 0 })
  totalCommissions: number;

  @CreateDateColumn()
  createdAt: Date;
}
