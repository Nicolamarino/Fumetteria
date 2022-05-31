import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient) { }
  authorList(){
    return this.http.post("http://2.44.173.210:7080/comic-be/api/author/select",{});
  }
}
