import { Component, OnInit } from '@angular/core';
import { BambiService } from "../../file/bambi.service";
import { Client } from "../../file/Client";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients : Client[];
  totalowed : number;

  constructor(private bambiService : BambiService) { }

  ngOnInit() {
    this.bambiService.getClients().subscribe ( clients => {
      this.clients = clients,
      this.getTotalOwed();
    });
    
  }
  getTotalOwed(){
    this.totalowed = this.clients.reduce((total, client) =>{
      return total + client.balance;
    }, 0); 
  }

}
