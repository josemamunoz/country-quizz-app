import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./js/store/appContext";

import "./styles/index.css"

import { Home } from "./js/views/home";
import { Footer } from "./js/component/footer"
import { Quiz } from "./js/views/quiz";
/* import { Footer } from "./js/component/footer"; */


//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (

			<BrowserRouter basename={basename} >
                <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
					<Route exact path="/quiz" component={Quiz}/>
					{/* <Route render={() => <h1>Not found!</h1>} /> */}	
				</Switch>
				<Footer />
                </div>
				
			</BrowserRouter>

	);
};

export default injectContext(Layout);
