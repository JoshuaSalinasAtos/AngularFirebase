import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, take } from 'rxjs';
import { User } from './models/user.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angularProyect';
  public users$!:Observable<Array<User>>;

  constructor(
    private readonly afs:AngularFirestore
  ){}

  ngOnInit(): void{
    this.users$ = this.afs.collection<User>('users').valueChanges().pipe(take(1));
  }
}
