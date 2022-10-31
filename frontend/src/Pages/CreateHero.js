import { useContext } from "react"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"

import { HeroContext } from "../contexts/Hero"
import Container from "../components/Container"
import Input from "../components/Input"
import Button from "../components/Button"
import Flex from "../components/Flex"

const CreateHero = () => {
  const navigate = useNavigate()
  const { createHero } = useContext(HeroContext)

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      color: "",
      image: "https://img.le-dictionnaire.com/lion.jpg",
      isAlive: "",
      power: ""
    },onSubmit: (values) => {
      values = {
        ...values,
        power: values.power.split(", ")
      }

      createHero(values)
        .then(() => navigate("/"))
    }
  })

  return (
    <Container>
      <h1>Create your hero</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="name"
        />
        <Input 
          type="number"
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          placeholder="age"
        />
        <Input 
          type="text"
          name="color"
          value={formik.values.color}
          onChange={formik.handleChange}
          placeholder="color"
        />
        <label>isAlive</label>
        <Input 
          type="checkbox"
          name="isAlive"
          checked={formik.values.isAlive}
          onChange={formik.handleChange}
        />
        <Input 
          type="text"
          name="image"
          value={formik.values.image}
          onChange={formik.handleChange}
          placeholder="image"
        />
        <label>Separate your powers with a comma</label>
        <Input 
          type="text"
          name="power"
          value={formik.values.power}
          onChange={formik.handleChange}
          placeholder="powers"
        />
        <Flex>
          <Button 
            type="submit"
            background="teal"
          >
            Validate
          </Button>
        </Flex>
      </form>
    </Container>
  )
}

export default CreateHero