import { Structure } from './../../interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  private uri = 'http://localhost:8080';
  constructor(private http: HttpClient) {  }

  public getStructures(): Observable<Structure[]> {
    return this.http.get<Structure[]>(`${this.uri}/getStructures`);
  }

  public getStructureById(structureId: number): Observable<Structure> {
    return this.http.get<Structure>(`${this.uri}/getStructure/${structureId}`);
  }
}