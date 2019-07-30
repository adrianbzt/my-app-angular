import {Component, OnInit} from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = products;

  constructor() {
  }

  ngOnInit() {
  }

  setClasses(isOdd) {
    let cssClass = '  ';

    if (isOdd) {
      cssClass += ' odd ';
    }
    return cssClass;

  }

  setPriceClass( quantity) {

    let cssClass = ' stock ';

    if (quantity === 0) {
      cssClass = ' stock-zero ';
    }
    return cssClass;
  }

}
