import { Component, Input, IterableDiffers } from '@angular/core';
import { AuthorDTO } from 'src/app/model/package/DTO/author-dto';
import { AuthorListDTO } from 'src/app/model/package/DTO/author-list-dto';
import { HomePageService } from './home-page.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  autori: AuthorListDTO;
  autore:AuthorDTO;
  constructor(private service: HomePageService) {
    this.autori = new AuthorListDTO;
    this.autore=  new AuthorDTO;
  }

  ngOnInit() {
    this.service.authorList().subscribe((resp) => {
      this.autori = resp;
    });
  }
}
