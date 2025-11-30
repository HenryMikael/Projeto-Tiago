import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

interface Sala {
  id: number;
  nome: string;
  capacidade: number;
  btnColor: string;
  btnText: string;
}

@Component({
  selector: 'app-card-salas-components',
  imports: [CommonModule],
  templateUrl: './card-salas-components.html',
  styleUrl: './card-salas-components.css',
})
export class CardSalasComponents {
  salas: Sala[] = [
    { id: 1, nome: 'sala 1', capacidade: 8, btnColor: '#007bff', btnText: 'Reservar' },
    { id: 2, nome: 'sala 2', capacidade: 6, btnColor: '#007bff', btnText: 'Reservar' },
    { id: 3, nome: 'sala 3', capacidade: 3, btnColor: '#007bff', btnText: 'Reservar' },
    { id: 4, nome: 'sala 4', capacidade: 10, btnColor: '#007bff', btnText: 'Reservar' },
    { id: 5, nome: 'sala 5', capacidade: 5, btnColor: '#007bff', btnText: 'Reservar' },
    { id: 6, nome: 'sala 6', capacidade: 4, btnColor: '#007bff', btnText: 'Reservar' },
    { id: 7, nome: 'sala 7', capacidade: 9, btnColor: '#007bff', btnText: 'Reservar' },
    { id: 8, nome: 'sala 8', capacidade: 10, btnColor: '#007bff', btnText: 'Reservar' },
    { id: 9, nome: 'sala 9', capacidade: 8, btnColor: '#007bff', btnText: 'Reservar' },
  ];


  changeColorButton(sala: Sala) {
     if (sala.btnText === 'Reservar') {
      sala.btnColor = '#c91212ff';
      sala.btnText = 'Cancelar Reserva';
      
      Swal.fire({
        title: 'Sucesso',
        text: 'Sala reservada com sucesso!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else if (sala.btnText === 'Cancelar Reserva') {
      sala.btnColor = '#007bff';
      sala.btnText = 'Reservar';
      Swal.fire({
        title: 'Sucesso',
        text: 'Reserva cancelada!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  }
};
