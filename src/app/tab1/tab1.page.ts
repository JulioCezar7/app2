import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  email: string = '';         // Armazena o email do usuário
  password: string = '';      // Armazena a senha do usuário
  isAuthenticated: boolean = false;  // Controla se o usuário está logado ou não

  constructor(private navCtrl: NavController) {}  // Injetar NavController

  // Função chamada ao clicar no botão de login
  onLogin() {
    if (this.email === 'julio@gmail.com' && this.password === '123') {
      this.isAuthenticated = true;
      console.log('Login bem-sucedido!');
      

      // Redireciona para a aba 2
      this.navCtrl.navigateRoot('/tabs/tab2');
    } else {
      console.log('Credenciais inválidas');
      alert("Credenciais inválidas");
    }
  }
  cadastro() {
    this.navCtrl.navigateRoot('/tabs/tab5');
  }
  


}
