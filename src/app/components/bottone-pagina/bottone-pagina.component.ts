import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottone-pagina',
  templateUrl: './bottone-pagina.component.html',
  styleUrls: ['./bottone-pagina.component.scss'],
})
export class BottonePaginaComponent implements OnInit {
  @Input() testo:string;
  constructor() { }

  ngOnInit() {}

}
