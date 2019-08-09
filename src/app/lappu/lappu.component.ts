import { Component, OnInit, Input } from '@angular/core';
import { Lappu } from '../lappu';

@Component({
  selector: 'app-lappu',
  templateUrl: './lappu.component.html',
  styleUrls: ['./lappu.component.css']
})
export class LappuComponent implements OnInit {

  @Input() lappu: Lappu

  editLappu() {
    console.log('editing lappu ' + this.lappu.teksti)
  }

  constructor() { }

  ngOnInit() {
  }

}
