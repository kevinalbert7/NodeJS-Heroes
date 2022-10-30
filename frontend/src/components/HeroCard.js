import styled from "styled-components"

const Container = styled.div`
    border: 1px solid #333;
    border-radius: 5px;
`

const Img = styled.div`
    height: 300px;
    background-image: url('${props => props.backgroundImage}');
    background-position: center;
    background-size: cover;
`

const Info = styled.div`
    text-align: center;
    padding: 10px 0px;
`

const HeroCard = ({ hero }) => {
    console.log(hero)

  return (
    <Container>
        <Img backgroundImage={hero.image}/>
        <Info>
            <h2>{hero.name}</h2>    
        </Info>
    </Container>
  )
}

export default HeroCard