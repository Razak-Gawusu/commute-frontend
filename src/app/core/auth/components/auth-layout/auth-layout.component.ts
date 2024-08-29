import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'cm-auth-layout',
  standalone: true,
  template: `<div class="h-screen flex justify-between">
    <div
      class="w-full h-full flex flex-col justify-center px-8 py-16 sm:p-8 xl:p-16 "
    >
      <router-outlet></router-outlet>
    </div>
    <div
      class="hidden w-full h-full p-16 bg-amber-950 md:flex flex-col justify-end text-white"
    >
      <div class="space-y-8">
        <h2 class="text-3xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          nihil harum quas!
        </h2>
        <div class="flex justify-between items-center">
          <div>
            <h4 class="font-semibold">Williams Tiffany</h4>
            <p class="text-sm">Sr HR manager at Greendeck</p>
          </div>
          <div class="flex gap-3">
            <button
              class="w-11 h-11 border-[1.5px] border-white grid place-items-center rounded-full"
            >
              <lucide-icon name="arrowRight" class="w-5 h-5"></lucide-icon>
            </button>
            <button
              class="w-11 h-11 border-[1.5px] border-white grid place-items-center rounded-full"
            >
              <lucide-icon name="arrowRight" class="w-5 h-5"></lucide-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  imports: [RouterModule, LucideAngularModule],
})
export class AuthLayoutCompoment {}
