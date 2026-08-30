interface UserCardProps {
  name: string
  age: number
  isOnline: boolean
}

function UserCard2({ name, age, isOnline }: UserCardProps) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  )
}

export default UserCard2
