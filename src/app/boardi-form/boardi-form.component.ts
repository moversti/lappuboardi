import { Component, OnInit } from '@angular/core';
import { Lappu } from '../lappu';
import { LappuService } from '../lappu.service';

@Component({
  selector: 'app-boardi-form',
  templateUrl: './boardi-form.component.html',
  styleUrls: ['./boardi-form.component.css']
})
export class BoardiFormComponent implements OnInit {

  model: Lappu = new Lappu()
  isOpen = false

  onSubmit() {
    // TODO: sendaa lappu servicelle yms.
    // console.log(this.model)
    this.lappuService.addLappu(this.model)
    this.model = new Lappu()
    this.isOpen = false
  }

  openForm() {
    this.isOpen = true
  }

  constructor(private lappuService: LappuService) { }

  ngOnInit() {
  }

}
