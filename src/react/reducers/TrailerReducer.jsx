import {HANDLE_TRAILER} from '../actions/actions.jsx';

export default function(state = {trailer:false}, action){
	switch(action.type){
		case HANDLE_TRAILER:
			return action.payload;
		default:
			return state;
	}
}
