import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class UpdateModalComponent implements OnInit {

  dropdown: boolean = false;
  reqs: any[] = [
    {},{},{},{},{},{},{},{},{},{},{},{},
  ]
  checkboxes: boolean[] = Array(this.reqs.length).fill(false)
  select_all: boolean = false

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  toggleList() {
    this.dropdown = !this.dropdown
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
    const modalRef = this.modalService.open(success, { centered: true, backdrop: "static", windowClass: "success-modal-bg"});
  }

}
