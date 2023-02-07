import { useEffect, useState } from "react";
import { getData } from "./getData";

function App(props) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getData().then((users) => {
      setUsers(users)
    })
  }, [])

  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.name}>{user.name}</li>)}
      </ul>
      <h1>Todos</h1>
    </div>
  );
}

export default App;
