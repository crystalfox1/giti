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
        <input type="text" placeholder="Enter product name" value={productName} onChange={handleChange} style={{ padding: "8px", marginRight: "5px" }} />
        <input type="number" placeholder="Price" value={productPrice} onChange={handlePriceChange} style={{ padding: "8px", width: "70px" }} />
        <button onClick={addProduct} style={{ padding: "8px 12px", marginLeft: "5px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px" }}>Add Product</button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", borderBottom: "1px solid #ddd" }}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => deleteProduct(product.id)} style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "5px 10px", borderRadius: "4px" }}>Delete</button>
          </li>
        ))}
      </ul>
      <h3 style={{ marginTop: "15px", paddingTop: "10px", borderTop: "2px dashed #ccc" }}>Total Price: ${totalPrice}</h3>
    </div>
  )
}

export default ProductList
