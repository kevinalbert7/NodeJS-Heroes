import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { HeroContext } from "../contexts/Hero";
import { GridHome, GridItem } from "../components/Grid";
import Container from "../components/Container";
import HeroCard from "../components/Home/HeroCard";

const Home = () => {
  const { getHeroes } = useContext(HeroContext);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes().then((response) => setHeroes(response));
  }, [getHeroes]);

  return (
    <Container>
      <h1>SuperHeroes</h1>
      <GridHome>
        {heroes.map((hero) => (
          <GridItem key={hero.slug}>
            <Link to={`/heroes/${hero.slug}`}>
              <HeroCard hero={hero} />
            </Link>
          </GridItem>
        ))}
      </GridHome>
    </Container>
  );
};

export default Home;
