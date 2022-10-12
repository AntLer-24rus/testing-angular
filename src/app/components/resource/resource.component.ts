import { Component, Input } from '@angular/core';
import { TResource } from 'src/app/types/resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent {
  @Input() resource!: TResource;

  public hover = false;
}
