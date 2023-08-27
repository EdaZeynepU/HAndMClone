import React from 'react'

interface SubtitleLinkPair {
  subtitle: string;
  link: string;
}

interface TitleWithSubtitlesProps {
  titles: {
    title: string;
    subtitles: SubtitleLinkPair[];
  }[];
}


const NavbarSubLinks: React.FC<TitleWithSubtitlesProps> = ({ titles }) => {
  return (
    <div className='NavbarSubLinksbg' >
    <div className='insideNavbarSubLinksbg'>
      {titles.map((titleData, index) => (
        <div key={index}>
          <ul>
          <li><strong>
             {titleData.title}
            </strong></li>
            {titleData.subtitles.map((pair, subIndex) => (
              <li key={subIndex} style={{fontWeight:"normal"}}>
                <a href={pair.link}>{pair.subtitle}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
};


export default NavbarSubLinks
