import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title!: string;

  @Output('close') closeUpdate = new EventEmitter<boolean>();

  public close(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.closeUpdate.emit(false);
  }
}
