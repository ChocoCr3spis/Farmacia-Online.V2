export class Product {
    id!: number;
    name!: string;
    description: string | undefined;
    price: number = 0;
    stock!: number;
    image_url: string = 'https://placehold.jp/3d4070/ffffff/150x120.png';
}
