import React, { Component } from "react";
// import {LoginForm} from "./LoginFormReactHookForm"
import {BasicForm} from './BasicForm';


class App extends Component {
    render() {
        return (
            <main>
                <section>
                    <BasicForm />
                </section>
            </main>
        );
    }
}

export default App;