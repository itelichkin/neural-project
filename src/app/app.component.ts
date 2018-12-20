import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public header = 'Neural project';

  constructor(private title: Title) {
    title.setTitle(this.header);
  }

  public ngOnInit(): void {
    //
  }

}
