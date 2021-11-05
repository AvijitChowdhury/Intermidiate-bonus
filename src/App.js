
import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState ,useEffect} from 'react';

function App() {
    const [likeColor, setLikecolor] = useState('');
    //users api
    const [users,setUsers] = useState([]);
    const[singleUser,setsingleUser] =useState({});
    const [randomUser,setRandomUser] = useState({});
     const getUser= async()=>{
      const url='https://jsonplaceholder.typicode.com/users';
        const json= await fetch(url).then(res=>res.json());
         setUsers(json);
    }
    useEffect(() => {
      getUser();
    }, []);

    //single user
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res=>res.json())
      .then(data=>setsingleUser(data));
    },[]);
    //random user
    useEffect(()=>{
      fetch('https://randomuser.me/api/')
      .then(res=>res.json())
      .then(data=>setRandomUser(data.results[0]));
    },[]);


  return (
    <div className="App">
      <AccessAlarmIcon/>
      <ThumbUpIcon onClick={()=>setLikecolor(likeColor? '': 'primary')} color={likeColor}></ThumbUpIcon>
      <h3>Single User: {singleUser.name}</h3>
      {/* <h2>Random user: {randomUser.name && randomUser.name.first}</h2> */}
      <h2>Random user: {randomUser.name?.first}</h2>
      {
        users.map(user=><li>{user.name}</li>)
      }
    </div>
  );
}

export default App;
