import { assertEquals } from "https://deno.land/std@0.208.0/testing/asserts.ts";
import { Deck } from "./deck.ts";

Deno.test("Deck Initialization", () => {
    const deck = new Deck();
    assertEquals(deck.getCards().length, 104); // 52 cartas por mazo * 2 mazos
});

Deno.test("Draw Card Reduces Deck Size", () => {
    const deck = new Deck();
    const initialLength = deck.getCards().length;
    deck.drawCard();
    assertEquals(deck.getCards().length, initialLength - 1);
});

Deno.test("Draw Card Returns a Card", () => {
    const deck = new Deck();
    const card = deck.drawCard();
    assertEquals(card !== undefined, true);
});

Deno.test("Empty Deck Returns Undefined", () => {
    const deck = new Deck();
    let card;
    for (let i = 0; i < 109; i++) { // Intenta extraer más cartas de las disponibles
        card = deck.drawCard();
    }
    assertEquals(card, undefined);
});
