import{ bd } from "./dataBase/conecct.js";
import app from "./app.js" 



async function main(){
    try {
        //await bd.authenticate();
        //console.log("Conexion a la base de datos establecida");
        await bd.sync({alter: false})
        app.listen(3000);
        console.log("Servidor escuchando en el puerto",3000);

    } catch (error) {
        console.error("Conexion a la base de datos fallida",error);
    }

}
main();