import { Injectable } from '@angular/core';
import {  AngularFirestoreCollection ,   AngularFirestoreDocument, AngularFirestore } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Client } from "../file/Client";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BambiService {
   clientCollection : AngularFirestoreCollection<Client>
   clientdoc : AngularFirestoreDocument<Client>
   clients : Observable<Client[]>
   client : Observable <Client>



  constructor( private afs : AngularFirestore) {
    this.clientCollection = this.afs.collection('client', ref => ref.orderBy(
      'lastname', 'asc'));
  }

  getClients() : Observable<Client[]> {
    return this.clientCollection.snapshotChanges().pipe(map(actions => {       
      return actions.map(a => {
        const data = a.payload.doc.data() as Client;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  getClient(id : string) : Observable<Client>{
    this.clientdoc = this.afs.doc<Client>(`clients`);
    this.client = this.clientdoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      }else{
        const data = action.payload.data() as Client;
        data.id = action.payload.id;
        return data;  
      }
    });
    return this.client;
  }
  newClient(client : Client){
    this.clientCollection.add(client);
  }
}
