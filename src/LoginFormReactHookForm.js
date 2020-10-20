import React, {useState} from "react";
import {useForm, Controller} from 'react-hook-form';
import * as Yup from 'yup';

import {
    Container, Button, Col, Row, FormGroup
    // , Dropdown, DropdownItem, DropdownMenu, DropdownToggle
} from 'reactstrap'
import {FormInput} from "./FormInput";
import ReactSelect from "react-select";


// login: Yup.string().max(10, 'Login must be shorter than 10 characters').required('Required'),
// password: Yup.string().min(6, 'Password should be longer than 6 characters').required('Required'),
// dropdown: Yup.string().required('Required'),
// picture: Yup.string()
//     .test("isValidFile", "You need to provide a file", (value) => {
//         console.log(value.size);
//         return true;
//         // return value && value[0].size <= 2000000 //2 MB
//     })
//     .test("fileSize", "The file is too large", (value) => {
//     return value && value[0].size <= 2000000 //2 MB
// }),
// reactSelect: Yup.string().test("reactSelect", "You must select an option", (option) => {
//     let actualOption = option;
//     console.log('Optionally ' +option)
//     return actualOption !== undefined;
// })
//
//
// selectedOption: Yup.string().test("selectedOption", "You must select an option", (option) => {
//     console.log(option)
//     let actualOption = option.value;
//     return actualOption !== undefined;
// })

// const defaultValues = {
//     ReactSelect: { value: "", label: "Select an action" },
//     Checkbox: false,
//     switch: false,
//     RadioGroup: "",
//     numberFormat: 123456789,
//     downShift: "apple"
// };

const options = [
    {value: "chocolate", label: "Chocolate"},
    {value: "strawberry", label: "Strawberry"},
    {value: "vanilla", label: "Vanilla"}
];

const validationRules = Yup.object().shape({
    // reactSelect: Yup.object().shape({
    //     selectedOption: Yup.object().shape({
    //         label: Yup.string().required(),
    //         value: Yup.string().required()
    //     }).required('What is dead')
    // })
    // reactSelect: Yup.string().required('Set me up')

    // reactSelect: Yup.string().test("ifValidOption", "Please select flavor", (option) => {
    //     console.log(`validating ${option}`)
    //     return option;
    //     // return option && option.value !== undefined;
    // })

    picture: Yup.string()
        .test("fileSize", "The file is too large", (value) => {
            return value && value[0].size <= 2000000 //2 MB
        }),

})

const defaultValues = {
    ReactSelect: null
}
export const LoginForm = () => {


    // React.useEffect(() => {
    //     register({ name: "reactSelect" }, { required: true });
    // }, []);

    const {register, handleSubmit, setValue, errors, watch, control} = useForm({
        mode: 'onChange',
        validationSchema: validationRules,
        defaultValues: defaultValues
    });

    const [selectedFile, setSelectedFile] = useState(null);

    // const [values, setReactSelect] = useState({
    //     selectedOption: {value: '', label: 'Select an action'},
    // });

    // const [selectedAction, setSelectedAction] = useState({value: '', label: 'Select an action'});


    const likesCakes = watch("likesCakes");


    // const [values, setReactSelect] = useState({
    //     selectedOption: []
    // });
    //
    // const handleMultiChange = selectedOption => {
    //     setValue("reactSelect", selectedOption);
    //     setReactSelect(selectedOption);
    // };

    const onChangeHandler = event =>{

        console.log(event.target.files[0])


        setSelectedFile(event.target.files[0]);

    }

    // onClickHandler = () => {
    //     const data = new FormData()
    //     data.append('file', this.state.selectedFile)
    //     axios.post("http://localhost:8000/upload", data, {
    //         // receive two    parameter endpoint url ,form data
    //     }).then(res => { // then print response status
    //         console.log(res.statusText)
    //     })
    // }

    const onSubmit = ({login, password, dropdown, picture, reactSelect, customFile}) => {
        console.log('submit')
        console.log(reactSelect)
        console.log(customFile)
        // console.log(values.selectedOption.value)
        // console.table([login, password, values.selectedOption.value]);
    };

    return (

        <Container>

            <form onSubmit={handleSubmit(onSubmit)}>

                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <FormInput
                                // style={{backgroundColor: 'red'}}
                                id="login"
                                name="login"
                                type="text"
                                label="Login"
                                // register={register}
                                // error={errors.login}
                                // disabled
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <FormInput
                                id="password"
                                type="password"
                                name="password"
                                label="Password"
                                autoComplete="on"
                                // register={register}
                                // error={errors.password}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                <Row form>


                    <Col md={6}>
                        <FormGroup>

                            <input
                                id="picture"
                                ref={register}
                                type="file"
                                name="picture"/>
                            {errors.picture && <p>{errors.picture.message}</p>}

                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <label htmlFor="likesCakes">Likes Cakes: </label>
                    <input type="checkbox" name="likesCakes" id="likesCakes" ref={register}/>
                </Row>

                {
                    likesCakes && (
                        <select name="favouriteFlavor" id="favouriteFlavor" ref={register}>
                            <option value="chocolate">Chocolate</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                        </select>
                    )
                }

                <Row>

                    <Col md={6}>
                        <FormGroup>

                            <div>
                                {/*<label className="reactSelectLabel">React select</label>*/}
                                {/*<Select*/}
                                {/*    className="reactSelect"*/}
                                {/*    ref={register}*/}
                                {/*    // ref={e => register({name: "reactSelect" , required: true})}*/}
                                {/*    name="reactSelect"*/}
                                {/*    placeholder="Select an option"*/}
                                {/*    value={values.selectedOption}*/}
                                {/*    options={options}*/}
                                {/*    onChange={handleMultiChange}*/}
                                {/*/>*/}

                                <label>Ice Cream Preference</label>
                                {/*<Controller*/}
                                {/*    name="reactSelect"*/}
                                {/*    as={Select}*/}
                                {/*    options={options}*/}
                                {/*    control={control}*/}
                                {/*    rules={{ required: 'this field is required' }}*/}
                                {/*    defaultValue={[]}*/}
                                {/*/>*/}
                                <Controller
                                    as={ReactSelect}
                                    options={options}
                                    name="ReactSelect"
                                    control={control}
                                    placeholder="Select an action"
                                    rules={{required: 'this field is required'}}
                                />
                                {errors.ReactSelect && <p>{errors.ReactSelect.message}</p>}

                            </div>

                            {errors.selectedOption && <p>errors.selectedOption.message</p>}


                        </FormGroup>
                    </Col>

                </Row>

                <Row>

                    <Col md={6}>
                        <FormGroup>

                            {/*<Controller*/}
                            {/*    as={FormInput}*/}
                            {/*    options={options}*/}
                            {/*    control={control}*/}
                            {/*    placeholder="Select an action"*/}
                            {/*    rules={{required: 'the file is needed!'}}*/}
                            {/*/>*/}

                            {/*<FormInput*/}
                            {/*    type="file"*/}
                            {/*    label="Choose a file"*/}
                            {/*    name="customFile"*/}
                            {/*    control={control}*/}
                            {/*    rules={{required: 'the file is needed!'}}*/}
                            {/*    className="custom-file-input"*/}
                            {/*/>*/}


                            <input type="file" name="file" onChange={onChangeHandler}/>

                        </FormGroup>
                    </Col>
                </Row>

                <Button type="submit">Submit</Button>

            </form>

        </Container>


    );
};




