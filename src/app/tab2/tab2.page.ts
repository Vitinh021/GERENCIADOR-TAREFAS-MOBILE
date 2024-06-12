import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tarefas = new Array<Tarefa>;
  titulo !: string;
  descricao!: string;
  dtInicio!: Date;
  dtEntrega!: Date;
  isConcluido!: Boolean;
  categoria!: String;
  private chaveTarefas = 'tarefas';

  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    this.storage = await this.storage.create();
  }

  salvar(){
    if(this.validarCampos()){
      let tarefa = new Tarefa(this.titulo, this.descricao, this.dtInicio, this.dtEntrega, this.isConcluido, this.categoria);
      this.tarefas.push(tarefa);
      this.storage.set(this.chaveTarefas, this.tarefas);
      //redirecionar pra lista de tarefas aqui
    }
  }

  private validarCampos(){
    if (this.titulo === undefined){
      return false;
    }else if(this.descricao === undefined){
      return false;
    }else if(this.dtInicio === undefined){
      return false;
    }else if(this.dtEntrega === undefined){
      return false;
    }else if(this.isConcluido === undefined){
      return false;
    }else if(this.categoria === undefined){
      return false;
    }else{
      return true;
    }
  }

}


export class Tarefa {

  private titulo: string;
  private descricao: string;
  private dtInicio: Date;
  private dtEntrega: Date;
  private isConcluido: Boolean;
  private categoria: String;

  constructor(tit: string, desc: string, dtIni :Date, dtEnt :Date, isCon: Boolean, cate: String) {
    this.titulo = tit;
    this.descricao = desc;
    this.dtInicio = dtIni;
    this.dtEntrega = dtEnt;
    this.isConcluido = isCon;
    this.categoria = cate;
  }

    // Getters
    public getTitulo(): string {
      return this.titulo;
    }

    public getDescricao(): string {
      return this.descricao;
    }

    public getDtInicio(): Date {
      return this.dtInicio;
    }

    public getDtEntrega(): Date {
      return this.dtEntrega;
    }

    public getIsConcluido(): Boolean {
      return this.isConcluido;
    }

    public getCategoria(): String {
      return this.categoria;
    }

    // Setters
    public setTitulo(titulo: string): void {
      this.titulo = titulo;
    }

    public setDescricao(descricao: string): void {
      this.descricao = descricao;
    }

    public setDtInicio(dtInicio: Date): void {
      this.dtInicio = dtInicio;
    }

    public setDtEntrega(dtEntrega: Date): void {
      this.dtEntrega = dtEntrega;
    }

    public setIsConcluido(isConcluido: Boolean): void {
      this.isConcluido = isConcluido;
    }

    public setCategoria(categoria: String): void {
      this.categoria = categoria;
    }


}
