import { Player} from "./player.ts";  // Asegúrate de que la ruta sea correcta
import { Card, Deck } from "./deck.ts";  // Asegúrate de que la ruta sea correcta
export class GameSession {
    private players: Player[] = [];
    private deck: Deck;  // Aquí deberías inicializar un mazo completo de cartas
    private currentTurn: number = 0;
    public id: string;

    constructor(id: string) {
        this.id = id;
        this.deck = new Deck();
    }

    

    addPlayer(player: Player) {
        this.players.push(player);
    }

    initializeGame() {
        this.shuffleDeck();
        // Lógica para repartir cartas a los jugadores
    }

    nextTurn() {
        this.currentTurn = (this.currentTurn + 1) % this.players.length;
    }

    checkForWinner() {
        // Lógica para determinar si hay un ganador
    }

    processPlayerAction(playerId: string, action: any) {
        // Lógica para procesar acciones del jugador
    }
}
