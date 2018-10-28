import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylishDirective } from './stylish.directive';
import { HighlightDirective } from './app-highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StylishDirective, HighlightDirective],
  exports: [StylishDirective, HighlightDirective]
})
export class DirModule { }
