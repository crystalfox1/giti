interface ProductCardProps {
  name: string
  price: number
  isAvailable: boolean
}

function ProductCardItem(props: ProductCardProps) {
  return (
    <div>
      <h3>Product: {props.name}</h3>
      <p>Price: ${props.price}</p>
      <p>Status: {props.isAvailable ? "Available" : "Out of Stock"}</p>
    </div>
  )
}

function ProductCard() {
  return (
    <div>
      <h2>Product Cards</h2>
      <ProductCardItem name="Laptop" price={999} isAvailable={true} />
      <ProductCardItem name="Phone" price={699} isAvailable={false} />
    </div>
  )
}

export default ProductCard
