import React, {Component} from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import Demo from "../../demo";

class Step1 extends Component{

    render() {

        const FILE_SIZE = 160 * 1024;
        const SUPPORTED_FORMATS = [
            "image/jpg",
            "image/jpeg",
            "image/gif",
            "image/png"
        ];

        const YupSchema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            // recaptcha: Yup.string().required(),

            photo: Yup
                .mixed()
                .required("A file is required")
                .test(
                    "fileSize",
                    "File too large",
                    value => value && value.size <= FILE_SIZE
                )
                .test(
                    "fileFormat",
                    "Unsupported Format",
                    value => value && SUPPORTED_FORMATS.includes(value.type)
                )
            // photo: Yup
            //     .mixed()
            //     .required("A file is required")
            //     .test("fileFormat", "PDF only", (value) => {
            //         console.log(value);
            //         return value && ["application/pdf"].includes(value.type);
            //     })
            // photo: yup
            //   .string()
            //   .test("isValidFile", "File size allowed exceeded", (value) => {
            //     // console.log(value.size);
            //     // return true;
            //     return value && value[0].size <= 2000000; //2 MB
            //   })

        });

        return (
            <div className="container">

                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        photo: undefined,
                        attachments: [],
                        recaptcha: ""
                    }}
                    onSubmit={async (values) => {
                        let formData = new FormData();

                        formData.append("name", values.name);
                        formData.append("email", values.email);
                        formData.append("photo", values.photo);

                        for (let i = 0; i <= values.attachments.length; i++) {
                            formData.append(`attachments[${i}]`, values.attachments[i]);
                        }

                        formData.append("recaptcha", values.recaptcha);

                        // you would submit with fetch for example
                        // const res = await fetch("posturl", { method: "POST", body: formData });
                        // Do whatever on the sever
                        alert("Form submitted!");
                        console.log(formData.get("name"));
                        console.log(formData.get("email"));
                        console.log(formData.get("photo"));
                        console.log(formData.get("recaptcha"));
                    }}
                    validationSchema={YupSchema}
                    render={({
                                 values,
                                 errors,
                                 touched,
                                 handleSubmit,
                                 handleChange,
                                 setFieldValue
                             }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    value={values.name}
                                    onChange={handleChange}
                                />
                                {errors.name && touched.name && <p>{errors.name}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {errors.email && touched.email && <p>{errors.email}</p>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="photo">Photo</label>
                                <input
                                    id="photo"
                                    name="photo"
                                    type="file"
                                    className="form-control"
                                    onChange={(event) => {
                                        setFieldValue("photo", event.currentTarget.files[0]);
                                    }}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                submit
                            </button>
                        </form>
                    )}
                />
            </div>
        );
    }


}


export default Step1;
