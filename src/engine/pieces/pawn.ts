import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import player from "../player";
import King from "./king";

export default class Pawn extends Piece {
    public hasMoved: boolean;
    public enPassantEnabled: boolean;
    public constructor(player: Player) {
        super(player);
        this.hasMoved = false;
        this.enPassantEnabled = false;
    }

    public getAvailableMoves(board: Board) {
        let moves: Square[] = []
        let direction = this.player === player.WHITE ? 1 : -1;

        const currentSquare = board.findPiece(this);

        if (currentSquare.row == 7 || currentSquare.row == 0) {
            return moves;
        }

        const oneSquareInFront = Square.at(currentSquare.row + direction, currentSquare.col);
        const pieceOneSquareInFront = board.getPiece(oneSquareInFront);

        if (!!pieceOneSquareInFront && pieceOneSquareInFront.player != board.currentPlayer) {
            moves.push(oneSquareInFront);
        } else if (pieceOneSquareInFront === undefined) {
            moves.push(oneSquareInFront);
        } else {
            return moves;
        }

        this.checkOpponents(board, currentSquare, moves);

        if (!this.hasMoved) {
            const twoSquareInFront = Square.at(currentSquare.row + direction * 2, currentSquare.col);
            const pieceTwoSquareInFront = board.getPiece(twoSquareInFront);

            if (!!pieceTwoSquareInFront && pieceTwoSquareInFront.player != board.currentPlayer) {
                moves.push(twoSquareInFront);
            } else if (pieceTwoSquareInFront === undefined) {
                moves.push(twoSquareInFront);
            }
        }

        return moves;
    }

    private checkOpponents(board: Board, currentSquare: Square, moves: Square[]) {
        let direction = this.player === player.WHITE ? 1 : -1;

        const squareLeft = Square.at(currentSquare.row + direction, currentSquare.col - 1);
        const pieceSquareLeft = board.getPiece(squareLeft);

        if (!!pieceSquareLeft && pieceSquareLeft.player != this.player && !(pieceSquareLeft instanceof King)) {
            moves.push(squareLeft);
        }

        const squareRight = Square.at(currentSquare.row + direction, currentSquare.col + 1);
        const pieceSquareRight = board.getPiece(squareRight);

        if (!!pieceSquareRight && pieceSquareRight.player != this.player && !(pieceSquareRight instanceof King)) {
            moves.push(squareRight);
        }

        const squareEPRight = Square.at(currentSquare.row, currentSquare.col + 1);
        const pieceSquareEPRight = board.getPiece(squareEPRight);
        let rightPawn: Pawn | undefined = undefined;
        if (pieceSquareEPRight instanceof Pawn) {
            rightPawn = pieceSquareEPRight;
        }

        if (!!pieceSquareEPRight && pieceSquareEPRight.player != this.player && rightPawn?.enPassantEnabled) {
            squareEPRight.row += direction;
            moves.push(squareEPRight);
        }

        const squareEPLeft = Square.at(currentSquare.row, currentSquare.col - 1);
        const pieceSquareEPLeft = board.getPiece(squareEPLeft);
        let leftPawn: Pawn | undefined = undefined;
        if (pieceSquareEPLeft instanceof Pawn) {
            leftPawn = pieceSquareEPLeft;
        }

        if (!!pieceSquareEPLeft && pieceSquareEPLeft.player != this.player && leftPawn?.enPassantEnabled) {
            squareEPLeft.row += direction;
            moves.push(squareEPLeft);
        }
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        if (!this.hasMoved) {
            this.enPassantEnabled = true;
            this.hasMoved = true;
            return;
        }

        if (this.hasMoved && this.enPassantEnabled) {
            this.enPassantEnabled = false;
        }
    }
}
