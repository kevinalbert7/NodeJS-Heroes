import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { HeroContext } from '../contexts/Hero'
import { Grid, GridItem } from '../components/Grid'
import { Container } from '../components/Container'
import HeroCard from '../components/HeroCard'

const Home = () => {
    const { getHeroes } = useContext(HeroContext)
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        getHeroes()
            .then(response => setHeroes(response))
    }, [])

    return (
        <Container>
            <h1>SuperHeroes</h1>
            <Grid>
                {heroes.map(hero => (
                    <GridItem>
                        <Link to={`/heroes/${hero.slug}`}>
                            <HeroCard hero={hero}/>
                        </Link>
                    </GridItem>
                ))}
            </Grid>
        </Container>
    )
}

export default Home