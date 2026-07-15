import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  // --- CRUD ADMIN ---
  async createManual(dto: CreateProductDto, adminId: string): Promise<Product> {
    const product = this.productRepo.create({
      ...dto,
      externalSource: 'manual',
      externalId: null,
      createdBy: adminId,
      isActive: true,
    });
    return this.productRepo.save(product);
  }

  async updateProduct(id: string, dto: UpdateProductDto, adminId: string): Promise<Product> {
    const product = await this.productRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Produit introuvable');
    Object.assign(product, dto);
    product.updatedBy = adminId;
    return this.productRepo.save(product);
  }

  async deleteProduct(id: string, adminId: string): Promise<void> {
    await this.productRepo.update(id, { isActive: false, deletedBy: adminId });
  }

  // --- Lecture ---
  async findAll(category?: string): Promise<Product[]> {
    const query = this.productRepo.createQueryBuilder('product')
      .where('product.isActive = :active', { active: true });
    if (category) {
      query.andWhere('product.category = :category', { category });
    }
    return query.getMany();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepo.findOne({ where: { id, isActive: true } });
    if (!product) throw new NotFoundException('Produit introuvable');
    return product;
  }

  // --- Stubs d'import (Shopify, Amazon, eBay) ---
  async importFromShopify(shopUrl: string, token: string): Promise<Product[]> {
    // Simule un appel HTTP
    console.log(`Import Shopify depuis ${shopUrl}`);
    const mockProduct = this.productRepo.create({
      title: 'Produit Shopify importé',
      description: 'Importé automatiquement',
      price: 29.99,
      currency: 'USD',
      stock: 10,
      externalSource: 'shopify',
      externalId: uuidv4(),
      isActive: true,
    });
    return [await this.productRepo.save(mockProduct)];
  }

  async importFromAmazon(sellerId: string, refreshToken: string): Promise<Product[]> {
    console.log(`Import Amazon pour vendeur ${sellerId}`);
    // Similaire
    return [];
  }
}
