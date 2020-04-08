import React from 'react'
import DefaultLayout from './Component/Layout/DefaultLayout';



//  when use only bootstrap css then import this
// but we use scss for this resion we import the 
// sccs file  
// https://getbootstrap.com/docs/4.4/getting-started/theming/#importing
// import 'bootstrap/dist/css/bootstrap.min.css';




// scss for global 
import './App.scss';


export default function App() {
    return (
        <DefaultLayout/>              
    )
}
