import { useEffect, useState } from "react";

function ChessBoard() {
  interface StringDictionary {
    [key: string]: string;
  }
  const blackKing = "/Transformer-Chess-Engine/king-b.svg";
  const whiteKing = "/Transformer-Chess-Engine/king-w.svg";
  const blackQueen = "/Transformer-Chess-Engine/queen-b.svg";
  const whiteQueen = "/Transformer-Chess-Engine/queen-w.svg";
  const blackKnight = "/Transformer-Chess-Engine/knight-b.svg";
  const whiteKnight = "/Transformer-Chess-Engine/knight-w.svg";
  const blackRook = "/Transformer-Chess-Engine/rook-b.svg";
  const whiteRook = "/Transformer-Chess-Engine/rook-w.svg";
  const blackBishop = "/Transformer-Chess-Engine/bishop-b.svg";
  const whiteBishop = "/Transformer-Chess-Engine/bishop-w.svg";
  const blackPawn = "/Transformer-Chess-Engine/pawn-b.svg";
  const whitePawn = "/Transformer-Chess-Engine/pawn-w.svg";
  const [gameState, setGameState] = useState([
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-", "-", "-", "-"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ]);
  const pieces: StringDictionary = {
    k: blackKing,
    K: whiteKing,
    q: blackQueen,
    Q: whiteQueen,
    n: blackKnight,
    N: whiteKnight,
    r: blackRook,
    R: whiteRook,
    b: blackBishop,
    B: whiteBishop,
    p: blackPawn,
    P: whitePawn,
  };
  function GenerateBoard() {
    let TempBoard: any[] = [];
    for (var r = 0; r < 8; r++) {
      let TempRow: any[] = [];
      for (var c = 0; c < 8; c++) {
        let TileColor = (r + c) % 2 == 0 ? "#eeeed2" : "#769656";
        TempRow[c] = (
          <div
            className="w-20 h-20 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('${pieces[gameState[r][c]]}')`,
              backgroundColor: TileColor,
            }}
          ></div>
        );
      }
      TempBoard[r] = <div className="flex">{TempRow}</div>;
    }
    return <div className="flex-col">{TempBoard}</div>;
  }
  return (
    <div>
      <div className="mx-auto my-16 justify-items-center">
        {GenerateBoard()}
      </div>
    </div>
  );
}

export default ChessBoard;
