export type LOADERS = 'border' | 'grow';

export const DEFAULTS = {
  BD_COLOR: 'rgba(51,51,51,0.8)',
  SPINNER_COLOR: '#fff',
  SPINNER_TYPE: 'border',
  Z_INDEX: 99999,
};

export const PRIMARY_SPINNER = 'primary';

export type Size = 'default' | 'small';

export interface Spinner {
  bdColor?: string;
  size?: Size;
  color?: string;
  type?: string;
  fullScreen?: boolean;
  zIndex?: number;
  loaderTemplate?: string;
  loadingTextTemplate?:string;
  autoDisableButton?:boolean;
}

export class NgxSpinner {
  name: string;
  bdColor: string;
  size: Size;
  color: string;
  type: string;
  class: string[];
  fullScreen: boolean;
  show: boolean;
  zIndex: number;
  loaderTemplate: string;
  loadingTextTemplate:string;
  autoDisableButton:boolean;

  constructor(init?: Partial<NgxSpinner>) {
    Object.assign(this, init);
  }
}
