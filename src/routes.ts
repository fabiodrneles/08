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

// Defino uma rota POST para o endpoint /products.
router.post(
  "/products",
  multerConfig.single("file"),
  async (request: Request, response: Response) => {

    // Aqui, eu acessei a propriedade file do objeto request. A propriedade file é um objeto File que contém informações sobre o arquivo enviado pelo usuário.
    const { file } = request;

    // Se o usuário enviou um arquivo, eu verifico se o arquivo é válido.
    if (file) {

      // Aqui, eu acessei a propriedade buffer do objeto file. A propriedade buffer é um array de bytes que representa o conteúdo do arquivo.
      const buffer = file.buffer;

      // Aqui, eu criei um objeto Readable a partir do array de bytes. O objeto Readable pode ser usado para ler o conteúdo do arquivo.
      const readableFile = new Readable();
      readableFile.push(buffer);
      readableFile.push(null);

      // Aqui, eu criei um objeto readline.Interface a partir do objeto Readable. O objeto readline.Interface pode ser usado para ler linhas do arquivo.
      const productsLine = readline.createInterface({
        input: readableFile,
      });

      // Aqui, eu iterei sobre as linhas do arquivo e as imprimi no console.
      for await(let line of productsLine){
        console.log(line);
      }
    }

    // Se o usuário não enviou um arquivo, eu simplesmente retorno uma resposta vazia.
    return response.send();

    // Aqui, eu deixaria o código para o tratamento do banco de dados e da manipulação do arquivo.
  }
);

// Exporto o roteador para que ele possa ser usado em outras partes do aplicativo.
export { router };
