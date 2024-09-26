export type ProductAPI = {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

export type Product = ProductAPI & { quantity: number }
