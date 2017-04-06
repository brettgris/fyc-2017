import { combineReducers } from 'redux';
import DataReducer from './DataReducer.jsx';
import BackgroundReducer from './BackgroundReducer.jsx';
import GuildReducer from './GuildReducer.jsx';
import ShowReducer from './ShowReducer.jsx';
import EpisodeReducer from './EpisodeReducer.jsx';
import MenuReducer from './MenuReducer.jsx';
import LoginReducer from './LoginReducer.jsx';

const rootReducer = combineReducers({
	data: DataReducer,
	background: BackgroundReducer,
	guild: GuildReducer,
	show: ShowReducer,
	episode: EpisodeReducer,
	menu: MenuReducer,
	login: LoginReducer
});

export default rootReducer;
