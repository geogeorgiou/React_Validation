import React, {useState} from "react";
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

import {
    Container, Button, Col, Row, FormGroup
    // , Dropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap'
import {FormInput} from "./FormInput";
import ReactSelect from "react-select";
import {Form} from "./components/Form/Form";

const options = [
    {value: "chocolate", label: "Chocolate"},
    {value: "strawberry", label: "Strawberry"},
    {value: "vanilla", label: "Vanilla"}
];

const validationRules = Yup.object().shape({
    firstName: Yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: Yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field"),
});


export const BasicForm = () => {



    const {register, handleSubmit, errors} = useForm({
        defaultValues: { firstName: '', lastName: '' },
        mode: 'onBlur',
        resolver: yupResolver(validationRules)
    });



    const onSubmit = (data) => {
        alert(data)
    };

    return (

        <Container>

            <Form onSubmit={handleSubmit(onSubmit)}>

                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <FormInput
                                id="firstName"
                                type="text"
                                label="First Name"
                                name="firstName"
                                register={register}
                                error={!!errors.firstName}
                                helperText={errors?.firstName?.message}
                            />
                            {errors.firstName && <p>{errors.firstName.message}</p>}
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <FormInput
                                id="lastName"
                                type="text"
                                label="Last Name"
                                name="lastName"
                                register={register}
                                error={!!errors.lastName}
                                helperText={errors?.lastName?.message}
                            />
                            {errors.lastName && <p>{errors.lastName.message}</p>}

                        </FormGroup>
                    </Col>
                </Row>



                <Button type="submit">Submit</Button>

            </Form>

        </Container>


    );
};




