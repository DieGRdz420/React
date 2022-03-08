import React from "react";
import styles from "./App.module.css";
import { MovieDetails } from "./pages/MovieDetails"
import { LandingPage } from "./pages/LandingPage";
import { Nav } from "./components/Nav";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export function App() {
    return <Router>
        <header>
            <Link to="/" > 
                <Nav />
                 {/* <h1
                    className={styles.title} > 
                        MoviesApp 
                </ h1>  */}
            </Link>
        </header>
        <main>
            <Switch>
                <Route exact path="/movies/:movieId" > <MovieDetails /> </Route>
                <Route path="/" > <LandingPage /> </Route>
            </Switch>
        </main>
    </Router>;
};