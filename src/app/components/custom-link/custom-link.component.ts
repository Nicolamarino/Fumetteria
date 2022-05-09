import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-link',
  templateUrl: './custom-link.component.html',
  styleUrls: ['./custom-link.component.scss'],
})
export class CustomLinkComponent implements OnInit {
  @Input() testo: string;
  indirizzi:string [] = [];
  @Input() indirizzo: string;

  constructor() { }

  ngOnInit() {
    this.indirizzi.push(this.indirizzo);
  }

}
