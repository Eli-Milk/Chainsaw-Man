import { model, Schema } from "mongoose";
import { IActivities } from "../GlobalTypes";


const ActivitiSchema = new Schema<IActivities>({
    title: {
        type: String,
        required: true
    },
    dateFinish:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum:["Activo", "Pendiente"]
    },
    idUser:{
        type:Schema.Types.ObjectId || String,
        ref:"users",
        required:true,
    },
})

export const ActivityModel = model<IActivities>('Tus Actividades', ActivitiSchema)