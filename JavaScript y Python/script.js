    /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Para acceder a un elemento HTML, JavaScript puede usar el document.getElementById(id)método:
    document.getElementById("demo").innerHTML = 5 + 6;

    Para fines de prueba, es conveniente utilizar document.write():
    document.write(5 + 6);  Este eliminará todo el HTML existente.

    Cuadro de alerta para mostrar datos:
    window.alert(5 + 6);

    JavaScript tiene tipos dinámicos. 
    Esto significa que la misma variable se puede utilizar para contener diferentes tipos de datos.
    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        function mostrar() { 
            {
            document.getElementById("titulo").innerHTML = "Imprimir y Variables";
            }
            
            const pi = 3.141592653589793;
            let a = 2;
            b = 123e-5;
            hola = "Hola Mundo";

            var carro;
            carro = "Mazda";

            //document.getElementById("titulo").innerHTML = "Imprimir y Variables";
            document.getElementById("demo").innerHTML = "Suma: "+ a + " + " + b + ": "+ (a+b);
            document.getElementById("demo2").innerHTML = hola;
            document.getElementById("demo3").innerHTML = "Pi: " + pi;
            document.getElementById("demo4").innerHTML = carro;

            document.getElementById("demo5").innerHTML = "Tipo de variable: "+ typeof(carro);

        }

        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Suma:               +
        Resta               -
        Multiplicación:     *
        División:           /
        Modulo:             %
        Exponenciación:     **      =       Math.pow(x,y)

        Incremento:         ++
        Decremento:         --
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        function aritmetica(){
            {
            document.getElementById("titulo").innerHTML = "Aritmetica";
            }

            x = 5;

            sum = x + 2;
            rest = x - 2;
            mult = x * 2;
            div = x / 2;
            mod = x % 2;
            exp = x ** 2;
            incre = x++;
            decre = x--;

            document.getElementById("demo").innerHTML = "Suma (x + 2): " + sum;
            document.getElementById("demo2").innerHTML = "Resta (x - 2): " + rest;
            document.getElementById("demo3").innerHTML = "Multiplicación (x * 2): " + mult;
            document.getElementById("demo4").innerHTML = "División (x / 2): " + div;
            document.getElementById("demo5").innerHTML = "Modulo (x % 2): " + mod;
            document.getElementById("demo6").innerHTML = "Exponenciación (x ** 2): " + exp;
            document.getElementById("demo7").innerHTML = "Incremento (x++): " + incre;
            document.getElementById("demo8").innerHTML = "Decremento (x--): " + decre;
        }

        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Una función de JavaScript se define con la functionpalabra clave, seguida de un nombre , seguido de paréntesis () .
        El código dentro de la función se ejecutará cuando "algo" invoque (llame) a la función.
        Ej:

        function name(parameter1, parameter2, parameter3) {
        // code to be executed
        }
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        function funciones(){
            {
            document.getElementById("titulo").innerHTML = "Funciones";
            }

            fahrenheit = 50;

            document.getElementById("demo").innerHTML = "La temperatura es " + pasarCelsius(fahrenheit) + " Celsius";

            function pasarCelsius(fahrenheit) {
             return (5/9) * (fahrenheit-32);
            } 
        }

        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Los objetos también son variables. Pero los objetos pueden contener muchos valores.
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        function objetos(){
            {
            document.getElementById("titulo").innerHTML = "Objetos";
            }

            marca = "Fiat";
            modelo = "500";
            color = "Blanco";

            const carro = {marca, modelo, color};

            const persona = {nombre:"John", apellido:"Gutierrez", edad:50, colorOjos:"Azules"};

            document.getElementById("demo").innerHTML = "CARRO";
            document.getElementById("demo2").innerHTML = "Marca: "+ carro.marca;
            document.getElementById("demo3").innerHTML = "Modelo: "+ carro.modelo;
            document.getElementById("demo4").innerHTML = "Color" + carro.color;

           

            document.getElementById("demo6").innerHTML = "PERSONA";
            document.getElementById("demo7").innerHTML = "Nombre: "+ persona["nombre"];
            document.getElementById("demo8").innerHTML = "Apellido: "+ persona["apellido"];
            document.getElementById("demo5").innerHTML = "Edad: "+ persona["edad"];
        }

        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Se pueden cambiar los elementos de una matriz constante

        Pero NO puede reasignar la matriz - Ejemplo:

        const matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

              matriz = [10, 8, 6, 4, 2, 0];    // ERROR
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        function matrices() {
            {
            document.getElementById("titulo").innerHTML = "Matrices";
            }
           
            const matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            document.getElementById("demo").innerHTML = "Matriz: " + matriz;
            matriz[0]= 1000;
            matriz.push(5000);
            matriz.pop(5);
            document.getElementById("demo2").innerHTML = "Matriz actualizada: " + matriz;
        }

        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        La "length" propiedad devuelve la longitud de una cadena:
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        function longitud() {
            {
            document.getElementById("titulo").innerHTML = "Longitud de una Cadena";
            }
           
            let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let longitud = cadena.length;

            document.getElementById("demo").innerHTML = "Cadena: "+ cadena;
            document.getElementById("demo2").innerHTML = "Longitud : "+ longitud;
        }

        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        El "search()"" método busca una cadena para un valor específico y devuelve la posición de la coincidencia.

        Si no encuentra la letra o palabra devuelve -1
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        function busquedaCadena() {
            {
            document.getElementById("titulo").innerHTML = "Búsqueda de cadena";
            }
           
            let cadena = "Me gusta la hamburguesa";
            
            document.getElementById("demo").innerHTML = cadena.search("hamburguesa");
            document.getElementById("demo2").innerHTML = cadena.search("pizza");
        }


        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        .toString() ------>     Numero a Cadena
                                El método devuelve un número como una cadena.

        .toExponential() -----> Numero a Cadena
                                Devuelve una cadena, con un número redondeado y escrito en notación exponencial.
                                Un parámetro define el número de caracteres detrás del punto decimal.

        .toFixed() ----->       Numero a Cadena
                                Un parámetro define el número de caracteres detrás del punto decimal.

        .Number() ----->        Variable a numero
                                Analiza una cadena y devuelve un número entero. No se permiten espacios.

        .parseInt() ----->      Variable a numero
                                Analiza una cadena y devuelve un número entero. Se permiten espacios. Solo se devuelve el primer número.

        .parseFloat() ----->    Variable a numero
                                Analiza una cadena y devuelve un número. Se permiten espacios. Solo se devuelve el primer número.


        NOTA: Si el número no se puede convertir, " NaN " se devuelve (No es un número).
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/