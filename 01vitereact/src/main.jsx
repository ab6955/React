import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { act } from 'react';

function myApp() {
    return (
        <div>
            <h1>Custom React !</h1>
        </div>
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank",
//     },
//     children: "Click here to visit the site",
// };

const anotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"
const reactElement = React.createElement(
    'a',
    { href: 'https://www.google.com', target: '_blank' },
    'click me',
    anotherUser
)
createRoot(document.getElementById('root')).render(

    // <App />
    // anotherElement
    reactElement

)
