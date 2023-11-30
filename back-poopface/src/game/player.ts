import { Card } from "./deck.ts";

export class Player {
    public hand: Card[] = [];
    public tableCards: Card[] = [];
    public id: string;

    constructor(id: string) {
        this.id = id;
    }

    drawCard(deck: Card[]) {
        const card = deck.pop();
        if (card) {
            this.hand.push(card);
        }
    }

    playCard(cardIndex: number) {
        if (cardIndex < this.hand.length) {
            const card = this.hand.splice(cardIndex, 1)[0];
            return card;
        }
        return null;
    }

    revealTableCard(cardIndex: number): Card | null {
        if (cardIndex < this.tableCards.length) {
            const card = this.tableCards[cardIndex];
            card.isFaceUp = true; // Marca la carta como revelada
            return card;
        }
        return null; // Retorna null si el índice de la carta no es válido
    }
}
