import { useFormik } from 'formik'

import Button from '../Button'
import Input from '../Input'

const UpdatePowerForm = () => {
    const formik = useFormik({
        initialValues: {
            power: ""
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    console.log(formik.values)

  return (
    <form onSubmit={formik.handleSubmit}>
        <Input 
            type="text"
            value={formik.values.power}
            name="power"
            onChange={formik.handleChange}
        />
        <Button 
            type="submit"
            background="teal"
        >
            Validate
        </Button>
    </form>
  )
}

export default UpdatePowerForm