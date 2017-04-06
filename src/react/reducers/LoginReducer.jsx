import {HANDLE_EPISODE} from '../actions/actions.jsx';

export default function(state = {visible:false,error:false}, action){
	switch(action.type){
		case HANDLE_EPISODE:
			return {
				visible: action.payload.login,
				error: action.payload.error
			};
		default:
			return state;
	}
}
