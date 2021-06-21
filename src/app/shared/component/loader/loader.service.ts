import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoaderService {

  displaySubject = new BehaviorSubject<boolean>(false);

  display(value: boolean): void {
    this.displaySubject.next(value);
  }
}
