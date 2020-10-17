import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currPage = 0;
  images = [
   { title : 'At the beach',
    url: 'https://images.unsplash.com/photo-1554376793-fb1223a05507?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1962&q=80' },
    {
      title : 'At the Mountain',
      url : 'https://images.unsplash.com/photo-1571404549664-f65f8709c04d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
    },
    {
      title : 'At Home',
      url : 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
    },
    {
      title : 'Road',
      url : 'https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title : 'INDIA',
      url : 'https://images.unsplash.com/photo-1524613032530-449a5d94c285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    },
    { title : 'At the beach',
    url: 'https://images.unsplash.com/photo-1554376793-fb1223a05507?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1962&q=80' },
    {
      title : 'At the Mountain',
      url : 'https://images.unsplash.com/photo-1571404549664-f65f8709c04d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
    },
    {
      title : 'At Home',
      url : 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
    },
    {
      title : 'Road',
      url : 'https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title : 'INDIA',
      url : 'https://images.unsplash.com/photo-1524613032530-449a5d94c285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    },
    { title : 'At the beach',
    url: 'https://images.unsplash.com/photo-1554376793-fb1223a05507?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1962&q=80' },
    {
      title : 'At the Mountain',
      url : 'https://images.unsplash.com/photo-1571404549664-f65f8709c04d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
    },
    {
      title : 'At Home',
      url : 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
    },
    {
      title : 'Road',
      url : 'https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title : 'INDIA',
      url : 'https://images.unsplash.com/photo-1524613032530-449a5d94c285?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
    }
  ]

  checkWindowIndex(index: number){
    return Math.abs(this.currPage - index) < 5;
  }
}
