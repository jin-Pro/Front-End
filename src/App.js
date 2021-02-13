import React ,{useState,useRef} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App(){
  const [input,setInput] = useState({
    username : '',
    email : ''
  })    //input state 선언 및 정의 and setInput 선언

  const {username,email} = input;  //input.username, input.email 축약해주기

  const [users,setUsers] = useState([
    {
      id : 1,
      username : 'jin-Pro',
      email : 'dnjun2@naver.com',
      active : true
    },{
      id : 2,
      username : 'tester',
      email : 'tester@naver.com',
      active : false
    },{
      id : 3,
      username : 'liz',
      email : 'liz@example.com',
      active : false
    }
  ])  //users state 선언 및 정의 해주기, setUsers로 users 변경 선언해주기

  const ID = useRef(4);

  const onSubmit = () => {  //등록버튼 누를경우 실행
    setInput({
      username : '',
      email : ''
    })    //input 태그의 value = input.username ,input.email이기때문에 ''으로 초기화 
    const user = {    //user라는 객체를 생성해줘서 users 배열에 넣어줘야함
      id : ID.current+= 1,
      username,     //username = input.username
      email ,       //email = input.email
      active : false
    }
    setUsers([
      ...users,   //기존에 users는 그대로
      user        //방금 만든 user 객체 추가
    ])
  }
  
  const onChange = (e) => {   //input 내용이 변경됐을때 실행
    setInput({        //input state 재정의 => input의 value는 결국 users에 추가될 객체에 사용되기때문에
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const onRemove = (key) =>{    //지울껀대 key값을 받을거임
    setUsers(     // users를 새로 정의해줌
      users.filter((user)=>(user.id !== key))   //filter의 반환값은 배열이기 때문에 []가 필요없음
    ) //users안에 있는 user의 id값이 key값과 다른애들만 갖고가겠다. == key값이 같은애는 버리겠다.
    console.log(key);
  }

  const onToggle = (key) =>{
    setUsers(
      users.map((user)=>(user.id === key ? {...user,active:!user.active} : {...user}))
    )
  }
  return(
    <div>
      <CreateUser 
        username = {username} 
        email = {email}
        onChange = {onChange} 
        onSubmit = {onSubmit}
      />
      <UserList users = {users} onRemove = {onRemove} onToggle = {onToggle} />
    </div>
  )
}
export default App;