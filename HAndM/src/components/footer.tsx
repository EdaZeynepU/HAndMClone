import { Typography } from "@mui/material";
import logo from "../images/logoBlack.png";
import FooterSmallScreen from "./FooterSmallScreen";

function Footer() {
  return (
    <div className="footerBg">
      <footer>
        <div className="upperFooter">
          <div className="footer-column">
            <Typography className="footerTitle">ONLINE ALIŞVERİŞ</Typography>
            <ul>
              <a href="#" target="_blank">
                <li>KADIN</li>
              </a>
              <a href="#" target="_blank">
                <li>ERKEK</li>
              </a>
              <a href="#" target="_blank">
                <li>BEBEK</li>
              </a>
              <a href="#" target="_blank">
                <li>ÇOCUK</li>
              </a>
              <a href="#" target="_blank">
                <li>H&M HOME</li>
              </a>
              <a href="#" target="_blank">
                <li>Spor</li>
              </a>
            </ul>
          </div>

          <div className="footer-column">
            <Typography className="footerTitle">KURUMSAL BİLGİLER</Typography>
            <ul>
              <a href="#" target="_blank">
                <li>H&M’de Kariyer</li>
              </a>
              <a href="#" target="_blank">
                <li>H&M grubu hakkında</li>
              </a>
              <a href="#" target="_blank">
                <li>Sürdürülebilirlik H&M Group</li>
              </a>
              <a href="#" target="_blank">
                <li>Basın</li>
              </a>
              <a href="#" target="_blank">
                <li>Yatırımcı İlişkileri</li>
              </a>
              <a href="#" target="_blank">
                <li>Corporate Governance</li>
              </a>
            </ul>
          </div>

          <div className="footer-column">
            <Typography className="footerTitle">YARDIM</Typography>
            <ul>
              <a href="#" target="_blank">
                <li>Müşteri Hizmetleri</li>
              </a>

              <a href="#" target="_blank">
                <li>Hesabım</li>
              </a>

              <a href="#" target="_blank">
                <li>Mağaza Bulma Aracı</li>
              </a>

              <a href="#" target="_blank">
                <li>Yasal Kurallar & Gizlilik</li>
              </a>

              <a href="#" target="_blank">
                <li>İletişim</li>
              </a>

              <a href="#" target="_blank">
                <li>Hediye kartı</li>
              </a>

              <a href="#" target="_blank">
                <li>Bi̇r dolandırıcılığı bildir</li>
              </a>

              <a href="#" target="_blank">
                <li>Çerez bildirimi</li>
              </a>

              <a href="#" target="_blank">
                <li>Cookie Settings</li>
              </a>
            </ul>
          </div>
          <div className="footer-column">
            <Typography className="footerTitle">
              H&M MEMBER OL VE %10 İNDİRİM KAZAN
            </Typography>
            <ul>
              <li>H&M MEMBER OL</li>
              <a href="#">
                <li>
                  Daha fazla bilgi
                  <i className="fa-solid fa-arrow-right"></i>
                </li>
              </a>
            </ul>
          </div>
        </div>
          <FooterSmallScreen/>
        <div className="lowerFooter">
          <div className="footerIcons">
            <a href="#">
            <i
              className="fa-brands fa-square-facebook"
              style={{ color: "#000000" }}
            ></i>
            </a>
            <a href="#">
            <i
              className="fa-brands fa-twitter"
              style={{ color: "#000000" }}
            ></i>
            </a>
            <a href="#">
            <i
              className="fa-brands fa-instagram"
              style={{ color: "#000000" }}
            ></i>
            </a>
            <a href="#">
            <i
              className="fa-brands fa-youtube"
              style={{ color: "#000000" }}
            ></i>
            </a>
            <a href="#">
            <i
              className="fa-brands fa-pinterest"
              style={{ color: "#000000" }}
            ></i>
            </a>
          </div>
          <Typography component="p">
            Bu sayfanın içeriği telif hakları ile korunmaktadır ve H&M Hennes &
            Mauritz AB’ye aittir.
          </Typography>
          <img src={logo} alt="logo" width="51" height="34" style={{marginTop:"35px"}} />
          <div>
            <Typography component="div">
              <a href="#" className="countryPicker">
                Türkiye
              </a>{" "}
              | TL
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
