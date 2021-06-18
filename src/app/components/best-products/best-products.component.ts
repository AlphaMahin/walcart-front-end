import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-best-products',
	templateUrl: './best-products.component.html',
	styleUrls: ['./best-products.component.css']
})
export class BestProductsComponent implements OnInit {

	products: Array<any> = [];

	constructor() { }

	ngOnInit(): void {
		this.products = [
			{
				title: "CCTV Camera",
				price: {
					old: "$720.00",
					new: "$690.99"
				},
				onSale: true,
				isNew: false
			},
			{
				title: "N5000 Laptop",
				price: {
					old: "$720.00",
					new: null
				},
				onSale: false,
				isNew: false
			},
			{
				title: "Anker SoundCore Life Q20",
				price: {
					old: "$720.00",
					new: null
				},
				onSale: false,
				isNew: true
			},
			{
				title: "CURREN 8109 Watches",
				price: {
					old: "$720.00",
					new: "$690.99"
				},
				onSale: false,
				isNew: false
			},
			{
				title: "Fashionable Touch",
				price: {
					old: "$720.00",
					new: null
				},
				onSale: false,
				isNew: false
			},
			{
				title: "Samsung Galaxy Note IV",
				price: {
					old: "$720.00",
					new: null
				},
				onSale: false,
				isNew: false
			}
		];
	}

}
