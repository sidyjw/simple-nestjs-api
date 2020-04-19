import { Injectable, Req, NotFoundException } from '@nestjs/common';
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
       newProduct.id = this.products.length.toString();
       
       this.products.push(newProduct);
       return newProduct; 
    }

    getAll(): Product[] {
        return this.products;
    }

    getOne(id:number):Product {
        if(id > this.products.length) throw new NotFoundException('Não foi possível encontrar o produto.');

        return this.products[id];
    }

    updateProduct(product: Product): Product {
        if( !product || !product.id || product.id > this.products.length.toString()) 
            throw new NotFoundException('Não foi possível atualizar o produto.');
        
        this.products[product.id] = product;

        return this.products[product.id];
    }

    deleteProduct(id: number) {
        this.products.splice(id, 1);
    }
}
