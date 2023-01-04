import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Registration } from '../models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private cService: ContactService) { }

  // usersDB!: Registration

  user!: Registration

  users: Registration[] = []

  ngOnInit(): void {
    this.cService.getContactListItems()
      .then(result => {
        console.info('>>> items in favs: ', result)
        this.users = result
        
      }).catch(error => {
        console.error(">>> error: ", error)
      }) 
  }

  // removeContactFromList($event: any) {
  //   if (confirm(`Remove ${$event.email} from list?`)){
  //     this.cService.removeFavFromFavorites($event)
  //       .then(result => {
  //         console.info('>>> remove fav from list: ', result)
  //         alert(`${$event.email} removed from list.`)
  //         // this.router.navigate(['login']);
  //       }).catch(error => {
  //         console.error('>>> error: ', error)
  //       })
  //     }
  //   location.reload()
  // }

  removeContactFromList(i: number) {
    this.user = this.users[i]
    if (confirm(`Remove index number ${i+1} from list?`)){
      this.cService.removeFavFromFavorites(this.user)
        .then(result => {
          console.info('>>> remove fav from list: ', result)
          alert(`${this.user} removed from list.`)
          // this.router.navigate(['login']);
        }).catch(error => {
          console.error('>>> error: ', error)
        })
      }
    location.reload()
  }

}
