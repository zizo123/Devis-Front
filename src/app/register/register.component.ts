import { Component, OnInit } from '@angular/core';
import { User } from "app/core/user";
import { AuthService } from "app/auth/services/auth.service";
import { Message } from "primeng/components/common/message";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  model: User;
    messages: Message[] = [];

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.model = new User();
    }

    onSubmit(): void {
        this.messages = [];
        this.authService
            .register(this.model)
            .subscribe(isRegistered => {
                if (isRegistered) {
                  this.messages.push({severity: 'info', summary: 'Registered successfully!'});
                  this.router.navigate(['/auth']);
                }
                else this.messages.push({severity: 'error', summary: 'Email already in use'});

            });
    }

}
