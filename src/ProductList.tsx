import React, { useState } from "react"

interface Product {
  id: number
  name: string
  price: number
}

const ProductList = () => {
  const [productName, setProductName] = useState<string>("")
  const [productPrice, setProductPrice] = useState<string>("")
  const [products, setProducts] = useState<Product[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value)
  }

  const addProduct = () => {
    if (productName.trim() === "" || productPrice.trim() === "") return

    const newProduct: Product = {
      id: Date.now(),
      name: productName,
      price: Number(productPrice)
    }

    setProducts([...products, newProduct])
    setProductName("")
    setProductPrice("")
  }

  const deleteProduct = (id: number) => {
    const newProducts = products.filter((product) => product.id !== id)
    setProducts(newProducts)
  }

  const totalPrice = products.reduce((sum, product) => sum + product.price, 0)

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "2px solid #333", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
      <h2>Product List</h2>
      <div style={{ marginBottom: "15px" }}>
        <input type="text" placeholder="Enter product name" value={productName} onChange={handleChange} />
        <input type="number" placeholder="Price" value={productPrice} onChange={handlePriceChange} style={{ width: "70px", marginLeft: "5px" }} />
        <button onClick={addProduct} style={{ marginLeft: "5px" }}>Add Product</button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  )
}

export default ProductList
