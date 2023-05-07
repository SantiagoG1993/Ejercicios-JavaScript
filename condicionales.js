// Ej.1



/* let numero1=8
let numero2=4
if (numero1>numero2){
    console.log(`${numero1} es mayor que ${numero2}`)
}
    else{
        console.log(`${numero1} es menor que ${numero2}`)
    } */







    // Ej.2


/* 
let num1=8
let num2=8
if (num1===num2){
    console.log(`${num1} es igual a ${num2}`)
}
    else{
        console.log(`${num1} es distinto a ${num2}`)
    }
 */





    // Ej 3


 /*    let numero1=45
    let numero2=45

    if (numero1>numero2){
        console.log(`${numero1} es mayor que ${numero2}`)
    }else if(numero1<numero2){
        console.log(`${(numero2)} es mayor  que ${numero1}`)
    }else{
        console.log( `${numero1} y ${numero2} son iguales`)
    } */





    // Ej. 4 CUAL DE LOS 3 NUM ES EL MAS CHICO
/* 
    let num1=8
    let num2=9
    let num3=5
    if (num1<num2 && num1<num3){
        console.log(`${num1} es el numero mas chico`)
    }
    else if (num2<num1 && num2<num3){
        console.log(`${num2} es el numero mas chico`)
    } else{console.log(`${num3} es el num mas chico`)} */





      // Ej. 5 QUE PERSONA ES MAS ALTA Y MAS GRANDE

/* let objeto1={
    nombre : 'Santiago',
    edad : 35,
    altura : 1.64
}
let objeto2={
    nombre : 'Georgina',
    edad : 31,
    altura : 1.50
}

if (objeto1.altura>objeto2.altura){
    console.log(`${objeto1.nombre} es mas alto que ${objeto2.nombre}`)
}else{
    console.log(`${objeto2.nombre} es mas alto que ${objeto1.nombre}`)
}
if (objeto1.edad>objeto2.edad){
    console.log(`${objeto1.nombre} es mayor que ${objeto2.nombre}`)
}else if(objeto1.edad===objeto2.edad){
    console.log(`${objeto1.nombre} y ${objeto2.nombre} tienen la misma edad`)
}
else{
    console.log(`${objeto2.nombre} es mayor que ${objeto1.nombre}`)
}  */







// Ej 6  CAPACITADO PARA CONDUCIR

/* let nombre= prompt(`Nombre`)
let edad=prompt(`Edad`)
let altura=prompt(`Altura en cm`)
let vision=prompt(`Vision`)

if (edad>=18 && altura>=150 && vision>=8 && vision<=10){
    console.log(`${nombre} esta capacitado para conducir`)
}else{
    console.log(`${nombre} no esta capacitado para conducir`)
} */









// Ej 7 ENTRADA AL BOLICHE


/*     let nombre=prompt(`Nombre`);
    let pase=prompt(`Tiene pase vip o normal?`)

    if (nombre==`santiago` || pase==`vip`){
        console.log(`Bienvenido ${nombre}`)
    }else{
      poseeEntrada=prompt(`Posee entrada?`) 
        if (poseeEntrada==`si`){
            let deseaUtilizar=prompt(`Desea utlizarla?`)
            if (deseaUtilizar==`si`){
                console.log(`Bienvenido ${nombre}`)
            }else{
                console.log(`Hasta luego`)
            }
        }else{
            let compra=prompt(`desea comprar la entrada?`)
            if (compra==`si`){
                let dineroDisponible=prompt(`Ingrese dinero disponible`)
                if (dineroDisponible>=1000){
                    console.log(`Aqui tiene su entrada. Bienvenido ${nombre}`)
                }else{
                    console.log(`La compra no ha podido realizarse`)
                }
            }else {
                console.log(`Hasta luego`)
            }
        }
        } */




    //Ej 8 ADIVINAR EL NUMERO


  /*  let numeroIncognita=6
   let numeroIngresado=prompt(`Ingrese un numero del 1 al 10`);

   if (numeroIngresado>numeroIncognita){
    console.log(`El numero ingresado es mayor, vuelve a intentarlo`);
     numeroIngresado=prompt(`Ingrese un numero del 1 al 10`);
    if (numeroIngresado>numeroIncognita){
        console.log(`El numero ingresado es mayor, vuelve a intentarlo`);
         numeroIngresado=prompt(`Ingrese un numero del 1 al 10`);
         if(numeroIngresado>numeroIngresado1){
            console.log(`El numero ingresado es mayor, vuelve a intentarlo`)
         }}
    }else if(numeroIngresado<numeroIncognita){
    console.log(`El numero ingresado es menor, vuelve a intentarlo`)
    numeroIngresado=prompt(`Ingrese un numero del 1 al 10`);
    if (numeroIngresado<numeroIncognita){
        console.log(`El numero ingresado eso menor, vuelva a intentarlo`)
        numeroIngresado=prompt(`Ingrese un numero del 1 al 10`)
        if(numeroIngresado<numeroIncognita){
            console.log(`El numero ingresado eso menor, vuelva a intentarlo`)
        }
    }
   }else{
    console.log(`Ganaste, has adivinado el
número`)
   } */




   // Ej 9   INFANTE ADULTO O ANCIANO

