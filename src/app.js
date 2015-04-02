import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';
import {EventAggregator} from 'aurelia-event-aggregator';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','demo'],  moduleId: './demo',      nav: true, title:'Demo' }
      ]);
    });
  }
}
