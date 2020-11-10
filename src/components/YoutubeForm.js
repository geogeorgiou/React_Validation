import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

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
            <Form>

                <label htmlFor='name'>Name</label>

                {/*1. hooks input to formik*/}
                {/*2. no need to write onBlur, onChange, value */}
                {/*1. uses name attribute to match formik state*/}
                <Field
                    type='text'
                    id='name'
                    name='name'
                />

                <ErrorMessage name='name' component={TextError}/>

                <label htmlFor='email'>E-mail</label>
                <Field
                    type='text'
                    id='email'
                    name='email'
                />

                <ErrorMessage name="email" component={TextError}/>

                <label htmlFor='channel'>Channel</label>
                <Field
                    type='text'
                    id='channel'
                    name='channel'
                />

                <ErrorMessage name='channel' component={TextError}/>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
}

export default YoutubeForm;