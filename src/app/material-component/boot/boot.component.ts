import { Component, OnInit } from '@angular/core';
import { Covid } from '../../model/Covid';
import { Service1Service } from '../../service/service1.service';
import { Mahasiswa } from '../../model/Mhs';

@Component({
  selector: 'app-boot',
  templateUrl: './boot.component.html',
  styleUrls: ['./boot.component.css'],
  styles: [`
        :host ::ng-deep .ui-button {
            margin: .5em .5em .5em 0;
            width: 140px;
        }
        @media screen and (max-width: 40em) {
            :host ::ng-deep .ui-dialog {
                width: 75vw !important;
            }
        }
    `]
})
export class BootComponent implements OnInit {


  dataNotMhs : Mahasiswa[]
  upCovids = new Covid()
  message: any;
  displayModal: boolean;
  position: string;

  showModalDialog() {
      this.displayModal = true;
  }

  constructor(private service:Service1Service){
    this.viewMhs()
  }
  ngOnInit(){
      
  }

  public acceptMhs(data:Mahasiswa){
    let resp=this.service.acceptMhs(data);
    resp.subscribe((data)=>{
        this.message=data
        this.viewMhs()
    });
  }

  public rejectMhs(data:Mahasiswa){
    let resp=this.service.rejectMhs(data);
    resp.subscribe((data)=>{
        this.message=data
        this.viewMhs()
    });
  }

  public viewMhs(){
    let resp=this.service.getNotMhs();
    resp.subscribe((data) =>
    {this.dataNotMhs=data},
    error => {
        if (error.status === 401) {
            alert('Unauthorized');
        }
    }
  );
  }
}
