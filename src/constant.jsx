import { Component } from "react";


function ComponentA(){
    return(
        <div>
            <p>ComponentA</p>
        </div>
    )
}

function ComponentB(){
    return(
        <div>
            <p>ComponentB</p>
        </div>
    )
}

function ComponentC(){
    return(
        <div>
            <p>ComponentC</p>
        </div>
    )
}

function ComponentD(){
    return(
        <div>
            <p>ComponentD</p>
        </div>
    )
}

export const tabdata=[
    {
        id:"a",
        label:'Component A',
        Component: ComponentA,
    },
    {
        id:'b',
        label:'Component B',
        Component:ComponentB,
    },
    {
        id:'c',
        label:'Component C',
        Component:ComponentC,
    },
    {
        id:'d',
        label:'Component D',
        Component:ComponentD
    }
]

