import { Component, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { IconNames } from '../../../interfaces/icon-names';
import { HelperService } from '../../../utils/helper.service';
import { ClassValue } from 'clsx';
import { ClsxService } from '../../services/clxs.service';

@Component({
  selector: 'cm-svg-icon',
  standalone: true,
  template: '<ng-content></ng-content>',
  styleUrls: ['./svg-icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() iconName!: IconNames;
  @Input() iconSize = '24px';
  @Input() iconColor = 'black';
  @Input() class: string = '';
  @Input() width: number = 24;
  @Input() height: number = 24;

  constructor(
    private http: HttpClient,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private helperService: HelperService,
    private clsx: ClsxService
  ) {}

  cn(...inputs: ClassValue[]) {
    return this.clsx.cn(inputs);
  }

  ngOnInit(): void {
    this.loadIcon();
  }

  private loadIcon(): void {
    const iconPath = `assets/icons/${this.helperService.toKebabCase(
      this.iconName
    )}.svg`;

    this.http
      .get(iconPath, { responseType: 'text' })
      .pipe(
        tap((svgText) => {
          const svgElement = this.renderer.createElement('span');
          svgElement.innerHTML = svgText;
          const icon = svgElement.querySelector('svg');
          this.applyIconStyles(icon);
          this.elementRef.nativeElement.appendChild(icon);
        }),
        catchError((error: any) => {
          console.error(`Failed to load SVG icon '${this.iconName}':`, error);
          return of(null);
        })
      )
      .subscribe();
  }

  private applyIconStyles(svgElement: HTMLElement): void {
    this.renderer.addClass(svgElement, this.class);
  }
}
