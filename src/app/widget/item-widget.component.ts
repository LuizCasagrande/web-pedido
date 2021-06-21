import {Component, OnInit} from '@angular/core';
import {WidgetService} from './widget.service';
import {DatePipe} from '@angular/common';
import {LoaderService} from '../shared/component/loader/loader.service';
import {finalize} from 'rxjs/operators';

@Component({
  moduleId: module.id,
  selector: 'app-item-widget',
  template: `
    <p-card>
      <p-header class="header">
        <span>Itens Mais Vendidos</span>
      </p-header>
      <p-chart *ngIf="data != null" [data]="data" [options]="options" type="bar"></p-chart>
    </p-card>
  `,
})
export class ItemWidgetComponent implements OnInit {

  data: any;
  options = {
    legend: {
      display: false
    },
    responsive: true,
    scales: {
      yAxes: [{
        position: 'left',
        ticks: {
          min: 0,
        }
      }]
    }
  };

  constructor(private widgetService: WidgetService,
              private loader: LoaderService,
              private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.loader.display(true);
    this.widgetService.getItensMaisVendidos(this.datePipe.transform(new Date(), '01/MM/yyyy'))
      .pipe(finalize(() => this.loader.display(false)))
      .subscribe(r => {
        this.data = {
          labels: r.map(e => e.descricao),
          datasets: [{
            label: ' Quantidade',
            backgroundColor: this.widgetService.getColors(),
            data: r.map(e => e.quantidade)
          }]
        };
      });
  }
}
