class ReservaService {

    constructor() {
        this.URI = 'http://127.0.0.1:4000/api/reservas';
    }

    async getReserva() {
        const response = await fetch(this.URI);
        const reservas = await response.json();
        return reservas;
    }
}

export default ReservaService;