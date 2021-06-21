import {Component, OnInit} from '@angular/core';
import {WidgetService} from './widget.service';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {LoaderService} from '../shared/component/loader/loader.service';
import {finalize} from 'rxjs/operators';

@Component({
  moduleId: module.id,
  selector: 'app-cliente-widget',
  template: `
    <p-card>
      <p-header class="header">
        <span>Vendas Por Cliente</span>
      </p-header>
      <p-chart *ngIf="data != null" [data]="data" [options]="options" type="pie"></p-chart>
    </p-card>
  `,
})
export class ClienteWidgetComponent implements OnInit {

  data: any;
  options = {
    legend: {
      position: 'right'
    },
    responsive: true,
    tooltips: {
      callbacks: {
        label: (item: any, data: any) => {
          const valor = data.datasets[item.datasetIndex].data[item.index];
          const label = data.labels[item.index];
          return ` ${label}: ${this.currencyPipe.transform(valor)}`;
        }
      }
    },
  };

  constructor(private widgetService: WidgetService,
              private loader: LoaderService,
              private datePipe: DatePipe,
              private currencyPipe: CurrencyPipe) {
  }

  ngOnInit(): void {
    this.loader.display(true);
    this.widgetService.getVendasPorCliente(this.datePipe.transform(new Date(), '01/MM/yyyy'))
      .pipe(finalize(() => this.loader.display(false)))
      .subscribe(r => {
        this.data = {
          labels: r.map(e => e.nome),
          datasets: [{
            data: r.map(e => e.valor),
            backgroundColor: this.widgetService.getColors(),
            hoverBackgroundColor: this.widgetService.getColors(),
          }]
        };
      });
  }
}
