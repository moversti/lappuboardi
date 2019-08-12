import { Component, OnInit } from '@angular/core';
import { Lappu } from '../lappu';
import { LappuService } from '../lappu.service';

@Component({
  selector: 'app-boardi',
  templateUrl: './boardi.component.html',
  styleUrls: ['./boardi.component.css']
})
export class BoardiComponent implements OnInit {

  laput: Lappu[]

  getLaput(): void {
    this.lappuService.getLaput().subscribe(laput => this.laput = laput)
  }

  constructor(private lappuService: LappuService) { }

  ngOnInit() {
    // console.log(this.lappuService)
    this.lappuService.getSavedFromLS()
    this.getLaput()
  }

  saveLS() {
    console.log('got event')
    this.lappuService.saveLS()
  }

  clearLaput() {
    this.laput = []
    this.lappuService.clear()
  }

}
