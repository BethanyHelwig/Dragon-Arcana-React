import React from "react"

export default function LoginContainer() {
    // State values
    const [containerLoginState, setLoginContainerState] = React.useState(true)

    function switchContainer(){
        setLoginContainerState(prevState => !prevState)
    }

    return(
        <main>
        {containerLoginState &&
            <section id="login-container">
                <h2>Login, hero!</h2>
                <form id="login-form">
                    <label for="email">Email:</label>
                    <input 
                        type="email" 
                        required
                        id="login-email"
                        placeholder="adventurer@home.com"
                        name="login" />
                    <label for="password">Password:</label>
                    <input 
                        type="password" 
                        required
                        id="login-password" 
                        placeholder="M@gic1zcool"
                        name="login" />
                    <button type="submit">Log in</button>
                    <button type="button" onClick={switchContainer} className="btn-alt">Need to register instead?</button>
                </form>
            </section>
            }
        {!containerLoginState &&
            <section id="register-container">
                <h2>New here? Welcome, adventurer!</h2>
                <form id="register-form">
                    <label for="email">Email:</label>
                    <input 
                        type="email" 
                        required
                        id="register-email"
                        placeholder="adventurer@home.com"
                        name="login" />
                    <label for="password">Password:</label>
                    <input 
                        type="password" 
                        required
                        id="register-password" 
                        placeholder="M@gic1zcool"
                        name="login" />
                    <button type="submit">Create account</button>
                    <button type="button" onClick={switchContainer} className="btn-alt">Already have an account?</button>
                </form>
            </section>
            }
        </main>
    )
}