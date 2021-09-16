import React, {useState, useEffect} from 'react';
import UserList from './UserList';


const Home = () => {

  const [users, setUsers] = useState([
    {
      // name: '',
      // avatar: '',
      // role: '',
      // tweet: '',
      // twitter: ''
      name: "Flavio Ludgero",
      avatar: "https://startae.com/assets/images/team/flavio-ludgero-normal_2x-2cfa44b7.jpg",
      role: "Founder & CEO",
      tweet: "Service designer and longboard skate lover. Been through business consulting and digital agencies. Work with mentoring and business modeling using lenses of design.",
      twitter: "https://twitter.com/flavioludgero"
    }
  ])

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

  return(
    <div>
      <UserList users={users} />
    </div>
  );

}

export default Home;