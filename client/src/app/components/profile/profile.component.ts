import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  user: any;
  isOwner: boolean = false;
  pfpPath: string = '';

  ngOnInit(): void {
    const paramsId = this.route.snapshot.paramMap.get('id');
    this.userService.getProfile(paramsId).subscribe((data: any) => {
      this.user = data.user;
      this.isOwner = data.isOwner;
      this.pfpPath = `http://localhost:3001/images/${this.user.profilePicture}`;
    });
  }
}
