import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./Components/FullInput";
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
    let [title, setTitle] = useState('')
    console.log(title)
    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])

    }
    const callBaCkButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className={"App"}>
            <div>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callBack={callBaCkButtonHandler}/>
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
