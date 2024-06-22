import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private data: any = {};

  setData(key: string, value: any) {
    this.data[key] = value;
    console.log(this.data)
  }

  getData(key: string) {
    return this.data[key];
    console.log(this.data)
  }
}
