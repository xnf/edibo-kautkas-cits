import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private profileService: ProfileService) {
    setInterval(()=>{
      this.profileService.name = String(Math.random()*1000);
    }, 1000);


  }
}
