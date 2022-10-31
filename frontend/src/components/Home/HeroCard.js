import styled from "styled-components"

import Img from "../Img"

const Container = styled.div`
    border: 1px solid #333;
    border-radius: 5px;
    margin-right: 20px;
`

const Info = styled.div`
    height: 80px;
    text-align: center;
    padding: 10px 0px;
`

const HeroCard = ({ hero }) => {
    console.log(hero)

  return (
    <Container>
        <Img height="350px" backgroundImage={hero.image}/>
        <Info>
            <h2>{hero.name}</h2>    
        </Info>
    </Container>
  )
}

export default HeroCard