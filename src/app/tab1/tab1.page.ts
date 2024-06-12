import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';
import { Tarefa } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {


  tarefas = new Array;
  constructor(private storage: Storage) {
    this.init();
    this.lerArquivo();
  }

  async init(){
    this.storage = await this.storage.create();
  }

  visualizar(){
    //acao para visualizar
    //<ion-badge *ngIf="tarefa.getIsConcluido() = 8" color="primary">Média: {{aluno.getNota()}}</ion-badge>

  }

  editar(){
    //acao paraa editar
    //<ion-badge *ngIf="tarefa.getIsConcluido() = 8" color="primary">Média: {{aluno.getNota()}}</ion-badge>
  }

  apagar(i:any){

  }

  private lerArquivo(){
    this.storage.get("tarefas")
    .then((resposta : any) => {
      this.tarefas = resposta;
      console.log(resposta)
    })
    .catch((erro : any)=>{
      console.log("Error: " + erro);
    })
  }
}
