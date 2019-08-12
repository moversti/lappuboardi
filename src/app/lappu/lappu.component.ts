import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Lappu } from '../lappu';

declare var jQuery: JQueryStatic

@Component({
  selector: 'app-lappu',
  templateUrl: './lappu.component.html',
  styleUrls: ['./lappu.component.css']
})

export class LappuComponent implements OnInit, AfterViewInit {

  @ViewChild('lappuRef', { static: true }) lappuRef: ElementRef

  @Input() lappu: Lappu

  editLappu() {
    console.log('editing lappu ' + this.lappu.teksti)
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.lappuRef)
    jQuery(this.lappuRef.nativeElement).draggable()
  }
}
