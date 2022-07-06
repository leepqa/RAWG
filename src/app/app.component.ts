import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe();
  }
}




// api key
// 91d8740264754797974b146729857469
