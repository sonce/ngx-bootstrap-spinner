import {
  Component,
  OnDestroy,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef
} from '@angular/core';
import { NgxSpinnerService } from './ngx-spinner.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DEFAULTS, Size, NgxSpinner, PRIMARY_SPINNER, LOADERS } from './ngx-spinner.enum';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'ngx-bootstrap-spinner',
  templateUrl: 'ngx-spinner.component.html',
  styleUrls: ['ngx-spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave',
        animate(200, style({ opacity: 0 })))
    ])
  ]
})
export class NgxSpinnerComponent implements OnDestroy, OnInit, OnChanges {

  /**
   * To set backdrop color
   * Only supports RGBA color format
   * @memberof NgxSpinnerComponent
   */
  @Input() bdColor: string;
  /**
   * To set spinner size
   *
   * @memberof NgxSpinnerComponent
   */
  @Input() size: Size;
  /**
   * To set spinner color(DEFAULTS.SPINNER_COLOR)
   *
   * @memberof NgxSpinnerComponent
   */
  @Input() color: string;
  /**
   * To set type of spinner
   *
   * @memberof NgxSpinnerComponent
   */
  @Input() type: string;
  /**
   * To toggle fullscreen mode
   *
   * @memberof NgxSpinnerComponent
   */
  @Input() fullScreen: boolean;
  /**
   * Spinner name
   *
   * @memberof NgxSpinnerComponent
   */
  @Input() name: string;
  /**
   * z-index value
   *
   * @memberof NgxSpinnerComponent
   */
  @Input() zIndex: number;
  /**
   * Custom loader for spinner/loader
   *
   * @memberof NgxSpinnerComponent
   */
  @Input() loaderTemplate: string;
  /**
 * display loading text
 *
 * @memberof NgxSpinnerComponent
 */
  @Input() loadingText: string;
  /**
 * Custom loading text Template for spinner/loader
 *
 * @memberof NgxSpinnerComponent
 */
  @Input() loadingTextTemplate: string;
  /**
   * button Spinner.
   * https://getbootstrap.com/docs/4.4/components/spinners/#buttons
   *
   * @memberof NgxSpinnerComponent
   *
   */
  @Input() isButtonSpinner: boolean = false;

  /**
   * isButtonSpinner is true and when the spinner shown,the button disabled set to true
   *
   * @memberof NgxSpinnerComponent
   *
   */
  @Input() autoDisableButton: boolean = false;

  /**
   * Spinner Object
   *
   * @memberof NgxSpinnerComponent
   */
  spinner: NgxSpinner = new NgxSpinner();
  /**
   * Show spinner
   *
   * @memberof NgxSpinnerComponent
  **/
  show: boolean;
  /**
   * Unsubscribe from spinner's observable
   *
   * @memberof NgxSpinnerComponent
  **/
  ngUnsubscribe: Subject<void> = new Subject();

  /**
   * Creates an instance of NgxSpinnerComponent.
   *
   * @memberof NgxSpinnerComponent
   */
  constructor(private spinnerService: NgxSpinnerService, private changeDetector: ChangeDetectorRef, private elementRef: ElementRef) {
    this.bdColor = DEFAULTS.BD_COLOR;
    this.zIndex = DEFAULTS.Z_INDEX;
    this.color = DEFAULTS.SPINNER_COLOR;
    this.type = DEFAULTS.SPINNER_TYPE;
    this.size = 'default';
    this.fullScreen = true;
    this.name = PRIMARY_SPINNER;
    this.loaderTemplate = null;

    this.show = false;
  }
  /**
   * Initialization method
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnInit() {
    this.setDefaultOptions();
    this.spinnerService.getSpinner(this.name).subscribe(x => {
      if (this.isButtonSpinner && this.autoDisableButton) {
        let button = (this.elementRef.nativeElement as HTMLElement).closest("button");
        button.disabled = x.show;
      }
    });
    this.spinnerService.getSpinner(this.name)
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((spinner: NgxSpinner) => {
        this.setDefaultOptions();
        Object.assign(this.spinner, spinner);
        if (spinner.show) {
          this.onInputChange();
        }
        this.changeDetector.markForCheck();
      });
  }
  /**
   * To set default ngx-spinner options
   *
   * @memberof NgxSpinnerComponent
   */
  setDefaultOptions = () => {
    this.spinner = new NgxSpinner({
      name: this.name,
      bdColor: this.bdColor,
      size: this.size,
      color: this.color,
      type: this.type,
      fullScreen: this.fullScreen,
      show: this.show,
      zIndex: this.zIndex,
      loaderTemplate: this.loaderTemplate,
      loadingTextTemplate: this.loadingTextTemplate,
      autoDisableButton:this.autoDisableButton
    });
  }
  /**
   * On changes event for input variables
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (propName) {
        const changedProp = changes[propName];
        if (changedProp.isFirstChange()) {
          return;
        } else if (typeof changedProp.currentValue !== 'undefined' && changedProp.currentValue !== changedProp.previousValue) {
          if (changedProp.currentValue !== '') {
            this.spinner[propName] = changedProp.currentValue;
          }
        }
      }
    }
  }
  /**
   * To get class for spinner
   *
   * @memberof NgxSpinnerComponent
   */
  getClass(type: string, size: Size): string[] {
    let sizeClass = '';
    switch (size.toLowerCase()) {
      case 'small':
        sizeClass = 'sm';
        break;
      default:
        break;
    }
    if (sizeClass == '')
      return ['spinner-' + type];
    else
      return ['spinner-' + type, 'spinner-' + type + '-' + sizeClass];
  }
  /**
   * Check if input variables have changed
   *
   * @memberof NgxSpinnerComponent
   */
  onInputChange() {
    this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
  }
  /**
   * Component destroy event
   *
   * @memberof NgxSpinnerComponent
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
