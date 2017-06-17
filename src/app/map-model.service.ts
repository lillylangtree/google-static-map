import { Injectable } from '@angular/core';
import { Map } from './map-model';

@Injectable()
  
export class MapModelService {

	constructor() { }
	
	getNewMap(address: string,
		zoom: number,
		width: number,
		height: number,
		apikey: string): Map {
			return new Map(address,zoom,width,height,apikey);
		}
	
}
