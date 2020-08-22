import { Page } from "../core/routes/Page";
import { $ } from "../core/dom";

export class DashboardsPage extends Page {
  getRoot(){
    return $.create('div', 'db').html(`
      Some page text here
    `)
  }
}