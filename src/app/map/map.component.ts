import { Component, OnInit } from '@angular/core';
import { MapModelService } from '../map-model.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

	constructor(private mapService:MapModelService) {
		
	}

	ngOnInit() {
	}
	
	title = "About Us";
	map1= this.mapService.getNewMap( 'Trinity College Dublin, Dublin',
		14,
		400 ,
		400 ,
		"AIzaSyD83VjfQVoZZblHeYSG2LqtAunkSuS8uBE"
		);
	map2= this.mapService.getNewMap('51st Street, New York, New York',
		14,
		400,
		400,
		"AIzaSyD83VjfQVoZZblHeYSG2LqtAunkSuS8uBE"
		);
		
	Maps = [this.map1,this.map2];	
			
	selectedMap = this.Maps[0];
	
	onChange(newVal) {
		console.log(newVal);
		console.log(newVal.target.options.selectedIndex);
		this.selectedMap = this.Maps[newVal.target.options.selectedIndex];
	}
  
}

