import { useState } from "react";
import Card from './Card'
import animal1 from '../project img/animal.jpg'
import animal2 from '../project img/delf.jpg'
import animal3 from '../project img/moo.jpg'
import animal4 from '../project img/cat.jpg'
import animal5 from '../project img/pin.jpg'
import animal6 from '../project img/good.jpg'
import animal7 from '../project img/asasa.jpg'
import animal8 from '../project img/pppp.jpg'

function Cards() {
const[items, setItems] = useState([
{id: 1, img: animal1, stat: ""},
{id: 1, img: animal1, stat: ""},
{id: 2, img: animal2, stat: ""},
{id: 2, img: animal2, stat: ""},
{id: 3, img: animal3, stat: ""},
{id: 3, img: animal3, stat: ""},
{id: 4, img: animal4, stat: ""},
{id: 4, img: animal4, stat: ""},
{id: 5, img: animal5, stat: ""},
{id: 5, img: animal5, stat: ""},
{id: 6, img: animal6, stat: ""},
{id: 6, img: animal6, stat: ""},
{id: 7, img: animal7, stat: ""},
{id: 7, img: animal7, stat: ""},
{id: 8, img: animal8, stat: ""},
{id: 8, img: animal8, stat: ""},

].sort(() => Math.random() - 0.5))

const [prev, setPrev] = useState(-1)

function check(current){
    if(items[current].id == items[prev].id){
        items[current].stat = "correct"
        items[prev].stat = "correct"
        setPrev(-1)
    
    }else{
        items[current].stat = "wrong"
        items[prev].stat = "wromg"
        setItems([...items])
        setTimeout(() => {
            items[current].stat = ""
            items[prev].stat = ""
            setItems([...items])
            setPrev(-1);
        },1000)

    }
}




function handleClick(id){
    if(prev === -1){
        items[id].stat = "active"
        setItems([...items])
        setPrev(id)

    }else{
        check(id)
        
    }


}



    return (
        <div className="container">
            {items.map((item, index) => (
            <Card key = {index} item = {item} id={index} handleClick={handleClick}/>
               ))}

        </div>
    )
 
}



export default Cards;