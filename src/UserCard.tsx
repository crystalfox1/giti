interface UserCardProps {
  name: string
  age: number
  isOnline: boolean
}

function UserCard(props: UserCardProps) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Status: {props.isOnline ? "Online" : "Offline"}</p>
    </div>
  )
}
export default UserCard