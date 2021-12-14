import React from 'react'
import { Formik } from 'formik'

const Form = () => {

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
                    placeholder="Change power"
                    value={formik.values.power}
                    onChange={formik.handleChange}
                />
                <button type="submit">Submit</button>
            </form>

            <h3>Modify your hero!</h3>
            <form onSubmit={formik.handleSubmit}>
                <input
                    placeholder="Change image"
                    value={formik.values.power}
                    onChange={formik.handleChange}
                />  
                <input
                    placeholder="Change name"
                    value={formik.values.power}
                    onChange={formik.handleChange}
                />
                <input
                    placeholder="Change color"
                    value={formik.values.power}
                    onChange={formik.handleChange}
                />
                <input
                    placeholder="Change age"
                    value={formik.values.power}
                    onChange={formik.handleChange}
                />
                <input
                    placeholder="Change life status"
                    value={formik.values.power}
                    onChange={formik.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form