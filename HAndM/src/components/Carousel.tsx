
// import React, { useEffect, useRef, useState } from 'react'
// import "../css/Carousel.css";



// const Carousel: React.FC = () => {
//     const productContainerRef = useRef<HTMLDivElement>(null);
//     const [scrollLeft, setScrollLeft] = useState(0);
  
//     useEffect(() => {
//       if (productContainerRef.current) {
//         productContainerRef.current.scrollLeft = scrollLeft;
//       }
//     }, [scrollLeft]);
  
//     const handleNextClick = () => {
//       if (productContainerRef.current) {
//         const containerWidth = productContainerRef.current.offsetWidth;
//         setScrollLeft((prevScrollLeft) => prevScrollLeft + containerWidth);
//         console.log(containerWidth);
//         console.log(scrollLeft);
        
//       }
//     };
  
//     const handlePrevClick = () => {
//       if (productContainerRef.current) {
//         const containerWidth = productContainerRef.current.offsetWidth;
//         setScrollLeft((prevScrollLeft) => prevScrollLeft - containerWidth);
//         console.log(containerWidth);
//         console.log(scrollLeft);
//       }
//     };
    

//   return (
    
//     <div className="slideBanner">
//         <div className="product-container" ref={productContainerRef} style={{ overflowX: 'scroll',scrollMarginLeft:scrollLeft}}>
        
//          <div className="product"> 
//     <h2 className="product-category">best selling</h2>
//     <button className="pre-btn" onClick={handlePrevClick}>
//         {/* <img src="images/arrow.png" alt="" /> */}
//         <i className="fa-solid fa-chevron-right fa-2xl" style={{color: "#000000"}}></i>
        
//       </button>
//       <button className="nxt-btn" onClick={handleNextClick}>
//         {/* <img src="images/arrow.png" alt="" /> */}
//         <i className="fa-solid fa-chevron-right fa-2xl" style={{color: "#000000"}}></i>
//       </button>
//     <div className="product-container">
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card1.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card2.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card3.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card4.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card5.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card6.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card7.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card8.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card9.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//         <div className="product-card">
//             <div className="product-image">
//                 <span className="discount-tag">50% off</span>
//                 {/* <img src="images/card10.jpg" className="product-thumb" alt="" /> */}
//                 <button className="card-btn">add to wishlist</button>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-brand">brand</h2>
//                 <p className="product-short-description">a short line about the cloth..</p>
//                 <span className="price">$20</span><span className="actual-price">$40</span>
//             </div>
//         </div>
//     </div>
// </div>
//          </div>
   

//     </div>
//   )
// }

// export default Carousel

import React from "react";
import CardSlide from "react-card-slide";

const CardSlider = () => {
  const data = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is card 5",
      image: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div>
      <CardSlide data={data} />
    </div>
  );
};

export default CardSlider;