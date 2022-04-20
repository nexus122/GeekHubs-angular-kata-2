import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Variables
  title = 'GeekHubs-angular-kata-2';
  count = 0;

  // Funciónes
  addNumber(){    
    // Sumamos uno al contador
    this.count = this.count + 1;
    return this.count;
  }
  reduceNumber(){
    // Si el numero va a ser menor que 0 no dejamos
    if(this.count <= 0){
      return;
    }

    // Restamos uno al contador
    this.count = this.count - 1;
    return this.count;
    
  }
}

