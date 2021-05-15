import React ,{useState,useRef} from 'react';

function InputSamples () {
    const target = useRef();

    const [text, setText] = useState({
        name : '',
        nickname : '',
    });


    const onChange = (e)=>{
        setText({
            ...text,
            [e.target.name] : e.target.value
        })
    }
    
    const onReset = () => {
        setText({
            name : '',
            nickname : ''
        })
        target.current.focus();
    }


    return(
        <div>
            <input 
                name = "name" 
                onChange = {onChange} 
                placeholder="이름" 
                value = {text.name} 
                ref = {target}
            />
            <input
                name = "nickname" 
                onChange = {onChange} 
                placeholder="닉네임" 
                value = {text.nickname} 
            />
            <button onClick = {onReset}>초기화</button>
            <div></div>
            <b>값 : </b>
            {text.name} ({text.nickname})
        </div>

    )
}

export default InputSamples