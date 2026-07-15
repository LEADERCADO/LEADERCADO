import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Affiliation } from './entities/affiliation.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AffiliationService {
  constructor(
    @InjectRepository(Affiliation)
    private affiliationRepo: Repository<Affiliation>,
  ) {}

  async findByUserId(userId: string): Promise<Affiliation | null> {
    return this.affiliationRepo.findOne({ where: { userId } });
  }

  async create(userId: string): Promise<Affiliation> {
    const referralCode = uuidv4().substring(0, 8);
    const affiliation = this.affiliationRepo.create({ userId, referralCode });
    return this.affiliationRepo.save(affiliation);
  }

  async trackReferral(referrerId: string, referredUserId: string): Promise<void> {
    const affiliation = await this.findByUserId(referrerId);
    if (affiliation) {
      if (!affiliation.referredUsers) {
        affiliation.referredUsers = [];
      }
      affiliation.referredUsers.push(referredUserId);
      await this.affiliationRepo.save(affiliation);
    }
  }

  async addCommission(userId: string, amount: number): Promise<Affiliation> {
    let affiliation = await this.findByUserId(userId);
    if (!affiliation) {
      affiliation = await this.create(userId);
    }
    affiliation.totalCommissions += amount;
    return this.affiliationRepo.save(affiliation);
  }
}
