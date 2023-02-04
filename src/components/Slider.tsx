import React, { useState } from 'react';
import Slider from 'react-slick';

function SimpleSlider() {
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();

  const MainSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const ChildSettings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider asNavFor={nav2} ref={(slider1: Slider) => setNav1(slider1)}>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>1</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>2</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>3</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>4</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>5</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>6</h3>
        </div>
      </Slider>
      <Slider
        {...ChildSettings}
        asNavFor={nav1}
        focusOnSelect={true}
        ref={(slider1: Slider) => setNav2(slider1)}
      >
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>1</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>2</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>3</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>4</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>5</h3>
        </div>
        <div className='w-3/4 h-14 rounded-3xl bg-slate-700 text-white justify-center items-center !flex flex-row   '>
          <h3 className='flex'>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
