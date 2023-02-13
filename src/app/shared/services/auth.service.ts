import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData : any;
  constructor(
    public afs: AngularFirestore,
    public afAuth : AngularFireAuth,
    public router : Router,
    public ngZone : NgZone
  ) { 
    // this.afAuth.authState.subscribe((user) => {
    //   if(user) {
    //     this.userData =   user;
    //     localStorage.setItem('user', JSON.stringify(this.userData));
    //     JSON.parse(localStorage.getItem('user')!);
    //   } else {
    //     localStorage.setItem('user', 'null');
    //     JSON.parse(localStorage.getItem('user')!);
    //   }
    // });
  }

//   // Returns true when user is looged in and email is verified
// get isLoggedIn(): boolean {
//   const user = JSON.parse(localStorage.getItem('user')!);
//   return (user !== null && user.emailVerified !== false) ? true : false;
// }


  // SignIn(email: string, password : string) {
  //   return this.afAuth
  //       .signInWithEmailAndPassword(email,password)
  //       .then((result) => {
  //         this.SetUserData(result.user);
  //       })
  // }

  // SignUp (email: string, password: string){
  //   return this.afAuth.createUserWithEmailAndPassword(email, password)
  //       // .then((result) => {
  //       //   // this.SendVerificationMail();
  //       //   this.SetUserData(result.user);
  //       // })
  //       .catch ((error) => {
  //         window.alert(error.message);
  //       })
  // }
  // SetUserData (user:any) {
  //   const userRef : AngularFirestoreDocument<any> = this.afs.doc(
  //     `users/${user.uid}`
  //   );
  //   const userData : User = {
  //     uid : user.uid,
  //     email : user.email,
  //     displayName : user.displayName,
  //     photoURL : user.photoURL,
  //     emailVerified : user.emailVerified
    
  //   };
  //   return userRef.set(userData,{
  //     merge: true
  //   });

  // }

  
}
