// Declaramos nuestras variables necesarias
let canEmpleados, sueldoTotal, horaLaboralDia, horaLaboral, horaXDia, horaXNoche, salud, horaDXtot, horaNXtot ,pension, sindicato, juzgado, libranza, avanceSueldo, totalDedunciones,
totSuelConDeduc, avanSueldoX, libranzaX, juzgadoX, sueldoTotalSinN, sueldoTotalSinD, sueldoTotalSinX;

let xxxx;
let zzzz;
let yyyy;

let horass = 0;
let horasx = 0;
let seleccion = '';






// We're going to create new variables to bring data from DOM
// Table items
const salarioMinimo = 1160000;
const auxTransporte = 140000;


const td1 = document.getElementById("td1");
const td2 = document.getElementById("td2");
const td3 = document.getElementById("td3");
const td4 = document.getElementById("td4");
const td5 = document.getElementById("td5");
const td6 = document.getElementById("td6");
const td7 = document.getElementById("td7");
const td8 = document.getElementById("td8");
const td9 = document.getElementById("td9");
const td10 = document.getElementById("td10");
const td11 = document.getElementById("td11");
const td12 = document.getElementById("td12");
const td13 = document.getElementById("td13");
const td14 = document.getElementById("td14");
const td15 = document.getElementById("td15");
const td16 = document.getElementById("td16");
const td17 = document.getElementById("td17");
const td18 = document.getElementById("td18");
const td19 = document.getElementById("td19");
const td20 = document.getElementById("td20");
const td21 = document.getElementById("td21");
const td22 = document.getElementById("td22");
const td23 = document.getElementById("td23");

//Form items
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("last-name");
const idInput = document.getElementById("id");
const salaryInput = document.getElementById("salary");
const dayInput = document.getElementById("day");


// to get the id send button
const enviarForm = document.getElementById("send");

const siInput = document.getElementById("yes");
const noInput = document.getElementById("no");

// To get the container
const newContainer = document.getElementById("container");
const newContainerInLa = document.getElementById("container-inputs-labels");
const newContainerNewInput = document.getElementById("container-inputs-horas");
const newContainerDeucciones = document.getElementById("container-deduccione++");

// // We create new buttons to put them on DOM
// const nuevoInput1 = document.createElement("input");
// const nuevoInput2 = document.createElement("input");
// const nuevoInput3 = document.createElement("input");
// const nuevoLabel = document.createElement("label");
// const nuevoLabel1 = document.createElement("label");
// const nuevoLabel2 = document.createElement("label");
// const nuevoLabel3 = document.createElement("label");

// // We create new buttons to put them on DOM night part

// const nuevoInput4 = document.createElement("input");
// const nuevoLabel4 = document.createElement("label");

// // We create new buttons to put them on DOM day part

// const nuevoInput5 = document.createElement("input");
// const nuevoLabel5 = document.createElement("label");

// // We create new buttons to put them on DOM day & night part

// const nuevoInput6 = document.createElement("input");
// const nuevoInput7 = document.createElement("input");
// const nuevoLabel6 = document.createElement("label");
// const nuevoLabel7 = document.createElement("label");

// // new Input and label for avance sueldo
// const nuevoInput8 = document.createElement("input");
// const nuevoLabel8 = document.createElement("label");

// // new Input and label for juzgado
// const nuevoInput9 = document.createElement("input");
// const nuevoLabel9 = document.createElement("label")

// // new Input an Label for libranza
// const nuevoInput10 = document.createElement("input");
// const nuevoLabel10 = document.createElement("label")

// Inputs Container deducciones
const saludInputSi = document.getElementById("siSalud");
const pensionInputSi = document.getElementById("siPension");
const sindicatoInputSi = document.getElementById("siSindicato");
const saludInputNo = document.getElementById("noSalud");
const pensionInputNo = document.getElementById("noPension");
const sindicatoInputNO = document.getElementById("noSindicato");

