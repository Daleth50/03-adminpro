import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonnutComponent } from './donnut/donnut.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [IncrementadorComponent, DonnutComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
  exports: [IncrementadorComponent, DonnutComponent],
})
export class ComponentsModule {}
