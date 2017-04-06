import {CHANGE_BACKGROUND} from '../actions/actions.jsx';

export default function(state = "img/background.jpg", action){
	switch(action.type){
		case CHANGE_BACKGROUND:
			return action.payload;
		default:
			return state;
	}
}
