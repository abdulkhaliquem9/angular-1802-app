import { Component, Input } from '@angular/core';
import type { Person } from '../../constants/data';

type HeaderType = {
  label: string; key: string
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() data!: Person[];
  @Input() tableHeader!: HeaderType[];
}
