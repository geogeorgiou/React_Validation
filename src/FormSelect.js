import React from 'react'
// import {Label, Input} from 'reactstrap';

export const FormSelect = ({register, error, label, id, optionMap, ...inputProps}) => {

    // important!!!
    // expose register reference, errors, label, id for use
    // AND wrap the rest of inputProps!
    //
    // ALSO remove the error notion from here and use it from inputProps BUT bind it with bootstrap

    let options = null;
    if (optionMap){
        options = optionMap.map(option => {
            return <option key={option.value} value={option.value}>{option.text}</option>
        })
    }

    return <>
        <select ref={register} name="dropdown">
            {/*<option value="">Choose one</option>*/}
            {/*<option value="0">0 - 1</option>*/}
            {/*<option value="1">1 - 100</option>*/}
            {options}
        </select>
        {error && error.message}
    </>

}