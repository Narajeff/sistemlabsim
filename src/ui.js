import ReservaService from './services/reservaService';

const reservaService = new ReservaService();

class UI {
    async renderReserva() {
        const reservas = await ReservaService.getReserva();
        console.log(reservas);
    }
}