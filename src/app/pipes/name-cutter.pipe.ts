import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameCutter'
})
export class NameCutterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return value;
    if(value.length>10){
      return value.substring(0,10)+' ...';
    }else{
      return value;
    }
  }

}
