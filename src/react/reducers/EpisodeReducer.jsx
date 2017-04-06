import {HANDLE_EPISODE} from '../actions/actions.jsx';

export default function(state = null, action){
	switch(action.type){
		case HANDLE_EPISODE:
			return action.payload;
		default:
			return state;
	}
}
