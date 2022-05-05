import { useState } from 'react'

import { ListItem } from '../ListItem'
import {Item} from '../../types/Item'

import './style.css'
import Input from '../Input/Input'

const Content = () => {
    const [list, setList] = useState<Item[]>([])

    const AddTask = (taskName: string) => {
        let newList = [...list]
        newList.push({
            id: list.length + 1,
            name: taskName,
            done: false
        })
        setList(newList)
    }
    return(
        <div className="content">
            <Input onClick={AddTask}/>

            <div className="list-view">
                {list.map((item, index) => (
                   <ListItem key={index} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Content