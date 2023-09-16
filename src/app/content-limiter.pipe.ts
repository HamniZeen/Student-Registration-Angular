import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentLimiter'
})
export class ContentLimiterPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length >13){
      return value.substring(0,12)+ '...';
    }
    return value;
  }

}
