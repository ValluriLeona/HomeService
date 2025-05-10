import React, { useState } from 'react'
import './items.css'
import axios from 'axios'

export default function Vegetables({store}) {

    const[result, setResult] = useState(null)

    if(result == null) {
        axios.get("http://localhost:8081/vegetables", {}).then((res)=>{
            console.log(res.data)
            setResult(res.data)
        })
    }

    function cardAction(item){
        //alert(item.pname)
        localStorage.setItem("element", JSON.stringify(item))
        store.dispatch({"type":"page", "data":"Product"})
        //alert(JSON.parse(localStorage.getItem("element")).pname)
    }

    if(result != null)
        return (
            <div className='card-parent'>
                
                {result.map((item)=>{
                    return(
                        <div className='card' onClick={()=>{cardAction(item)}}>
                            <div className='card-img'>
                                <img src={item.pimage} alt="not available" width={200} height={200} />
                            </div>
                            <div className='card-name'>
                                <p> {item.pname} </p>
                            </div>
                            <div className='card-price'>
                                <p> Rs. {item.pcost} </p>
                            </div>
                        </div>
                    )
                })}
                </div>
                )
        else
        return(
            <div>
                Vegetables List Fetching
            </div>
        )

    
}
