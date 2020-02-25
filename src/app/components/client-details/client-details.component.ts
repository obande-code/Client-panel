import { Component, OnInit } from '@angular/core';
import { Client } from "../../file/Client";
import { BambiService } from 'src/app/file/bambi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id : string;
  clients : Client;
  hasBalance : boolean = false;
  showBalanceUpdateInput : boolean = false;

  constructor(private bambiService : BambiService,
              private router : Router,
              private route : ActivatedRoute,
              private flashMessageService : FlashMessagesService) { }

  ngOnInit() {
  }

}
