import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-latest',
	templateUrl: './latest.component.html',
	styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

	products: Array<any> = [];
	topCategories: Array<any> = [];

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
			}
		];

		this.topCategories = [
			{
				title: "Product Sample",
				price: "$690.99"
			},
			{
				title: "Product Sample",
				price: "$690.99"
			},
			{
				title: "Product Sample",
				price: "$690.99"
			},
			{
				title: "Product Sample",
				price: "$690.99"
			}
		];
	}

}
