import { Component } from '@angular/core';
import { UserRegistradoService } from '../user-registrado.service';


@Component({
  selector: 'app-queja',
  templateUrl: './queja.component.html',
  styleUrl: './queja.component.css'
})

export class QuejaComponent {

  constructor(private userService: UserRegistradoService) { }


}
