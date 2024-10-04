import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ConstantService, HelperService } from '../../../shared';
import { LucideAngularModule } from 'lucide-angular';
import { AnalyticTotalPipe } from '../../../shared/pipes/analyticTotal.pipe';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserEntities } from '../../../interfaces';

@Component({
  selector: 'cm-analytic-card',
  standalone: true,
  imports: [LucideAngularModule, AnalyticTotalPipe, CommonModule, RouterModule],
  template: `
    <div
      class="w-72 border border-amber-700/20 p-4 rounded flex flex-col gap-4"
    >
      <div
        class="w-10 h-10 grid place-items-center bg-amber-200/50 rounded-full"
      >
        <lucide-icon [name]="icon" color="#78350f" />
      </div>
      <div class="flex justify-between items-end">
        <div class="flex flex-col">
          <span>{{ name | analyticTotalPipe }}</span>
          <span class="text-4xl text-amber-700">
            {{ count | number }}
          </span>
        </div>

        <a
          [routerLink]="resourceUrl"
          href=""
          class="text-sm hover:text-amber-700 hover:underline"
          >View all <span class="capitalize">{{ name }}</span></a
        >
      </div>
    </div>
  `,
})
export class AnalyticComponent implements OnChanges {
  @Input() name!: UserEntities;
  @Input() count!: number;
  icon: any;

  constructor(
    private constants: ConstantService,
    private helper: HelperService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const label = changes['name'].currentValue;
    this.icon = this.helper.getAnalyticIcon(label);
  }

  get resourceUrl() {
    switch (this.name) {
      case 'drivers':
        return this.constants.routes.super_admin.drivers;
      case 'parents':
        return this.constants.routes.super_admin.schools;
      case 'schools':
        return this.constants.routes.super_admin.schools;
      case 'trips':
        return this.constants.routes.super_admin.trips;
      default:
        return this.constants.routes.super_admin.dashboard;
    }
  }
}
