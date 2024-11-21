import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  doarAlimentos() {
    this.abrirUrl('https://www.google.com/maps/search/+banco+de+Alimentos');
  }

  doarRoupa() {
    this.abrirUrl('https://www.google.com/maps/search/+Banco+de+Roupas');
  }

  doarSangue(){
    this.abrirUrl('https://www.google.com/maps/search/+doar+de+Sangue');
  }


  abrirUrl(url: string){
    window.open(url, '_blank')?.focus();
  }

}
