import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReqresService } from 'src/app/services/reqres.service';
import { TResource } from 'src/app/types/resource';

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.scss'],
})
export class ResourcesPageComponent implements OnInit {
  public resources$: Observable<TResource[]> = new BehaviorSubject([]);

  constructor(private _reqresService: ReqresService) {}

  ngOnInit(): void {
    this.resources$ = this._reqresService.getResources();
  }
}
