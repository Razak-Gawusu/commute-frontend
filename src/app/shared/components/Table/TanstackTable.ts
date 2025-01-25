import { Component, signal } from '@angular/core';
import {
  createAngularTable,
  FlexRenderDirective,
  getCoreRowModel,
} from '@tanstack/angular-table';

@Component({
  selector: 'cm-tan-table',
  standalone: true,
  imports: [FlexRenderDirective],
  template: `
    <div>
      <tbody>
        @for (row of table.getRowModel().rows; track row.id) {
        <tr>
          @for (cell of row.getVisibleCells(); track cell.id) {
          <td>
            <ng-container
              *flexRender="
                cell.column.columnDef.cell;
                props: cell.getContext();
                let cell
              "
            >
              <!-- if you want to render a simple string -->
              {{ cell }}
              <!-- if you want to render an html string -->
              <div [innerHTML]="cell"></div>
            </ng-container>
          </td>
          }
        </tr>
        }
      </tbody>
    </div>
  `,
})
export class TanTableComponent {
  data = signal([
    { id: '1', name: 'Top Ridge' },
    { id: '2', name: 'Rect Acadamy' },
  ]);
  table = createAngularTable(() => ({
    data: this.data(),
    columns: [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Name', accessorKey: 'name' },
    ],
    getCoreRowModel: getCoreRowModel(),
  }));
}
