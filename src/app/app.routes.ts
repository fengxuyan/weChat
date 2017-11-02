import {Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import {ContactComponent} from './contact/contact.component';

import {SearchComponent} from './search/search.component';
import {CenterComponent} from './center/center.component';
import {FriendDetailComponent} from './contact/friend-detail/friend-detail.component';
import {AddFriendComponent} from './contact/add-friend/add-friend.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [

    ]
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'center',
    component: CenterComponent,
  }
  ,
  {
    path: 'addFriend',
    component: AddFriendComponent,
  },
  {
    path: 'friend-detail',
    component: FriendDetailComponent,
  }


];
