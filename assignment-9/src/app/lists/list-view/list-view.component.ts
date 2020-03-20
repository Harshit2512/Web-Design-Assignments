import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { List } from '../../../../api/models/item.js';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class ListViewComponent implements OnInit{

  lists: Array<List>;
  constructor(private contactService: ContactService) { }

  // OnInit method to be executed on app loading to show all ToDo items stored in database
  ngOnInit() {
    
    this.contactService.list().subscribe(lists => {
      //console.log(lists);
      this.lists = lists;
      console.log(this.lists);
    });


  }


  listItem() {
    this.contactService.list().subscribe(lists => {
      //console.log(lists);
      this.lists = lists;
      console.log(this.lists);
    });
  }

  isShown: boolean = false; // hidden by default

  showBtn=-1;
  toggleShow(index) {
    
    //this.isShown = ! this.isShown;
    this.showBtn=index;

  }

  // function to delete ToDo item from DB
  deleteTodo(todo:List) {
    // Remove From UI
    this.lists = this.lists.filter(t => t.id !== todo.id);
    // Remove from server
    this.contactService.deleteTodo(todo).subscribe();
  }

  // onToggle function to mark ToDo item as complete
  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.contactService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }
}