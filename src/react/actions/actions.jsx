import $ from 'jquery';
import auth from '../services/authenticate.jsx';

//EVENTS
export const FETCH_DATA = 'FETCH_DATA';
export const CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';
export const CHANGE_GUILD = 'CHANGE_GUILD';
export const CHANGE_SHOW = 'CHANGE_SHOW';
export const HANDLE_EPISODE = 'HANDLE_EPISODE';
export const MENU = 'MENU';

const k = "dKCg0y_lvI0UhexnXGMG6WWYYx7RJqflY3iKhZubs4o.";

//GET DATA
export function fetchData(dispatch){
	const url = "data/data.json";

	return dispatch => {
		$.getJSON(url).then( (function(response){
			let data = response;

			let arr = data.shows.map( (show,key)=>{
				if (show.playlist) {
					const bc = `http://api.brightcove.com/services/library?command=find_playlist_by_id&playlist_id=${show.playlist}&media_delivery=default&callback=?&token=${k}`;
					return $.getJSON(bc).promise();
				}
			});

			Promise.all(arr).then( function(results){
				data.shows.forEach( (show,k)=>{
					if (results[k]){
						console.log( results[k])
						show.episodes = show.episodes.map( (episode,num)=>{
							episode.id = results[k].videoIds[num];
							return episode;
						});
					}
				});

				dispatch({
					type: FETCH_DATA,
					payload: data
				});
			});
		}));
	}
}

//SET BACKGROUND
export function setBackground(background, dispatch){
	return dispatch => {
		dispatch({
			type: CHANGE_BACKGROUND,
			payload: background
		});
	}
}

//SET GUILD
export function setGuild(guild, dispatch){
	return dispatch => {
		dispatch({
			type: CHANGE_GUILD,
			payload: guild
		});
	}
}

//SET SHOW
export function setShow(show, dispatch){
	return dispatch => {
		dispatch({
			type: CHANGE_SHOW,
			payload: show
		});
	}
}

//SET SHOW
export function setEpisode(obj, dispatch){
	return dispatch => {
		dispatch({
			type: HANDLE_EPISODE,
			payload: auth.check(obj)
		});
	}
}

//SHOW HIDE THE MENU
export function showHideMenu(boolean,dispatch){
	return dispatch => {
		dispatch({
			type: MENU,
			payload: boolean
		});
	}
}
