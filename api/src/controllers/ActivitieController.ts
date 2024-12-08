import { ActivityModel } from '../models/activitiesmodel';
import { UserModel } from '../models/UserModel';
import {Request, Response} from "express"

export const createTask = async (req:Request, res:Response):Promise<void> =>{
        try {

        const title = req.body.title;
        const dateFinish = req.body.dateFinish;
        const description = req.body.description;
        const status = req.body.status;
        const idUser = req.body.idUser;
        
        if(!title||!dateFinish||!description||!status||!idUser){
            res.status(400).json({msg:"Faltan parametros para crear la actividad"})
            return;
        }

        const activity = await ActivityModel.create({
            title,
            dateFinish,
            description,
            status,
            idUser
        });

        res.status(200).json({msg:"Tarea almacenado con exito"});
        console.log("Actividad", activity)

        //validar exst ususarui]

        const user = await  UserModel.findById(idUser);
        if(!user){
            res.status(400).json({msg:"El usuario que intenta crear la actividad no existe"})
            return;
        }
        
        } catch (error) {
            console.log("El Error ocurrido", error);
            res.status(500).json({msg:"Ocurrio un error al Crear la tarea"});
            return;
        }
    }

    export const getTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const tasks = await ActivityModel.find();
            res.status(200).json({ msg: "Datos Obtenidos con éxito", tasks })
            return; 
        } catch (error) {
            res.status(500).json({ msg: "Hubo un error al obtenr los datos", error})
            console.error("Hubo un error al obtener loa datos")
            return;
        }
    }

    export const getMetrics = async (req: Request, res: Response): Promise<void> => {
        try {
            const numberOfUsers = await UserModel.find({rol :"client"}).countDocuments();
            const numberOfTasks = await ActivityModel.find().countDocuments();
            res.status(200).json({ msg: "Datos Obtenidos con éxito", numberOfTasks, numberOfUsers })
            return
    
        } catch (error) {
            res.status(500).json({ msg: "Hubo un error al obtenr los datos", error})
            console.error("Hubo un error al obtener loa datos")
            return
        }
    }

    export const deleteTask = async (req: Request, res: Response): Promise<void> => {
        const id = req.params.id
    try {
        const task = await ActivityModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Tarea eliminada con éxito", task })
        return;
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la tarea", error })
        return;
    }
    };
