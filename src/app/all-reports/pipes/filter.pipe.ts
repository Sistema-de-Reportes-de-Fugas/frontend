import { Pipe, PipeTransform } from '@angular/core';
import { Report } from '../report';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { filter } from 'rxjs/operators';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  report = '';

  transform(values: any[], filterPost: any): any[] {
    if (!values) { return []; }
    if (!filterPost) { return values; }

    filterPost = filterPost.toLowerCase();
    if (filterPost.indexOf != undefined) {
      return (values.filter(report => report.nombre.toLowerCase().includes(filterPost)));
    }

      /*
      Por _id
      transform(values: any[], filterPost: any): any[] {
      if(!values) return [];
      if(!filterPost) return values;

      filterPost = filterPost.toLowerCase();
      console.log(filterPost)

      if (filterPost.indexOf != undefined) {
        return (values.filter(report => report._id.includes(filterPost)));
      }

      Por nombre:
      transform(report: Report[], filterPost: string) {
        if(!report || !filterPost){
          return report;
        }else {
          console.log("report",report)
          console.log("filterpost",filterPost)
          return (report.filter(report => report.nombre == filterPost))
        }

    }


      */

  }

}
