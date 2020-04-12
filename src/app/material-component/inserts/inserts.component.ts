import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../service/service1.service';
import { Mahasiswa } from '../../model/Mhs';
@Component({
  selector: 'app-inserts',
  templateUrl: './inserts.component.html',
  styleUrls: ['./inserts.component.css']
})
export class InsertsComponent implements OnInit {
  datasMhs : Mahasiswa[]
  constructor(private service : Service1Service) { }

  ngOnInit(): void {
    this.viewAccMhs()
  }
    
  public viewAccMhs(){
    let resp=this.service.getAccMhs();
    resp.subscribe((data) =>
    {this.datasMhs=data},
    error => {
        if (error.status === 401) {
            alert('Unauthorized');
        }
    }
  );
  }

}
