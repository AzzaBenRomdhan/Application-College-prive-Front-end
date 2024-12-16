import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadableEnumPipe } from '../readable-enum.pipe';



@NgModule({
  declarations: [ReadableEnumPipe],
  imports: [
    CommonModule
  ],
  exports: [ReadableEnumPipe]
})
export class SharedModule { }
