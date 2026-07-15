export class UpdateProductDto {
  title?: string;
  description?: string;
  price?: number;
  currency?: string;
  stock?: number;
  images?: string[];
  model3dUrl?: string;
  category?: string;
}
