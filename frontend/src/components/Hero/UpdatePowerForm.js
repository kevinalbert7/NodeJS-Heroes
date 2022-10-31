import { useContext } from 'react'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'

import { HeroContext } from '../../contexts/Hero'
import Button from '../Button'
import Input from '../Input'
import Flex from '../Flex'

const UpdatePowerForm = ({ setHero, onClose }) => {
    const { slug } = useParams()
    const { updatePowers } = useContext(HeroContext)

    const formik = useFormik({
        initialValues: {
            power: ""
        },
        onSubmit: (values, { resetForm }) => {
            updatePowers(slug, values)
                .then(response => {
                    setHero(response)
                    resetForm()
                    onClose()
                })
        }
    })

  return (
    <form onSubmit={formik.handleSubmit}>
        <Input 
            type="text"
            value={formik.values.power}
            name="power"
            onChange={formik.handleChange}
        />
        <Flex>
            <Button 
                type="submit"
                background="teal"
                disabled={formik.values.power.length === 0}
            >
                Validate
            </Button>
        </Flex>
    </form>
  )
}

export default UpdatePowerForm