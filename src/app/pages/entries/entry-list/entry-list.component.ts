import { Component, OnInit } from '@angular/core';

import { Entry } from '../shared/entry.model'
import { EntryService } from '../shared/entry.service'

@Component({
  selector: 'app-Entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private categoryService: EntryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      entries => this.entries = entries,
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteEntry(Entry: any) {

    const mustDelete = confirm('Deseja relamente excluir este item?')

    if (mustDelete) {
      this.categoryService.delete(Entry.id).subscribe(
        () => this.entries = this.entries.filter(el => el != Entry),
        () => alert('Erro ao tentar excluir')
      )
    }
  }

}
