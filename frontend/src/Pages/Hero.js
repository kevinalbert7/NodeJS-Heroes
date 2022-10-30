import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { HeroContext } from '../contexts/Hero'
import Container from '../components/Container'
import Img from '../components/Img'
import { Grid, GridItem } from '../components/Grid'
import Button from '../components/Button'

const Hero = () => {
    const { slug } = useParams()
    const { getHero, deleteHero } = useContext(HeroContext)
    const [hero, setHero] = useState(null)

    useEffect(() => {
        getHero(slug)
            .then(response => setHero(response))
    }, getHero)

    if (!hero) {
        return <h3>Loading...</h3>
    }

    return (
        <Container>
            <Img height="500px" backgroundImage={hero.image} />
            <Grid>
                <GridItem>
                    <h1>{hero.name}</h1>
                </GridItem>
                <GridItem>
                    <Button 
                    background="red"
                    onClick={() => deleteHero(slug)}
                    >
                        Delete
                    </Button>
                </GridItem>
            </Grid>
            
            <Grid>
                <GridItem>
                    <p>Age: {hero.age}</p>
                    <p>{hero.isAlive ? "Alive" : "Dead"}</p>
                </GridItem>
                <GridItem>
                    <p>Color: <span style={{ color: hero.color }}>{hero.color}</span></p>
                    <p>Powers: {hero.power.join(", ")}</p>
                </GridItem>
            </Grid>
        </Container>
    )
}

export default Hero