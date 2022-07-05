import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game, GamesDTO } from '../interface/game.interface';
import { map, Observable, of, tap } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class DataService {

  private readonly URL = "https://api.rawg.io/api/platforms?key=YOUR_API_KEY";
  private games: Game[] = [];


  constructor(private http: HttpClient) { }

  public saveGame(): void {

    const game: Game = {}
    this.games = [game, ...this.games]
  }

  public getData(): Observable<Game[]> {

    if (this.games.length) {
      return of(this.games);
    }

    return this.http.get<GamesDTO>(this.URL).pipe(
      map(data => data.results),
      tap(games => this.games = games)
    );
  }
}
