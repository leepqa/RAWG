import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/interface/game.interface';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {

  @Input() public game: Game | undefined;
  @Output() public openDescription = new EventEmitter<Number>();


  constructor() { }

  ngOnInit(): void {

  }

  public openUserDescription(): void {
    this.openDescription.emit(this.game?.games?.id)
  }
}
