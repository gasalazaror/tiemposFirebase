import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PersonaService } from '../../../servicios/persona.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';

    usuario: Observable<any>
    empresa: Observable<any>
    user:any
    empresaq:any

    constructor(private translate: TranslateService, public router: Router, public personaService: PersonaService) {
        this.user=''
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.usuario = this.personaService.obtenerUsuario()
        this.empresa = this.personaService.obtenerEmpresa().valueChanges()

        this.usuario.subscribe(res=>{
         
            this.user = res.email
        })
        this.empresa.subscribe(res=>{
            this.empresaq = res.nombre
        })

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {}

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('empresa');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
