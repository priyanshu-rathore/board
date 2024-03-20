import React from "react";
import { Room } from "@/components/room";
import Loading from "./_components/loading";
import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
    params:{
        boardId:string;
    }
}

const BoardIdPage : React.FC<BoardIdPageProps> = ({params}) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading/>}>
        <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
