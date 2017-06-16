import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

// RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { NewsApiGlobal } from '../models/NewsApiGlobal'

// Models
// Importez vos models ici

@Injectable()
export class NewsAPIService {

    private baseUrl: string = 'https://newsapi.org/v1/';
    private apiKey: string = 'fc145141533f4715831919b1c13a86fe';
    
    private source : string = 'the-next-web';
    constructor(private http: Http) { }

    public getObjects(): Promise<NewsApiGlobal> {
		const url = `${this.baseUrl}articles?source=${this.source}&sortBy=latest&apiKey=${this.apiKey}`;
     
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as NewsApiGlobal )
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}

