import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game, GamesDTO } from '../interface/game.interface';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private URL = "https://api.rawg.io/api/platforms";

  constructor(private http: HttpClient) { }

  getData(): Observable<Game[]> {

    return this.http.get<Game[]>(this.URL)

  }
}
