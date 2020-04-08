import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Hidden from './components/Hidden';
import Home from './components/Home';

function App() {
    return (
		<div>
			<Router>
				<Switch>
					<Route path="/about"> <About /> </Route>
					<Route path="/contact"> <Contact /> </Route>
					<Route path="/"> <Home /> </Route>
					<Route path="/hidden"> <Hidden /> </Route>
				</Switch>
			</Router>
		</div>
    );
}

export default App;
