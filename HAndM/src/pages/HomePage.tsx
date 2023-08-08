import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import PhotoBanner from "../components/PhotoBanner";
import PhotoBanner0 from "../images/photoBanner0.png";
import PhotoBanner1 from "../images/photoBanner1.png";

function HomePage() {
  return (
    <>      <div className="homePageContent">
    <Banner
      title="Yeni geldi: Son trendleri keşfet!"
      linkList={{
        "Kadın": "#",
        "Erkek": "#",
        "Divided": "#",
        "Bebek": "#",
        "Çocuk": "#",
        "H&M HOME": "#",
        "Spor": "#",
      }}
      bgColors={["#ebc0cc","#ffd372"]}  
      />
      <PhotoBanner link="#" linkTitle="Şimdi satın al" subTitle="Spor salonu mu, antrenman mı, koşu mu? Kendine özel stil ve işlevselliği bul." title="Tayt rehberi" image={PhotoBanner0} titleHelp="" />
      <PhotoBanner link="#" linkTitle="Şimdi satın al" subTitle="" title="Yeni sezon koleksiyonu" image={PhotoBanner1} titleHelp="bghelp" />
      <Carousel />

  </div>
  </>
  )
}

export default HomePage