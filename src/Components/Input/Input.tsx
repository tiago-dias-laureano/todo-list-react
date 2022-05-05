import { KeyboardEvent, useState } from 'react'
import './style.css'

type Props = {
    onClick: (taskName: string) => void
}

const Input = ({onClick}: Props) => {
    const [inputText, setInputText] = useState('')
    
    const onSubmitBtn = () => {
        onClick(inputText)
        setInputText('')
    }

    const onSubmitEnter = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onClick(inputText)
            setInputText('')
        }
    }
    return(
        <div className="input">
            <input 
                type="text" 
                value={inputText}
                placeholder='Adicione uma nova tarefa'
                onChange={e => setInputText(e.target.value)}
                onKeyUp={onSubmitEnter}
            />
            <div className='plus'>
                <button onClick={onSubmitBtn} type="submit">
                    +
                </button>
            </div>
        </div>
    )
}

export default Input