// Inputs Cotainer deducciones++
const avanceSueldInputSi = document.getElementById("siAvance-sueldo");
const avanceSueldoInputNo = document.getElementById("noAvance-sueldo");
const juzgadoSi = document.getElementById("siJuzgado");
const juzgadoNo = document.getElementById("noJuzgado");
const libranzaSi = document.getElementById("siLibranza");
const libranzaNo = document.getElementById("noLibranza");

//Fields to solve the problem. Data disapeard is empty so 
// Save they apeard in the table
let t19ForTableEmpty
let t20ForTableEmpty
let t21ForTableEmpty

//avance sueldo --> la x signifia que viene del contenedor ASJ
const avanceSueldoX = document.getElementById("avance-sueldo");
//cuota juzgado
const cuotaJuzgadoX = document.getElementById("Cuota-juzgado");
//cuota libranza
const cuotaLibranzaX = document.getElementById("Cuota-libranza");

nombre = "";
sueldo = 0;
dias = 0;
canEmpleados = 0;
sueldoTotal = 0;


// We disapeard this night part


const y = document.getElementById("yyy");
y.style.display = 'none';
td8.style.display = 'none';

// We disapeard this day part

const x = document.getElementById("xxx");
x.style.display = 'none';
td9.style.display = 'none';

// We disapeard this ext day hours
const z = document.getElementById("zzz");
z.style.display = 'none';
td13.style.display = 'none';

// We disapeard this ext night hours
const a = document.getElementById("aaa");
a.style.display = 'none';
td14.style.display = 'none';

// We disapeard this container deducciones
const deduccionesContainer = document.getElementById("container-deducciones");

// We disapeard this container deducciones++
newContainerDeucciones.style.display = 'none';
deduccionesContainer.style.display = 'none';

// newContainer.style.display = 'none';
newContainerInLa.style.display = 'none';

// We disapeard the text field with the div avanceSueldoCampo
// We disapeard the text field with the div juzgadoCampo
// We disapeard the text field with the div libranzaCampo

const avanceSueldoContainer = document.getElementById("avanceSueldoCampo");
const juzgadoCampoCotainer = document.getElementById("juzgadoCampo");
const libranzaCampoCotainer = document.getElementById("libranzaCampo");

//containers tipo horas

const containerDia = document.getElementById("con-hor-diurnas");
const containerNoche = document.getElementById("con-hor-nocturnas");
const containerAmbas = document.getElementById("con-hor-ambas");

//ocultamos los contenedores
containerDia.style.display = 'none';
containerNoche.style.display = 'none';
containerAmbas.style.display = 'none';

//ocultamos contenedores como siempre

avanceSueldoContainer.style.display = 'none';
juzgadoCampoCotainer.style.display = 'none';
libranzaCampoCotainer.style.display = 'none';


// Let's create new buttons to check it out the field because
// the fields from table are empty.

const checkAvanceSueldo = document.getElementById("siAvance-sueldo");
const checkJuzgado = document.getElementById("siJuzgado");
const checkLibranza = document.getElementById("siLibranza");




let getNocturnas = document.getElementById("nocturnasH");
let getDiurnas = document.getElementById("diurnasH");
let getDiurnasAmbas = document.getElementById("diurnasHDia");
let getNocturnasAmbas = document.getElementById("nocturnasHDia");


//Miramos con estas varibales si los inputs estan seleccionados y retornamos la variable
let checkNocturnas = document.getElementById("nocturnas");
let checkDiurnas = document.getElementById("diurnas");


// Clean and reset data 
const reiniciarDatos = document.getElementById("remove");






