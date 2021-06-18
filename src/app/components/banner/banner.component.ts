import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

	categories: Array<string> = [];

	constructor() { }

	ngOnInit(): void {
		this.categories = [
			"Brake Parts",
			"Wheels & Tires",
			"Furnitured & Decor",
			"Turbo System",
			"Lighting",
			"Accessories",
			"Body Parts",
			"Performance Filters",
			"Engine Parts"
		]
	}

}
