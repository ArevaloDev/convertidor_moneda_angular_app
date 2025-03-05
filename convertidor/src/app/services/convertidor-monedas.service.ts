import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertidorMonedasService {

  constructor() { }
  private tasasDeCambio: Record<string, Record<string, number>> = {
    USD: {USD: 1, EUR: 0.94, LIBRA: 0.78, MXN: 20.61, GTQ: 7.66},
    EUR: {USD: 1.06, EUR: 1, LIBRA: 0.83, MXN: 20.61, GTQ: 7.66},
    LIBRA: {USD:1.28, EUR:1.20, LIBRA: 1, MXN: 20.61, GTQ: 7.66},
    MXN: {USD: 0.049, EUR: 0.046, LIBRA: 0.038, MXN: 1, GTQ: 7.66},
    GTQ: {USD: 0.13, EUR: 0.12, LIBRA: 0.10, MXN:2.69, GTQ: 1 }
  };

  convertirMoneda = (cantidad:number, monedaOrigen:string, monedaDestino:string) : number => {
    const tasa = this.tasasDeCambio[monedaOrigen]?.[monedaDestino] ?? 1;
    const cantidadConvertida = (cantidad * tasa ).toFixed(2);
    const total = parseFloat(cantidadConvertida)
    return total;
  }

}
