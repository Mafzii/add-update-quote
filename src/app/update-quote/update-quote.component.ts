import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-quote',
  templateUrl: './update-quote.component.html',
  styleUrls: ['./update-quote.component.css']
})
export class UpdateQuoteComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

}
