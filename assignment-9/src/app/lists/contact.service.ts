import { Injectable } from '@angular/core';
import { List } from '../../../api/models/item.js';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }


  //$scope.users = [];

    //$http.get('/details').then(function(d)
     //   {
     //       console.log(d);
     ///       $scope.users= d.data;
      //  },function(err)
      //  {
      //      console.log(err);            }
    //)
    todosUrl:string = 'http://localhost:3000/items';
  // Toggle Completed
  toggleCompleted(todo: List):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  public list(): Observable<Array<List>> {
    const lists$ = this.http.get<List[]>('http://localhost:3000/items');
    console.log(lists$);
    return lists$;
  }

  // Add Todo
   addTodo(todo:List):Observable<Array<List>> {
    console.log("In Service");
    console.log(todo);
    
    const newToDo$ = this.http.post<List>('http://localhost:3000/items', todo, httpOptions);
    console.log(newToDo$);
    return newToDo$;
  }

  // Delete Todo
  deleteTodo(todo:List):Observable<List> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<List>(url, httpOptions);
  }
}
