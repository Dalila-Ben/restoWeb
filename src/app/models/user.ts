export class Users {
  public Id: number;
  public nom: string;
  public password:string;
  public email:string;

  constructor(Id:number,nom: string,password:string,email:string) {
  this.Id = Id;
  this.nom = nom;
  this.password = password;
  this.email = email;
  }
  }
