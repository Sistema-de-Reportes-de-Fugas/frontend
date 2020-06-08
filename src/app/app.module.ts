import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderNoRibbonComponent } from './header-no-ribbon/header-no-ribbon.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { TranslateComponent } from './translate/translate.component';
import { AllReportsComponent } from './all-reports/all-reports-component/all-reports.component';
import { GraficaComponent } from './grafica/grafica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Services
import { DataApiService } from './services/data-api.service';
import { RouterModule } from '@angular/router';

//Externals
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './all-reports/pipes/filter.pipe';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslateComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    HeaderAdminComponent,
    PageNotFoundComponent,
    HeaderNoRibbonComponent,
    AllReportsComponent,
    GraficaComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
