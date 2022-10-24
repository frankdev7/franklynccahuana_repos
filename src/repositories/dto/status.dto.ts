export class StatusDto {

  constructor(cod: string, desc: string) {
    this.cod = cod;
    this.desc = desc;
  }

  cod: string;
  desc: string;
}