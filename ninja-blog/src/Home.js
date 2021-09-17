import React, {useState, useEffect} from 'react';
import UserList from './UserList';

const styles = {
  userList: {
    minWidth: '100vw',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);

  // useEffect(() => {
  //   const url="https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432/team.json"
  //   const response = fetch(url);
  //   const data = response.json();

  //   return () => {      
  //     setUsers(data);
  //     console.log(data);
  //     console.log(users);
  //   }
  // }, [])

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432/team.json"
    )
      .then(
        (res) => res.json()
      ).then((data) => {
        setUsers(data);
        setIsLoading(false);
      })

  }, [])

  const handleDelete = (name) => {
    const newUsers = users.filter((user) => user.name !== name)
    setUsers(newUsers)
  }

  return(
    <div style={styles.userList}>
      {isLoading && <div>Loading...</div> }
      {users && <UserList users={users} handleDelete={handleDelete} />}
    </div>
  );

}

export default Home;