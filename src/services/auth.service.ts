import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	Login(data) {
		console.log('Login');
		return this.afAuth.auth.signInWithEmailAndPassword(
			data.Email,
			data.Password
		);
    }
    
    daftarKetua(Email, Password) {
		// let newUser = {
		// 	Email: data.Email,
		// 	Password : data.Password,
		// 	Status : "Ketua Klub"
		// }
		return this.afAuth.auth.createUserWithEmailAndPassword(
			Email, 
			Password
		);
	}


	daftarPelatihAnggota(Email, Password) {		
		return this.afAuth.auth.createUserWithEmailAndPassword(
			Email, 
			Password
		);
	}

	// resetPassword(Email) {
	// 	return this.afAuth.auth.sendPasswordResetEmail(Email);
	//   }

	resetPassword(email: string) {
		var auth = firebase.auth();
		return auth.sendPasswordResetEmail(email)
		  .then(() => console.log("email sent"))
		  .catch((error) => console.log(error))
	  }


	logout(){
		return this.afAuth.auth.signOut();
	}
	


}