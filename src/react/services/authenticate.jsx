import CryptoJS from 'crypto-js';
import $ from 'jquery';
import cookie from 'jquery.cookie';

class Authenticate{
	constructor(){
		this.ck = {
			emmys: "stazfycemmys2017"
		}

		this.values = {
			emmys: "1b3bfea7c77f1c4ca1464451438a7fe1072ef83840d0955b0cc9ddf8d5fa4ad7"
		}
	}

	check(obj){
		obj.a = obj.a || {};

		if (obj.num && obj.num!=="trailer") {
			if ( $.cookie( this.ck[obj.guild] ) !== this.values[obj.guild]) {

				if (CryptoJS.SHA256(obj.a[obj.guild])==this.values[obj.guild]){
					obj.login = false;
					obj.error = false;
					obj.v = CryptoJS.SHA256(this.ck[obj.guild]);
					$.cookie( this.ck[obj.guild], CryptoJS.SHA256(obj.a[obj.guild]) );
				} else {
					obj.error = ( !obj.a[obj.guild]&&obj.a[obj.guild]!=="" ) ? false : true;
					obj.login = true;
				}
			} else obj.v = CryptoJS.SHA256(this.ck[obj.guild]);
		} else {
			obj.a[obj.guild] = null;
			obj.error = false;
			obj.login = false;
		}

		return obj;
	}

	show(obj) {
		return ( obj.v&&CryptoJS.SHA256(this.ck[obj.guild]).toString()===obj.v.toString() );
	}


}

export default new Authenticate();
