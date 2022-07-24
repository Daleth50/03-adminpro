import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  // @Input() progress: number = 50;
  @Input('valor') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.valorSalida.emit(100);
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.valorSalida.emit(0);
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;
    this.valorSalida.emit(this.progress);
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.valorSalida.emit(this.progress);
  }
}
