import React, {useState, useEffect} from 'react';
import UserList from './UserList';
import useFetch from './useFetch';

const styles = {
  userList: {
    width: '100%',
    height: 'auto',
  }
}

const Home = () => {

  const url = "https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432/team.json"

  const { data: users, isLoading, Error } = useFetch(url)

  // useEffect(() => {
  //     fetch(
  //       "https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432/team.json"
  //     )
  //       .then(
  //         (res) => {
  //           if (!res.ok){
  //             throw Error('could not fetch data')
  //           } return res.json()
  //         }
  //       ).then((data) => {
  //         setUsers(data);
  //         setIsLoading(false);
  //       }).catch((err) => {
  //         setIsLoading(false)
  //         setError(err.message)
  //       })
  // }, [])

  // const handleDelete = (name) => {
  //   const newUsers = users.filter((user) => user.name !== name)
  //   setUsers(newUsers)
  // }

  return(
    <div style={styles.userList}>
      {isLoading && <div>Loading...</div> }
      {users && <div><UserList users={users}
      //  handleDelete={handleDelete} 

       /></div>}
    </div>
  );

}

export default Home;