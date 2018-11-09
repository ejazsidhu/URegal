export class User {
    public ID:number;
    public Username:string;
    public Password:string;
    public Phone:string;
    public Email:string;
     // fields for change password page
     public OldPassword = '';
     public NewPassword = '';

     constructor() {
         this.ID=null;
         this.Username='';
         this.Email='';
         this.Phone='';
         this.Password='';

         
     }

}
