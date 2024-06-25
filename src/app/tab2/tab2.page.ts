import { LocalStorageService } from './../local-storage.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tarefas = new Array;
  edit : Boolean = false;
  titulo !: string;
  descricao!: string;
  tituloAntigo!: string;
  dtInicio!: Date;
  dtEntrega!: Date;
  isConcluido!: Boolean;
  categoria!: String;

  constructor(public localStorageService : LocalStorageService, private navCtrl: NavController, private route: ActivatedRoute) {}

  ionViewWillEnter() {
    this.route.paramMap.subscribe(params => {
      if (params.has('tarefa')) {
        const tarefaJson = JSON.parse(params.get('tarefa')+"");
        this.titulo = tarefaJson.titulo;
        this.tituloAntigo = tarefaJson.titulo;
        this.descricao = tarefaJson.descricao;
        this.dtInicio = tarefaJson.dtInicio;
        this.dtEntrega = tarefaJson.dtEntrega;
        this.isConcluido = tarefaJson.isConcluido;
        this.categoria = tarefaJson.categoria;
        this.edit = true;
      }
    });

    this.localStorageService.getTaks()
      .then((tarefas) => {
        this.tarefas = [];
        this.tarefas = tarefas;
      })
      .catch((erro) => {
        console.log("Error: " + erro);
      });
  }

  salvar(){
    if(this.validarCampos()){
      if(this.isConcluido === undefined){ this.isConcluido = false; }
      let tarefa = new Tarefa(this.titulo, this.descricao, this.dtInicio, this.dtEntrega, this.isConcluido, this.categoria);
      this.localStorageService.setTaks(tarefa);
      alert("Tarefa salva com sucesso!");
      this.navCtrl.navigateRoot('/tabs/tab1');
    }
  }

  async editar(){
    if(this.validarCampos()){
      if(this.isConcluido === undefined){ this.isConcluido = false; }

      await this.localStorageService.getTaks()
      .then((tarefas) => {
        this.localStorageService.claerTaks();
        var tarefa = new Tarefa(this.titulo, this.descricao, this.dtInicio, this.dtEntrega, this.isConcluido, this.categoria);
        this.localStorageService.setTaks(tarefa);

        tarefas.forEach(task => {
          if(task.getTitulo() != this.tituloAntigo){
            this.localStorageService.setTaks(task);
          }
        });
        alert("Tarefa atualizada com sucesso!");
        this.navCtrl.navigateRoot('/tabs/tab1');
      })
      .catch((erro) => {
        console.error(erro);
      });
    }
  }

  private validarCampos(){
    var repete = false;
    this.tarefas.forEach(task => {
      if(task.getTitulo() == this.titulo){
        repete = true;
      }
    });

    if (this.titulo === undefined){
      alert("Titulo vazio!");
      return false;
    }else if(repete){
      alert("Não é permitido duas tarefas com mesmo titulo")
      return false;
    }else if(this.descricao === undefined){
      alert("Descrição vazia!");
      return false;
    }else if(this.dtInicio === undefined){
      alert("Data de inicio invalida!");
      return false;
    }else if(this.dtEntrega === undefined){
      alert("Data de entrega invalida!");
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
  private dtInicio: Date | null;
  private dtEntrega: Date | null;
  private isConcluido: Boolean;
  private categoria: String;

  constructor( tit: string = "", desc: string = "", dtIni : Date | null = null, dtEnt :Date | null = null, isCon: Boolean = false, cate: String = "") {
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

    public getDtInicio(): Date | null {
      return this.dtInicio;
    }

    public getDtEntrega(): Date | null {
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
