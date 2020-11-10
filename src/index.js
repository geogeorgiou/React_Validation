import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { render } from "react-dom";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import Demo from './demo'

// import Dropzone from "react-dropzone";
// import Recaptcha from "react-recaptcha";

// import Thumb from "./Thumb";

// const dropzoneStyle = {
//     width: "100%",
//     height: "auto",
//     borderWidth: 2,
//     borderColor: "rgb(102, 102, 102)",
//     borderStyle: "dashed",
//     borderRadius: 5
// };

class App extends React.Component {
    // componentDidMount() {
    //     const script = document.createElement("script");
    //     script.src = "https://www.google.com/recaptcha/api.js";
    //     script.async = true;
    //     script.defer = true;
    //     document.body.appendChild(script);
    // }

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

                <Demo></Demo>

                {/*<Formik*/}
                {/*    initialValues={{*/}
                {/*        name: "",*/}
                {/*        email: "",*/}
                {/*        photo: undefined,*/}
                {/*        attachments: [],*/}
                {/*        recaptcha: ""*/}
                {/*    }}*/}
                {/*    onSubmit={async (values) => {*/}
                {/*        let formData = new FormData();*/}

                {/*        formData.append("name", values.name);*/}
                {/*        formData.append("email", values.email);*/}
                {/*        formData.append("photo", values.photo);*/}

                {/*        for (let i = 0; i <= values.attachments.length; i++) {*/}
                {/*            formData.append(`attachments[${i}]`, values.attachments[i]);*/}
                {/*        }*/}

                {/*        formData.append("recaptcha", values.recaptcha);*/}

                {/*        // you would submit with fetch for example*/}
                {/*        // const res = await fetch("posturl", { method: "POST", body: formData });*/}
                {/*        // Do whatever on the sever*/}
                {/*        alert("Form submitted!");*/}
                {/*        console.log(formData.get("name"));*/}
                {/*        console.log(formData.get("email"));*/}
                {/*        console.log(formData.get("photo"));*/}
                {/*        console.log(formData.get("recaptcha"));*/}
                {/*    }}*/}
                {/*    validationSchema={YupSchema}*/}
                {/*    render={({*/}
                {/*                 values,*/}
                {/*                 errors,*/}
                {/*                 touched,*/}
                {/*                 handleSubmit,*/}
                {/*                 handleChange,*/}
                {/*                 setFieldValue*/}
                {/*             }) => (*/}
                {/*        <form onSubmit={handleSubmit}>*/}
                {/*            <div className="form-group">*/}
                {/*                <label htmlFor="name">Name</label>*/}
                {/*                <input*/}
                {/*                    id="name"*/}
                {/*                    name="name"*/}
                {/*                    type="text"*/}
                {/*                    className="form-control"*/}
                {/*                    value={values.name}*/}
                {/*                    onChange={handleChange}*/}
                {/*                />*/}
                {/*                {errors.name && touched.name && <p>{errors.name}</p>}*/}
                {/*            </div>*/}

                {/*            <div className="form-group">*/}
                {/*                <label htmlFor="email">E-mail</label>*/}
                {/*                <input*/}
                {/*                    id="email"*/}
                {/*                    name="email"*/}
                {/*                    type="email"*/}
                {/*                    className="form-control"*/}
                {/*                    value={values.email}*/}
                {/*                    onChange={handleChange}*/}
                {/*                />*/}
                {/*                {errors.email && touched.email && <p>{errors.email}</p>}*/}
                {/*            </div>*/}

                {/*            /!*setFieldValue={setFieldValue}*!/*/}
                {/*            /!*errorMessage={errors["file"] ? errors["file"] : undefined}*!/*/}
                {/*            /!*touched={touched["file"]}*!/*/}

                {/*            <div className="form-group">*/}
                {/*                <label htmlFor="photo">Photo</label>*/}
                {/*                <input*/}
                {/*                    id="photo"*/}
                {/*                    name="photo"*/}
                {/*                    type="file"*/}
                {/*                    className="form-control"*/}
                {/*                    onChange={(event) => {*/}
                {/*                        setFieldValue("photo", event.currentTarget.files[0]);*/}
                {/*                    }}*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*            */}
                {/*            <button type="submit" className="btn btn-primary">*/}
                {/*                submit*/}
                {/*            </button>*/}
                {/*        </form>*/}
                {/*    )}*/}
                {/*/>*/}
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
