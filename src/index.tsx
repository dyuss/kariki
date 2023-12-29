import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { MainPage } from './pages/MainPage/MainPage';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
					<Route path="/" component={MainPage} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
