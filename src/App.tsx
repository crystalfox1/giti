import { Routes, Route } from 'react-router-dom'
import NavBar from "./NavBar"
import ProductList from "./ProductList"
import StudentList from "./StudentList"
import TodoAdder from "./TodoAdder"
import ContactForm from "./ContactForm"
import Counter from "./Counter"
import Toggle from "./Toggle"
import UserCard2 from "./UserCard2"
import ProductCard2 from "./ProductCard2"

const Home: React.FC = () => (
  <div>
    <ProductList />
    <hr />
    <StudentList />
    <hr />
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
    <ProductCard2 />
  </div>
)

const About: React.FC = () => <h1>About Page</h1>
const Contact: React.FC = () => <h1>Contact Page</h1>

function App(): React.ReactElement {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>gitush</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
