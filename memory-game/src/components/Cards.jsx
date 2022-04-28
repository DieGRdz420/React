import {useState} from "react";
import { Card } from "./Card";

export function Cards () {
    const [items, setItems] = useState([
        { id: 1, img: 'https://codigofacilito.com/system/articles/covers/000/000/043/original/html.jpg?1444827874', stat: "" },
        { id: 1, img: 'https://codigofacilito.com/system/articles/covers/000/000/043/original/html.jpg?1444827874', stat: "" },
        { id: 2, img: 'https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo', stat: "" },
        { id: 2, img: 'https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo', stat: "" },
        { id: 3, img: 'https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png', stat: "" },
        { id: 3, img: 'https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png', stat: "" },
        { id: 4, img: 'https://www.jairogarciarincon.com/img/clases/1517.jpg', stat: "" },
        { id: 4, img: 'https://www.jairogarciarincon.com/img/clases/1517.jpg', stat: "" },
        { id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyrnxPCEJ7BzoVx1FRLrrt-EzQQ6Fz4mKYTXJ6R4nJCnsdIjKS0oMolPwRrRIh0iWyJ4&usqp=CAU', stat: "" },
        { id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyrnxPCEJ7BzoVx1FRLrrt-EzQQ6Fz4mKYTXJ6R4nJCnsdIjKS0oMolPwRrRIh0iWyJ4&usqp=CAU', stat: "" },
        { id: 6, img: 'https://www.azulweb.net/wp-content/uploads/2021/02/Una-vulnerabilidad-en-VUE.JS-expuso-a-mas-de-un-millon-de-desarrolladores.jpeg', stat: "" },
        { id: 6, img: 'https://www.azulweb.net/wp-content/uploads/2021/02/Una-vulnerabilidad-en-VUE.JS-expuso-a-mas-de-un-millon-de-desarrolladores.jpeg', stat: "" },
        { id: 7, img: 'https://cdn.appdesign.dev/wp-content/uploads/2020/08/Agencia-desarrollo-Angular-JS.jpg', stat: "" },
        { id: 7, img: 'https://cdn.appdesign.dev/wp-content/uploads/2020/08/Agencia-desarrollo-Angular-JS.jpg', stat: "" },
        { id: 8, img: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg', stat: "" },
        { id: 8, img: 'https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg', stat: "" }
    ].sort(() => Math.random() - 0.5));

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
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
    };
    
    return (
        <div className="container" >
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}