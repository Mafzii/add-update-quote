import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddQuoteComponent } from '../add-quote/add-quote.component';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class MainPageComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  openUpdate() {
    const modalRef = this.modalService.open(UpdateModalComponent, { centered: true, size: 'lg', backdrop: "static", windowClass:"transparent-modal" });
  }

  openAdd() {
    const modalRef = this.modalService.open(AddQuoteComponent, { centered: true, size: 'xl', backdrop: "static" });
  }

  ngOnInit(): void {
  }

}
