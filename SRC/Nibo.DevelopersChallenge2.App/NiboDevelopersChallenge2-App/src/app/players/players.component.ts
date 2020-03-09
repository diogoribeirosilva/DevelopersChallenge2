import { Component, OnInit, TemplateRef } from '@angular/core';
import { PlayersService } from '../_services/players.service';
import { Players } from '../_models/players';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { defineLocale, BsLocaleService, ptBrLocale, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Players[];
  player: Players;
  modoSalve = 'post';
  mostrarImagem = false;
  registerForm: FormGroup;
  bodyDeletePlayer = '';
  date: string;
  
  constructor(
    private playersService: PlayersService
    , private modalService: BsModalService
    , private fb: FormBuilder
    , private localeService: BsLocaleService
    , private toastr: ToastrService
    ){
      this.localeService.use('pt-br');
    }
    
    ngOnInit() {
      this.validation();
      this.getPlayers();
    }
    
    getPlayers() {
      this.date = new Date().getMilliseconds().toString();
      this.playersService.getAllPlayers().subscribe(
        ( _players: Players[]) => {
          this.players = _players;
        }, error => {
          this.toastr.error(`Erro ao tentar carregar os jogadores: ${error}`);
        });
      }
      newPlayer(template: any) {
        this.modoSalve = 'post';
        this.openModal(template);
      }
      openModal(template: any) {
        this.registerForm.reset();
        template.show();
      }
      validation() {
        this.registerForm = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
          email: ['', [Validators.required, Validators.email]],
          favoriteGame: ['', Validators.required],
          birthDate:['', Validators.required]
        });
      }
      editPlayer(player: Players, template: any) {
        this.modoSalve = 'put';
        this.openModal(template);
        this.player = Object.assign({}, player);
        console.log("modal",this.player)
        this.registerForm.patchValue(this.players);
      }
      
      deletePlayer(players: Players, template: any) {
        this.openModal(template);
        this.player = players;
        this.bodyDeletePlayer = `Tem certeza que deseja excluir o jogador: ${players.name}`;
      }
      insertPlayer(template: any) {
        if (this.modoSalve === 'post') {
          this.player = Object.assign({}, this.registerForm.value);
          console.log("Caiu no insert", this.player)
          this.playersService.postPlayers(this.player).subscribe(
            (newPlayer: Players) => {
              template.hide();
              this.getPlayers();
              this.toastr.success('Inserido com Sucesso!');
            }, error => {
              this.toastr.error(`Erro ao Inserir: ${error}`);
            }
            );
          } else {
            this.player = Object.assign({ id: this.player.id }, this.registerForm.value);
            this.playersService.putPlayers(this.player).subscribe(
              () => {
                template.hide();
                this.getPlayers();
                this.toastr.success('Editado com Sucesso!');
              }, error => {
                this.toastr.error(`Erro ao Editar: ${error}`);
              }
              );
            }
          }
          confirmeDelete(template: any) {
            this.playersService.deletePlayers(this.player.id).subscribe(
              () => {
                template.hide();
                this.getPlayers();
                this.toastr.success('Deletado com Sucesso');
              }, error => {
                this.toastr.error('Erro ao tentar Deletar');
                console.log(error);
              });
            }
          }
          