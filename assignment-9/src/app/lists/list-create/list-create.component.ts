import { Component, OnInit, EventEmitter, Output,Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { List } from '../../../../api/models/item.js';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserModule } from '@angular/platform-browser';
import { ListViewComponent } from '../list-view/list-view.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-list-create',
    templateUrl: './list-create.component.html',
    styleUrls: ['./list-create.component.scss']
})
export class ListCreateComponent implements OnInit{

    @Output() addTodo: EventEmitter<any> = new EventEmitter();
    //@Input() sideBar: ListViewComponent;

  // Declaration of variables
  title:string = '';
  desc:string;
  dueDate:Date;
  lists: Array<List>;
  titleCheck: Boolean = false;

  // injection of required components in constructor
  constructor(private http: HttpClient, private contactService: ContactService, private sideBar : ListViewComponent) { }

  ngOnInit() {
    
  }

  minDate = new Date();

  // onSubmit function to perform validation on form fields value
  onSubmit() {

      if(this.title != ''){
        this.titleCheck = true;
      }

      let check: Boolean = false;
      
      let now = new Date();
      console.log(now);
      let d = new Date(this.dueDate);

      const date = d.getDate();
      
      if (d.getFullYear() > now.getFullYear()){
        check = true;
      }else if(d.getFullYear() == now.getFullYear()){
			    if (d.getMonth() > now.getMonth()) {
              check = true;
			    }else if(d.getMonth() == now.getMonth()){
				      if (d.getDate() > now.getDate()) {
                    check = true;
				      }else if(d.getDate() == now.getDate()){
					      if(d.getHours() > now.getHours()){
                    check = true;
                }else if(d.getHours() == now.getHours()){
                  if(d.getMinutes() > now.getMinutes()){
                      check = true;
                  }
                }
					    }
			      }


		  }

    const todo = {
      title: this.title,
      desc: this.desc,
      dueDate:this.dueDate
      //completed: false
    }

    if(check && this.titleCheck){
      console.log("Before Emit");
      console.log(todo);
      this.contactService.addTodo(todo).subscribe(lists => {
        //console.log(lists);
        this.lists = lists;
        console.log(this.lists);


        //this.http.get<List[]>('http://localhost:4200');
        window.open('http://localhost:4200', '_self');
        });
      console.log("After Emit");
      alert("To-Do Item created Successfully");

      }else if(!check){
        alert("Selected Due datetime is not future datetime");
      }else if(!this.titleCheck){
        alert("Title is required!!!");
      }
  }

    
}