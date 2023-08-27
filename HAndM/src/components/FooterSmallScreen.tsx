import { Typography } from '@mui/material';
import React, { useState } from 'react';

interface AccordionProps {
  items: { title: string; content: { subtitle: string; link: string }[] }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    if (activeIndex.indexOf(index) == -1) {
      setActiveIndex((prev)=>[...prev,index]);
    }else{
      setActiveIndex((prev)=>prev.filter((x)=>x!=index));
    }
  };

  return (
    // <div className="upperFooterSmallScreen">
    <>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${activeIndex.indexOf(index) != -1 ? 'active' : ''}`}
            onClick={() => handleItemClick(index)}
            style={{
              color:activeIndex.indexOf(index) == -1 ? "#000000": "red"}}
          >
            <p className='acordion-title-writing'>{item.title}</p> 
            <i className="fa-solid fa-chevron-down" style={{alignSelf:"center"}} ></i>
          </div>
          {activeIndex.indexOf(index) != -1 && (
            <div className="accordion-content">
              <ul className="accordion-list">
                {item.content.map((subItem, subIndex) => (
                  <li key={subIndex} className="accordion-subitem">
                    <a href={subItem.link}>{subItem.subtitle}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
    // </div>
  );
};


const AccordionWithDatas: React.FC = () => {  
  const accordionItems = [
    {
      title: 'ONLINE ALIŞVERİŞ',
      content: [
        { subtitle: 'KADIN', link: '#' },
        { subtitle: 'ERKEK', link: '#' },
        { subtitle: 'BEBEK', link: '#' },
        { subtitle: 'ÇOCUK', link: '#' },
        { subtitle: 'H&M HOME', link: '#' },
        { subtitle: 'Divided', link: '#' },
        { subtitle: 'Spor', link: '#' },
      ],
    },
    {
      title: 'KURUMSAL BİLGİLER',
      content: [
        { subtitle: 'H&M’de Kariyer', link: '#' },
        { subtitle: 'H&M grubu hakkında', link: '#' },
        { subtitle: 'Sürdürülebilirlik H&M Group', link: '#' },
        { subtitle: 'Basın', link: '#' },
        { subtitle: 'Yatırımcı İlişkileri', link: '#' },
        { subtitle: 'Corporate Governance', link: '#' },
        { subtitle: 'YARDIM', link: '#' },
      ],
    },
    {
      title: 'YARDIM',
      content: [
        { subtitle: 'Müşteri Hizmetleri', link: '#' },
        { subtitle: 'Hesabım', link: '#' },
        { subtitle: 'Mağaza Bulma Aracı', link: '#' },
        { subtitle: 'Yasal Kurallar & Gizlilik', link: '#' },
        { subtitle: 'İletişim', link: '#' },
        { subtitle: 'Hediye kartı', link: '#' },
        { subtitle: 'Bi̇r dolandırıcılığı bildir', link: '#' },
        { subtitle: 'Çerez bildirimi', link: '#' },
        { subtitle: 'Cookie Settings', link: '#' },
      ],
    },
  ];


  return (
    <div className='upperFooterSmallScreen'>
      <Accordion items={accordionItems} />
      <Typography variant='body1' component="div" sx={{display:"flex",fontWeight:"700",paddingTop:"30px"}} justifyContent="center">
        H&M MEMBER OL VE %10 İNDİRİM KAZAN</Typography>
        <Typography variant='body1' component="div" sx={{display:"flex", paddingBottom:"15px"}} justifyContent="center"> H&M MEMBER OL</Typography>
        <div className="accordion-item">
        <a href="#" target='_blank'><div className="accordion-title">
            <p className='acordion-title-writing'>Daha fazla bilgi</p> 
            <i className="fa-solid fa-arrow-right" style={{alignSelf:"center"}} ></i>
          </div></a>
        </div>
    </div>
  );
};

export default AccordionWithDatas;
