

document.getElementById("inicioJuego").addEventListener("click", cargaPalabra,false);
document.getElementById("contacto").addEventListener("click", mostrarLetra,false);

var zonaPalabras = document.getElementById("palabra");


function cargaPalabra(){

var listaPalabras = ['Abanderado','Abanderamiento','Abandonado','Abanico','Abarcar','Abarrotado','Abastecer','Abasto','Abatir','Abolengo','Aborrecer',
'Abortar','Abortivo','Abotonar','Abovedado','Abrasivo','Abrazadera','Absolutorio','Abstencionismo','Abstraido','Abuchear','Abucheo','Abuela','Abuelo',
'Aburrimiento','Acarreo','Acatar','Acaudalar','Acceder','Accion','Aceite','Acentuar','Aceptar','Acerado','Achatar','Aclimatar','Acomplejado','Acoplar',
'Acordeon','Acosar','Acreditar','Acuarela','Acuario','Acusado','Acusar','Adiccion','Administrativo','Admiracion','Admision','Adorno','Aduana','Adulto',
'Adusto','Advertir','Aerolito','Afan','Afonia','Agitar','Agobiar','Agonia','Agradar','Agravar','Agravio','Ahorrar','Albañiles','Album','Alcazar',
'Alcoholizar','Alegre','Alegria','Alferez','Alhaja','Altaneria','Alumbrar','Alumno','Alzar','Amazonas','Ambar','Ampliar','Amplificar','Amuelar',
'Angel','Anhelo','Anis','Ansia','Anteojos','Anterior','Antes','Anulares','Apuro','Arbol','Arcaismo','Aroma','Arrecife','Ascender','Aspid','Atender',
'Atento','Automovil','Avion','Avisar','Avispa','Azucar','Babilla','Baile','Balear','Banco','Bandada','Bandido','Banquero','Baraja','Baronesa','Bebe',
'Beber','Beldad','Belicosidad','Benevolo','Benitez','Bermudez','Bifocal','Billar','Billete','Bimestral','Bimotor','Binocular','Bisel','Bisexual','Blanquear',
'Bobo','Boda','Bogar','Boleto','Bolivar','Bondadoso','Bonito','Bordear','Borracho','Borrar','Botar','Boxear','Bracear','Branquial','Brillar','Brincar',
'Buceador','Bucear','Burdel','Busca','Cabello','Cadiz','Cafe','Cafetal','Cajon','Calador','Calderon','Calibrador','Calibrar','Calido','Caliente','Caliz',
'Caluroso','Calzon','Cama','Camaron','Caminara','Camino','Camino','Camion','Camote','Campeon','Cancer','Cancion','Cañaveral','Cara','Carcel','Carmen',
'Castaño','Catastral','Cateter','Causa','Causal','Celebre','Cenit','Central','Cesar','Cesped','Chaqueta','Charter','Cierne','Cierre','Cifra','Cigarra',
'Cigarrillo','Cigüeña','Cilindro','Cima','Cinco','Cinta','Cintura','Cisne','Climas','Climax','Clorofila','Cobija','Cocotal','Codeina','Collar','Colon',
'Comezon','Comienzo','Comite','Compilador','Comprension','Comun','Condor','Confirmacion','Congelar','Consignar','Consolar','Consul','Contador','Controlador',
'Corazon','Corral','Correr','Correre','Cortazar','Costal','Costillar','Crater','Cremor','Crimen','Cristobal','Cuaderno','Cual','Cual','Cubrir','Cura','Curar',
'Dadivoso','Danza','Darle','Datil','Debil','Decaido','Decision','Decisiva','Decolorar','Dedazo','Deidad','Deismo','Dejar','Delegacion','Deme','Denomino',
'Dental','Dentejon','Depositar','Depurar','Desafio','Desconsolar','Deseo','Desgano','Designo','Detener','Dias','Diaz','Dicha','Diesel','Diez','Dificil',
'Dilo','Direccion','Distraido','Dividir','Division','Doblez','Docil','Dolar','Donde','Ductil','Duo','Ebrio','Eclipse','Economizar','Ecuacion','Eden',
'Edredon','Educar','Egoista','Electrodo','Elefante','Elegante','Elegir','Elemento','Elevar','Elias','Elitista','Embajadora','Embalse','Embrujar',
'Embuste','Encia','Enfrento','Enfurecer','Enojar','Enredo','Enriquez','Enseñar','Errante','Errar','Error','Escaparse','Escaso','Escoger','Esconder',
'Escuchar','Estampilla','Esteril','Estudiante','Eter','Evaluacion','Examen','Exclamacion','Expirar','Explicacion','Expresion','Extraño','Facil',
'Fallecer','Famoso','Fanfarronear','Feismo','Felicidad','Femur','Fertil','Fiel','Final','Finalidad','Flecha','Fluido','Fluor','Formaldehido',
'Fornicar','Fotografia','Fragil','Fragmento','Frijol','Fugarse','Fugitivo','Fulgor','Fumo','Fundo','Futbol','Gafas','Galeno','Ganar','Gelido',
'Generar','Generoso','Genial','Gijon','Glotoneria','Gonzalez','Gozo','Griego','Guion','Gula','Habil','Habitante','Hechizar','Hector','Helado',
'Helar','Heleno','Henriquez','Hermoso','Hijo','Hilo','Hurtar','Iluminar','Ilustracion','Ilustre','Informacion','Ingenuidad','Instruido',
'Insulto','Integrar','Integridad','Interior','Iquitos','Jaguar','Japones','Jardin','Jesus','Jimenez','Jose','Joven','Jovial','Joya',
'Jugar','Jugaria','Julian','Junin','Junta','Justiciar','Laborar','Lapiz','Largo','Leal','Leccion','Lecho','Lechuga','Leias','Leismo',
'Leon','Lesionar','Levantar','Lider','Limon','Llego','Lopez','Lustrar','Macula','Maiz','Maizal','Maleta','Mama','Mancha','Mandriles',
'Mani','Mano','Margen','Maricon','Marmol','Marron','Martes','Martinez','Martir','Mastil','Matrimonio','Medicacion','Medico','Mencionar',
'Mental','Mentira','Meteorito','Mismos','Monarca','Morador','Morir','Motel','Motivo','Movil','Multiplicacion','Murio','Mutismo','Nacio',
'Nacional','Naipe','Natural','Necio','Nomada','Norma','Nupcias','Ñandues','Obsequio','Ocultar','Oir','Ojo','Oleo','Olor','Oracion','Orar',
'Origen','Orion','Ornato','Oscar','Ostentoso','Paciente','Pais','Panama','Pantalon','Papa','Paracas','Paraiso','Parar','Paris','Partir',
'Pedazo','Pelear','Pelo','Pendiente','Pensara','Perez','Perfeccion','Perfume','Peru','Pitar','Poblacion','Poco','Pomposo','Poquer','Porton',
'Preciado','Pregunto','Premura','Prevenir','Previo','Principio','Procer','Profugo','Pugil','Quebradizo','Raices','Raiz','Ramirez','Rapido',
'Raro','Rebelion','Recaido','Regalo','Regla','Regresar','Reñir','Repleta','Resortes','Resplandor','Reto','Retrato','Revolver','Rey','Rezar',
'Rifa','Rio','Robar','Rocio','Rodriguez','Rostro','Rotacion','Sacerdote','Sacudir','Saeta','Salio','Salmon','Salomon','Saltar','Sanar',
'Satisfaccion','Seccion','Segun','Seismo','Sello','Sencillo','Senda','Sendero','Silbar','Silencio','Sillon','Simil','Sismo','Sofa','Solucion',
'Sorteo','Suarez','Suelo','Sustraccion','Tactil','Tambien','Tanger','Tapar','Tarde','Tedio','Television','Terminacion','Tiburon','Tijeras',
'Tolerante','Tonala','Tonto','Trabajar','Trailer','Transicion','Trebol','Triunfo','Trozo','Tumbes','Tunel','Ultraje','Union','Vagar','Valioso',
'Vaquilla','Veloz','Vereda','Vergel','Victoria','Virgen','Volare','Voleo','Volver','Votacion','Yerro','Zancudo','Zapatos','Zarcillo',
'Gato', 'Peluca', 'Protozoo', 'Flan', 'Tempestad',
 'Origen', 'Musgo', 'Riesgo', 'Yacer', 'Exilio', 'Barracuda', 'Abrigo',
 'Tornado', 'Luz', 'Almanaque', 'Panteon', 'Rastro', 'Avellana', 'Elevando',
 'Cancha', 'Mezquina', 'Cosaco', 'Deshonra']; 

document.getElementById("contenedor").style.backgroundColor = "rgb(14, 91, 155)";

var n = Math.floor((Math.random() * listaPalabras.length));
var palabraClave = listaPalabras[n];

var aciertos = 0;

document.getElementById("zonaJuego").style.visibility = "visible";
document.getElementById("palabraOculta").innerHTML = palabraClave;
document.getElementById("aciertos").innerHTML = aciertos;

zonaPalabras.innerHTML = palabraClave[aciertos].toUpperCase();
 
}

function mostrarLetra(){
    zonaPalabras.innerHTML = "";
    var palabra = $('#palabraOculta').text();
    var aciertosString = $('#aciertos').text();

    var aciertosInt = parseInt(aciertosString);
    aciertosInt += 1;

    for(var i=0; palabra.length; i++){
        zonaPalabras.innerHTML += palabra[i].toUpperCase();

        if (aciertosInt == i){
            break;
        }

        if (palabra.length == i+1){
            victoria();
        }
    }

    document.getElementById("aciertos").innerHTML = aciertosInt;

}

function victoria(){
    document.getElementById("contenedor").style.backgroundColor = "rgb(14, 155, 136)";
    zonaPalabras.innerHTML = "¡Has ganado!";
}
