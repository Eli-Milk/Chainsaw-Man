interface IUser{
    _id:String,
    name:String,
    email:String,
    lastname:String,
    password:String,
    rol:"administrator" | "client";
}

declare namespace Express{
    export interface Request{
        user?:IUser
    }
}


