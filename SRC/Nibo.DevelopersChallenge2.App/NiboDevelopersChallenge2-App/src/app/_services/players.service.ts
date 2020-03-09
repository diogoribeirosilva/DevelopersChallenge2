import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Players } from '../_models/players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  baseURL = 'https://localhost:44391/api/players';
  tokenHeader: HttpHeaders;
  
  constructor(private http: HttpClient) { }
  getAllPlayers(): Observable<Players[]> {
    return this.http.get<Players[]>(this.baseURL);
  }
  getPlayersById(id: number): Observable<Players> {
    return this.http.get<Players>(`${this.baseURL}/getByNome/${id}`);
  }
  postPlayers(players: Players) {
    console.log(players)
    return this.http.post(this.baseURL, players);
  }
  putPlayers(players: Players) {
    return this.http.put(`${this.baseURL}/${players.id}`, players);
  }
  deletePlayers(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
