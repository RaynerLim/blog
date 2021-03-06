import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {TodoProvider} from "../../providers/todo/todo";

@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {

  constructor(private readonly navCtrl: NavController,
              private readonly todoProvider: TodoProvider) {
  }

  showTodos(password: string) {
    this.todoProvider.setPassword(password).then(() => this.navCtrl.setRoot(HomePage));
  }

}
