import { LocalStorageService } from './../local-storage.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  tarefas = new Array;
  categoriaSelecionada: string = "0";

  constructor(public localStorageService:LocalStorageService, private navCtrl: NavController) {}

  /*ngOnInit(): void {
    this.storage.get("tarefas")
    .then((resposta : any) => {
      this.tarefas = resposta;
    })
    .catch((erro : any)=>{
      console.log("Error: " + erro);
    })
  }*/

  ionViewWillEnter() {
    //this.tarefas = this.localStorageService.getTaks();
    //EXIBIR CARREGANDO
    this.localStorageService.getTaks()
    .then((tarefas) => {
      this.tarefas = tarefas;
      //PARAR CARREGANDO
    })
    .catch((erro) => {

    });
    console.log('terminei')
    /*this.storage.get("tarefas")
    .then((resposta : any) => {
      this.tarefas = resposta;
    })
    .catch((erro : any)=>{
      console.log("Error: " + erro);
    })*/
  }

  editar() {
    //acao paraa editar
    //<ion-badge *ngIf="tarefa.getIsConcluido() = 8" color="primary">Média: {{aluno.getNota()}}</ion-badge>
  }

  apagar(i: any) {

    //this.tarefas.splice(i, 1);
    //this.storage.set('tarefas', this.tarefas);
  }

  selecionarCategoria(evento: any) {
    /*this.tarefas = []
    this.storage.get("tarefas")
    .then((resposta : any) => {
      if(evento.detail.value == 0){
        resposta.forEach((tarefa:any) => {
          this.tarefas.push(tarefa);
        });
      }else{
        resposta.forEach((tarefa:any) => {
          if(tarefa.categoria == evento.detail.value){
            this.tarefas.push(tarefa);
          }
        });
      }
    })
    .catch((erro : any)=>{
      console.log("Error: " + erro);
    })*/
  }

  selecionarFiltro(evento: any) {
    /*this.tarefas = []
    this.storage.get("tarefas")
    .then((resposta : any) => {
      resposta.forEach((tarefa:any) => {
        console.log(tarefa.isConcluido);
        console.log(evento.detail.value);
        if(tarefa.isConcluido.toString() == evento.detail.value){
          this.tarefas.push(tarefa);
        }
      });
    })
    .catch((erro : any)=>{
      console.log("Error: " + erro);
    })*/
  }

}
