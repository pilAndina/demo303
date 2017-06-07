import { Component, Input } from '@angular/core';


@Component({
  selector: 'pil-rockband',
  templateUrl: 'rockband.html'
})
export class RockbandComponent {

  @Input() name: string;

  constructor() {
  }

}
