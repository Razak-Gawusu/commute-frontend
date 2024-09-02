import { Component } from '@angular/core';
import { AvatarComponent } from '../Avatar/avatar.component';

@Component({
  selector: 'cm-user-tag',
  standalone: true,
  imports: [AvatarComponent],
  template: `
    <div
      class="w-full p-4 border border-amber-800 bg-amber-800/20 flex items-center justify-between rounded-lg"
    >
      <div class="flex gap-3 items-center">
        <cm-avatar name="mutala razak" />

        <div class="flex flex-col">
          <span class="text-base font-semibold">Mutala Razak</span>
          <span class="text-gray-600 text-sm">mutala&#64;mail.com</span>
        </div>
      </div>

      <div
        class="bg-amber-800 text-white text-sm px-3 py-1 rounded-md capitalize"
      >
        driver
      </div>
    </div>
  `,
})
export class UserTagComponent {}
