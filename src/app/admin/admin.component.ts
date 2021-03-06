import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpinnerService, AuthService } from '../core';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { TokenResponse } from '../core/models';

class Credentials {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  apiBase: string;
  error: string;
  success: boolean;
  credentials: Credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private spinnerService: SpinnerService,
    private authService: AuthService
  ) {
    this.success = false;
    this.apiBase = environment.apiBase;
  }

  ngOnInit() {
  }

  register() {
    this.success = false;
    this.http.post(`${this.apiBase}/api/register`, this.credentials).pipe(
      tap(_ => this.spinnerService.show())).subscribe((res: TokenResponse) => {
        this.error = '';
        this.toggleLogState(res);
      }, (err) => {
        this.error = err.message;
      });
  }

  private toggleLogState(res: TokenResponse) {
    if (res.token) {
      this.handleSuccess();
      this.spinnerService.hide();
    }
  }

  handleSuccess() {
    this.credentials = new Credentials();
    this.success = true;
  }
}