function calcular() {
    // We'll have to solve this calculate
    // let's calculate the salary one hour

    horaLaboral = Math.floor((((salaryInput.value) / 30) / 8));
    td11.textContent = horaLaboral;
    console.log("Hora laboral de un dia: " + horaLaboral);

    // let's calculate the salary hour all day
    horaLaboralDia = (salaryInput.value)/30;

    console.log("Hora de un dia laboral sin auxilio de transporte: "+horaLaboralDia);
    td10.textContent = Math.floor(horaLaboralDia);

    // I've had a lot of problems with this that's why I have too many lines


    if (salaryInput.value <= (salarioMinimo * 2)) {

        td12.textContent = auxTransporte;
        if (siInput.checked) {
            decidir();
            if (seleccion == "nocturnas") {
                sueldoTotal = (sueldoTotalSinN + auxTransporte);
                td15.textContent = Math.floor(sueldoTotal);
                console.log(sueldoTotal);
                alert("Entra aqui nocturnas")

            } else if (seleccion == "diurnas") {
                sueldoTotal = sueldoTotalSinD + auxTransporte;
                td15.textContent = Math.floor(sueldoTotal);
                console.log(sueldoTotal);
                alert("Entra aqui diurnas")
            } else {
                sueldoTotal = sueldoTotalSinX + auxTransporte;
                td15.textContent = Math.floor(sueldoTotal);
                console.log(sueldoTotal);
                alert("Entra aqui las dos")
            }

        }
        if(noInput.checked) {
            sueldoTotal = ((horaLaboralDia) * (dayInput.value)) + auxTransporte;
            td15.textContent = Math.floor(sueldoTotal)

        }

    }else {
        sueldoTotal = ((horaLaboralDia) * (dayInput.value));
        td15.textContent = Math.floor(sueldoTotal);
        td12.textContent = 0;
    }


}

function decidirBotones(grupoNombre) {
    const opciones = document.getElementsByName(grupoNombre);

    for(let i = 0; i < opciones.length; i++) {
        x.style.diplay = "none";
        y.style.display = "none";
        opciones[i].addEventListener('change', function() {
             seleccion = document.querySelector('input[name="'+grupoNombre+'"]:checked').value;

            //  alert(`Seleccionaste la opción ${seleccion}`);



            // We're going to create the new buttons when they clicking them (avance-sueldo)
            if (seleccion == "siAvance-sueldo") {
                avanceSueldoContainer.style.display = 'block';
                // td19.textContent = avanceSueldoX.value;
                

            } else if (seleccion == "noAvance-sueldo") {
                td19.textContent = 0;
                avanceSueldoContainer.style.display = 'none';
            }
            // } else {
            //     console.log("El usuario no selecciono ninguna opcion(avance sueldo)")
            //     td19.textContent = "DatoNoValido";
            // }
            // We're going to create the new buttons when they clicking them (juzgado)
            if (seleccion == "siJuzgado") {
                juzgadoCampoCotainer.style.display = 'block';

                // td20.textContent = cuotaJuzgadoX.value;
                console.log(cuotaJuzgadoX.value)




            } else if (seleccion == "noJuzgado") {
                td20.textContent = 0;
                juzgadoCampoCotainer.style.display = 'none';
            }
            // } else {
            //     console.log("El usuario no selecciono ninguna opcion(juzgado)")
            //     td20.textContent = "DatoNoValido";
            // }
            // We're going to create the new buttons when they clicking them (libranza)
            if (seleccion == "siLibranza") {
                //aparecemos el fucking contenedor
                libranzaCampoCotainer.style.display = 'block';

                // td21.textContent = cuotaLibranzaX.value;

                if(checkNocturnas.checked) {
                    return seleccion = "nocturnas";
                }else if(checkDiurnas.checked) {
                    return seleccion = "diurnas";
                }else {
                    return seleccion = "ambas";
                }
                
            } else if (seleccion == "noLibranza") {
                td21.textContent = 0;
                libranzaCampoCotainer.style.display = 'none';

                if (checkNocturnas.checked) {
                    return seleccion = "nocturnas";
                } else if (checkDiurnas.checked) {
                    return seleccion = "diurnas";
                } else {
                    return seleccion = "ambas";
                }
            } else {
                console.log("El usuario no selecciono ninguna opcion(libranza)")
                td21.textContent = "DatoNoValido"
            }

            if(seleccion === "SI") {
                newContainerInLa.style.display = 'block';
                td6.textContent = "SI";
            }else if(seleccion === "NO"){
                deduccionesContainer.style.display = "block";
                newContainerDeucciones.style.display = "block";
                td6.textContent = "NO";

                containerDia.style.display = 'none';
                containerAmbas.style.display = 'none';
                containerNoche.style.display = 'none';
                newContainerInLa.style.display = 'none';
            }

            if(seleccion === "nocturnas") {

                y.style.display = "block";
                td8.style.display = "block";
                td8.textContent = 0;
                td7.innerHTML = "Nocturnas";

                deduccionesContainer.style.display = "block";
                newContainerDeucciones.style.display = 'block';

                // aparecemos el contenedor de las horas nocturnas.

                containerNoche.style.display = 'block';

                //Desaparecemos los contenedores sobrantes
                containerDia.style.display = 'none';
                containerAmbas.style.display = 'none';




            }else if(seleccion === "diurnas") {

                x.style.display = "block";
                td8.style.display = "block";
                td8.textContent = 0;
                td7.innerHTML = "Diurnas";

                deduccionesContainer.style.display = "block";
                newContainerDeucciones.style.display = 'block';

                containerDia.style.display = 'block';

                containerNoche.style.display = 'none';
                containerAmbas.style.display = 'none';

            }else if(seleccion === "ambas") {

                td7.innerHTML = "Diurnas & Nocturnas";
                y.style.display = "block";
                td8.textContent = 0;

                x.style.display = "block";
                td9.style.display = "block";
                td9.textContent = 0;



                deduccionesContainer.style.display = "block";
                newContainerDeucciones.style.display = 'block';

                containerAmbas.style.display = "block";

               

                

            }else {
                console.log("Usuario no seleccion nada");
            }




        });

    }

    return seleccion;

}




