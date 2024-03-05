import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {

  isVisible: boolean = true;

  card = 
    {
      title: "Test de Zizou",
      picture: 'https://randomuser.me/api/portraits/lego/2.jpg',
      age: 30,
      citation: "",
    }

    toggleIsVisible(): void {
      this.isVisible = !this.isVisible;
    }

}
