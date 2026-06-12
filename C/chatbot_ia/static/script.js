async function enviarMensaje() {
    let input = document.getElementById('mensaje');
    let mensaje = input.value;
    if (!mensaje) return;

    let chat = document.getElementById('chat');
    chat.innerHTML += `<p><strong>Tú:</strong> ${mensaje}</p>`;
    input.value = '';

    let respuesta = await fetch('/mensaje', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mensaje: mensaje })
    });

    let datos = await respuesta.json();
    chat.innerHTML += `<p><strong>Bot:</strong> ${datos.respuesta}</p>`;
}