function decidir() {
    decidirBotones("opcionesHoras");
    if (seleccion == "nocturnas") {

        a.style.display = "block";
        td14.style.display = "block";
        td14.textContent = 0;
        y.style.display = 'block';

        alert("Nocturnas")


        horaXNoche = horaLaboral * 0.75;
        horaNXtot = horaLaboral + horaXNoche;
        td8.textContent = getNocturnas.value;

        console.log((horaNXtot) * (getNocturnas.value));
        a.style.display = "block";
        td14.style.display = "block";
        // td14.textContent = 0;
        td14.textContent = Math.round((horaNXtot) * getNocturnas.value);

        //Calculamos el sueldoTotal para noches
        sueldoTotalSinN = ((horaLaboralDia) * (dayInput.value)) + ((horaNXtot) * getNocturnas.value);
        console.log("Dime que si funcionas porfa: "+sueldoTotalSinN);

        return sueldoTotalSinN;


    } else if (seleccion == "diurnas") {
        alert("diurnas");

        

        td8.textContent = getDiurnas.value;

        horaXDia = horaLaboral * 0.25;

        horaDXtot = horaLaboral + horaXDia;

        z.style.display = "block";
        td13.style.display = "block";
        td13.textContent = 0;
        td13.textContent = Math.round((horaDXtot) * getDiurnas.value);

        sueldoTotalSinD = ((horaLaboralDia) * (dayInput.value)) + ((horaDXtot) * getDiurnas.value);
        console.log("Dime que si funcionas porfa: " + sueldoTotalSinD);

        return sueldoTotalSinD;

    } else {
        alert("ambas");
       

        //horaNXtot = horaLaboral + horaXNoche;
        horasx = (horaLaboral) + (horaLaboral * 0.75);
        console.log(horasx)

        //td14.textContent = 0;


        //horaDXtot = horaLaboral + horaXDia;

        horass = (horaLaboral) + (horaLaboral * 0.25);
        console.log(horass)


        sueldoTotalSinX = ((horaLaboralDia) * (dayInput.value)) + ((horasx+horass) * getDiurnas.value);
        z.style.display = "block";
        td13.style.display = "block";
        td13.textContent = 0;

        a.style.display = "block";
        td14.style.display = "block";
        td14.textContent = 0;
        td13.textContent = (horass) * getDiurnas.value;
        td14.textContent = (horasx) * getNocturnas.value;


        


        td9.textContent = getNocturnasAmbas.value;
        td8.textContent = getDiurnasAmbas.value;



        

      

        console.log(getNocturnas.value);
        console.log(getDiurnas.value);

        y.style.display = 'block';

        td8.textContent = 0;

        // td9.textContent = getNocturnas.value;
        // td8.textContent = getDiurnas.value;

        return sueldoTotalSinX;


    }
}

