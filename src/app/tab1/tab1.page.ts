import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {


/*   goToTab2() {
    this.router.navigateByUrl('/tabs/tab2');
  } */

  ok(){
    this.storage.set('valor', "aaaaa");
  }

  ok2(){
    this.storage.get('valor')
    .then((resposta : any) => {
      console.log(resposta);
    })
    .catch((erro : any)=>{
      console.log("Error: " + erro);
    })
  }

  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    this.storage = await this.storage.create();
  }

}