/*    let edad=prompt(`Ingrese su edad`)

   if (edad>0 && edad<=12){
    console.log(`Eres un infante`)
   }else if(edad>=13 && edad<=18){
    console.log(`Eres adolescente`)
   }else if(edad>=19 && edad<=45){
    console.log(`Eres adulto`)
   }else if(edad>=45 && edad<=100){
    console.log(`Eres un anciano`)
   }else{
    console.log(`En realidad tienes esa edad?`)
   } */



   //Ej 10   PIEDRA PAPEL O TIJERAS


/* let jugador1=prompt(`Jugador 1`);
let jugador2=prompt(`Jugador 2`);

if (jugador1==`piedra` && jugador2==`piedra`){
    console.log(`Empate`)
}else if (jugador1==`piedra` && jugador2==`papel`) {
    console.log(`Ha ganado el jugador 2`)
}else if (jugador1==`piedra` && jugador2==`tijeras`){
    console.log(`Ha ganado el jugador 1`)
}else if (jugador1==`papel` && jugador2==`piedra`){
    console.log(`Ha ganado el jugador 1`)
}else if (jugador1==`papel` && jugador2==`papel`){
    console.log(`Empate`)
}else if (jugador1==`papel` && jugador2==`tijeras`){
    console.log(`Ha ganado el jugador 2`)
}else if (jugador1==`tijeras` && jugador2==`piedra`){
    console.log(`Ha ganado el jugador 2`)
}else if (jugador1==`tijeras` && jugador2==`papel`){
    console.log(`Ha ganado el jugador 1`)
}else if (jugador1==`tijeras` && jugador2==`tijeras`){
    console.log(`Empate`)
}else {
    console.log(`Uno de los jugadores ha hecho trampa`)
} */







// Ej 11 CONDICIONAL SWITCH `COLORES`



/*    let color=prompt(`ingrese un color`)

switch (color){
    case `Blanco`:
        console.log(`Falta de color`);
        break;
    case `Negro`:
        console.log(`Falta de color`);
        break;
    case `Verde`:
        console.log(`El color de la naturaleza`);
        break;
    case `Azul`:
        console.log(`El color del agua`);
        break;
    case `Amarillo`:
        console.log(`El color del sol`);
        break;
    case `Rojo`:
        console.log(`El color del fuego`);
        break;
    case `Marron`:
        console.log(`El color de la tierra`)
        break;
    default:
            console.log(`Excelente eleccion, no lo teniamos pensado`)
} */
   






//Ej 12




/* let operacion=prompt(`Suma, Resta, Multiplicacion, Division`);
let numero1=Number(prompt(`Numero 1`));
let numero2=Number(prompt(`Numero 2`));

if (operacion==`suma`){
    console.log(`El resulta de ${numero1} mas ${numero2} es igual a ${numero1+numero2}`)
}else if( operacion==`resta`){
    console.log(`El resulta de ${numero1} menos ${numero2} es igual a ${numero1-numero2}`)
}else if( operacion==`multiplicacion`){
    console.log(`El resulta de ${numero1} mutiplicado por ${numero2} es igual a ${numero1*numero2}`)
}else if( operacion==`division` && numero2!=0 ){
    console.log(`El resulta de ${numero1} dividido ${numero2} es igual a ${numero1/numero2}`)
}else if(operacion==`division`&& numero2==0){
    console.log(`ERROR, no se puede dividir por 0`)
}
 */



//Ej. 13 DATOS DEL DNI

/* 
let numDni=prompt(`Numero de DNI`);
let apellido=prompt(`Apellido`);
let nombre=prompt(`Nombre`);
let sexo=prompt(`Sexo`);
let fechaDeNacimiento=prompt(`Fecha de Nacimiento`);
let fechaDeEmision=prompt(`Fecha de emision`);
let fechaDeVencimiento=prompt(`Fecha de vencimiento`);
let numTramite=prompt(`Numero de tramite`);

let todosLosDatos=prompt(`DNI: ${numDni}
Nombre: ${nombre}
Apellido: ${apellido}
Sexo: ${sexo}
Fecha de Nacimiento: ${fechaDeNacimiento}
Fecha de emision: ${fechaDeEmision}
Fecha de Vencimiento: ${fechaDeVencimiento}
Numero de tramite: ${numTramite}
Los datos ingresados son correctos?`)
if (todosLosDatos==`si`){
    const dni={
        Nombre : nombre,
        Apellido : apellido,
        Sexo : sexo,
        FechaDeNacimiento : fechaDeNacimiento,
        FechaDeEmision : fechaDeEmision,
        FechaDeVencimiento : fechaDeVencimiento,
        NumeroDeTramite : numTramite,
    }
    console.table(dni)
    console.log(`Su registo ha sido exitoso`)
}else{
    console.log(`Vuelva a intentarlo en un mes`)
} */

                    //BUCLES


