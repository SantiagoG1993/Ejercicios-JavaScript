
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

    


