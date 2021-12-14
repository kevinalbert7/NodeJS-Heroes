import React from 'react'
import { useFormik } from 'formik'
import { Box, Text } from '@chakra-ui/react'

const FormNewHero = () => {

    const formik = useFormik({
        initialValues: {
            name:"",
            power: "",
            color: "",
            age : "",
            isAlive: "",
        },

        onSubmit: values => {
          console.log(values)
        }
      })

    return (
        <Box style={{display:"flex"}}>
            <form 
            onSubmit={formik.handleSubmit}
            style={{display:"flex",  flexDirection:"column"}}
            >
            <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='4xl'
                fontWeight='bold'
                textAlign='center'
                >
                Modify your hero !
            </ Text>
                {/* <input
                    name="image"
                    placeholder="Change image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                />   */}
                <input
                    name="name"
                    placeholder="Change name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    style={{margin:"0 10px 10px 0", padding:"17px", borderRadius:"10px"}}
                />
                <input
                    name="power"
                    placeholder="Change power"
                    value={formik.values.power}
                    onChange={formik.handleChange}
                    style={{margin:"0 10px 10px 0", padding:"17px", borderRadius:"10px"}}
                />
                <input
                    name="color"
                    placeholder="Change color"
                    value={formik.values.color}
                    onChange={formik.handleChange}
                    style={{margin:"0 10px 10px 0", padding:"17px", borderRadius:"10px"}}
                />
                <input
                    name="age"
                    placeholder="Change age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    style={{margin:"0 10px 10px 0", padding:"17px", borderRadius:"10px"}}
                />
                <input
                    name="status"
                    placeholder="Change life status"
                    value={formik.values.isAlive}
                    onChange={formik.handleChange}
                    style={{margin:"0 10px 10px 0", padding:"17px", borderRadius:"10px"}}
                />
                <button type="submit">Submit</button>
            </form>
        </Box>
    )
}

export default FormNewHero