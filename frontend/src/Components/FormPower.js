import React from 'react'
import { useFormik } from 'formik'

const FormPower = () => {

    const formik = useFormik({
        initialValues: {
            power: "",
        },

        onSubmit: values => {
          console.log(values)
        }
      })

    return (
        <>
            <h3>Change the power!</h3>
            <form onSubmit={formik.handleSubmit}>
                <input
                    name="power"
                    placeholder="Change power"
                    value={formik.values.power}
                    onChange={formik.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormPower