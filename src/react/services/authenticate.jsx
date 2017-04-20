import CryptoJS from 'crypto-js';
import $ from 'jquery';
import cookie from 'jquery.cookie';

class Authenticate{
	constructor(){
		this.ck = {
			emmys: "stazfycemmys2017"
		}

		//"37a7dac83cffb918fa54a6e9c2d4cfc0109dc79cc94adffdfc7a71794c2fd7f5"
		this.values = {
			emmys: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
		}
	}

	check(obj){
		obj.a = obj.a || {};

		//console.log( $.cookie( this.ck[obj.guild] ), this.values[obj.guild] )

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
