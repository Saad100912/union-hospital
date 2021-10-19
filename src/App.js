import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/UserAccount/Login/Login";
import Register from "./Pages/UserAccount/Register/Register";
import BlogDetail from "./Pages/Blogs/BlogDetail/BlogDetail";
import ServiceDetail from "./Pages/Home/Services/ServiceDetail/ServiceDetail";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <PrivateRoute path="/blogs">
                            <Blogs />
                        </PrivateRoute>
                        <PrivateRoute path="/blog/:blogId">
                            <BlogDetail />
                        </PrivateRoute>
                        <PrivateRoute exact path="/service/:serviceId">
                            <ServiceDetail />
                        </PrivateRoute>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route to="*">
                            <NotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
