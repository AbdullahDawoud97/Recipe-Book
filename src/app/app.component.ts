import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAJQXNSU1pOxJVZxFuLFCd5yJLOmkhKrDo",
      authDomain: "ng-recipe-book-783e8.firebaseapp.com"
    });
  }
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
