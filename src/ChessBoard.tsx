function ChessBoard() {
  function GenerateBoard() {
    let TempBoard: any[] = [];
    for (var r = 0; r < 8; r++) {
      let TempRow: any[] = [];
      for (var c = 0; c < 8; c++) {
        let TileColor = (r + c) % 2 == 0 ? "#eeeed2" : "#769656";
        TempRow[c] = (
          <div
            style={{ backgroundColor: TileColor }}
            className="w-20 h-20"
          ></div>
        );
      }
      TempBoard[r] = <div className="flex">{TempRow}</div>;
    }
    return <div className="flex-col">{TempBoard}</div>;
  }
  return (
    <div className="mx-auto my-16 justify-items-center">{GenerateBoard()}</div>
  );
}

export default ChessBoard;
