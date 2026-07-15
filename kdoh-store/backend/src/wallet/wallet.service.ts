import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepo: Repository<Wallet>,
  ) {}

  async findByUserId(userId: string): Promise<Wallet | null> {
    return this.walletRepo.findOne({ where: { userId } });
  }

  async create(wallet: Partial<Wallet>): Promise<Wallet> {
    const newWallet = this.walletRepo.create(wallet);
    return this.walletRepo.save(newWallet);
  }

  async addKdoh(userId: string, amount: number): Promise<Wallet> {
    let wallet = await this.findByUserId(userId);
    if (!wallet) {
      wallet = await this.create({ userId, kdohBalance: 0 });
    }
    wallet.kdohBalance += amount;
    wallet.transactions.push({ type: 'credit', amount, date: new Date() });
    return this.walletRepo.save(wallet);
  }
}
