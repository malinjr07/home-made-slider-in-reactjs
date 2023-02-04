import Head from 'next/head';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSlider from '@/components/Slider';

export default function Home() {
  return (
    <section className='w-screen h-screen justify-center items-center flex flex-row flex-wrap'>
      <div className='w-3/5'>
        <SimpleSlider />
      </div>
    </section>
  );
}
