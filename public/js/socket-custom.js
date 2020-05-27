var socket = io();

// ON: escuchar procesos.

socket.on("connect", function () {
  console.log("Conectado al servidor");
});

socket.on("disconnect", function () {
  console.log("Perdimos conexión con el servidor");
});

// Los emits son para enviar informacion
socket.emit(
  "enviarMensaje",
  {
    usuario: "Diego",
    mensaje: "Hola mundo",
  },
  function (response) {
    console.log("Respuesta server: " + response.resp);
  }
);

socket.on("enviarMensaje", function (data) {
  console.log("Servidor: ");

  console.log(data);
});
