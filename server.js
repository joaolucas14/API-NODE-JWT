import express from "express";
import publicRoutes from "./routes/public.js";
const app = express();

app.use(express.json());

app.use("/", publicRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

// mongodb+srv://joaolucans:<db_password>@cluster0.n6ejc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
