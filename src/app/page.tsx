import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <canvas
        className="border border-black rounded-md"
        width={750}
        height={750}
      />
    </div>
  );
};

export default page;
