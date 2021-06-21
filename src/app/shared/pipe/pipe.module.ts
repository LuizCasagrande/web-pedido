import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CpfPipe} from './cpf.pipe';
import {TelefonePipe} from './telefone.pipe';
import {CepPipe} from './cep.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CpfPipe,
    TelefonePipe,
    CepPipe,
  ],
  exports: [
    CpfPipe,
    TelefonePipe,
    CepPipe,
  ],
})
export class PipeModule {
}
