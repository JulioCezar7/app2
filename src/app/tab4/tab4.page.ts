import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor() { }

  acessar() {
    this.abirUrl('https://calendly.com/juliocezarc871/consultas-medicas');
  }

  abirUrl(url: string){
    window.open('https://calendly.com/juliocezarc871/consultas-medicas', '_blank')?.focus;

  }
  ngOnInit() {
  }

}
