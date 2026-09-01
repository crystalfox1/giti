import TodoAdder from "./TodoAdder"
import ContactForm from "./ContactForm"
import Counter from "./Counter"
import Toggle from "./Toggle"
import UserCard2 from "./UserCard2"
import ProductCard from "./ProductCard"
import ProductCard2 from "./ProductCard2"

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>gitush</h1>
      <TodoAdder />
      <hr />
      <ContactForm />
      <hr />
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <UserCard2 name="Alice" age={25} isOnline={true} />
      <UserCard2 name="Bob" age={30} isOnline={false} />
      <hr />
      <ProductCard />
      <hr />
      <ProductCard2 />
    </div>
  )
}

export default App
