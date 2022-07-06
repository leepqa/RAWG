import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../interface/game.interface';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public games$: Observable<Game[]> | undefined;


  constructor(private dataService: DataService, private router: Router,) { }

  ngOnInit(): void {
    this.games$ = this.dataService.getGameData();
  }

  public openDescription(id: Number): void {
    this.router.navigate(['description', id]);
  }

}



