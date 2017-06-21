import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response }          from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieListService {

  movies = [];
  constructor(private http: Http) { }
  
  getHttpList(url: string) {
		console.log(url);
	return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
 
  }
  
  getList() {
	 
	this.movies =  
	[{"vote_count":1366,"id":297762,"video":false,"vote_average":7,"title":"Wonder Woman","popularity":118.985913,"poster_path":"\/gfJGlDaHuWimErCr5Ql0I8x9QSy.jpg","original_language":"en","original_title":"Wonder Woman","genre_ids":[28,12,14,878],"backdrop_path":"\/hA5oCgvgCxj5MEWcLpjXXTwEANF.jpg","adult":false,"overview":"An Amazon princess comes to the world of Man to become the greatest of the female superheroes.","release_date":"2017-05-30"},
	{"vote_count":3323,"id":321612,"video":false,"vote_average":6.8,"title":"Beauty and the Beast","popularity":74.169929,"poster_path":"\/tWqifoYuwLETmmasnGHO7xBjEtt.jpg","original_language":"en","original_title":"Beauty and the Beast","genre_ids":[10402,10751,14,10749],"backdrop_path":"\/7QshG75xKCmClghQDU1ta2BTaja.jpg","adult":false,"overview":"A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.","release_date":"2017-03-16"},
	{"vote_count":4002,"id":263115,"video":false,"vote_average":7.5,"title":"Logan","popularity":69.1358,"poster_path":"\/9EXnebqbb7dOhONLPV9Tg2oh2KD.jpg","original_language":"en","original_title":"Logan","genre_ids":[28,18,878],"backdrop_path":"\/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg","adult":false,"overview":"In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.","release_date":"2017-02-28"},
	{"vote_count":403,"id":282035,"video":false,"vote_average":5.2,"title":"The Mummy","popularity":57.445357,"poster_path":"\/zxkY8byBnCsXodEYpK8tmwEGXBI.jpg","original_language":"en","original_title":"The Mummy","genre_ids":[28,12,14,27,53],"backdrop_path":"\/qedJJ2z9oBYKxxO4Pp8qAkfgPst.jpg","adult":false,"overview":"Though safely entombed in a crypt deep beneath the unforgiving desert, an ancient queen whose destiny was unjustly taken from her is awakened in our current day, bringing with her malevolence grown over millennia, and terrors that defy human comprehension.","release_date":"2017-06-06"},
	{"vote_count":1214,"id":166426,"video":false,"vote_average":6.6,"title":"Pirates of the Caribbean: Dead Men Tell No Tales","popularity":54.173387,"poster_path":"\/xbpSDU3p7YUGlu9Mr6Egg2Vweto.jpg","original_language":"en","original_title":"Pirates of the Caribbean: Dead Men Tell No Tales","genre_ids":[28,12,35,14],"backdrop_path":"\/tZvdyLP2F6x2TTuh292ceH87qZT.jpg","adult":false,"overview":"Thrust into an all-new adventure, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle. Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, but to find it, he must forge an uneasy alliance with a brilliant and beautiful astronomer and a headstrong young man in the British navy.","release_date":"2017-05-23"},
	{"vote_count":1782,"id":324552,"video":false,"vote_average":6.5,"title":"John Wick: Chapter 2","popularity":38.247307,"poster_path":"\/9THBirTgNIYaHWb3u4KX9EU7DDQ.jpg","original_language":"en","original_title":"John Wick: Chapter 2","genre_ids":[53,28,80],"backdrop_path":"\/uhgINoAy9mM3gG1kBExgZfFlR47.jpg","adult":false,"overview":"John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.","release_date":"2017-02-08"},
	{"vote_count":4408,"id":245891,"video":false,"vote_average":6.9,"title":"John Wick","popularity":34.593107,"poster_path":"\/5vHssUeVe25bMrof1HyaPyWgaP.jpg","original_language":"en","original_title":"John Wick","genre_ids":[28,53],"backdrop_path":"\/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg","adult":false,"overview":"Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.","release_date":"2014-10-22"},
	{"vote_count":5807,"id":22,"video":false,"vote_average":7.4,"title":"Pirates of the Caribbean: The Curse of the Black Pearl","popularity":32.357535,"poster_path":"\/tkt9xR1kNX5R9rCebASKck44si2.jpg","original_language":"en","original_title":"Pirates of the Caribbean: The Curse of the Black Pearl","genre_ids":[12,14,28],"backdrop_path":"\/fQZQYW9Hrg8TpYZH4KgbRptkcCN.jpg","adult":false,"overview":"Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her. But their seafaring mission is hardly simple.","release_date":"2003-07-09"},
	{"vote_count":7953,"id":118340,"video":false,"vote_average":7.9,"title":"Guardians of the Galaxy","popularity":32.34509,"poster_path":"\/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg","original_language":"en","original_title":"Guardians of the Galaxy","genre_ids":[28,878,12],"backdrop_path":"\/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg","adult":false,"overview":"Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.","release_date":"2014-07-30"},
	{"vote_count":935,"id":395992,"video":false,"vote_average":6.1,"title":"Life","popularity":32.303964,"poster_path":"\/h2mhfbEBGABSHo2vXG1ECMKAJa7.jpg","original_language":"en","original_title":"Life","genre_ids":[27,878,53],"backdrop_path":"\/hES8wGmkxHa54z7hqUMpw5TIs09.jpg","adult":false,"overview":"The six-member crew of the International Space Station is tasked with studying a sample from Mars that may be the first proof of extra-terrestrial life, which proves more intelligent than ever expected.","release_date":"2017-03-23"},
	{"vote_count":9083,"id":157336,"video":false,"vote_average":8,"title":"Interstellar","popularity":30.337702,"poster_path":"\/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg","original_language":"en","original_title":"Interstellar","genre_ids":[12,18,878],"backdrop_path":"\/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg","adult":false,"overview":"Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.","release_date":"2014-11-05"},
	{"vote_count":2441,"id":283995,"video":false,"vote_average":7.6,"title":"Guardians of the Galaxy Vol. 2","popularity":29.902018,"poster_path":"\/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg","original_language":"en","original_title":"Guardians of the Galaxy Vol. 2","genre_ids":[28,12,35,878],"backdrop_path":"\/aJn9XeesqsrSLKcHfHP4u5985hn.jpg","adult":false,"overview":"The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.","release_date":"2017-04-19"},
	{"vote_count":2,"id":221356,"video":false,"vote_average":0,"title":"Jumper 2","popularity":29.546575,"poster_path":"\/h3ne6V2E5pJqjPIlRCTITlnMhEY.jpg","original_language":"en","original_title":"Jumper 2","genre_ids":[],"backdrop_path":"\/fbtUZHhhdDYaqESQPC21lnMhVln.jpg","adult":false,"overview":"Jumpers can reach other planets and travel in time, as well as their capacity for espionage.","release_date":"2017-12-30"},
	{"vote_count":7491,"id":135397,"video":false,"vote_average":6.5,"title":"Jurassic World","popularity":26.673085,"poster_path":"\/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg","original_language":"en","original_title":"Jurassic World","genre_ids":[28,12,878,53],"backdrop_path":"\/dkMD5qlogeRMiEixC4YNPUvax2T.jpg","adult":false,"overview":"Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.","release_date":"2015-06-09"},
	{"vote_count":78,"id":335988,"video":false,"vote_average":5.8,"title":"Transformers: The Last Knight","popularity":25.864387,"poster_path":"\/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg","original_language":"en","original_title":"Transformers: The Last Knight","genre_ids":[28,878,53,12],"backdrop_path":"\/xz1H8XdcnAmXRkV02XIbOVn6mGU.jpg","adult":false,"overview":"In the absence of Optimus Prime, a battle for survival has commenced between the human race and the Transformers. Cade Yeager forms an alliance with Bumblebee, an English lord, and an Oxford professor to learn why the Transformers keep coming back to Earth.","release_date":"2017-06-21"},
	{"vote_count":2276,"id":283366,"video":false,"vote_average":6.5,"title":"Miss Peregrine's Home for Peculiar Children","popularity":25.717062,"poster_path":"\/AvekzUdI8HZnImdQulmTTmAZXrC.jpg","original_language":"en","original_title":"Miss Peregrine's Home for Peculiar Children","genre_ids":[18,14,12],"backdrop_path":"\/9BVHn78oQcFCRd4M3u3NT7OrhTk.jpg","adult":false,"overview":"A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.","release_date":"2016-09-28"},
	{"vote_count":853,"id":324849,"video":false,"vote_average":7.1,"title":"The Lego Batman Movie","popularity":23.817982,"poster_path":"\/snGwr2gag4Fcgx2OGmH9otl6ofW.jpg","original_language":"en","original_title":"The Lego Batman Movie","genre_ids":[14,28,16,35,10751],"backdrop_path":"\/gbO4tWvMC0oLbNvHP9Zth3eUeAA.jpg","adult":false,"overview":"In the irreverent spirit of fun that made “The Lego Movie” a worldwide phenomenon, the self-described leading man of that ensemble—Lego Batman—stars in his own big-screen adventure. But there are big changes brewing in Gotham, and if he wants to save the city from The Joker’s hostile takeover, Batman may have to drop the lone vigilante thing, try to work with others and maybe, just maybe, learn to lighten up.","release_date":"2017-02-08"},
	{"vote_count":2460,"id":337339,"video":false,"vote_average":6.8,"title":"The Fate of the Furious","popularity":22.66024,"poster_path":"\/iNpz2DgTsTMPaDRZq2tnbqjL2vF.jpg","original_language":"en","original_title":"The Fate of the Furious","genre_ids":[28,80,53],"backdrop_path":"\/jzdnhRhG0dsuYorwvSqPqqnM1cV.jpg","adult":false,"overview":"When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.","release_date":"2017-04-12"},
	{"vote_count":8173,"id":76341,"video":false,"vote_average":7.2,"title":"Mad Max: Fury Road","popularity":22.406307,"poster_path":"\/kqjL17yufvn9OVLyXYpvtyrFfak.jpg","original_language":"en","original_title":"Mad Max: Fury Road","genre_ids":[28,12,878,53],"backdrop_path":"\/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg","adult":false,"overview":"An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.","release_date":"2015-05-13"},
	{"vote_count":1131,"id":126889,"video":false,"vote_average":5.9,"title":"Alien: Covenant","popularity":22.116215,"poster_path":"\/ewVHnq4lUiovxBCu64qxq5bT2lu.jpg","original_language":"en","original_title":"Alien: Covenant","genre_ids":[27,878,53],"backdrop_path":"\/kMU8trT43p5LFoJ4plIySMOsZ1T.jpg","adult":false,"overview":"Bound for a remote planet on the far side of the galaxy, the crew of the colony ship Covenant discovers what they think is an uncharted paradise, but is actually a dark, dangerous world — whose sole inhabitant is the “synthetic” David, survivor of the doomed Prometheus expedition.","release_date":"2017-05-09"}]
   
	return this.movies 
	}
	private extractData(res: Response) {
		let body = res.json();
		console.log(body);
		return body || { };
	}
 
	private handleError (error: Response | any) {
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
		  const body = error.json() || '';
		  const err = body.error || JSON.stringify(body);
		  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
		  errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Promise.reject(errMsg);
	}
}


