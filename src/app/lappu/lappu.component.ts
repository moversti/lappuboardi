import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Lappu } from '../lappu';
import { LocalstorageService } from '../localstorage.service';

declare var jQuery: any

@Component({
  selector: 'app-lappu',
  templateUrl: './lappu.component.html',
  styleUrls: ['./lappu.component.css']
})

export class LappuComponent implements OnInit, AfterViewInit {

  @ViewChild('lappuRef', { static: true }) lappuRef: ElementRef

  @Input() lappu: Lappu
  @Output() dragged = new EventEmitter<boolean>()

  editLappu() {
    console.log('editing lappu ' + this.lappu.teksti)
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // console.log(this.lappuRef)
    jQuery(this.lappuRef.nativeElement).draggable({
      stack: '.lappu',
      stop: (event, ui) => {
        this.lappu.left = parseInt(ui.helper.css('left'), 10)
        this.lappu.top = parseInt(ui.helper.css('top'), 10)
        this.dragged.emit(true)
      }
    })
      .css('left', this.lappu.left)
      .css('top', this.lappu.top)
  }
}
