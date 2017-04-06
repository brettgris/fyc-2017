import {CHANGE_SHOW} from '../actions/actions.jsx';

export default function(state = "", action){
	switch(action.type){
		case CHANGE_SHOW:
			return action.payload;
		default:
			return state;
	}
}
