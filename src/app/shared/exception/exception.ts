import {MessageService} from 'primeng/api';

export class Exception {

  static show(error: any, messageService: MessageService): void {
    let message = error?.error?.message;
    if ('Forbidden' === error.error.error) {
      message = 'Acesso negado';
    }
    messageService.add({severity: 'error', summary: 'Erro', detail: message || 'Ocorreu um problema'});
  }
}
