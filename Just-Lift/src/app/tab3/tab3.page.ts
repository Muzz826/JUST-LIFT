import { Component } from '@angular/core';
// Plugin being loaded is the "Browser" plugin
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
// placeholder for tab3 title
  title = 'Support';
// placeholder for GitHub Issues page URL
  githubSupport = 'https://github.com/Muzz826/JUST-LIFT/issues';

  constructor() {
    // Listens to see if the browser has opened
    Browser.addListener('browserPageLoaded', () => {
      console.log('browserPageLoaded event called');
    });
    // listens to see if browser has closed.
    Browser.addListener('browserFinished', () => {
      console.log('browserFinished event called');
    });
    // Default page browser is set to load
    Browser.prefetch({
      urls: ['https://github.com/Muzz826/JUST-LIFT/issues']
    });
  }

  async openPage(){
    await Browser.open({toolbarColor: 'red', url: 'https://github.com/Muzz826/JUST-LIFT/issues'});
  }

}
