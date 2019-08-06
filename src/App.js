import './App.css';
import React, { Suspense, useState, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import Header from './components/Header.component';

const List = lazy(() => import('./pages/List.component'));
const Edit = lazy(() => import('./pages/Edit.component'));
const View = lazy(() => import('./pages/View.component'));
const NotFound = lazy(() => import('./pages/NotFound.component'));

function App() {
	const [loading, setLoading] = useState(false);
	const toggleLoading = () => setLoading(!loading);

  return (
    <div className="App">
      {loading && <LinearProgress className="absolute top-0" />}
      <Header className="flex justify-center w-100 pv3" />

			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path="/" component={List} />
						<Route path="/contact/new" component={Edit} />
						<Route path="/contact/:id" component={View} />
						<Route path="/contact/:id/edit" component={Edit} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Suspense>
			</Router>

    </div>
  );
}

export default App;
