import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import player from "../player";
import King from "./king";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = []

        const currentSquare = board.findPiece(this);
        for (let i = currentSquare.col + 1; i < 8; i++) {
            let nextSquare = Square.at(currentSquare.row, i);
            let pieceOnSquare = board.getPiece(nextSquare);
            if (pieceOnSquare !== undefined) {
                if (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King)) {
                    moves.push(nextSquare);
                }
                break;
            }
            moves.push(nextSquare);
        }
        for (let i = currentSquare.col - 1; i >= 0; i--) {
            let nextSquare = Square.at(currentSquare.row, i);
            let pieceOnSquare = board.getPiece(nextSquare);
            if (pieceOnSquare !== undefined) {
                if (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King)) {
                    moves.push(nextSquare);
                }
                break;
            }
            moves.push(nextSquare);
        }

        for (let i = currentSquare.row + 1; i < 8; i++) {
            let nextSquare = Square.at(i, currentSquare.col);
            let pieceOnSquare = board.getPiece(nextSquare);
            if (pieceOnSquare !== undefined) {
                if (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King)) {
                    moves.push(nextSquare);
                }
                break;
            }
            moves.push(nextSquare);
        }
        for (let i = currentSquare.row - 1; i >= 0; i--) {
            let nextSquare = Square.at(i, currentSquare.col);
            let pieceOnSquare = board.getPiece(nextSquare);
            if (pieceOnSquare !== undefined) {
                if (pieceOnSquare.player != this.player && !(pieceOnSquare instanceof King)) {
                    moves.push(nextSquare);
                }
                break;
            }
            moves.push(nextSquare);
        }

        return moves;
    }
}
