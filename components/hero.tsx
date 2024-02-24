import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-bottom.svg'
import {BiTrophy} from 'react-icons/bi'
import Demo from '@/public/images/globe.png'

export default function Hero() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 flex items-center">

        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10  opacity-80 ">
            <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-left">
            <div className="mb-6" data-aos="fade-down">
              <div className="inline-flex animate-float relative before:absolute before:inset-0 before:bg-emerald-500 before:blur-md">
                <a className="btn-sm py-0.5 text-emerald-100 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.emerald.900),_theme(colors.emerald.900))_padding-box,_linear-gradient(theme(colors.emerald.500),_theme(colors.emerald.200)_75%,_theme(colors.transparent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-00/50 before:rounded-full before:pointer-events-none shadow" target="_blank" href="https://solana.com/news/solana-hyperdrive-hackathon-winners">
                  <span className="relative inline-flex items-center  text-base px-2 py-1">
                   <BiTrophy className="h-6 w-6 text-emerald-100 pr-2 " />
                   Hyperdrive Winners: DePin Track <span className="tracking-normal text-emerald-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </span>
                </a>
              </div>
            </div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r mt-4 from-emerald-200 via-slate-100 to-slate-100/90 pb-4" data-aos="fade-down">P2P Edge Gaming</h1>
            <p className="text-lg text-slate-300 mb-8" data-aos="fade-down" data-aos-delay="200">Gaming at the speed of light. Turn your personal device into a compute node and earn passive income!</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
              <div>
                <a className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="https://tag.shaga.xyz">
                  Get Started <span className="tracking-normal text-emerald-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </a>
              </div>
              <div>
                <a className="btn text-slate-200 hover:text-white bg-zinc-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out" target="_blank" href="https://discord.gg/n58nfFu2S3">
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                  </svg>
                  <span>Join the Community</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div> 
            <Image src={Demo} className="max-w-none -mx-10 mt-20  transition-opacity duration-500 animate-float  ease-in-out" width={600} priority alt="Hero Illustration" />
          </div>
      </div>
      
    </section>
  )
}