import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private userAll:string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/getClient';
    this.userAll ='http://localhost:8080/getAllClient';
  }
  // <!--  [['Blue'],['GREEN'],['RED'],['YELLOW'],['INDIGO'], ['violet'],['Orange']];-->

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userAll);
  }
  public findBlue(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+'/blue');
  }
  public findGreen(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+'/green');
  }
  public findRed(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+'/red');
  }
  public findYellow(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+'/yellow');
  }
  public findIndigo(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+'/indigo');
  }
  public findviolet(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+'/violet');
  }
  public findOrange(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl+'/orange');
  }

}
