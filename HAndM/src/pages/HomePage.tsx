import Banner from "../components/Banner";
import PhotoBanner from "../components/PhotoBanner";
import PhotoBanner0 from "../images/photoBanner0.png";
import PhotoBanner1 from "../images/photoBanner1.png";
import PhotoBanner2 from "../images/photoBanner2.png";
import Magazine from "../components/Magazine";
import BannerDiscount from "../components/BannerDiscount";

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
      <BannerDiscount />
      <PhotoBanner link="#" linkTitle="Şimdi satın al" subTitle="Her stile uygun yastıklarla kanepene şık bir güncelleme yap." title="Trend: Kırlentler!" image={PhotoBanner2} titleHelp="bghelp" />
      <Magazine />

  </div>
  </>
  )
}

export default HomePage