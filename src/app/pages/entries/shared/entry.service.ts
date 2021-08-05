import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from 'rxjs'
import { map, catchError, flatMap } from "rxjs/operators";

import { Entry } from "./entry.model";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private apiPath: string = "api/entries"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Entry[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntries)
    );
  }

  getById(id: number): Observable<Entry> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntry)
    );
  }

  create(Entry: Entry): Observable<Entry> {
    return this.http.post(this.apiPath, Entry).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntry)
    );
  }

  update(Entry: Entry): Observable<Entry> {
    const url = `${this.apiPath}/${Entry.id}`;

    return this.http.put(url, Entry).pipe(
      catchError(this.handleError),
      map(() => Entry)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  private jsonDataToEntries(jsonData: any[]): Entry[] {
    const entries: Entry[] = [];
    jsonData.forEach(element => {
      const entry = Object.assign(new Entry(), element);
      entries.push(entry);
    });
    return entries;
  }

  private jsonDataToEntry(jsonData: any): Entry {
    return Object.assign(new Entry(), jsonData);
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISICAO => ', error);
    return throwError(error);
  }

}
