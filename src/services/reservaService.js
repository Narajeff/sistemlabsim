class reservaService {

    constructor() {
        this.URI = 'http://localhost:4000/api/reserva';
    }

    async getReserva() {
        const response = await fetch(this.URI);
    }
}