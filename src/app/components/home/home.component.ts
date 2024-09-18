import { Component } from '@angular/core';
import { SrReusableModule } from 'src/app/shared/modules/se-reusable/sr-reusable.module';

@Component({
  selector: 'app-home',
  standalone: true,

  imports: [
    SrReusableModule 
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
