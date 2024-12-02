function submitReservation() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (!name || !date || !time || !guests) {
        alert('Por favor, preencha todos os campos!');
    } else {
        alert(`Reserva feita com sucesso!\nNome: ${name}\nData: ${date}\nHora: ${time}\nPessoas: ${guests}`);
    }
}
