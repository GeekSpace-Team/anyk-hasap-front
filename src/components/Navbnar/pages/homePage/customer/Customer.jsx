// import React, { useEffect, Component } from 'react'
// import Container from '@mui/material/Container';
// import { useTranslation } from "react-i18next";
// import { Grid, Stack } from '@mui/material';      
// import { i18n } from '../../../../../Language/LangConfig';
// import { ConstructionRounded } from '@mui/icons-material';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styled from 'styled-components'
// import { customerReviewsList } from '../../constant/constants.mjs';
// import './customer.css'


// const Customer = () => {
//   const { t } = useTranslation();
//   useEffect(() => {
//     let l = localStorage.getItem('lang');
//     if (l != null && typeof l !== 'undefined') {
//       i18n.changeLanguage(l);
//     } else {
//       i18n.changeLanguage("en");
//     }
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: false,
//     speed: 1000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1

//         }
//       }
//     ]
//   }
  
//   return (
//     <div className='customerReview'>
//       <Container maxWidth="lg">
//         <div className='ourServ'>
//           <Customeeeer>
//             <span>{t('customerReviews')}</span>
//           </Customeeeer>
//         </div>
//         <Slider {...settings}>
//           {customerReviewsList.map((element,i)=>{
//               return(
//                 <Grid container mt={4}>
//                   <Grid alignItems={'center'} direction='column' className='items'>
//                     <div className="customerTextContainer">
//                       <div class="rectangle"><p>{t(element.text)}</p></div>
//                       <center><div class="triangle-down"></div></center>
//                     </div>
//                   </Grid>
//                   <Grid  direction='row' marginTop={13} marginBottom={10} spacing={1}>
//                     <center><img src={element.image} style={{ borderRadius: '50%', width: '60px', height: "60px" }} alt="" /></center>
//                     <center><label className='customerUserName'>{element.username}</label></center>
//                     <center><label className='customerUserName'>{element.desc}</label></center>
//                   </Grid>
//                 </Grid>
//               )
//           })}

           

       



          

//         </Slider>
//       </Container>
//     </div>
//   )
// }

// export default Customer



// const Customeeeer = styled.div`
// display: flex;
// align-items: center;
// justify-content:center;

// span {
//     font-size: 33px;
//     letter-spacing: 1.42px;
//     position: relative;
//     color: #000000;
//     text-transform: uppercase;
//     font-weight: 400;
//     font-family: regularFont;

//     &:after{
//       content:"";
//       height:2px;
//       background:#AA323C;
//       left: 0;
//       right: 0;
//       transform: scaleX(0.35);
//       bottom: -6px;
//       position: absolute;
//     }
// }
// `