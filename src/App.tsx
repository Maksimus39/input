import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import {FullInput} from "./components/FullInput";

function App() {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ])


    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }
    //1й вид инпута


    const callBackButtonHandler = (title: string) => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            <div>

                <FullInput addMessage={addMessage}/>

                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callBack={() => callBackButtonHandler(title)}/>
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
