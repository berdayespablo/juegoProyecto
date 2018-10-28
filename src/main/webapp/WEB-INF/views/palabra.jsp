<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ page session="false" %>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Juego</title>
    <link rel="stylesheet" href="resources/estilo.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
</head>
<body>

<div id="contenedor">
    <h1>CONTACTO</h1>
    <h3>Palabra clave:</h3>

    <div id="zonaJuego" style="visibility: hidden;">
        <div id="palabra"></div>
        <form action="#">
            <input type="text" placeholder="Introduce una palabra" size="15">
        </form> 
        <button type="button" id="contacto" class="boton peque">Contacto!</button>
    </div>

    <button type="button" id="inicioJuego" class="boton">Jugar</button>
    
    <!-- Ventana modal -->
    <div id="ex1" class="modal">
            <h3>Instrucciones</h3>
            <p>Contacto! es un juego originariamente destinado para un mínimo de tres jugadores.
            Uno de ellos (el Máster) escoge una palabra, de la cual tendrá que dar su inical para que
            los otros jugadores la adivinen. En nuestro juego, la IA será el Máster.
            </p>
            <p>La manera de jugar es la siguiente: 
                Un jugador piensa una palabra que empiece por la letra que propone el Máster. Si fuera un C, 
                podría pensar en "Casa". Ahora se trata de hacer que alguno de los otros jugadores diga esa palabra 
                que tienes en mente relacionándola con otra que sí dices en voz alta. Por ejemplo, "Hogar". Si uno de los
                participantes cree saber la palabra que tienes en mente, ha de decir "¡Contacto!" y contar hasta tres.
                Entonces ambos jugadores han de decir la palabra al unísono. Si coincide, el Máster cederá otra letra, por ejemplo CA.
                Ahora se trataría de pensar una palabra que empiece por CA, como "Caballo", y proceder de la misma manera que antes.
            </p>
     </div>
          
          <p><a href="#ex1" rel="modal:open" class="info"><i class="fas fa-info-circle"></i></a></p>
</div>
    <div id="palabraOculta" style="display: none;"></div>
    <div id="aciertos" style="display: none;"></div>


<br>
<div class="admin">
<h1>
	Panel Admin
</h1>

<h3>
	Añadir Palabra
</h3>

<c:url var="addAction" value="/palabra/add" ></c:url>

<form:form action="${addAction}" commandName="palabra">
<table>
	<c:if test="${!empty palabra.nombre}">
	<tr>
		<td>
			<form:label path="id">
				<spring:message text="ID"/>
			</form:label>
		</td>
		<td>
			<form:input path="id" readonly="true" size="8"  disabled="true" />
			<form:hidden path="id" />
		</td> 
	</tr>
	</c:if>
	<tr>
		<td>
			<form:label path="nombre">
				<spring:message text="Nombre"/>
			</form:label>
		</td>
		<td>
			<form:input path="nombre" />
		</td> 
	</tr>
	<tr>
		<td>
			<form:label path="relaciones">
				<spring:message text="Relaciones"/>
			</form:label>
		</td>
		<td>
			<form:input path="relaciones" />
		</td>
	</tr>
	<tr>
		<td colspan="2">
			<c:if test="${!empty palabra.nombre}">
				<input type="submit"
					value="<spring:message text="Editar palabra"/>" />
			</c:if>
			<c:if test="${empty palabra.nombre}">
				<input type="submit"
					value="<spring:message text="Añadir palabra"/>" />
			</c:if>
		</td>
	</tr>
</table>	
</form:form>
<br>
<h3>Lista Palabras</h3>
<c:if test="${!empty listPalabras}">
	<table class="tg">
	<tr>
		<th width="120">Nombre</th>
		<th width="250">Relaciones</th>
		<th width="60">Editar</th>
		<th width="60">Borrar</th>
	</tr>
	<c:forEach items="${listPalabras}" var="palabra">
		<tr>
			<td>${palabra.nombre}</td>
			<td>${palabra.relaciones}</td>
			<td><a href="<c:url value='/edit/${palabra.id}' />" >Edit</a></td>
			<td><a href="<c:url value='/remove/${palabra.id}' />" >Delete</a></td>
		</tr>
	</c:forEach>
	</table>
</c:if>
</div>
</body>
<script src="resources/palabras.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
</html>
