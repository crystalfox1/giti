interface ProductCardProps {
  name: string
  price: number
  isAvailable: boolean
}

function ProductCardItem({ name, price, isAvailable }: ProductCardProps) {
  return (
    <div>
      <h3>Product: {name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {isAvailable ? "Available" : "Out of Stock"}</p>
    </div>
  )
}

function ProductCard2() {
  return (
    <div>
      <h2>Product Cards 2</h2>
      <ProductCardItem name="Laptop" price={999} isAvailable={true} />
      <ProductCardItem name="Phone" price={699} isAvailable={false} />
    </div>
  )
}

export default ProductCard2
