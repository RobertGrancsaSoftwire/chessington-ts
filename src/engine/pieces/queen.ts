import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Bishop from "./bishop";
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = []

        const currentSquare = board.findPiece(this);
        let i = currentSquare.row - 1;
        let j = currentSquare.col - 1;
        while (i >= 0 && j >= 0) {
            let nextSquare = Square.at(i, j);
            let pieceOnSquare = board.getPiece(nextSquare);
            if (pieceOnSquare !== undefined) {
                if (pieceOnSquare.player != this.player) {
                    moves.push(nextSquare);
                }
                break;
            }
            moves.push(nextSquare);
            i--;
            j--;
        }

        i = currentSquare.row + 1;
        j = currentSquare.col + 1;
        while (i < 8 && j < 8) {
            let nextSquare = Square.at(i, j);
            let pieceOnSquare = board.getPiece(nextSquare);
            if (pieceOnSquare !== undefined) {
                if (pieceOnSquare.player != this.player) {
                    moves.push(nextSquare);
                }
                break;
            }
            moves.push(nextSquare);
            i++;
            j++;
        }

        i = currentSquare.row - 1;
        j = currentSquare.col + 1;
        while (i >= 0 && j < 8) {
            let nextSquare = Square.at(i, j);
            let pieceOnSquare = board.getPiece(nextSquare);
            if (pieceOnSquare !== undefined) {
                if (pieceOnSquare.player != this.player) {
                    moves.push(nextSquare);
                }
                break;
            }
            moves.push(nextSquare);
            i--;
            j++;
        }

        i = currentSquare.row + 1;
        j = currentSquare.col - 1;
        while (i < 8 && j >= 0) {
            let nextSquare = Square.at(i, j);
            let pieceOnSquare = board.getPiece(nextSquare);
            if (pieceOnSquare !== undefined) {
                if (pieceOnSquare.player != this.player) {
                    moves.push(nextSquare);
                }
                break;
            }
            moves.push(nextSquare);
            i++;
            j--;
        }

        for (let i = currentSquare.col + 1; i < 8; i++) {
            let nextSquare = Square.at(currentSquare.row, i);
            let pieceOnSquare = board.getPiece(nextSquare);
            if (pieceOnSquare !== undefined) {
                if (pieceOnSquare.player != this.player) {
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
                if (pieceOnSquare.player != this.player) {
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
                if (pieceOnSquare.player != this.player) {
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
                if (pieceOnSquare.player != this.player) {
                    moves.push(nextSquare);
                }
                break;
            }
            moves.push(nextSquare);
        }

        return moves;
    }
}
