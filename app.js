//imprimer tabla del 5

const { crearArchivo } = require(`./helpers/multiplicar`);
const colors = require(`colors`);
const argv = require(`./config/yargs`);

    
console.clear();
      
crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow, "creado"))
    .catch(err=>console.log(err));
    
    //option("l")
    //listar
    //boolean
    //default false    
// console.log("base: yargs",argv.base);

/*NO USAR ESTA FORMA */
//console.log(process.argv);
// const [ , , arg3="base=5"] = process.argv;
// const [ , base=5] = arg3.split("=");


//const base = 3;