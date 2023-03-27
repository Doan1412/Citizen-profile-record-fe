import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { HttpServiceService } from '../service/http-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  constructor(
    private httpService: HttpServiceService,
    private toastr: ToastrService
  ) {}
  public content!: string;
  public id!: number;
  public topic!: string;
  s = false;
  ngOnInit() {}
  submit() {
    if (this.content !== null && this.content !== undefined && this.topic !== undefined) {
      this.httpService
        .addFeedback(Number(localStorage.getItem('citizen_id')), this.content,this.topic)
        .subscribe((data) => {
          console.log(data);
          this.s = true;
        });
      if (this.s == true) {
        this.toastr.success('Opinion : ' + this.content, 'Send success', {
          positionClass: 'toast-top-right',
          timeOut: 1000,
        })
        .onTap
        .pipe(take(1))
        .subscribe(() => this.toasterSuccessClickedHandler());
        ;
      } else {
        console.log(this.content);
        this.toastr.error("","Can't send",{
          positionClass: 'toast-top-right',
          timeOut: 1000,
        });
      }
    } else {
      this.toastr.error("",'Content empty',{
        positionClass: 'toast-top-right',
        timeOut: 1000,
      });
    }
  }
  toasterSuccessClickedHandler(): void {
    throw new Error('Method not implemented.');
  }
}
