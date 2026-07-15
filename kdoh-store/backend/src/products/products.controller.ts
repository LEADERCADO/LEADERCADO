import {
  Controller,
  Get, Post, Put, Delete,
  Body, Param, Query, UseGuards,
  Req, ParseUUIDPipe,
  UploadedFiles, UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request } from 'express';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // --- Routes publiques ---
  @Get()
  findAll(@Query('category') category?: string) {
    return this.productService.findAll(category);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productService.findOne(id);
  }

  // --- Routes ADMIN (protégées par le rôle "admin") ---
  @Post('admin/create')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images', maxCount: 5 }]))
  async createManual(
    @Body() dto: CreateProductDto,
    @UploadedFiles() files: { images?: Express.Multer.File[] },
    @Req() req: Request,
  ) {
    const adminId = req.user['sub'];
    // Ici on pourrait uploader les images sur S3/Cloudinary, mais on simule
    const imageUrls = files?.images?.map(f => `/uploads/${f.filename}`) || [];
    return this.productService.createManual({ ...dto, images: imageUrls }, adminId);
  }

  @Put('admin/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProductDto,
    @Req() req: Request,
  ) {
    const adminId = req.user['sub'];
    return this.productService.updateProduct(id, dto, adminId);
  }

  @Delete('admin/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async deleteProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Req() req: Request,
  ) {
    const adminId = req.user['sub'];
    return this.productService.deleteProduct(id, adminId);
  }

  // --- Import multi-sources (pour l'admin aussi) ---
  @Post('import/shopify')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async importShopify(@Body() body: { shopUrl: string; accessToken: string }) {
    return this.productService.importFromShopify(body.shopUrl, body.accessToken);
  }

  @Post('import/amazon')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async importAmazon(@Body() body: { sellerId: string; refreshToken: string }) {
    return this.productService.importFromAmazon(body.sellerId, body.refreshToken);
  }
}
