import { Injectable } from '@angular/core';
import { LAPUT } from './mock-laput'
import { Observable, of } from 'rxjs';
import { Lappu } from './lappu';

@Injectable({
  providedIn: 'root'
})
export class LappuService {

  getLaput(): Observable<Lappu[]> {
    return of(LAPUT)
  }

  constructor() { }
}
