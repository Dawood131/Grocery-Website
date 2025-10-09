import React from 'react';
import Headings from '../Headings/Headings';
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader",
    icon: <PiPlant />
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader",
    icon: <PiFactory />
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader",
    icon: <SlBadge />
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader",
    icon: <BsTruck />
  },
];

const Process = () => {
  const rendersteps = steps.map(Item => (
    <div
      key={Item.id} // Unique key
      className={`flex-1 min-w-[280px] md:basis-[300px] flex flex-col items-center
        ${Item.id % 2 === 0 ? "md:-mt-[100px]" : ""}
      `}
    >
      {/* Number */}
      <span className='flex justify-center items-center rounded-full outline-[3px] outline-dashed outline-offset-7 outline-zinc-800 w-[72px] h-[72px] text-9xl text-zinc-800 bg-white mb-6'>
        {Item.number}
      </span>

      {/* Content */}
      <div className='flex items-center gap-4 mt-0'>
        <span className='flex bg-gradient-to-b from-orange-400 to-orange-500 text-white w-[60px] h-[60px] text-2xl rounded-full justify-center items-center'>
          {Item.icon}
        </span>
        <div className='flex-1'>
          <h4 className='text-zinc-800 text-2xl font-bold'>{Item.title}</h4>
          <p className='text-zinc-600 mt-2'>{Item.para}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section>
      <div className='max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-20 py-10'>
        <div className='w-fit mr-auto'>
          <Headings highlight="Our" heading="Process" />
        </div>

        <div className='flex flex-wrap items-stretch justify-center gap-y-[68px] md:gap-y-[80px] md:mt-20 mt-10 md:pt-40'>
          {rendersteps}
        </div>
      </div>
    </section>
  );
};

export default Process;
