import React from 'react'
import "../style/index.scss"
import Recipes from "./Recipes"

function App() {
    return (
        <>
            <section className="hero"></section>

            <main>
                <section>
                    <h1>Oh Hai, React</h1>
                </section>
            </main>
            <Recipes />
        </>
    )
}

export default App