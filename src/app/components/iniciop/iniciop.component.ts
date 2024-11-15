import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, signInWithPopup, GoogleAuthProvider, User, user } from '@angular/fire/auth';
import { Firestore, doc, getDoc ,setDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-iniciop',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './iniciop.component.html',
  styleUrls: ['./iniciop.component.scss'],
})
export class IniciopComponent {
  private firestore = inject(Firestore);
  private auth = inject(Auth); // Inyecta Auth correctamente

  async googleSign() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this.auth, provider);
    const user = credential.user;

    if (user) {
      console.log(user);
      return user;
    }
    return null;
  }
}
