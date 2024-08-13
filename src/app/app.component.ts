import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../shared/models/user';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = new User('', '', '');
  user_name = new FormControl('');
  user_email = new FormControl('');
  user_bio = new FormControl('');
  isShow = false;
  counter = 0;
  handleClick() {
    window.alert('Welcome, ' + this.user_name.value);
  }
  handleReset() {
    this.user_name.setValue('');
    this.user_email.setValue('');
    this.user_bio.setValue('');
    this.isShow = false;
  }
  isResetDisabled() : boolean {
    return (
      !this.user_name.value && !this.user_email.value && !this.user_bio.value
    );
  }
  handleSave(){
    console.log(
      this.user_name.value,
      this.user_email.value,
      this.user_bio.value
    );
    this.counter++;
  }
}
