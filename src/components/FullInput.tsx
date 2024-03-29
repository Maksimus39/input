import React, {ChangeEvent, useState} from 'react';


type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    // console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // xnt console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickButtonHandler}>+</button>


        </div>
    );
};
//1й вид инпута

