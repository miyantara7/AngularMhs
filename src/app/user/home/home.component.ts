import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../../model/Mhs';
import { UserserviceService } from '../../service/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a : number
  message: any;
  Mahasis = new Mahasiswa()
  constructor(private service:UserserviceService) {  
    
  }
  
  ngOnInit(): void {
    
  }

  public setMhs(){
    let resp=this.service.setMhss(this.Mahasis)
    resp.subscribe((data)=>{
      this.message=data
    });
    
  }
}
