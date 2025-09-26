import { aboutfeatures } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'

const AboutFeatures = () => {
  return (
    <section className='brand-width '>
        <div className='flex flex-col mx-auto justify-center items-center max-w-[712px] text-center gap-4'>
            <h4 className='text-[24px] md:text-[52px] font-medium'>What Sets Us <span className='text-[#3861BF]'>Apart</span></h4>
            <p className='text-[#77877E] font-light text-sm md:text-[20px]'>Soole isn’t just another ride-sharing app it’s a community-first solution to Nigeria’s intercity transport challenges. Here’s what makes us different</p>
        </div>

        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {aboutfeatures.map((feature) => (
                <div key={feature.imageUrl} className={`bg-[${feature.backgroundColor}] mb-12 max-w-[386px] min-h-[404.79998779296875px] mt-20 relative p-[23px] md:p-[33px] rounded-[14.26px] md:rounded-[20px]`}>
                    <div className='absolute left-2   bottom-[50%]'>
                        <Image
                            src={feature.imageUrl}
                            width={300}
                            height={300}
                            alt='about feature'
                        />
                    </div>
                    <div className='mt-[200px]'>
                        <h5 style={{ color: feature.textColor || '#FFFFFF' }} className='text-[14.26px] font-semibold md:text-[20px] text-center'>{feature.section}</h5>
                        <p style={{ color: feature.textColor || '#FFFFFF' }} className='text-[11.41px] text-center md:text-[16px] mt-2'>{feature.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default AboutFeatures