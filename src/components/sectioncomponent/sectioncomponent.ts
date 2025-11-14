import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sectioncomponent',
  imports: [CommonModule],
  templateUrl: './sectioncomponent.html',
  styleUrl: './sectioncomponent.css',
})
export class Sectioncomponent {
  @Input() images: string[] = [
    'assets/images/cardImage (1).png',
    'assets/images/cardImage (2).png',
    'assets/images/cardImage (3).png',
    'assets/images/cardImage (4).png',
    'assets/images/cardImage (5).png',
    'assets/images/cardImage (6).png',
    'assets/images/cardImage (7).png',
    'assets/images/cardImage (8).png',
    'assets/images/cardImage (9).png',
    'assets/images/cardImage (10).png',
    'assets/images/cardImage (11).png',
  ];

  @Input() descriptions: string[] = [
   'A OdisseiaAutor: Homero Publicado em IX ou VIII a.C',
   'A Divina comédia Autor: Dante Publicado em 1321',
   'A Divina comédia Autor: Dante Publicado em 1321',
   'A Divina comédia Autor: Dante Publicado em 1321',
   'O Corvo Autor: Edgar Allan Poe 29 de Janeiro 1845',
   'Dom Casmurro Autor: Machado de Assis Dezembro de 1899',
   'A metamorfose Autor: Franz Kafka Outubro de 1915',
   'A metamorfose Autor: Franz Kafka Publicado em 1875',
   'Os miseráveis Autor: Victor Hugo 31 de março de 1862',
   'Frankstein Autor: Mary Shelley 1 de janeiro de 1818',
   'Arsene Lupin Autor: Maurice Leblanc 10 de Junho de 1907',
  ];
}
