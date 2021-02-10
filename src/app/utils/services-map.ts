// tslint:disable: object-literal-key-quotes
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';

/** The list of services that can be injected. */
export const services: {[key: string]: {provide: any, deps: any[], useClass?: any}} = {
  'browserRec': {
    provide: BrowserRecognitionService,
    deps: []
  }
};
