import React, { Component } from "react";
import {LoginForm} from "./LoginFormReactHookForm"

class App extends Component {
    render() {
        return (
            <main>
                <section>
                    <LoginForm />
                </section>
            </main>
        );
    }
}

export default App;