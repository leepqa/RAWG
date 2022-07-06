import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game, GamesDTO } from '../interface/game.interface';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {

  private games: Game[] = []
  private URL = "https://api.rawg.io/api/platforms";

  constructor(private http: HttpClient) { }

  public getData(): Observable<Game[]> {
    return this.http.get<Game[]>(this.URL);
  }

  // public saveGame(): void {

  //   const game: Game = {
  //     games: {
  //       id: 3498,
  //       slug: '',
  //       name: '',
  //       added: 17647,
  //     },
  //     games_count: 457786,
  //     id: 4,
  //     image: null,
  //     image_background: '',
  //     name: '',
  //     slug: '',
  //     year_end: null,
  //     year_start: null
  //   }
  //   this.games = [game, ...this.games];
  // }

  public getGameData(): Observable<Game[]> {

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




