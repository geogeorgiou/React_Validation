import React, {useState} from "react";
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers';


import {
    Container, Button, Col, Row, FormGroup
    // , Dropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import {FormInput} from "./FormInput";
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
    email: Yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),

    phoneNumber: Yup
        .string()
        .when('hasPhone', {
            is: true,
            then: Yup
                .string()
                .matches(/^(69)([0-9]{8})$/, "Phone must be mobile")
                .required('You need to provide a phone')
        })


});


export const BasicForm = () => {


    const {register, handleSubmit, errors, watch} = useForm({
        defaultValues: {firstName: '', lastName: '', email: '', hasPhone: false, phoneNumber: ''},
        mode: 'onBlur',
        resolver: yupResolver(validationRules)
    });

    const hasPhone = watch("hasPhone");

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
                                error={errors.firstName}
                            />
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
                                error={errors.lastName}
                            />

                        </FormGroup>
                    </Col>
                </Row>

                <Row form>

                    <Col md={6}>

                        <FormGroup>
                            <FormInput
                                register={register}
                                type="email"
                                label="Email"
                                id="email"
                                name="email"
                                error={errors.email}
                            />

                        </FormGroup>

                    </Col>

                </Row>

                <Row form>

                    <Col md={6}>

                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        inputRef={register}
                                        name="hasPhone"
                                    />
                                }
                                label="Do you have a phone"
                            />

                        </FormGroup>

                    </Col>

                </Row>

                <Row form>

                    <Col md={6}>

                        <FormGroup>

                            { hasPhone && (
                                <FormInput
                                    register={register}

                                    id="phoneNumber"
                                    type="text"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    error={errors.phoneNumber}
                                />
                            )
                            }
                        </FormGroup>

                    </Col>

                </Row>


                <Button type="submit">Submit</Button>

            </Form>

        </Container>


    );
};




