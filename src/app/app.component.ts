import { Component } from '@angular/core';
import { ProductService } from './shared/services/product.service';
//this is master.
/*
.navbar-default {
    background-color: #4ea6bc !important;
    padding: 15px;
    border-radius: 0 !important;
}
 */
@Component({
  selector: 'body',
  template:`<router-outlet></router-outlet>`
})
export class AppComponent {

  constructor() {


  }


}
