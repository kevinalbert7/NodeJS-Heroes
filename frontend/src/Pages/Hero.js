import { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { HeroContext } from '../contexts/Hero'
import Container from '../components/Container'
import Img from '../components/Img'
import { Grid, GridItem } from '../components/Grid'
import Button from '../components/Button'
import UpdatePowerModal from '../components/Hero/UpdatePowerModal'

const Hero = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const { getHero, deleteHero } = useContext(HeroContext)
    const [hero, setHero] = useState(null)

    useEffect(() => {
        getHero(slug)
            .then(response => setHero(response))
    }, [])

    const handleDeleteClick = () => {
        deleteHero(slug)
            .then(() => navigate("/"))
    }

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
                    onClick={handleDeleteClick}
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
                    <Button background="teal">Add power</Button>
                </GridItem>
            </Grid>
            <UpdatePowerModal />
        </Container>
    )
}

export default Hero