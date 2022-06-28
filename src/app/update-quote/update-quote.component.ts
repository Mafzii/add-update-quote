import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-quote',
  templateUrl: './update-quote.component.html',
  styleUrls: ['./update-quote.component.css']
})
export class UpdateQuoteComponent implements OnInit {

  reqs: any[] = [
    {},{},{},{},{},{},{},{},{},{},{},{},
  ]
  checkboxes: boolean[] = Array(this.reqs.length).fill(false)
  select_all: boolean = false

  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  selectAll() {
    this.select_all = !this.select_all;
    for (let i=0; i < this.reqs.length; i++) {
      this.checkboxes[i] = this.select_all;
      console.log(this.checkboxes[i])
    }
    console.log("select all clicked ", this.select_all)
  }

  toggler(index: number) {
    this.select_all = false;
    this.checkboxes[index] = !this.checkboxes[index]
    console.log(`toggle ${index} clicked`, this.checkboxes[index])
  }

  openSuccess(success: any) {
    const modalRef = this.modalService.open(success, { centered: true, backdrop: "static", backdropClass: "success-window"});
  }

}
