import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteComponent } from './reporte/reporte.component';
import { ReporteClienteEnviadoComponent } from './reporte-cliente-enviado/reporte-cliente-enviado.component';
import { EstadoComponent } from './estado/estado.component';
import { AdminComponent } from './admin/admin.component';
import { ReportesActivosComponent } from './reportes-activos/reportes-activos.component';
import { ListaReportesComponent } from './lista-reportes/lista-reportes.component';
import { ReporteAdminComponent } from './reporte-admin/reporte-admin.component';
import { ReporteAdmin2Component } from './reporte-admin2/reporte-admin2.component';
import { ReporteEnviadoComponent } from './reporte-enviado/reporte-enviado.component';
import { ContainerHomeComponent } from './container-home/container-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GraficaComponent } from './grafica/grafica.component';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', data: {animation: 'inicio'}, component: ContainerHomeComponent},
  { path: 'reporte', data: {animation: 'reporte'}, component: ReporteComponent},
  { path: 'cliente-enviado', component: ReporteClienteEnviadoComponent},
  { path: 'estado', data: {animation: 'estado'}, component: EstadoComponent},
  { path: 'admin', data: {animation: 'admin'}, component: AdminComponent, },
  { path: 'reportes-activos', component: ReportesActivosComponent},
  { path: 'lista-reportes', component: ListaReportesComponent},
  { path: 'reporte-admin', component: ReporteAdminComponent},
  { path: 'reporte-admin2', component: ReporteAdmin2Component},
  { path: 'reporte-enviado', component: ReporteEnviadoComponent},
  { path: 'grafica', component: GraficaComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]

})
export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routingComponents = [ContainerHomeComponent, ReporteComponent, ReporteClienteEnviadoComponent, EstadoComponent, AdminComponent, ReportesActivosComponent, ListaReportesComponent, ReporteAdminComponent, ReporteAdmin2Component, ReporteEnviadoComponent, GraficaComponent, PageNotFoundComponent];
