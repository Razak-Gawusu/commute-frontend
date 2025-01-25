import { Component } from '@angular/core';
import { TableComponent } from '../../../shared/components/Table/table.component';
import { Column } from '../../../interfaces';
import { TanTableComponent } from '../../../shared/components/Table/TanstackTable';

@Component({
  selector: 'cm-super-admin-profile',
  standalone: true,
  imports: [TableComponent, TanTableComponent],
  template: `
    <div>
      <cm-table [columns]="columns" />
      <cm-tan-table />
    </div>
  `,
})
export class AdminSchoolsPage {
  columns: Column[] = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Location', accessor: 'location' },
  ];
}
