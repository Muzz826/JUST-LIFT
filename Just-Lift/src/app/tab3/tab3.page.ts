import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title = 'Support';

  githubSupport = 'https://github.com/Muzz826/JUST-LIFT/issues';

  constructor() {
    Browser.addListener('browserPageLoaded', () =>{
      console.log('browserPageLoaded event called');
    });
    Browser.addListener('browserFinished', () =>{
      console.log('browserFinished event called');
    });
    Browser.prefetch({
      urls:['https://github.com/Muzz826/JUST-LIFT/issues']
    });
  }

  async openPage(){
    await Browser.open({toolbarColor: 'red', url: 'https://github.com/Muzz826/JUST-LIFT/issues'});
  }

}
