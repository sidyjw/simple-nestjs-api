import { Controller, Get, Post, Req, Body, UsePipes, ValidationPipe, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService, Product } from './products.service';

@Controller('products')
export class ProductsController {
   
    
    constructor(private readonly ProductService: ProductsService) { 
    }
    
    @Get()
    getAll(): Product[] {
       return this.ProductService.getAll();
    }

    @Get(':id')
    getProduct(@Param('id') id): Product {
        return this.ProductService.getOne(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({
        transform: true
    }))
    addProduct(@Body() product: Product) {
        return this.ProductService.insertProduct(product);
    }

    @Patch()
    @UsePipes(new ValidationPipe({
        transform: true
    }))
    updateProduct(@Body() product: Product): Product {
        return this.ProductService.updateProduct(product);
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId):void {
        this.ProductService.deleteProduct(prodId);
    }
}
