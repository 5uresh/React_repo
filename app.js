import React from 'react'
import ReactDOM from 'react-dom'

const Title =()=> <h1>Check the jsx code🚀</h1>


const Heading = ()=> {
    return (
        <div id='container'>
        <Title/>
        <h1>This content from functional component🚀</h1>
    </div>
    )
}
   
    


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Heading/>)

