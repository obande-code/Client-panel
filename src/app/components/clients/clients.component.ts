import { Component, OnInit } from '@angular/core';
import { BambiService } from "../../file/bambi.service";
import { Client } from "../../file/Client";
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgxSpinnerService } from "ngx-spinner";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients : Client[];
  totalowed : number;
   id : string;
   hasBalance : boolean = false;
  client : Client = {
    firstname : '',
    lastname : '',
    email : '',
    phone : '',
    balance : 0
  }

  disableBalanceOnEdit : boolean = true;

  constructor(private bambiService : BambiService,
              private firestore: AngularFirestore,
              private router : Router,
              private route : ActivatedRoute,
              private flashMessage : FlashMessagesService,
              private spinner: NgxSpinnerService
              ) { }

  ngOnInit() {
    this.bambiService.getClients().subscribe ( clients => {
      this.clients = clients,
      this.getTotalOwed();
    });
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 8000);
  }
  getTotalOwed(){
    this.totalowed = this.clients.reduce((total, client) =>{
      return total + client.balance;
    }, 0);
  }

 onDelete(id : string){
   this.bambiService.deleteClient(id)
 }
}


