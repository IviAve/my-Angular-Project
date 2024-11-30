import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainComponent } from './main/main.component';
import  Parse from 'parse';
import { serverURL } from 'parse';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     HeaderComponent, 
     FooterComponent, 
     MainComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

Parse.initialize('Bo35JXKXNZr4dphdXa368jnc76MG8U87bp0UsRtP', 'zbLvWCx0Q8L333hdz51x6uDCVhgTsMgWS6d0hOKc');
(Parse as any).serverURL = "<https://parseapi.back4app.com/>";
