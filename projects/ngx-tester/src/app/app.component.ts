import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-bootstrap-spinner';

const TABLET_SIZE = 768;
const MOBILE_SIZE = 425;

/**
 * App Component
 *
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Array for spinner size
   *
   * @type {Array<string>}
   * @memberof AppComponent
   */
  sizeArray: Array<string> = ['small', 'default'];

  /**
   * Loading Text for spinner
   *
   * @type {string}
   * @memberof AppComponent
   */
  loadingText = 'Loading...';

  /**
   * Spinner configuration
   *
   * @type {object}
   * @memberof AppComponent
   */
  spinnerConfig: object = {
    bdColor: 'rgba(0, 0, 0, 0.8)',
    size: 'default',
    color: '#fff',
    type: 'border',
    fullScreen: true,
    isButtonSpinner: false,
    loaderTemplate: null,
    loadingTextTemplate: null,
    autoDisableButton: false
  };

  /**
   * Array of loaders
   *
   * @type {Array<string>}
   * @memberof AppComponent
   */
  loaders: Array<string> = [
    'border ',
    'grow',
  ];

  @ViewChild('codeElem') codeElement;

  noOfColumns = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const deviceWidth = event.target.innerWidth;
    if (deviceWidth <= MOBILE_SIZE) {
      this.noOfColumns = 1;
    } else if (deviceWidth <= TABLET_SIZE) {
      this.noOfColumns = 2;
    }
  }

  /**
   * Creates an instance of AppComponent.
   * @param {NgxSpinnerService} spinner Spinner service
   * @memberof AppComponent
   */
  constructor(private spinner: NgxSpinnerService) {
    const deviceWidth = window.innerWidth;
    if (deviceWidth <= MOBILE_SIZE) {
      this.noOfColumns = 1;
    } else if (deviceWidth <= TABLET_SIZE) {
      this.noOfColumns = 2;
    }
  }

  /**
   * To show/hide spinner
   *
   * @memberof AppComponent
   */
  showSpinner(name: string) {
    this.spinner.show(name);
    this.spinner.hide(name, 3000);
  }

  /**
   * To copy code of ngx-bootstrap-spinner
   *
   * @memberof AppComponent
   */
  copyCode = () => {
    const copyText = this.codeElement.nativeElement; // document.getElementsByClassName('code');
    window.getSelection().selectAllChildren(copyText);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }

  setFullscreenMode = () => {
    this.spinnerConfig['fullScreen'] = !this.spinnerConfig['fullScreen'];
  }

  setAutoButtonToDisabled=()=>{
    this.spinnerConfig['autoDisableButton']=!this.spinnerConfig['autoDisableButton'];
  }

  setButtonSpinnerMode = () => {
    this.spinnerConfig['isButtonSpinner'] = !this.spinnerConfig['isButtonSpinner'];
  }
}
