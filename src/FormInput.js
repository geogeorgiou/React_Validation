import React from 'react'
import clsx from 'clsx';
// import {Label, Input} from 'reactstrap';

export const FormInput = ({register, error, label, id, ...inputProps}) => {

    // important!!!
    // expose register reference, errors, label, id for use
    // AND wrap the rest of inputProps!
    //
    // ALSO remove the error notion from here and use it from inputProps BUT bind it with bootstrap

    return <>
        <label htmlFor={id}>{label}</label>
        <input
            ref={register}
            id={id}
            {...inputProps}
            className={clsx('form-control', '' , {'is-invalid' : error})}
        />
        {error && <div>{error.message}</div>}
    </>

}