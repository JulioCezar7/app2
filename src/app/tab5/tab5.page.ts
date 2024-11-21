import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  cadastroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {}
  
  cadastro(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      tipoUsuario: ['', [Validators.required]],  // Campo de seleção Paciente/Servidor
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Cadastro realizado com sucesso:', this.cadastroForm.value);

      this.navCtrl.navigateRoot('/tabs/tab1');
    } else {
      console.log('Formulário inválido');
    }
  }
}
