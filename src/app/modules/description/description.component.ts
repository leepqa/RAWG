import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Game } from 'src/app/interface/game.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public game$: Observable<Game> | undefined;

  constructor(private dataService: DataService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.game$ = this.activatedRoute.params
      .pipe(switchMap(params => this.dataService.getGameById(params['id'])))

  }
  public backToHome(): void {
    this.route.navigate(['/home'])
  }

}

