import Notice from "@/Components/Notice";
import SelectTab from "@/Components/SelectTab";
import Image from "next/image";
import SectionTitle from "@/Components/SectionTitle";
import NewsCard from "@/Components/NewsCard";
import Slider from "@/Components/Slider";

import ielts from '../../public/assets/image (4).png'
import Faq from "@/Components/Faq";
import Countries from "@/Components/Countries";
import Slider2 from "@/Components/Slider2";
import AboutUs from "@/Components/AboutUs";
import ServiceHistory from "@/Components/ServiceHistory";
import ChooseUs from "@/Components/ChooseUs";
import Services from "@/Components/Services";
import Link from "next/link";

export const ButtonTerTiary = ({ text, href }) => {
  return (
    <Link href={href || ''}>
      <button className={`pl-6 pr-3 h-fit w-full py-4 rounded-[40px] text-white flex justify-between items-center border-none btn uppercase 2xl:text-xl xl:text-base news`}>
        <span className='mr-2'>{text}</span>
        <div className='bg-white p-2 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path d="M17.1193 2.02701C17.1342 1.47492 16.6987 1.01528 16.1467 1.00035L7.14994 0.7572C6.59786 0.742279 6.13821 1.17773 6.12329 1.72982C6.10837 2.2819 6.54382 2.74155 7.09591 2.75647L15.093 2.97261L14.8769 10.9697C14.8619 11.5218 15.2974 11.9814 15.8495 11.9963C16.4016 12.0113 16.8612 11.5758 16.8761 11.0237L17.1193 2.02701ZM2.28833 16.4808L16.8074 2.72594L15.4319 1.27404L0.912841 15.0289L2.28833 16.4808Z" fill="url(#paint0_linear_346_2563)" />
            <defs>
              <linearGradient id="paint0_linear_346_2563" x1="8.86011" y1="8.87744" x2="9.54786" y2="9.60339" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0B286D" />
                <stop offset="1" stop-color="#0F172A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </button>
    </Link>
  )
}

export default function Home() {
  return (
    <div>
      <SelectTab />
      <Notice />
      <AboutUs />
      <div className="mb-32 px-10">
        <SectionTitle heading={'Committed to provide you best visa services'} subHeading={'Visa Services'} />
        <Slider2 />
      </div>
      <div>
        <Countries />
      </div>
      <div className="">
        <SectionTitle heading={'We Provide Language Support and Visa Processing'} subHeading={'Our Services'} />
        <div className="grid grid-cols-3 mt-10 max-w-7xl mx-auto px-10">
          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            <Services heading={'Career'} href={'/signUp'} subHeading={'Career Counseling'} text={'UICC offers personalized career counseling to help students navigate the complexities of international job markets, providing insights into visa requirements, professional certifications, and career pathways.'} />
          </div>
          <div className="h-full w-full" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000">
            <Image src={ielts} className="h-full object-cover" alt="" />
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000">
            <Services heading={'IELTS'} href={'/signUp'} subHeading={'IELTS Preparation'} text={'We offer specialized IELTS training programs that are designed to help students achieve the scores required for admission to international universities and professional qualifications.'} />
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="500" className="h-full w-full">
            <Image src={ielts} className="h-full object-cover" alt="" />
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="500">
            <Services heading={'language training'} href={'/signUp'} subHeading={'Japanese and Korean Language'} text={'Whether for academic purposes, career advancement, or personal interest, our language courses are led by experienced instructors to ensure fluency and cultural competency.'} />
          </div>
          <div data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="500" className="h-full w-full">
            <Image src={ielts} className="h-full object-cover" alt="" />
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <ServiceHistory count={'count'} />
      </div>
      <div data-aos="fade-right">
        <ChooseUs />
      </div>
      <div className="px-10">
        <SectionTitle subHeading={'Testimonial'} heading={'Committed to provide you best services'} />
        <Slider />
      </div>
      <Faq />
      <div className="mb-32">
        <SectionTitle subHeading={'Latest News'} heading={'Our Latest News'} />
        <div className="px-10 grid grid-cols-2 gap-6 mt-10">
          <NewsCard aos="zoom-in-left" />
          <NewsCard aos="zoom-in-left" />
          <NewsCard aos="zoom-in-right" />
          <NewsCard aos="zoom-in-right" />
        </div>
      </div>
    </div >
  );
}
