import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { CenterComponent } from './center/center.component';
import { FriendDetailComponent } from './contact/friend-detail/friend-detail.component';
import { AddFriendComponent } from './contact/add-friend/add-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ContactComponent,
    SearchComponent,
    CenterComponent,
    FriendDetailComponent,
    AddFriendComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
