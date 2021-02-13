import React from 'react';

function CreateUser({username,onChange,email,onSubmit}){
    return(
        <div>
            <input name = "username" placeholder = "username" value = {username} onChange = {onChange}/>
            <input name = "email" placeholder = "email" value = {email} onChange = {onChange}/>
            <button onClick = {onSubmit}>등록</button>
        </div>
    )
}

export default CreateUser;