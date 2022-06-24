import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateModalComponent } from '../update-modal/update-modal.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  openUpdate() {
    const modalRef = this.modalService.open(UpdateModalComponent, { centered: true, size: 'lg' });
  }

  ngOnInit(): void {
  }

}