// Ej 1   MULTIPLICACION


/* let numero=2
for (let i=1; i<=10; i++){
    console.log(`${i} X ${numero} = ${i*numero}`);
} */


// Ej 2 ACUMULAR NUMERO HASTA QUE SE INGRESE 0


/* let numero=prompt(`Ingrese numero para acumular`)
let numAcumulados=[]
while (numero !=0){
        numAcumulados.push(numero) 
    numero=prompt(`ingrese numero`)
}
console.log(numAcumulados) */

//Ej 3 NUMERO SECRETO

/* let ultimoNum=numAcumulados[numAcumulados.length-1]
let numeroIngresado=prompt(`Ingrese el numero secreto`)
while (numeroIngresado!=ultimoNum ){
    if(numeroIngresado>ultimoNum){
        console.log(`El numero ingresado es mayor`)
    }else if(numeroIngresado<ultimoNum){
        console.log(`El numero ingresado es menor`);
    }
    numeroIngresado=prompt(`Ingrese el numero secreto`)
    if (numeroIngresado==ultimoNum){
        console.log(`Felicitaciones descubriste el numero secreto!`)
    }
} */

// Ej 4 NUMEROS PRIMOS


/* let numeroPrimo = []

let numeroIngresado = Number(prompt("Ingrese un número: "))

for (let i = 0; i <= numeroIngresado; i++) {

  if( numeroIngresado % i == 0){
    numeroPrimo.push(i);
  }

}

for (let i = 0; i < numeroPrimo.length; i++) {
  console.log(numeroPrimo[i])
}

if(numeroPrimo.length > 3){
  console.log("El número no es primo")
}else{
  console.log("El número es primo")
}
 */

//Ej NUMERO 5 DIVISORES
/* let numero=20

for (let i=1; i<= numero; i++){
    if (numero % i===0){
        console.log(i)
    }
} */

//EJ NUMERO 6 MOSTRAR ELEMENTOS DE UN ARRAY
/* 
let arregloNumeros=[10,20,30,40,50,60,70,80,90,100]

for (let i=0; i<arregloNumeros.length; i++){
    console.log(arregloNumeros[i])
}
 */

// EJ 7 MOSTRAR ELEMENOS DEL ARRAY MULTIPLICADOS POR 2

/* let arregloNumeros=[10,20,30,40,50,60,70,80,90,100]

for (let i=0; i<arregloNumeros.length; i++){
    console.log(arregloNumeros[i]*2)
} */

// EJ 8 INTEGRANTES DE LA FAMILIA

/* let familia=[
    {nombre:`Santiago`, 
    apellido:`Gamarra`,
    altura:167,
    edad:29,
},
    {nombre:`Juan`, 
    apellido:`Perez`,
    altura:178,
    edad:32,
},

    {nombre:`Georgina`, 
    apellido:`Gamarra`,
    altura:169,
    edad:24,
},
    {nombre:`Manuel`, 
    apellido:`Perez`,
    altura:190,
    edad:32,
},
    {nombre:`Graciela`, 
    apellido:`Costa`,
    altura:167,
    edad:50,}
]
for (let i=0; i<familia.length; i++){
    console.log(`Hola mi nombre es ${familia[i].nombre} ${familia[i].apellido}, mido ${familia[i].altura} cm y tengo ${familia[i].edad} años`)
} */

//EJ 9 MOSTRAR SOLO NUMERO IMPARES
/* 
let arregloNumeros=[13,20,33,40,53,60,75,80,90,100]

for (let i=0; i<arregloNumeros.length; i++){
    if(arregloNumeros[i]%2!=0){
    console.log(arregloNumeros[i])
}
} */


//EJ 10
/* 
let numeroIngresado=Number(prompt(`Ingrese un numero`));
let numerosImpares=[];
let numerosPares=[];
let sumaPares=0
let sumaImpares=0

while (numeroIngresado!=0){
    if (numeroIngresado%2==0){
        numerosPares.push(numeroIngresado);
    }else{
        numerosImpares.push(numeroIngresado)
    }
    numeroIngresado=Number(prompt(`Ingrese un numero`))
}
for (let i=0; i<numerosPares.length;i++){
    sumaPares=sumaPares+numerosPares[i]
}
for (let i=0; i<numerosImpares.length;i++){
    sumaImpares=sumaImpares+numerosImpares[i]
}
console.log(sumaPares)
console.log(sumaImpares) */

