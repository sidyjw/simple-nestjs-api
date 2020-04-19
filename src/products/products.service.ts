import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';
import { IsNotEmpty} from 'class-validator';
export class Product {
    id?: string;
    
    @IsNotEmpty({
        message: 'É necessario um título para o produto'
    })
    title: string;
    
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    price: number;
}

@Injectable()
export class ProductsService {
   products: Product[] = [];

   insertProduct(product: Product): Product {
       const newProduct = product;
       newProduct.id = new Date().toString();
       
       this.products.push(newProduct);
       return newProduct; 
    }
}
