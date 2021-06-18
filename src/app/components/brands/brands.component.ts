import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-brands',
	templateUrl: './brands.component.html',
	styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

	images: Array<any> = [];

	constructor() { }

	ngOnInit(): void {
		this.images = [
			"../../../assets/images/graphicriver.png",
			"../../../assets/images/themeforest.png",
			"../../../assets/images/codecanyon.png",
			"../../../assets/images/photodune.png",
			"../../../assets/images/videohive.png",
		]
	}

}
