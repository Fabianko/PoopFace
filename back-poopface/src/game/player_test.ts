import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Player } from "./player.ts";  
import { Card } from "./deck.ts";

Deno.test("Player - Draw Card", () => {
    const player = new Player("player1");
    const deck = [new Card("Hearts", 5, "Red"), new Card("Spades", 8, "Black")];
    player.drawCard(deck);
    assertEquals(player.hand.length, 1);
    assertEquals(deck.length, 1);
});

Deno.test("Player - Play Card", () => {
    const player = new Player("player2");
    player.hand = [new Card("Hearts", 5, "Red"), new Card("Spades", 8, "Black")];
    const card = player.playCard(0);
    assertEquals(card?.value, 5);
    assertEquals(player.hand.length, 1);
});

Deno.test("Player - Reveal Table Card", () => {
    const player = new Player("player3");
    player.tableCards = [new Card("Hearts", 5, "Red", false)];
    const revealedCard = player.revealTableCard(0);
    assertEquals(revealedCard?.isFaceUp, true);
});
