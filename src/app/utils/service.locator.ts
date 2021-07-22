import { Injector } from '@angular/core';

/** Dummy wrapper class that is used to always have access to the Injector, to access the services in OOP hierarchy. */
export class ServiceLocator {
  /** The service injector. */
  static injector: Injector;
}
