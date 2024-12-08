import express, { Application, Request, Response } from "express";
import cors from "cors";
import { registerUsers, singin } from "./controllers/UserController";
import { createTask, deleteTask, getMetrics, getTask} from "./controllers/ActivitieController";

const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.send("Hola desde mi servidor con TS");
})

app.post ("/users/create", registerUsers); 
app.post ("/users/singin", singin); 
app.post ("/task/createTasks", createTask);
app.get("/tasks/get-all", getTask); 
app.get("/data/getdata", getMetrics);
app.delete("/task/deleteTasks/:id", deleteTask);





export default app;