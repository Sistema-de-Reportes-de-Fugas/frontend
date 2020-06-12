import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderNoRibbonComponent } from './header-no-ribbon/header-no-ribbon.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AllReportsComponent } from './all-reports/all-reports-component/all-reports.component';
import { GraficaComponent } from './grafica/grafica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Traducción
import { registerLocaleData } from '@angular/common'
import localeMX from '@angular/common/locales/es-MX';
import localeUS from '@angular/common/locales/en';

// Services
import { DataApiService } from './services/data-api.service';
import { RouterModule } from '@angular/router';

//Externals
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './all-reports/pipes/filter.pipe';
import { ReportesActivosPipe } from './reportes-activos/pipes/reportes-activos.pipe';
import { ReporteAdmin2Component } from './reporte-admin2/reporte-admin2.component';


registerLocaleData( localeMX, 'es-MX');
registerLocaleData( localeUS, 'us');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    HeaderAdminComponent,
    PageNotFoundComponent,
    HeaderNoRibbonComponent,
    AllReportsComponent,
    GraficaComponent,
    FilterPipe,
    ReportesActivosPipe,
    ReporteAdmin2Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
