import { Component, OnInit ,ElementRef, ViewChild}  from '@angular/core';
import { Client } from "../../file/Client";
import { FlashMessagesService } from 'angular2-flash-messages';
import { BambiService } from "../../file/bambi.service";
import { Router, ActivatedRoute , Params } from "@angular/router";
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
}) 
export class AddClientComponent implements OnInit {
  
  id : string;
  client : Client;
  hasBalance : boolean = false;
  showBalanceUpdatedInput : boolean = false
  disableBalanceOnAdd : boolean = false;
   @ViewChild('clientForm', { static: true, }) clientFormRef: ElementRef;
  constructor(private flashMessagesService: FlashMessagesService,
             private bambiService : BambiService,
             private router : Router,
             private route: ActivatedRoute) { }

  ngOnInit() {
    // get url
    this.id = this.route.snapshot.params['id'];
    // get client
    this.bambiService.getClient(this.id).subscribe(client =>{
      this.client = client;
    })
  }

  onSubmit({value , valid} : {value:Client, valid:boolean}){
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if (!valid) {
      this.flashMessagesService.show("Please fill out the form correctly",{cssClass : 'alert-danger', time : 4000});
    }else{
      this.bambiService.newClient(value);
      this.flashMessagesService.show("New client Added",{cssClass : 'alert-success', time : 4000});
      // redirect back to dashboard
      this.router.navigate(['/']);
    }

  }

}
