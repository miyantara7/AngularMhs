import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import { Service1Service } from '../../service/service1.service';
import { Covid } from '../../model/Covid';
import { CovidTemp } from '../../model/covidTemp';
import { Mahasiswa } from '../../model/Mhs';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }
    `],
    providers: [ConfirmationService]
})
export class UpdateComponent implements OnInit {

  datasMhs : Mahasiswa[]
  constructor(private service:Service1Service) { 
    
  }
  ngOnInit(): void {
    this.viewRejectMhs()
  }

  public viewRejectMhs(){
    let resp=this.service.getRejectMhs();
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
