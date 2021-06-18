import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-banner-promo',
	templateUrl: './banner-promo.component.html',
	styleUrls: ['./banner-promo.component.css']
})
export class BannerPromoComponent implements OnInit {

	promotions: Array<any> = [];

	constructor() { }

	ngOnInit(): void {
		this.promotions = [
			{
				"title": "Protective Sleeves",
				"subTitle": null,
				"desc": "It is a long established fact that a reader will be distracted",
			},
			{
				"title": "Nutrillet Blender",
				"subTitle": "Combo.",
				"desc": "It is a long established fact that a reader will be ...",
			}
		];
	}

}
