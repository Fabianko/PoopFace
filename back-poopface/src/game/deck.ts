type Suit = 'P' | 'C' | 'R' | 'T';  // Picas, Corazones, Rombos, Tréboles
type Value = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;  // 2-10, J, Q, K, A
type DeckColor = 'R' | 'B';  // Rojo y Azul
export class Card {
    constructor(public suit: string, public value: number, public color: string, public isFaceUp: boolean = false) {}
}

export class Deck {
    private cards: Card[] = [];

    constructor() {
        this.initializeDeck();
    }

    private initializeDeck() {
        const suits: Suit[] = ['P', 'C', 'R', 'T'];
        const values: Value[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const colors: DeckColor[] = ['R', 'B'];

        for (const color of colors) {
            for (const suit of suits) {
                for (const value of values) {
                    this.cards.push(new Card(suit, value, color));
                }
            }
        }
    }
    drawCard(): Card | undefined {
        if (this.cards.length === 0) {
            return undefined; // No hay más cartas en el mazo
        }

        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards.splice(randomIndex, 1)[0];
    }

    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    getCards() {
        return this.cards;
    }
}


