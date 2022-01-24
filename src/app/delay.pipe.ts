import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'delay',
})
export class DelayPipe implements PipeTransform {
  transform(value: string, delay: number, invoker: string): string {
    console.log(`[${invoker}] invoked delay pipe`);
    const stopAt = Date.now() + delay;
    while (Date.now() < stopAt) {}
    return value;
  }
}
