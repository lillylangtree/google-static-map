import { Component, OnInit } from '@angular/core';
// add as a service map object
export class Map {
	address: string;
	zoom: number;
	width: number;
	height: number;
	apikey: string;

	constructor(address: string,
	zoom: number,
	width: number,
	height: number,
	apikey: string) {
		this.address= address;
		this.zoom=zoom;
		this.width=width;
		this.height=height;
		this.apikey=apikey
	}
		
	mapDimensions(): string {
                  //      if (!this.width)
                  //          var width = 300;
                  //      else
                  //          width = this.width;
                  //      if (!this.height)
                  //          var height = 300;
                  //      else
                  //          height = this.height;
                        return this.width + 'x' + this.height;
                }
	zoomIn(){
			this.zoom++;
			};

    zoomOut(){
			this.zoom--;
			};			
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  constructor() {
	
	}

  ngOnInit() {
  }
	title = "About Us";
	map1= new Map( 'Trinity College Dublin, Dublin',
		14,
		400 ,
		400 ,
		"AIzaSyD83VjfQVoZZblHeYSG2LqtAunkSuS8uBE"
		);
	map2= new Map('51st Street, New York, New York',
		14,
		400,
		400,
		"AIzaSyD83VjfQVoZZblHeYSG2LqtAunkSuS8uBE"
		);
		
	Maps: Array<Map> = [this.map1,this.map2];	
			
	selectedMap: Map = this.Maps[0];
	
	onChange(newVal) {
		console.log(newVal);
		console.log(newVal.target.options.selectedIndex);
		this.selectedMap = this.Maps[newVal.target.options.selectedIndex];
	}
  
}

