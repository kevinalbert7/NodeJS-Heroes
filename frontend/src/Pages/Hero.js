import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import { HeroContext } from "../contexts/Hero";
import Container from "../components/Container";
import Img from "../components/Img";
import { Grid, GridItem } from "../components/Grid";
import Button from "../components/Button";
import UpdatePowerModal from "../components/Hero/UpdatePowerModal";
import UpdateHeroModal from "../components/Hero/UpdateHeroModal";
import Power from "../components/Hero/Power";

const Hero = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { getHero, deleteHero, deletePower } = useContext(HeroContext);
  const [hero, setHero] = useState(null);
  const [updatePowerModalVisible, setUpdatePowerModalVisible] = useState(false);
  const [updateHeroModalVisible, setUpdateHeroModalVisible] = useState(false);

  useEffect(() => {
    getHero(slug).then((response) => setHero(response));
  }, [getHero, slug, location.pathname]);

  const handleDeleteClick = () => {
    deleteHero(slug).then(() => navigate("/"));
  };

  const handlePowerClick = (power) => {
    deletePower(slug, power).then(() => {
      // quand mon API me répond que le pouvoir est supprimé,
      // je vais le re get pour l'avoir à jour sur ma page
      getHero(slug).then((response) => setHero(response));
    });
  };

  if (!hero) {
    return <h3>Loading...</h3>;
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
            background="orange"
            onClick={() => setUpdateHeroModalVisible(true)}
          >
            Update
          </Button>
          <Button background="red" onClick={handleDeleteClick}>
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
          <p>
            Color: <span style={{ color: hero.color }}>{hero.color}</span>
          </p>
          <p>
            Powers:
            {hero.power.map((power, index) => (
              <>
                <Power onClick={() => handlePowerClick(power)}>
                  &nbsp;{power}
                  {/* si ce n'est pas le dernier, on sépare par des virgules */}
                </Power>
                {index !== hero.power.length - 1 && ", "}
              </>
            ))}
          </p>
          <p style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.8)" }}>(Click on each power you want to delete)</p>
          <Button
            onClick={() => setUpdatePowerModalVisible(true)}
            background="teal"
          >
            Add power
          </Button>
        </GridItem>
      </Grid>
      <UpdatePowerModal
        isOpen={updatePowerModalVisible}
        onClose={() => setUpdatePowerModalVisible(false)}
        setHero={setHero}
      />
      <UpdateHeroModal
        isOpen={updateHeroModalVisible}
        hero={hero}
        onClose={() => setUpdateHeroModalVisible(false)}
      />
    </Container>
  );
};

export default Hero;
