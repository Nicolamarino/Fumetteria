import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titolo-pagina',
  templateUrl: './titolo-pagina.component.html',
  styleUrls: ['./titolo-pagina.component.scss'],
})
export class TitoloPaginaComponent implements OnInit {
  @Input() testo:string;

  constructor() { }

  ngOnInit() {}

}
