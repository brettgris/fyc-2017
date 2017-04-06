import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';
import appHistory from './services/appHistory.jsx';

import BasePage from './pages/BasePage.jsx';
import HomePage from './pages/HomePage.jsx';
import GuildPage from './pages/GuildPage.jsx';
import ShowPage from './pages/ShowPage.jsx';

const Routes = () => {
	return (
		<Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
			<Route path="/" component={BasePage} >
				<IndexRoute component={HomePage} />
				<Route path="/:guildname" component={GuildPage} />
				<Route path="/:guildname/:showname" component={ShowPage} />
				<Route path="/:guildname/:showname/:episodenum" component={ShowPage} />
			</Route>
		</Router>
	)
};

export default Routes;
