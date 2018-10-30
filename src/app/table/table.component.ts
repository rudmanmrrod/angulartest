import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	content_table: any = {
  		codigo: '0001',
	    name: 'producto1',
	    precio_minimo: 500,
	    precio_cliente: 600
  };
	lista: any = [];

  constructor() {
  	this.lista.push(this.content_table)
  	this.content_table = {
  		codigo: '0102',
	    name: 'producto2',
	    precio_minimo: 500,
	    precio_cliente: 5500
  	}
  	this.lista.push(this.content_table)
  	console.log(this.lista)
  }

  ngOnInit() {
  }

}
