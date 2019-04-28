import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Message } from "primeng/components/common/api";
import { User } from "app/core/user";
import { AuthService } from "app/auth/services/auth.service";


@Component({
    moduleId: module.id,
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
    model: User;
    messages: Message[] = [];

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.model = new User();
    }

    onSubmit(): void {
        this.authService
            .login(this.model)
            .subscribe(isLoggedIn => {
                if (isLoggedIn) this.router.navigate(['/home']);
                else this.messages.push({severity: 'error', summary: 'Email/password incorrect!'});
            });
    }









}