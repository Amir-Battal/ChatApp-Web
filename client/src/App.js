import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import { Chat, Login, NotFound, Register, Password } from 'views'
import Auth from "./Auth";


class App extends Component{


    constructor(props) {
        super(props);
        Auth.init();
    }

    render() {
        return (
            <div id="main-container" className="container-fluid">
                <Router>
                    <Routes>
                        <Route path='/' exact element={Auth.auth() ? <Chat /> : <Navigate replace to="/login"/>} />
                        <Route path='/password' element={Auth.auth() ? <Password /> : <Navigate replace to="/login"/>} />
                        <Route path='/register' element={Auth.guest() ? <Register /> : <Navigate replace to="/"/>}  />
                        <Route path='/login' element={Auth.guest() ? <Login /> : <Navigate replace to="/"/>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App;
