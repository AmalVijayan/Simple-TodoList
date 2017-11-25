import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  ToDoList = [];
  NewItem = '';
  Completed = [];
  addToList() {
    if (this.NewItem !== '') {
   this.ToDoList.push(this.NewItem);
   this.NewItem = '';
  }
  }
  removeFromList(ItemIndex) {
    this.ToDoList.splice(ItemIndex, 1);
  }
  markCompleted(DoneItemInd) {
   this.Completed.push(this.ToDoList[DoneItemInd]);
    this.ToDoList.splice(DoneItemInd, 1);
  }
  removeFromCompleted(index) {
    this.Completed.splice(index, 1);
  }
}
