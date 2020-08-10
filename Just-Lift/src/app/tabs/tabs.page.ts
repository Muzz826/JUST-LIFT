import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tab1 = 'Workout';
  tab2 = 'About';
  tab3 = 'Support';

  constructor() {}

}