function deducciones() {

    if (saludInputSi.checked) {
        if (salaryInput.value <= (salarioMinimo * 2)) {
         salud = (sueldoTotal - auxTransporte) * (0.04);
         td16.textContent = Math.floor(salud);
        }else {
            salud = (sueldoTotal) * (0.04);
            td16.textContent = Math.floor(salud);
        }
    }else if(saludInputNo.checked) {
        td16.textContent = "NO";
        salud = 0;
    }else {
        console.log("Usuario no selecciono ningua opcion");

     }if(pensionInputSi.checked) {

         if (salaryInput.value <= (salarioMinimo * 2)) {
            pension = (sueldoTotal - auxTransporte) * (0.04);
             td17.textContent = Math.floor(pension);
         } else {
            pension = (sueldoTotal) * (0.04);
            td17.textContent = Math.floor(pension);
         }
    }else if(pensionInputNo.checked) {
        td17.textContent = "NO";
        pension = 0;

    }else {
        console.log("Usuario no selecciono ningua opcion");
    }

    if(sindicatoInputSi.checked) {
        if (salaryInput.value <= (salarioMinimo * 2)) {
            sindicato = (sueldoTotal - auxTransporte) * (0.01);
            td18.textContent = Math.floor(sindicato);
        } else {
            sindicato = (sueldoTotal) * (0.01);
            td18.textContent = Math.floor(sindicato);
        }

    }else if(sindicatoInputNO.checked) {
        td18.textContent = "NO";
        sindicato = 0;
    }else {
        console.log("Usuario no selecciono ningua opcion");
    }



    // We check the buttons If they are pressing the buttons throw the value for the fields
    if(checkAvanceSueldo.checked) {
        alert("Entra aqui avance sueldo");
        td19.textContent = avanceSueldoX.value;

    }else {
        td19.textContent = 0;
    }

    if(checkJuzgado.checked) {
        alert("Entra aqui juzgado");
        td20.textContent = cuotaJuzgadoX.value;
    }else {
        td20.textContent = 0;
    }

    if(checkLibranza.checked) {
        alert("Entra aqui Libranza");
        td21.textContent = cuotaLibranzaX.value;
    }else {
        td21.textContent = 0; 
    }


    let deduccionesCutoas = parseInt(cuotaJuzgadoX.value) + parseInt(cuotaLibranzaX.value) + parseInt(avanceSueldoX.value);
    console.log(deduccionesCutoas)
    totalDedunciones = parseInt(sindicato + pension + salud) + deduccionesCutoas;
    totSuelConDeduc = parseInt(sueldoTotal-totalDedunciones);

    td22.textContent = totalDedunciones;
    td23.textContent = totSuelConDeduc;


}



// We have to create an arrow function to send information to the table



enviarForm.addEventListener('click', () => {
    td1.textContent = nameInput.value;
    td2.textContent = lastNameInput.value;
    td3.textContent = idInput.value;
    td4.textContent = salaryInput.value;
    td5.textContent = dayInput.value;


    calcular();
    decidir();
    deducciones();


    console.log(seleccion);
    console.log(cuotaJuzgadoX.value)
    console.log(cuotaLibranzaX.value)
    console.log(avanceSueldoX.value)


    if (seleccion === '') {
        // alert("Escoje una opcion :)");
        // td6.textContent = "Dato no valido";
        alert("NOOOOOOOOO")
    }

    // Apeart data Avance Sueldo,Juzgado, Libranza...


})