// EJ 11 MOSTRAR EL NUM MAYOR


/* let arregloNumeros=[13,23,33,40,53,60,1202,80,232,100]
let mayor=0

for (let i=0; i<arregloNumeros.length; i++){
 if(arregloNumeros[i]>mayor){
    mayor=arregloNumeros[i]
 }
}
console.log(mayor) */


// EJ 12 MOSTRAR EL NUM MENOR

/* let arregloNumeros=[13,23,33,1,53,60,1202,80,232,100]
let menor=arregloNumeros[0]

for (let i=0; i<arregloNumeros.length; i++){
    if(arregloNumeros[i]<menor){
        menor=arregloNumeros[i]
    }
}
   console.log(menor) */

   //EJ 13 PIEDRA PAPEL O TIJERAS
/* 
   let jugador1=prompt(`Nombre jugador 1`);
   let jugador2=prompt(`Nombre jugador 2`);
   let manoJ1=prompt(`Jugador 1: Piedra, papel o tijeras?`)
   let manoJ2=prompt(`Jugador 2: Piedra, papel o tijeras?`)

  while(manoJ1!==manoJ2){
    if( manoJ1 ==`piedra` && manoJ2==`tijeras` || manoJ1 ==`papel` && manoJ2==`piedra` || manoJ1 ==`tijeras` && manoJ2==`papel`){
        console.log(`ha ganado ${jugador1}`)       
    }else if (manoJ2 ==`piedra` && manoJ1==`tijeras` || manoJ2 ==`papel` && manoJ1==`piedra` || manoJ2 ==`tijeras` && manoJ1==`papel`){
        console.log(`ha ganado ${jugador2}`)
    }else if(manoJ1===manoJ2)
    {console.log(`Empate`)
}
    manoJ1=prompt(`${jugador1}: Piedra, papel o tijeras?`)
    manoJ2=prompt(`${jugador2}: Piedra, papel o tijeras?`)
}
 */

//EJ 14 TRIANGULO DE ASTERISCOS

/* for (let i=1; i<=5; i++){
    let asterisco="";
    for (let j=1; j<=[i]; j++){
       asterisco+=`*`
    }
    console.log(asterisco)
    } */



    // EJ 15 TRIANGULO INVERTIDO



/*     for (let i=5; i>=1; i--){
        let asterisco="";
        for (let j=1; j<=[i]; j++){
           asterisco+=`*`
        }
        console.log(asterisco)
        }
 */

        //EJ 16 ORDENAR ARRAY

        // ej 2 bucles por segunda vez

    /*     let numeroIngresado=parseInt(prompt(`Ingrese un numero`))
        let numerosAcumulados=[]
        while(numeroIngresado!=0){
            numerosAcumulados.push(numeroIngresado)
            numeroIngresado=parseInt(prompt(`Ingrese un numero`))
        }
        console.log(numerosAcumulados) */

        // ej 3 bucles por segunda vez

        /* let numeroFinal=90;

        if(numerosAcumulados[numerosAcumulados.length-1]>1 && numerosAcumulados[numerosAcumulados.length-1]<100){
            numeroFinal=numerosAcumulados[numerosAcumulados.length-1]
        }
   
        let IngNumero=parseInt(prompt(`Ingrese un numero del 1 al 100`))
        
        while(IngNumero!=numeroFinal){
            if(IngNumero>numeroFinal){
                console.log(`El numero ingresado es mayor`)
            }else if(IngNumero<numeroFinal){
                console.log(`El numero ingresado es menor`);
            }
            IngNumero=parseInt(prompt(`Ingrese un numero del 1 al 100`))
        }
        console.log(`Has adivinado el numero`) */

        //ej 4 por segunda vez






//EJ 16 no me saleeee

/* function compararNumeros(num1,num2){
    if(num1==num2){
        console.log(`${num1} y ${num2} son iguales`);
    }else if(num1>num2){
        console.log(`${num1} es mayor que ${num2} `);
    }else{
        console.log(`${num1} es mayor  que ${num2} `)
    }
}
compararNumeros(200,200) */
/* 
const sumar=(num1, num2)=> num1+num2;

console.log(sumar(8,9)) */


let array=[`santi`,`manu`,`pedro` ];

/* const multiplicar=num1=>console.log(num1*5);
let numeros=[] */
/* 
function sumar(a,b,c){
    console.log(a+b+c)
}

array.forEach(sumar) */


array.map(nombre=>console.log(`mi nombre es ${nombre}`))