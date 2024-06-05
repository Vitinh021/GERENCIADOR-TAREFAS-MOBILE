import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  terefas = new Array<Tarefa>;
  titulo !: string;
  descricao!: string;
  dtInicio!: Date;
  dtEntrega!: Date;
  isConcluido!: Boolean;
  categoria!: String;
  private chaveTarefas = 'tarefas';

  constructor() {}

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
