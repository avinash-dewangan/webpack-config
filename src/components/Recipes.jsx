import { useState } from 'react'




function Recipes() {
    const [recipe, setrecipe] = useState({})
    const car = {
        name: 'bmw',
        year: 2020,
        price: "$20000"
    }

    const bmw = {
        ...car,
        wheel: "4"
    }

    // console.log(car)
    // console.log(bmw)
    return (
        <div>
            <div>
                <h3>Current Button</h3>
                <button onClick={() => setrecipe(car)}>CAR</button>
                <button onClick={() => setrecipe(bmw)}>BMW</button>
            </div>

            <ul>
                {Object.keys(recipe).map((material) => {
                    return <li key={material}>
                        {material}:{recipe[material]}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Recipes

