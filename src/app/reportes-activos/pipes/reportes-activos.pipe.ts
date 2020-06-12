import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class ReportesActivosPipe implements PipeTransform {
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

