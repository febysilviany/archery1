import { Component } from '@angular/core';
import { NavParams, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  //public resetPasswordForm:FormGroup;

  constructor(
  public nav: NavController) {

  // this.resetPasswordForm = formBuilder.group({
  //   email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
  // })
}










// resetPassword(){
//   if (!this.resetPasswordForm.valid){
//     console.log(this.resetPasswordForm.value);
//   } else {
//     this.authData.resetPassword(this.resetPasswordForm.value.email)
//     .then((user) => {
//       let alert = this.alertCtrl.create({
//         message: "We just sent you a reset link to your email",
//         buttons: [
//           {
//             text: "Ok",
//             role: 'cancel',
//             handler: () => {
//               this.nav.pop();
//             }
//           }
//         ]
//       });
//       alert.present();
//     }, (error) => {
//       var errorMessage: string = error.message;
//       let errorAlert = this.alertCtrl.create({
//         message: errorMessage,
//         buttons: [
//           {
//             text: "Ok",
//             role: 'cancel'
//           }
//         ]
//       });
//       errorAlert.present();
//     });
//   }
// }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

}
