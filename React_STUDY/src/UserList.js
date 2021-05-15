import React from 'react';

function User({username,email,style,onRemove,id,onToggle}) {
    return(
        <div>
            <b style = {{color : style ? 'green' : 'black', cursor : 'pointer'}} onClick = {()=>onToggle(id)}>{username}</b> <span>({email})</span>
            <button onClick = {()=>onRemove(id)}>삭제</button>
        </div>
    )
}

function UserList({users,onRemove,onToggle}){
    return(
        <div>
            {users.map((user)=>(
            <User 
                username = {user.username} 
                email = {user.email} 
                style = {user.active} 
                id = {user.id} 
                onRemove = {onRemove} 
                onToggle = {onToggle} 
            />))}
        </div>
    )
}
export default UserList;