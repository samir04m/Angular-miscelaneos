import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStylesComponent } from './components/ng-styles/ng-styles.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStylesComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
