import { Injectable } from '@angular/core';
import { Lappu } from './lappu';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getFromLS(): Lappu[] {
    const stored = localStorage.getItem('laput')
    if (stored) {
      return JSON.parse(stored)
    } else {
      return []
    }
  }

  saveToLS(laput: Lappu[]): void {
    localStorage.setItem('laput', JSON.stringify(laput))
  }

}
