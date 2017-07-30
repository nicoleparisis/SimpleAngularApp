import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenizer'
})
export class TokenizerPipe implements PipeTransform {

  transform(value: string, args?: string): string {
   if(value){
        if(args){
            var addD = value.replace(/(.{1})/g, "$1" + args);
            return addD.substring(0, addD.length -1);//remove last char
        }else{
            var addD = value.replace(/(.{1})/g,"$1,");
            return addD.substring(0, addD.length -1);//remove last char
        }
        }else{
            return value;
        }
  }

}
