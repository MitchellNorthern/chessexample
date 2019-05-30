export const chess = {
    movePiece(board, startLocation, endLocation) {
        const piece = this.getPiece(board, startLocation);
        const possibleMoves = this.getPossibleMoves(piece, board, startLocation);
    },
    getPiece(board, location) {
        return {
            color: board[location.row][location.col].color,
            piece: board[location.row][location.col].piece
        }
    },
    getPossibleMoves(piece, board, startLocation) {
        return 
    }
};