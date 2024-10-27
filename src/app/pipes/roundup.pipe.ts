import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'roundUp'
})
export class RoundUpPipe implements PipeTransform {

  // returns formatted number with to nearest 0.05
  transform(value: number): number {
    return Number((Math.ceil(value * 20 ) / 20).toFixed(2));
  }
}
