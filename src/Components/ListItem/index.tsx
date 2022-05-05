import { useState } from 'react'
import {Item} from '../../types/Item'
import './style.css'

type Props = {
    item: Item
}

export const ListItem = ({item} : Props) => {
    const [isChecked, setIsChecked] = useState(item.done)

    return (
        <div className='list-item'>
            <input className="i-check" type="checkbox" onChange={e => setIsChecked(e.target.checked)} checked={isChecked}/>
            <label htmlFor="">{item.name}</label>
        </div>
    )
}