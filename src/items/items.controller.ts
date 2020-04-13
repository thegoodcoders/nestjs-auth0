import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from 'src/models/items';
import { Item } from 'src/models/item';
import { AuthGuard } from '@nestjs/passport';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async findAll(): Promise<Items> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: number): Promise<Item> {
        return this.itemsService.find(id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    create(@Body('item') item: Item) {
        this.itemsService.create(item);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    update(@Body('item') item: Item) {
        this.itemsService.update(item);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    delete(@Param('id') id: number) {
        this.itemsService.delete(id);
    }

}
