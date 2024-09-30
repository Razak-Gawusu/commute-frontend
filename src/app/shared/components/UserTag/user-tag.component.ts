import { Component } from '@angular/core';
import { AvatarComponent } from '../Avatar/avatar.component';
import { TagComponent } from '../Tag/tag.component';

@Component({
  selector: 'cm-user-tag',
  standalone: true,
  imports: [AvatarComponent, TagComponent],
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

      <cm-tag role="driver" />
    </div>
  `,
})
export class UserTagComponent {}
