import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { RouterModule} from'@angular/router';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { AComponent } from './components/a/a.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { GetdataService} from './services/getdata.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    AComponent,
    InputsComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'todolist',component:TodolistComponent},
      { path: '', redirectTo:'默认路由路径', pathMatch:'full'},
 
    ])
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
