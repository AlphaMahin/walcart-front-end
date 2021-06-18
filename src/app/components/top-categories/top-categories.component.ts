import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-top-categories',
	templateUrl: './top-categories.component.html',
	styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent implements OnInit {

	topCategories: Array<any> = [];

	constructor() { }

	ngOnInit(): void {
		this.topCategories = [
			{
				title: "Electronics",
				tags: [
					"Computers",
					"Laptop",
					"Macbook",
					"Accessories",
					"More...",
				]
			},
			{
				title: "Tables & Mobiles",
				tags: [
					"Computers",
					"Laptop",
					"Macbook",
					"Accessories",
					"More...",
				]
			},
			{
				title: "TV & Audio",
				tags: [
					"Computers",
					"Laptop",
					"Macbook",
					"Accessories",
					"More...",
				]
			},
			{
				title: "PC & Laptop",
				tags: [
					"Computers",
					"Laptop",
					"Macbook",
					"Accessories",
					"More...",
				]
			},
			{
				title: "Accessories",
				tags: [
					"Computers",
					"Laptop",
					"Macbook",
					"Accessories",
					"More...",
				]
			},
			{
				title: "Games & Consoles",
				tags: [
					"Computers",
					"Laptop",
					"Macbook",
					"Accessories",
					"More...",
				]
			}
		];
	}

}
