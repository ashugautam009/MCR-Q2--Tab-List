import { useState } from 'react'
import Button from '../button'
import './style.css'
const TabList=(props)=>{
    const[selectedIndex,SetselectedIndex]=useState(0)
    const{tabs}=props

    function handleviewcomponent(index){   
            SetselectedIndex(index)     
    }
    const Component=tabs[selectedIndex].Component
    return(
        <div>
           
            {tabs.map((tab,index)=>{
                console.log('index',index)
                return(
                    <Button label={tab.label} key={tab.id} onClick={()=>handleviewcomponent(index)}/>
                )
            })}
            <Component/>
        </div>
    )
}

export default TabList