reiniciarDatos.addEventListener('click', () => {
    location.reload(); 
})

decidirBotones("libranza");
decidirBotones("avance");
decidirBotones("juzgado");
decidirBotones("opciones");
decidirBotones("opcionesHoras");







//canEmpleados = parseInt(prompt("Escriba la cantidad de empleados: "));

// Creamos una funcion para calcular
/*function calcularNomina(cantEmp) {
    for(var i = 0; i<cantEmp; i++){

        // Solicitamos los datos necesarios para el calculo
        nombre = prompt("Dijite el nombre del empleado "+(i+1)+":");
        id = prompt("Dijite la cedula del empleado "+(i+1)+":")
        sueldo = parseInt(prompt("Dijite el sueldo pactado: "));
        diasLaborados = parseInt(prompt("Dijite la cantidad de dias laborados: "));

        // En este caso vamos a condicionar el salario minimos
        if (sueldo <= (salarioMinimo * 2)) {
            horasXtr = prompt("Indique si el trabajador " + (i + 1) + " tiene horas extras dijite (SI) o (NO)")
            if (horasXtr.toUpperCase() === "SI") {
                horasExt = prompt("Indique (DIA) para horas Diurnas" + '</br>' + "Indique (NOCHE) para horas nocturnas");

                // Condicionamos para horas nocturnas o diurnas
                if (horasExt.toUpperCase() == "DIA") {
                    cantHoraX = parseInt(prompt("Ingrese la cantida de horas extras: "))
                    horasD = ((sueldo / 30) * 0.25)*cantHoraX
                    diaLaboral = parseInt(sueldo / 30);
                    sueldoTotal = (diaLaboral * diasLaborados) + (auxTransporte +horasD);
                } else if (horasExt.toUpperCase() == "NOCHE") {
                    cantHoraX = parseInt(prompt("Ingrese la cantida de horas extras: "))
                    horasN = parseInt((sueldo / 30) * 0.75)*cantHoraX
                    diaLaboral = parseInt(sueldo / 30);
                    sueldoTotal = (diaLaboral * diasLaborados) + (auxTransporte + horasN);
                } else {
                    alert("Dijita una opcion correcta ;(")
                }
                // Calculamos el auxilio de transporte ya que tiene que ser menor a dos salmin

            } else if(horasXtr.toUpperCase() === "NO") {
                diaLaboral = parseInt(sueldo / 30);
                sueldoTotal = (diaLaboral * diasLaborados) + auxTransporte;
            } else {
                alert("Dijita una opcion correcta ;(")
            }
        }else {
            diaLaboral = parseInt(sueldo / 30);
            sueldoTotal = diaLaboral * diasLaborados;
        }
        //Finalmente imprimos el resultado
        deducciones(i);
        imprimir();
        addEventListener("click",enviar());
    }

}
*/

