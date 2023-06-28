export type ProductType = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export type ProductCart = ProductType & { quantity: number }
