import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { NewChildComponent } from './new-child/new-child.component';
import { TireComponent } from './ams-ng-tire/ams-ng-tire.component';

@NgModule({
  declarations: [
    HelloWorldComponent,
    ChildComponentComponent,
    NewChildComponent,
    TireComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [HelloWorldComponent],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {

    const custom = createCustomElement(HelloWorldComponent, { injector: this.injector });
    customElements.define('app-hello-world-web', custom);

    const amsNgTireComponent = createCustomElement(TireComponent, { injector: this.injector });
    customElements.define('ams-tire-web', amsNgTireComponent);
  }
  ngDoBootstrap() {}
 }
