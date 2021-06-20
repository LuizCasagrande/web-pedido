import {MessageService} from 'primeng/api';

export class Exception {

  static show(error: any, messageService: MessageService): void {
    const message = error?.error?.message || 'Ocorreu um problema';
    messageService.add({severity: 'error', summary: 'Erro', detail: message});
  }
}
