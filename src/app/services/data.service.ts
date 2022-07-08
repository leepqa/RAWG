import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game, GamesDTO } from '../interface/game.interface';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  private games: Game[] = []
  private games$: any[] = [];
  private URL = "https://api.rawg.io/api/";

  constructor(private http: HttpClient) { }

  public getData(): Observable<Game[]> {
    return this.http.get<Game[]>(this.URL);
  }

  public getGames(): any {
    if (this.games$.length) {
      return of(this.games$);
    }

    return this.http.get<any>(this.URL + 'games').pipe(
      map(data => data.results),
      tap(games => this.games$ = games)
    );
  }

  public getPlatformsData(): Observable<Game[]> {
    if (this.games.length) {
      return of(this.games);
    }

    return this.http.get<GamesDTO>(this.URL).pipe(
      map(data => data.results),
      tap(games => this.games = games)
    );
  }

  public getGameById(id: Number): Observable<Game> {
    const game = this.games?.find(games => games.id === id) as Game;
    return of(game);
  }
}




