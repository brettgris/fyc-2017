import {MENU} from '../actions/actions.jsx';

export default function(state = false, action){
	switch(action.type){
		case MENU:
			return action.payload;
		default:
			return state;
	}
}
