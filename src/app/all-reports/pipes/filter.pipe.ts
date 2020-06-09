import { Pipe, PipeTransform } from '@angular/core';
import { Report } from '../report';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(report: Report[], filterPost: string) {
    if(!report || !filterPost){
      return report;
    }else {
      console.log("report",report)
      console.log("filterpost",filterPost)
      return (report.filter(report => report.nombre == filterPost))
    } 
    
    
    
  }
  
    
    
    
  

  
}
