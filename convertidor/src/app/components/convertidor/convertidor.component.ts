import { Component } from '@angular/core';
import { ConvertidorMonedasService } from '../../services/convertidor-monedas.service';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {

  public cantidad:number = 0;
  public monedaOrigen = 'USD';
  public monedaDestino = 'EUR';
  public total:number = 0;
  public monedas:string[] = ['USD', 'EUR', 'LIBRA', 'MXN', 'GTQ'];

  constructor(private monedaService:ConvertidorMonedasService){}

  convertir = () => {
    this.total = this.monedaService.convertirMoneda(this.cantidad, this.monedaOrigen, this.monedaDestino);
  }
}
