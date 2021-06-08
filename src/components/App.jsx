import React from 'react'
import "../style/index.scss"
import Recipes from "./Recipes"

import hero from "../images/3.jpg.jpg"

function App() {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh Hai, React</h1>
                    <img src={hero} style={{ height: "300px", width: "300px" }}></img>
                </section>
            </main>
            <Recipes />
        </>
    )
}

export default App
