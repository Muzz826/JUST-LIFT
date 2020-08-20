import { environment, } from './../../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = 'About This App';
  name = 'Ben Muzzy';

// variable link to GitHub repo
  github = 'https://github.com/Muzz826/JUST-LIFT';
  constructor() {
    // Logs false if using dev env and true if using prod
    console.log(environment.production);
    // Console logs 'this is dev' if dev & 'this is prod' if prod
    console.log(environment.message);
  }

}
