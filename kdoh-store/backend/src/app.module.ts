import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { WalletModule } from './wallet/wallet.module';
import { AffiliationModule } from './affiliation/affiliation.module';
import { ArContentModule } from './ar-content/ar-content.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    ProductsModule,
    AuthModule,
    UsersModule,
    OrdersModule,
    WalletModule,
    AffiliationModule,
    ArContentModule,
  ],
})
export class AppModule {}
