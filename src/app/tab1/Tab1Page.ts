import { Tarefa } from './../tab2/tab2.page';
import { LocalStorageService } from './../local-storage.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  tarefas = new Array;
  categoriaSelecionada: string = "0";
  situacaoSelecionada: string = "0";

  constructor(public localStorageService:LocalStorageService, private navCtrl: NavController, private router: Router) {}

  ionViewWillEnter() {
    this.localStorageService.getTaks()
    .then((tarefas) => {
      this.tarefas = [];
      this.tarefas = tarefas;
    })
    .catch((erro) => {

    });
  }

  editar(tarefa : Tarefa) {
    this.router.navigate(['/tabs/tab2', { tarefa: JSON.stringify(tarefa) }]);
  }

  apagar(titulo: string) {
    this.localStorageService.claerTaks();
    this.tarefas.forEach(task => {
      if(task.getTitulo() != titulo){
        this.localStorageService.setTaks(task);
      }
    });

    alert("Tarefa excluida com sucesso!");
    window.location.reload();
  }

  filtrarCategoria(evento: any) {
    this.tarefas = []
    this.localStorageService.getTaks()
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
    })
  }

  filtrarConcluido(evento: any) {
    this.tarefas = []
    this.localStorageService.getTaks()
    .then((resposta : any) => {
      resposta.forEach((tarefa:any) => {
        if(evento.detail.value == 0){
          this.tarefas.push(tarefa);
        }else{
          if(tarefa.isConcluido.toString() == evento.detail.value){
            this.tarefas.push(tarefa);
          }
        }
      });
    })
    .catch((erro : any)=>{
      console.log("Error: " + erro);
    })
  }

}
