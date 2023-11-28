// game/gameManager.ts
import { GameSession } from "./gameSession.ts";

class GameManager {
    private games: Map<string, GameSession> = new Map();

    createGame(): string {
        const gameId = Math.random().toString(36).substr(2, 9);
        this.games.set(gameId, new GameSession(gameId));
        return gameId;
    }

    getGame(gameId: string): GameSession | undefined {
        return this.games.get(gameId);
    }
}

export const gameManager = new GameManager();
