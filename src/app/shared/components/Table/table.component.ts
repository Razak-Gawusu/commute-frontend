import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Column } from '../../../interfaces';

type School = {
  id: string;
  name: string;
  email: string;
  location: string;
  phone: string;
  certificate_number: string;
};

@Component({
  selector: 'cm-table',
  standalone: true,
  imports: [ButtonModule, RippleModule, ToastModule, TableModule, CommonModule],
  providers: [MessageService],
  template: `
    <div>
      <div class="card overflow-x-auto border rounded-md">
        <p-toast />
        <p-table [value]="products" [tableStyle]="{ 'min-width': '30rem' }">
          <ng-template pTemplate="header">
            <tr class="bg-amber-900/200">
              <th *ngFor="let col of columns">{{ col.header }}</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-product>
            <tr>
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.email }}</td>
              <td>{{ product.location }}</td>
              <!-- <td>
                <button
                  type="button"
                  pButton
                  pRipple
                  icon="pi pi-plus"
                  (click)="selectProduct(product)"
                >
                  open
                </button>
              </td> -->
            </tr>
          </ng-template>
        </p-table>
      </div>
    </div>
  `,
})
export class TableComponent {
  @Input() columns: Column[] = [];

  products!: School[];
  selectedProduct!: School;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.products = [
      {
        id: '1',
        name: 'Rect Acadamy',
        email: 'rect@mail.edu.gh',
        phone: '+233123456789',
        location: 'santa-maria',
        certificate_number: '001123456',
      },
      {
        id: '2',
        name: 'Top Ridge',
        email: 'topridge@mail.edu.gh',
        location: 'santa-maria',
        phone: '+23345678975',
        certificate_number: '00112356',
      },
    ];
  }

  selectProduct(school: School) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: school.name,
    });
  }
}
