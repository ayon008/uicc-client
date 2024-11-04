import Image from "next/image";
import bannerImage from '../../public/assets/vasily-koloda-8CqDvPuo_kI-unsplash.jpg'

export default function Home() {
  return (
    <div>
      <div className="banner-image max-h-[660px] relative">
        <Image src={bannerImage} className="w-full max-h-[660px] object-center" alt="" />
      </div>
    </div>
  );
}