/*function deducciones(i) {

    salud = (sueldoTotal-auxTransporte)*(0.04);
    pension = (sueldoTotal-auxTransporte)*(0.04);
    sindicato = (sueldoTotal-auxTransporte)*(0.01);

    preguntamos si el usuario tienen sindicato
    tieSindicato = prompt("El empleado "+(i+1)+" tiene sindicato en la empresa: ")
    if() {
    }

    avanSueldoX = prompt("El empleado "+(i+1)+" tiene avance de sueldo dijite (SI) o (N0): ");
    if(avanSueldoX.toUpperCase() == "SI" ) {
        avanceSueldo = parseInt(prompt("Digite la cantidad de sueldo adelantado: "));
    }else if(avanSueldoX.toUpperCase() == "NO") {
        avanceSueldo = 0;
    }else {
        alert("Dijite una opcion correcta");
    }

    juzgadoX = prompt("El empleado " + (i + 1) + " tiene juzgado de sueldo dijite (SI) o (N0): ");
    if(juzgadoX.toUpperCase() == "SI")  {
        juzgado = prompt("Ingrese cantidad de pactado de juzgado del empleado" + (i + 1) +" :");
    } else if (juzgadoX.toUpperCase() == "NO") {
        juzgado = 0;
    } else {
        alert("Dijite una opcion correcta");
    }

    libranzaX = prompt("El empleado " + (i + 1) + " tiene libranza de sueldo dijite (SI) o (N0): ");
    if (libranzaX.toUpperCase() == "SI") {
        libranza = prompt("Ingrese cantidad de pactado de juzgado del empleado " + (i + 1) + " :");
    } else if (libranzaX.toUpperCase() == "NO") {
        libranza = 0;
    } else {
        alert("Dijite una opcion correcta");
    }
    totalDedunciones = parseInt(avanceSueldo + juzgado + libranza + sindicato + pension + salud);
    totSuelConDeduc = parseInt(sueldoTotal - totalDedunciones);
}

/*


function imprimir() {
    document.write()
    document.write("El trabajador " + nombre + " con id: " + id + '</br>');
    document.write()
    document.write("Con dias laborados: " + diasLaborados + '</br>');
    document.write()
    document.write("Con un sueldo: " + sueldo + '</br>');
    if (horasExt === undefined) {
        document.write("Horas extras: Ninguna" + '</br>');
    } else {
        document.write("Horas extras: " + horasExt + '</br>');
    }
    if (cantHoraX === undefined) {
        document.write("Cantidas horas extras: 0" + '</br>')

    } else {
        document.write("Cantidad horas extras: " + cantHoraX + '</br>')
    }
    document.write()
    document.write("Dias trabajados: " + diasLaborados + '</br>');
    document.write()
    document.write("El sueldo devengado del empleado es: " + sueldoTotal + '</br>' + '</br>');
    document.write("==============================================================");
    document.write('</br>');
    document.write('</br>');
    document.write("Deducciones: " + '</br>');
    document.write("Salud: " + salud + '</br>');
    document.write("Pension: " + pension + '</br>');
    document.write("Sindicato: " + sindicato + '</br>');

    if (avanSueldoX === undefined) {
        document.write("Avance sueldo: No adelanto sueldo" + '</br>');
    } else {
        document.write("Avance sueldo adelanto: " + avanceSueldo + '</br>');
    }
    if (juzgadoX === undefined) {
        document.write("Juzgado: No tiene juzgado" + '</br>');
    } else {
        document.write("Juzgado: " + juzgado + '</br>');
    }
    if (libranzaX === undefined) {
        document.write("libranza: No tiene libranza" + '</br>');
    } else {
        document.write("libranza: " + libranza + '</br>');
    }
    document.write("Total deducciones: " + totalDedunciones + '</br>');
    document.write("Total sueldo con deducciones: " + totSuelConDeduc + '</br>');
}


calcularNomina(canEmpleados);
*/
// by:

//       █████╗  ███╗   ███╗  ██████╗  ██████╗
//      ██╔══██╗ ████╗  ████║ ██╔═══██╗ ██╔══██╗
//      ███████║ ██╔██╗ ██╔██║ ██║   ██║ ██████╔╝
//      ██╔══██║ ██║╚██╗██║╚═╝ ██║▄▄ ██║ ██╔══██╗
//      ██║  ██║ ██║ ╚████║    ╚██████╔╝ ██║  ██║
//      ╚═╝  ╚═╝ ╚═╝  ╚═══╝     ╚══▀▀═╝  ╚═╝  ╚═╝

//                             ██╗  ██╗
 //                            ╚██╗██╔╝
 //                             ╚███╔╝
   //                           ██╔██╗
     //                        ██╔╝ ██╗
       //                      ╚═╝  ╚═╝