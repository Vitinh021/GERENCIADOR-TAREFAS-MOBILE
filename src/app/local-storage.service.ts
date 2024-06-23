import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Tarefa } from './tab2/tab2.page';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  tarefas = new Array<Tarefa>

  constructor(public storage: Storage) {
    this.init();
  }

  async init() {
    this.storage = await this.storage.create();
  }

  setTaks(task:Tarefa){
    this.tarefas.push(task);
    this.storage.set('tarefas', this.tarefas);
  }

  getTaks(): Promise<Tarefa[]>{
    return new Promise<Tarefa[]>((resolve, reject) => {
      this.tarefas = []
      this.storage.get("tarefas")
      .then((resposta : any) => {
        resposta.forEach((task:any) => {
          let tarefa = new Tarefa(task.titulo, task.descricao, task.dtInicio, task.dtEntrega, task.isConcluido, task.categoria);
          this.tarefas.push(tarefa);
        });
        resolve(this.tarefas);
      })
      .catch((erro : any)=>{
        reject(erro);
      })
    });

  }
}
