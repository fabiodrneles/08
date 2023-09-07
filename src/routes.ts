// Importo os módulos Express, Readable e Readline.
import { Request, Response, Router } from "express";
import { Readable } from "stream";
import readline from "readline";

// Importo o módulo Multer, que é usado para lidar com uploads de arquivos.
import multer from "multer";

// Crio uma instância do Multer com as configurações padrão.
const multerConfig = multer();

// Crio um roteador Express.
const router = Router();

// Defino uma interface para representar um produto.
interface Product {
    code_bar: string;
    description: string;
    price: number;
    quantity: number;
}

// Defino uma rota POST para o endpoint /products.
router.post(
    "/products",
    multerConfig.single("file"),
    async (request: Request, response: Response) => {

        // Aqui, eu acessei a propriedade file do objeto request. A propriedade file é um objeto File que contém informações sobre o arquivo enviado pelo usuário.
        // **(1)**
        const { file } = request;

        // Se o usuário enviou um arquivo, eu verifico se o arquivo é válido.
        // **(2)**
        if (file) {

            // Aqui, eu acessei a propriedade buffer do objeto file. A propriedade buffer é um array de bytes que representa o conteúdo do arquivo.
            // **(3)**
            const buffer = file.buffer;

            // Aqui, eu criei um objeto Readable a partir do array de bytes. O objeto Readable pode ser usado para ler o conteúdo do arquivo.
            // **(4)**
            const readableFile = new Readable();
            readableFile.push(buffer);
            readableFile.push(null);

            // Aqui, eu criei um objeto readline.Interface a partir do objeto Readable. O objeto readline.Interface pode ser usado para ler linhas do arquivo.
            // **(5)**
            const productsLine = readline.createInterface({
                input: readableFile,
            });

            // Aqui, eu criei um array para armazenar os produtos lidos do arquivo.
            const products: Product[] = [];

            // Aqui, eu iterei sobre as linhas do arquivo e as armazenei no array de produtos.
            for await (let line of productsLine) {
                const productLineSplit = line.split(",");
                products.push({
                    code_bar: productLineSplit[0],
                    description: productLineSplit[1],
                    price: Number(productLineSplit[2]),
                    quantity: Number(productLineSplit[3]),
                });
            }

            // Aqui, eu retorno uma resposta JSON com os produtos lidos do arquivo.
            // **(7)**
            return response.json(products);
        }

        // Se o usuário não enviou um arquivo, eu simplesmente retorno uma resposta vazia.
        // **(8)**
        return response.send();

        // Aqui, eu deixaria o código para o tratamento do banco de dados e da manipulação do arquivo.
        // **(9)**
    }
);

// Exporto o roteador para que ele possa ser usado em outras partes do aplicativo.
export { router };
