import { Injectable } from '@nestjs/common';
import { Items } from 'src/models/items';
import { Item } from 'src/models/item';

@Injectable()
export class ItemsService {
    private readonly items: Items = {
        1: {
            id: 1,
            name: 'Pizza',
            price: 14.95,
            description: 'Barbacoa',
            image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png'
        },
        2: {
            id: 2,
            name: 'Hamburguesa',
            price: 6.95,
            description: 'Doble Cheeseburguer',
            image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png'
        },
        3: {
            id: 2,
            name: 'Té',
            price: 1.50,
            description: 'Verde',
            image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png'
        }
    }

    // Find All
    findAll(): Items {
        return this.items;
    }

    // Crear un nuevo item
    create(nuevoItem: Item) {
        const id = new Date().valueOf();
        this.items[id] = {
            ...nuevoItem,
            id
        };
    }

    // Buscar un elemento
    find(id: number): Item {
        const elemento: Item = this.items[id];

        if(elemento) {
            return elemento;
        }

        throw new Error('No se ha encontrado el elmento');
    }

    // Acutalizar un item
    update(itemToUpdate: Item) {
        if(this.items[itemToUpdate.id]) {
            this.items[itemToUpdate.id] = itemToUpdate;
            return;
        }

        throw new Error('No se ha encontrado el elmento');
    }

    // Eliminar un elemento
    delete(id: number) {
        const elemento: Item = this.items[id];

        if(elemento) {
            delete this.items[id];
            return;
        }

        throw new Error('No se ha encontrado el elmento');
    }




}
