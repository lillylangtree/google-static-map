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
		
//		getMap(address: string,zoom: number,width: number, height: number, apikey: string ): Map {
//			return new Map(address,zoom,width,height,apikey); 
//		}
			
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