import React from "react";

const Home = () => {
    return (
        <div className="home-page">
            <div className="form-section">
                <div className="login-form">
                    <form>
                        <div className="form-field">
                            <input type="text" placeholder="email" />
                        </div>
                        <div className="form-field">
                            <input type="text" placeholder="password" />
                        </div>
                        <div className="form-field">
                            <button>Login</button>
                        </div>
                        <div className="reg-link">
                            <p>If not Register please<a href="/register">Register</a>first.</p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Home;