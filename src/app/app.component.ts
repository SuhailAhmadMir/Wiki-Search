import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = []
  constructor(private wikipedia: WikipediaService) {

  }

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      if (response.query.search.length === 0) {

        alert("Enter a valid term")
      }
      this.pages = response.query.search
    })
  }


}
