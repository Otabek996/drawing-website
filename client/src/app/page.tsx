"use client";

import { useState } from "react";
import { useDraw } from "@/hooks/useDraw";
import { FC } from "react";
import { ChromePicker } from "react-color";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [color, setColor] = useState<string>("#000");
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = 5;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="flex flex-col gap-10 pr-10">
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <button
          className="p-2 rounded-md border border-black "
          type="button"
          onClick={clear}
        >
          Clear
        </button>
      </div>
      <canvas
        className="border border-black rounded-md"
        width={550}
        height={550}
        ref={canvasRef}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

export default Page;
