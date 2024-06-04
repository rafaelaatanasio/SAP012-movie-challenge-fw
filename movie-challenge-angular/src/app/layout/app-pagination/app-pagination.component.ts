import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './app-pagination.component.html',
  styleUrls: ['./app-pagination.component.css']
})
export class AppPaginationComponent {

  @Input() currentPage: number = 1; // para o número atual da página
  @Input() totalPages: number = 1; // para o número total de página 

  //  O componente deve emitir um evento quando um usuário seleciona uma nova página.

  @Output() onSelectPage: EventEmitter<number> = new EventEmitter<number>();
  // emite um evento quando clicado no botão de nova página

  // Método para lidar com a seleção de página
  selectPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.onSelectPage.emit(page);

    }
  }
}