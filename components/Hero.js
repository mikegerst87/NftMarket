import React from 'react';
import Logo from '../assets/TestLogo.png';
import Image from 'next/image';


const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#f8cdc4] before:bg-cover before:bg-center before:opacity-80 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#f9dbd4] rounded-lg mr-5 text-white hover:bg-[#fcede9] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#f2a695] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#d99586] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center  flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Hero = () => {
    
  return <div className={style.wrapper}>
  
  
      <div className={style.container}>
   
      
          <div className={style.contentWrapper}>
          
          
              <div className={style.copyContainer}>
              
                  <div className={style.title}>
                  Get Some ohhhhweeee
                  </div>
                  <div className={style.description}>
                      We got it fool we need IT 
                  </div>
                  <div className={style.ctaContainer}>
                      <button className={style.accentedButton}>Explore</button>
                      <button className={style.button}>Create</button>
                  </div>
              </div>
              <div className={style.cardContainer}>
                      <img 
                        className= 'rounded-t-lg' 
                        src= 'https://lh3.googleusercontent.com/jSniiLwosYg4YNa5ZJg4S115fP-vZ570m5Mrup117XaGUKiN2VW_vK4tYPXmaYJ1ku3pQqeMNdZWdXAvCXpH6QAckALelFdTGtgcDbY=s550'
                        alt=""/>
                        <div className={style.infoContainer}>
                            <Image
                                className= 'h-[2.25rem] rounded-full'
                                src= {Logo}
                                height={30}
                                width={20}
                            />
                            <div className={style.author}>
                                <div className={style.name}>McWheaties</div>
                                <a className='text-[#f9dbd4]'
                                href= 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/26959255439957110233077989937802681477686360662735004345703791624424112783361'
                                >
                                    Tis the demons 
                                </a>
                            </div>
                            

                        </div>
                  </div>
          </div>
      
      </div>
      
  </div>;
// return  <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
// <div>
    
// </div>
// <video
//   autoPlay
//   loop
//   muted
//   class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
// >
//   <source    src="/video/CubeBackgroundForPortfolio.mp4"

//     type="video/mp4"
//   />
//   Your browser does not support the video tag.
// </video>
// </header>
};

export default Hero;
