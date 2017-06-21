import { Component, OnInit } from '@angular/core';
import { MapModelService } from '../map-model.service';
import { Map } from '../map-model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

	Maps: Array<Map> = [];
	selectedMap: Map;
	constructor(private mapService:MapModelService) {
	
		let map1: Map = this.mapService.getNewMap( 'Trinity College Dublin, Dublin',
			14,
			400 ,
			400 ,
			"AIzaSyD83VjfQVoZZblHeYSG2LqtAunkSuS8uBE"
			);
		this.Maps.push(map1);	
		let map2: Map = this.mapService.getNewMap('51st Street, New York, New York',
			14,
			400,
			400,
			"AIzaSyD83VjfQVoZZblHeYSG2LqtAunkSuS8uBE"
			);
	 
		this.Maps.push(map2);
		console.log(this.Maps);
		this.selectedMap = this.Maps[0];
		console.log(this.selectedMap);
	}

	ngOnInit() {
	}
	
	title = "About Us";
	
	onChange(newVal) {
	
		this.selectedMap = this.Maps[newVal.target.options.selectedIndex];
	}
  
}

