import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Verifica o estado de autenticação ao inicializar
    const authStatus = localStorage.getItem('isAuthenticated');
    
    // Definimos que o usuário não está autenticado se não houver registro
    this.isAuthenticated = authStatus === 'true';
  }
}
