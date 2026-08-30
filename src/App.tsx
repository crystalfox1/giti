import Counter from "./Counter";
import Toggle from "./Toggle";
import UserCard from "./UserCard";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>gitush</h1>
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <h2>User Cards</h2>
      <UserCard name="Alice" age={25} isOnline={true} />
      <UserCard name="Bob" age={30} isOnline={false} />
    </div>
  );
}

export default App;
