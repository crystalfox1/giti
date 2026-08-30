import Counter from "./Counter"
import Toggle from "./Toggle"
import UserCard from "./UserCard"
import ProductCard from "./ProductCard"

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>gitush</h1>
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <UserCard name="Alice" age={25} isOnline={true} />
      <UserCard name="Bob" age={30} isOnline={false} />
      <hr />
      <ProductCard />
    </div>
  )
}

export default App
