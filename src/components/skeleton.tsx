import React from 'react';

export default function Skeleton() {
  return (
    <div className="flex justify-center items-center w-full gap-x-6 animate-pulse">
      <div className="h-[201] w-[300] bg-white/25 rounded-lg"></div>
      <div className="flex flex-col max-h-full ">
        {Array.from({ length: 6 }).map((_, index) => {
          const randomWidth = Math.floor(Math.random() * 200) + 200;
          return (
            <div
              key={index}
              style={{width: `${randomWidth}px`}}
              className="bg-white/25 h-4 w-[400px]  rounded-full mb-3"
            ></div>
          );
        })}
      </div>
    </div>
  );
}
