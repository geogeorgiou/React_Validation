import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

// const validate = values => {
//   const errors = {}

//   if (!values.name) {
//     errors.name = 'Required'
//   }

//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email format'
//   }

//   if (!values.channel) {
//     errors.channel = 'Required'
//   }

//   return errors
// }

const validationSchema = Yup.object({

    name: Yup.string()
        .required('Required'),

    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),

    channel: Yup.string()
        .required('Required')
})

function YoutubeForm () {

    //this example uses Yup for validation (and this will be passed to Formik Component)
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate,
    //     validationSchema
    // })

    // console.log('formik.touched', formik.touched)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <form>

                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    // onChange, onBlur, value fields
                    {...formik.getFieldProps('name')}
                />
                {/*formik here could also be applied to the fields that have been touched OR to some
            to improve UX (need handleBlur for that to do the touch)*/}
                {formik.touched.name && formik.errors.name ? (
                    <p className='error'>{formik.errors.name}</p>
                ) : null}

                <label htmlFor='email'>E-mail</label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    // onChange, onBlur, value fields
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                    <p className='error'>{formik.errors.email}</p>
                ) : null}

                <label htmlFor='channel'>Channel</label>
                <input
                    type='text'
                    id='channel'
                    name='channel'
                    // onChange, onBlur, value fields
                    {...formik.getFieldProps('channel')}
                />
                {formik.touched.channel && formik.errors.channel ? (
                    <p className='error'>{formik.errors.channel}</p>
                ) : null}

                <button type='submit'>Submit</button>
            </form>
        </Formik>
    );
}

export default YoutubeForm;