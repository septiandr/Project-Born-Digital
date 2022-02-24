import { useState,useEffect } from "react"
import './App.css'
export default function App(){
    const [name,setName]= useState({
    })
    const change =(e)=>{
        setName({
            [e.target.name]:e.target.value
        })
    }
    const [num,setState] = useState(1)
    const enter=()=>{
        setState(num+1)
        if (num==1){
            sessionStorage.setItem('name1',name.name)
        }else if(num==2){
            sessionStorage.setItem('name2',name.name)
        }else if(num==3){
            sessionStorage.setItem('name3',name.name)
        }else if(num==4){
            setState(num==1)
        }
    }
    const Ready=()=>{
    if(num<4){
        return(<>
            <input value={name.name} onChange={change} name="name" placeholder='insert name here'/><button onClick={enter}>+</button>
        </>)
    }else{
        return(<h1>team is Ready</h1>)
    }
}
    const name1 = sessionStorage.getItem('name1')
    const name2 = sessionStorage.getItem('name2')
    const name3 = sessionStorage.getItem('name3')
    console.log(num)
    return(<div className="container">
    	<h1>Assemble your team</h1>
        <div className="input">
            <label>{name1}</label><br/>
            <label>{name2}</label><br/>
            <label>{name3}</label><br/>
            <Ready/>
        </div>
    </div>)
}