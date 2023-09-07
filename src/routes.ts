import { Request, Response, Router } from "express";
import multer from "multer";

const multerConfig = multer();

const router = Router();

router.post(
    "/products",
    multerConfig.single("file"),
    (request: Request, response: Response) => {
        console.log(request.file);
        return response.send();
        //aqui vai todo o tratamento para o banco de dados e manipulação
    }
);

export { router };