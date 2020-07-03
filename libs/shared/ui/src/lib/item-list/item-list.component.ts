import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'be-ui-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent {
  @Input() items;
  @Output() itemSelected  = new EventEmitter<string>();

  constructor() { }


}
