import { Controller, Get, Post, Req, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService, Product } from './products.service';

@Controller('products')
export class ProductsController {
   
    
    constructor(private readonly ProductService: ProductsService) { 
    }
    
    @Get()
    getAll() {
       
    }

    @Post()
    @UsePipes(new ValidationPipe({
        transform: true
    }))
    addProduct(@Body() product: Product) {
        return this.ProductService.insertProduct(product);
    }
}
