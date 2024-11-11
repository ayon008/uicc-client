import Notice from "@/Components/Notice";
import SelectTab from "@/Components/SelectTab";
import Image from "next/image";
import image from '../../public/assets/image (1).png'
import img1 from '../../public/assets/1.png'
import img2 from '../../public/assets/2.png'
import FaTelegram from "@/icons/FaTelegram";
import FaVisa from "@/icons/FaVisa";
import ButtonPrimary from "@/Components/ButtonPrimary";
import SectionTitle from "@/Components/SectionTitle";
import NewsCard from "@/Components/NewsCard";
import Slider from "@/Components/Slider";
import image2 from '../../public/assets/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg'
import ielts from '../../public/assets/image (4).png'
import Faq from "@/Components/Faq";
import Countries from "@/Components/Countries";
import Slider2 from "@/Components/Slider2";

export const ButtonTerTiary = ({ text }) => {
  return (
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
  )
}

export default function Home() {
  return (
    <div>
      <SelectTab />
      <Notice />
      <div className="grid grid-cols-2 max-w-[1440px] mx-auto p-24">
        <div className="">
          <div className="w-fit h-fit relative">
            <Image className="" src={image} alt="" />
            <Image className="absolute top-10 -right-14" src={img1} alt="" />
            <Image className="absolute -left-14 bottom-28" src={img2} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <FaTelegram />
            <h2 className="2xl:text-2xl xl:text-xl font-semibold">About Us</h2>
          </div>
          <h1 className="2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-2 2xl:leading-[81px] xl:leading-[81px]">
            We help Making your <br /> <span className="dream relative">Dream into</span> Reality
          </h1>
          <p className="">
            At Uttara International Career Council (UICC)**, we are dedicated to helping individuals unlock their global potential. Established with the vision of empowering students and professionals to pursue their dreams on an international scale, UICC offers a comprehensive range of services designed to guide you toward academic, linguistic, and career success abroad.
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="bg-orange w-fit p-3 rounded-full">
                <FaVisa />
              </div>
              <h3 className="2xl:text-xl xl:text-lg font-semibold">Visa Eligibilities</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange w-fit p-3 rounded-full">
                <FaVisa />
              </div>
              <h3 className="2xl:text-xl xl:text-lg font-semibold">Career Counseling</h3>
            </div>
          </div>
          <div>
            <ButtonPrimary text={'Register Now'} />
          </div>
        </div>
      </div>
      <div className="mb-32 px-10">
        <SectionTitle heading={'Committed to provide you best visa services'} subHeading={'Visa Services'} />
        <Slider2 />
      </div>
      <div>
        <Countries />
      </div>
      <div className="">
        <SectionTitle heading={'We Provide Language Support and Visa Processing'} subHeading={'Our Services'} />
        <div className="grid grid-cols-3 mt-10 max-h-[802px] max-w-7xl mx-auto px-10">
          <div className="2xl:px-10 xl:px-8 2xl:py-2 xl:py-1">
            <FaVisa />
            <div className="">
              <p className="text-orange 2xl:text-sm font-bold xl:text-xs">Career</p>
              <h1 className="2xl:text-2xl xl:text-xl font-semibold">Career Counseling</h1>
              <p className="my-4">UICC offers personalized career counseling to help students navigate the complexities of international job markets, providing insights into visa requirements, professional certifications, and career pathways.</p>
              <ButtonTerTiary text={'Register Now'}/>
            </div>
          </div>
          <Image src={ielts} alt="" />
          <div className="2xl:px-10 xl:px-8 2xl:py-2 xl:py-1">
            <FaVisa />
            <div className="">
              <p className="text-orange 2xl:text-sm font-bold xl:text-xs">Career</p>
              <h1 className="2xl:text-2xl xl:text-xl font-semibold">Career Counseling</h1>
              <p className="my-4">UICC offers personalized career counseling to help students navigate the complexities of international job markets, providing insights into visa requirements, professional certifications, and career pathways.</p>
              <ButtonTerTiary text={'Register Now'} />
            </div>
          </div>
          <Image src={ielts} alt="" />
          <div className="2xl:px-10 xl:px-8 2xl:py-2 xl:py-1">
            <FaVisa />
            <div className="">
              <p className="text-orange 2xl:text-sm font-bold xl:text-xs">Career</p>
              <h1 className="2xl:text-2xl xl:text-xl font-semibold">Career Counseling</h1>
              <p className="my-4">UICC offers personalized career counseling to help students navigate the complexities of international job markets, providing insights into visa requirements, professional certifications, and career pathways.</p>
              <ButtonTerTiary text={'Register Now'}/>
            </div>
          </div>
          <Image src={ielts} alt="" />
        </div>
      </div>
      <div className="px-10 max-w-7xl mx-auto">
        <div className="2xl:py-[90px] xl:py-16 2xl:px-28 xl:px-20 grid grid-cols-4 count">
          <div>
            <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">12k</h1>
            <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
          </div>
          <div>
            <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">12k</h1>
            <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
          </div>
          <div>
            <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">12k</h1>
            <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
          </div>
          <div>
            <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">12k</h1>
            <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg">Trusted Clients</p>
          </div>
        </div>
      </div>
      <div className="px-10 max-w-7xl mx-auto flex justify-between gap-6 2xl:mb-40 xl:mb-28">
        <div className="flex-1 flex flex-col justify-between">
          <div className="mt-16">
            <div className="flex items-center gap-2">
              <FaTelegram />
              <h2 className="2xl:text-2xl xl:text-xl font-semibold">Why Choose UICC</h2>
            </div>
            <h1 className="2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-2 w-full">
              Reason to Choose Us
            </h1>
          </div>
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="p-2 w-fit bg-orange-light rounded-full">
                <div className="p-2 bg-orange rounded-full">
                  <FaVisa />
                </div>
              </div>
              <div>
                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Expert Faculty</h2>
                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Our team consists of seasoned professionals with years of experience in international education, language training, and career guidance.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 w-fit bg-orange-light rounded-full">
                <div className="p-2 bg-orange rounded-full">
                  <FaVisa />
                </div>
              </div>
              <div>
                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Student-Centered Approach</h2>
                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We pride ourselves on offering tailored solutions that cater to the individual goals and aspirations of our students.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 w-fit bg-orange-light rounded-full">
                <div className="p-2 bg-orange rounded-full">
                  <FaVisa />
                </div>
              </div>
              <div>
                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Global Network</h2>
                <p className="2xl:text-xl xl:text-lg font-normal mt-3">UICC has established connections with universities, companies, and professionals across the world, giving our students access to valuable resources and opportunities.</p>
              </div>
            </div>
          </div>
        </div>
        <Image className="w-1/2 max-h-[700px] object-fill" src={image2} alt="" />
      </div>
      <div className="px-10">
        <SectionTitle subHeading={'Testimonial'} heading={'Committed to provide you best services'} />
        <Slider />
      </div>
      <Faq />
      <div>
        <SectionTitle subHeading={'Latest News'} heading={'Our Latest News'} />
        <div className="px-10 grid grid-cols-2 gap-6 mt-10">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div >
  );
}
