import { Date, Schema } from "mongoose"

export interface IActivities{
    title: String,
    dateFinish: String,
    description: String,
    status: "Activo"| "Pendinente",
    idUser: Schema.Types.ObjectId | String
}
export interface IUser{
    _id:String,
    name:String,
    email:String,
    lastname:String,
    password:String,
    rol:"administrator" | "client";
}