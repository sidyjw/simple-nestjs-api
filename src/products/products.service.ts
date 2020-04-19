import { Injectable, Req } from '@nestjs/common';
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
   private products: Product[] = [];

   insertProduct(product: Product): Product {
       const newProduct = product;
       newProduct.id = new Date().toString();
       
       this.products.push(newProduct);
       return newProduct; 
    }
<<<<<<< HEAD

    getAll(): Product[] {
        return this.products;
    }
=======
>>>>>>> d6f2e7e2de29ff2e57a3fc8654250c765faf4d81
}
