import { environment, } from './../../environments/environment';
import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
// Capacitor Browser Plugin being used
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
    // Logs false if using dev env and true if using prod
    console.log(environment.production);
    // Console logs 'this is dev' if dev & 'this is prod' if prod
    console.log(environment.message);
    // Capacitor Browser Plugin start
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
// Capacitor Browser Plugin End
  }

}
