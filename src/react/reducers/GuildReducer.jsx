import {CHANGE_GUILD} from '../actions/actions.jsx';

export default function(state = "", action){
	switch(action.type){
		case CHANGE_GUILD:
			return action.payload;
		default:
			return state;
	}
}
