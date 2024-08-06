import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss']
})
export class FiltrosComplementaresComponent {
  @Output() realizarBusaca = new EventEmitter();
  constructor(private formBuscaSerivce: FormBuscaService) { }

  busca(){
    if(!this.formBuscaSerivce.formEstaValido){
      this.formBuscaSerivce.formBusca.markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      return
    }
    this.realizarBusaca.emit(this.formBuscaSerivce.obterDadosBusca());
  }
}
