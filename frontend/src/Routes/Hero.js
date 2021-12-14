import React, { useEffect, useState} from 'react'

const Hero = () => {
    const [ hero, setHero ] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/heroes/:slug')
            .then(response => response.json())
            .then(data => setHero(data))
            console.log(setHero)
    }, [])
    return (
        <div>
            <ul>
                {hero.powers.map(power => 
                    <li>{power}</li>
                    )}
            </ul>
        </div>
    )
}

export default Hero