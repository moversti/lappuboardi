import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lappu } from './lappu';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class LappuService {

  constructor(private LSService: LocalstorageService) { }

  laput: Lappu[]

  getLaput(): Observable<Lappu[]> {
    // return of(LAPUT)
    return of(this.laput)
  }

  getSavedFromLS(): void {
    this.laput = this.LSService.getFromLS()
  }

  addLappu(lappu: Lappu) {
    this.laput.push(lappu)
    this.saveLS()
  }

  saveLS() {
    this.LSService.saveToLS(this.laput)
  }

  clear() {
    this.laput = []
    this.saveLS()
  }
}
