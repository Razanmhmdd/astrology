// import React, { useEffect } from "react";
// import Glide from "@glidejs/glide";
// import "@glidejs/glide/dist/css/glide.core.min.css";
// import "@glidejs/glide/dist/css/glide.theme.min.css";
// import img1 from '/assets/image/horo/1.png';
// import img2 from '/assets/image/horo/2.png';
// import img3 from '/assets/image/horo/3.png';
// import img4 from '/assets/image/horo/4.png';
// import img5 from '/assets/image/horo/5.png';
// import img6 from '/assets/image/horo/6.png';
// import img7 from '/assets/image/horo/7.png';
// import img8 from '/assets/image/horo/8.png';
// import img9 from '/assets/image/horo/9.png';
// import img10 from '/assets/image/horo/10.png';
// import img11 from '/assets/image/horo/11.png';

// const CardSlider = () => {
//   useEffect(() => {
//     const glide = new Glide(".glide", {
//       type: "carousel",
//       startAt: 0,
//       perView: 3,
//       gap: 20, // Space between slides
//       breakpoints: {
//         1024: { perView: 2 }, // 2 slides on tablets
//         640: { perView: 1 },  // 1 slide on mobile
//       },
//     });

//     glide.mount();

//     return () => glide.destroy(); // Clean up on component unmount
//   }, []);

//   const cards = [
//     {
//       id: 1,
//       image: img1,
//       title: "මේෂ",
//       description: "රාම් විසින් නියෝජනය කරනු ලබන මේෂ, අඟහරු විසින් පාලනය කරනු ලබන ගතික සහ ස්ථිර ගිනි ලකුණකි. මෙම ලකුණ යටතේ උපන් පුද්ගලයින් ඔවුන්ගේ ධෛර්යය, ස්වාධීනත්වය සහ ආශාව සඳහා ප්රසිද්ධය. ඔවුන් ස්වභාවිකව උපන් නායකයන් වන අතර ඔවුන් නිර්භයව තම අරමුණු පසුපස හඹා යන අතර අභියෝග ජය ගනී. වික්‍රමාන්විත ආත්මයක් සහ ජීවිතය සඳහා රුචිකත්වයක් ඇති මේෂ සෑම විටම නව මංපෙත් දැල්වීමට සහ හඳුනා නොගත් භූමි ප්‍රදේශ ගවේෂණය කිරීමට සූදානම්ය",
//     },
//     {
//       id: 2,
//       image:img2,
//       title: "වෘෂභ",
//       description: "වෘෂභ විසින් සංකේතවත් කරන ලද ටෝරස් යනු සිකුරු විසින් පාලනය කරනු ලබන පෘථිවි ලකුණකි. මෙම ලකුණ යටතේ උපන් අය ඔවුන්ගේ විශ්වසනීයත්වය, අධිෂ්ඨානය සහ සංවේදී ස්වභාවය සඳහා ප්රසිද්ධය. පදනම් වූ සහ ප්‍රායෝගික, ටෝරස් ජීවිතයේ සුවපහසුව අගය කරමින් ස්ථාවරත්වය සහ ආරක්ෂාව අගය කරයි. ඔවුන්ගේ අරමුණු සාක්ෂාත් කර ගැනීම සඳහා ස්ථීර ප්‍රවේශයක් සමඟින්, ඕනෑම බාධකයක් හරහා ඔවුන් දකින නොසැලෙන ශක්තියක් සහ ඔරොත්තු දීමේ හැකියාවක් ඔවුන්ට ඇත.",
//     },
//     {
//       id: 3,
//       image: img3,
//       title: "මිථුන",
//       description: "නිවුන් දරුවන් නියෝජනය කරන මිථුන, බුධ ග්‍රහයා විසින් පාලනය කරනු ලබන වාත රාශියකි. ඔවුන්ගේ බහුකාර්යතාව, කුතුහලය සහ බුද්ධිය සඳහා ප්රසිද්ධියක් උසුලන මිථුන රාශි චක්රයේ සමාජ සමනලුන් වේ. ඔවුන් තියුණු බුද්ධියක් ඇති අතර පුළුල් පරාසයක මාතෘකා ඔස්සේ සජීවී සංවාදවල යෙදීමට කැමතියි. සහජ අනුවර්තනය වීමේ හැකියාවක් සමඟින්, මිථුන ලග්නය විවිධ පරිසරයන් තුළ සමෘද්ධිමත් වන අතර බහු කාර්යයන්හි විශිෂ්ටත්වය දරයි.",
//     },
//     {
//       id: 4,
//       image: img4,
//       title: "කටක",
//       description: "කටක විසින් සංකේතවත් කරන ලද පිළිකාව යනු චන්ද්රයා විසින් පාලනය කරනු ලබන ජල ලකුණකි. මෙම ලග්නය යටතේ උපත ලබන පුද්ගලයන් ගැඹුරින් බුද්ධිමත්, පෝෂණය සහ ආරක්ෂිත වේ. ශක්තිමත් චිත්තවේගීය බුද්ධිය සමඟ, පිළිකා යනු පවුල සහ නිවස අගය කරන සංවේදී සවන්දෙන්නන් වේ. ඔවුන්ගේ සැලකිලිමත් ස්වභාවය සහ පක්ෂපාතීත්වය ඔවුන් ස්වභාවික රැකවරණ කරන්නන් බවට පත් කරයි, ඔවුන් ආදරය කරන අයට සහයෝගය සහ සැනසීම ලබා දීමට සැමවිටම සූදානම්.",
//     },
//     {
//         id: 4,
//         image: img5,
//         title: "සිංහ",
//         description: "සිංහ නියෝජනය කරන ලියෝ යනු සූර්යයා විසින් පාලනය කරනු ලබන ගිනි ලකුණකි. මෙම ලකුණ යටතේ උපන් අය විශ්වාසවන්ත, ත්යාගශීලී සහ ආකර්ෂණීය නායකයන් වේ. නාට්‍යමය හැකියාවක් සහිතව, ලියෝ ඔවුන් යන ඕනෑම තැනක අවධානය යොමු කර අවධානයට ලක් වේ. ඔවුන්ගේ උණුසුම සහ පක්ෂපාතීත්වය අන් අයට ආස්වාදයක් ලබා දෙන අතර, ඔවුන් වටා සිටින අය නඟා සිටුවීමට සහ සවිබල ගැන්වීමට සහජ හැකියාවක් ඇත..",
//       },
//       {
//         id: 4,
//         image: img6,
//         title: "කන්‍යා",
//         description: "කන්‍යා විසින් සංකේතවත් කරන ලද කන්‍යා යනු බුධ ග්‍රහයා විසින් පාලනය කරනු ලබන පෘථිවි ලකුණකි. ඔවුන්ගේ විශ්ලේෂණාත්මක මනස සහ සවිස්තරාත්මක අවධානය සඳහා ප්‍රසිද්ධ කන්‍යා ලග්නය ප්‍රායෝගික, කඩිසර සහ නිහතමානී පුද්ගලයන් වේ. රාජකාරිය සහ සේවය පිළිබඳ දැඩි හැඟීමක් ඇතිව, ඔවුන් ආයතනික කාර්යයන්හි විශිෂ්ටත්වය දක්වන අතර ඔවුන් කරන සෑම දෙයකම පරිපූර්ණත්වය සඳහා උත්සාහ කරයි. ඔවුන්ගේ ක්‍රමානුකූල ප්‍රවේශය සහ ගැටළු විසඳීමේ කුසලතා",
//       },
//       {
//         id: 4,
//         image: img7,
//         title: "තුලා",
//         description: "කොරපොතු වලින් නියෝජනය වන තුලා යනු සිකුරු විසින් පාලනය කරන වායු ලකුණකි. මෙම ලකුණ යටතේ උපත ලබන පුද්ගලයන් රාජ්යතාන්ත්රික, ආකර්ශනීය සහ ආදර හැඟීම් ඇති අය වේ. සාධාරණත්වය සහ යුක්තිය පිළිබඳ ස්වභාවික හැඟීමක් ඇති ලිබ්‍රාස් ජීවිතයේ සෑම අංශයකම සමගිය සහ සමබරතාවය අපේක්ෂා කරයි. ඔවුන් සුන්දරත්වය සඳහා දැඩි ඇසක් ඇති අතර කලාව, සංගීතය සහ සංස්කෘතිය සමඟ තමන් වටා විනෝද වෙති",
//       },
//       {
//         id: 4,
//         image: img4,
//         title: "වෘශ්චික",
//         description: "වෘශ්චික විසින් සංකේතවත් කරන ලද, ප්ලූටෝ සහ අඟහරු විසින් පාලනය කරන ලද ජල ලකුණකි. ඔවුන්ගේ තීව්රතාවය සහ ආශාව සඳහා ප්රසිද්ධ, වෘශ්චික අභිරහස්, අධිෂ්ඨානශීලී සහ සම්පත්දායක පුද්ගලයන් වේ. හැඟීම්වල ගැඹුරක් සහ බලවත් බුද්ධියක් ඇති ඔවුන් සැඟවුණු සත්‍යයන් අනාවරණය කර ගැනීමට සහ ජීවිතයේ සංකීර්ණතා සැරිසැරීමට දක්ෂයි. ඔවුන්ගේ පරිවර්තනීය ස්වභාවය ඔවුන්ට අළු වලින් නැඟී වෙන කවරදාටත් වඩා ශක්තිමත් වීමට ඉඩ සලස",
//       },
//       {
//         id: 4,
//         image: img8,
//         title: "ධනු",
//         description: "ධනු, දුනුවායා විසින් නියෝජනය කරනු ලබන්නේ බ්රහස්පති විසින් පාලනය කරනු ලබන ගිනි ලකුණකි. මෙම ලකුණ යටතේ උපන් අය ශුභවාදී, වික්රමාන්විත සහ දාර්ශනික ය. නිදහසට සහ ගවේෂණයට ඇල්මක් ඇති ධනු රාශිය යනු ජීවන ගමනේ අරුත සහ සත්‍යය සොයන ස්වභාවික ඉබාගාතේ යන අයයි. ඔවුන්ගේ විනෝදකාමී ආත්මය සහ බෝවන උද්යෝගය නව අත්දැකීම් වැලඳ ගැනීමට සහ ඔවුන්ගේ ක්ෂිතිජය පුළුල් කිරීමට අන් අයව පොළඹවයි.",
//       },
//       {
//         id: 4,
//         image: img9,
//         title: "මකර",
//         description: "මුහුදු-එළුවා විසින් සංකේතවත් කරන ලද මකර ලග්නය, සෙනසුරු විසින් පාලනය කරනු ලබන පෘථිවි ලකුණකි. ඔවුන්ගේ අභිලාෂය, විනය සහ ප්‍රායෝගිකත්වය සඳහා ප්‍රසිද්ධ, මකර ලග්නය රාශි චක්‍රයේ වෙහෙස මහන්සි වී වැඩ කරන අය වේ. වගකීම් සහ නොපසුබට උත්සාහය පිළිබඳ දැඩි හැඟීමකින් යුතුව, ඔවුන් තම අරමුණු කරා ළඟා වීමට සහ අනාගතය සඳහා සුරක්ෂිත පදනමක් ගොඩනඟා ගැනීමට කැපවී සිටිති. ඔවුන්ගේ ඉවසිලිවන්ත සහ අධිෂ්ඨානශීලී ස්වභාවය ඔවුන්ගේ සියලු කටයුතුවල සාර්ථකත්වය සහතික කරයි.",
//       },
//       {
//         id: 4,
//         image: img10,
//         title: "කුම්භ",
//         description: "ජල-දරන්නා විසින් නියෝජනය කරන කුම්භ, යුරේනස් සහ සෙනසුරු විසින් පාලනය කරන වායු ලකුණකි. මෙම ලකුණ යටතේ උපන් පුද්ගලයන් ස්වාධීන, ප්රගතිශීලී සහ මානුෂීය වේ. තීක්ෂ්ණ බුද්ධියක් සහ කැරලිකාර ආත්මයක් ඇති, Aquarians සමාජ අරමුණු වෙනුවෙන් සහ නවෝත්පාදනයන් වැලඳ ගන්නා දූරදර්ශී වේ. ඔවුන්ගේ විකේන්ද්‍රියත්වය සහ ප්‍රභවය ඔවුන් වටා ලෝකය වෙනස් කිරීමට සහ විප්ලවයක් ඇති කරයි",
//       },
//       {
//         id: 4,
//         image: img11,
//         title: "මීන",
//         description: "මත්ස්යයා විසින් සංකේතවත් කරන ලද මීන, නෙප්චූන් සහ බ්රහස්පති විසින් පාලනය කරන ජල ලකුණකි. ඔවුන්ගේ අනුකම්පාව, බුද්ධිය සහ පරිකල්පනය සඳහා ප්‍රසිද්ධ, මීන රාශි චක්‍රයේ සිහින දකින්නන් සහ සුව කරන්නන් වේ. යටි සිතට සහ අධ්‍යාත්මික ක්ෂේත්‍රයට ගැඹුරු සම්බන්ධයක් ඇති ඔවුන් අන් අයව තමන් වෙතට ඇද ගන්නා අද්භූත ප්‍රබෝධයක් ඇත. ඔවුන්ගේ පරාර්ථකාමී ස්වභාවය සහ සංවේදී හදවත ඔවුන් ලෝකයට ආලෝකය සහ සුවය ගෙන දෙන ස්වභාවික සංවේදනයන් බවට පත් කරයි",
//       },
//   ];

//   return (
//     <div className="glide max-w-6xl mx-auto p-6">
        
//       <div className="glide__track" data-glide-el="track">
//         <ul className="glide__slides">
//           {cards.map((card) => (
//             <li key={card.id} className="glide__slide">
//               <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-2 font-bold text-amber-700">{card.title}</h3>
//                   <p className="text-black-600">{card.description}</p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* Navigation arrows */}
//       <div className="glide__arrows" data-glide-el="controls">
//         <button
//           className="glide__arrow glide__arrow--prev "
//           data-glide-dir="<"
//         >
//           Prev
//         </button>
//         <button
//           className="glide__arrow glide__arrow--next "
//           data-glide-dir=">"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardSlider;
import React from "react";
import { Link } from "react-router-dom"; 
import img1 from '/assets/image/horo/1.jpg';
import img2 from '/assets/image/horo/2.jpg';
import img3 from '/assets/image/horo/3.webp';
import img4 from '/assets/image/horo/4.jpg';
import img5 from '/assets/image/horo/5.webp';
import img6 from '/assets/image/horo/7.jpg';
import img7 from '/assets/image/horo/8.webp';
import img8 from '/assets/image/horo/9.jpg';
import img12 from '/assets/image/horo/10.jpg';
import img9 from '/assets/image/horo/12.jpg';
import img10 from '/assets/image/horo/13.webp';
import img11 from '/assets/image/horo/14.webp';


const CardGridView = () => {
  const cards = [
    { id: 1, image: img1, title: "මේෂ", link: "/zodiac/mesha" ,description:"rdï úiska ksfhdackh lrkq ,nk fïI\" wÕyre úiska md,kh lrkq ,nk .;sl iy ia:sr .sks ,l=Kls'. fuu ,l=K hgf;a Wmka mqoa.,hska Tjqkaf.a ffO¾hh\" iajdëk;ajh iy wdYdj i|yd marisoaOh'. Tjqka iajNdúlj Wmka kdhlhka jk w;r Tjqka ks¾Nhj ;u wruqKq miqmi yUd hk w;r wNsfhda. ch .kS' úl%udkaú; wd;auhla iy Ôú;h i|yd reÑl;ajhla we;s fïI iEu úgu kj uxfm;a oe,aùug iy y÷kd fkd.;a NQñ m%foaY .fõIKh lsÍug iQodkïh"},
    { id: 2, image: img2, title: "වෘෂභ", link: "/zodiac/vrushabha" ,description:"jDIN úiska ixfla;j;a lrk ,o fgdaria hkq isl=re úiska md,kh lrkq ,nk mD:sú ,l=Kls'. fuu ,l=K hgf;a Wmka wh Tjqkaf.a úYajikSh;ajh\" wêIaGdkh iy ixfõ§ iajNdjh i|yd marisoaOh'. mokï jQ iy m%dfhda.sl\" fgdaria Ôú;fha iqjmyiqj w.h lrñka ia:djr;ajh iy wdrlaIdj w.h lrhs'. Tjqkaf.a wruqKq idlaId;a lr .ekSu i|yd iaÒr m%fõYhla iuÕska\" ´kEu ndOlhla yryd Tjqka olsk fkdief,k Yla;shla iy Tfrd;a;= §fï yelshdjla Tjqkag we;"},
    { id: 3, image: img3, title: "මිථුන", link: "/zodiac/mithuna",description: "ksjqka orejka ksfhdackh lrk ñ:qk\" nqO .%yhd úiska md,kh lrkq ,nk jd; rdYshls'. Tjqkaf.a nyqld¾h;dj\" l=;=y,h iy nqoaêh i|yd marisoaêhla Wiq,k ñ:qk rdYs plarfha iudc iuk¨ka fõ'. Tjqka ;shqKq nqoaêhla we;s w;r mq¿,a mrdihl ud;Dld Tiafia iÔù ixjdoj, fh§ug leu;shs' iyc wkqj¾;kh ùfï yelshdjla iuÕska\" ñ:qk ,.akh úúO mßirhka ;=< iuDoaêu;a jk w;r nyq ld¾hhkays úYsIag;ajh orhs'"},
    { id: 4, image: img4, title: "කටක", link: "/zodiac/kataka" ,description:"lgl úiska ixfla;j;a lrk ,o ms<sldj hkq pkaoarhd úiska md,kh lrkq ,nk c, ,l=Kls'. fuu ,.akh hgf;a Wm; ,nk mqoa.,hka .eUqßka nqoaêu;a fmdaIKh iy wdrlaIs; fõ'. Yla;su;a Ñ;a;fõ.Sh nqoaêh iuÕ ms<sld hkq mjq, iy ksji w.h lrk ixfõ§ ijkafokakka fõ'. Tjqkaf.a ie,ls,su;a iajNdjh iy mlaImd;S;ajh Tjqka iajNdúl /ljrK lrkakka njg m;a lrhs. Tjqka wdorh lrk whg iyfhda.h iy iekiSu ,nd §ug ieuúgu iQodkï'.",},
    { id: 5, image: img5, title: "සිංහ", link: "/zodiac/sinha","description": "isxy ksfhdackh lrk ,sfhda hkq iQ¾hhd úiska md,kh lrkq ,nk .sks ,l=Kls'. fuu ,l=K hgf;a Wmka wh úYajdijka;\" ;ahd.YS,S iy wdl¾IKSh kdhlhka fõ'. kdgHuh yelshdjla iys;j\" ,sfhda Tjqka hk ´kEu ;ekl wjOdkh fhduq lr wjOdkhg ,la fõ'. Tjqkaf.a WKqiqu iy mlaImd;S;ajh wka whg wdiajdohla ,nd fok w;r\" Tjqka jgd isák wh kÕd isgqùug iy iún, .ekaùug iyc yelshdjla we;"},
    { id: 6, image: img6, title: "කන්‍යා", link: "/zodiac/kanaya" ,description:"lgl úiska ixfla;j;a lrk ,o ms<sldj hkq pkaoarhd úiska md,kh lrkq ,nk c, ,l=Kls'. fuu ,.akh isxy ksfhdackh lrk ,sfhda hkq iQ¾hhd úiska md,kh lrkq isxy ksfhdackh lrk ,sfhda hkq iQ¾hhd úiska md,kh lkHd úiska ixfla;j;a lrk ,o lkHd hkq nqO .%yhd úiska md,kh lrkq ,nk mD:sú ,l=Kls'. Tjqkaf.a úYaf,aIKd;aul uki iy iúia;rd;aul wjOdkh i|yd m%isoaO lkHd ,.akh m%dfhda.sl\" läir iy ksy;udkS mqoa.,hka fõ'. rdcldßh iy fiajh ms<sn| oeä yeÕSula we;sj\" Tjqka wdh;ksl ld¾hhkays úYsIag;ajh olajk w;r Tjqka lrk iEu fohlu mßmQ¾K;ajh i|yd W;aidy lrhs'. Tjqkaf.a l%udkql+, m%fõYh iy .eg¿ úi£fï l=i,;d Tjqka ´kEu ;;ajhl§ jákd j;alï njg m;a lrhs",},
    { id: 7, image: img7, title: "තුලා", link: "/zodiac/thula" ,"description": "fldrfmd;= j,ska ksfhdackh jk ;=,d hkq isl=re úiska md,kh lrk jdhq ,l=Kls'. fuu ,l=K hgf;a Wm; ,nk mqoa.,hka rdÊh;dka;aßl\" wdl¾YkSh iy wdor yeÕSï we;s wh fõ'. idOdrK;ajh iy hqla;sh ms<sn| iajNdúl yeÕSula we;s ,sn%dia Ôú;fha iEu wxYhlu iu.sh iy iunr;djh wfmalaId lrhs'. Tjqka iqkaor;ajh i|yd oeä weila we;s w;r l,dj\" ix.S;h iy ixialD;sh iuÕ ;uka jgd úfkdao fj;s"},
    { id: 8, image: img8, title: "වෘශ්චික", link: "/zodiac/vrishchika","description": "jDYaÑl úiska ixfla;j;a lrk ,o\" maÆfgda iy wÕyre úiska md,kh lrk ,o c, ,l=Kls'. Tjqkaf.a ;Sõr;djh iy wdYdj i|yd marisoaO\" jDYaÑl wNsryia\" wêIaGdkYS,S iy iïm;aodhl mqoa.,hka fõ'. yeÕSïj, .eUqrla iy n,j;a nqoaêhla we;s Tjqka ieÕjqKq i;Hhka wkdjrKh lr .ekSug iy Ôú;fha ixlS¾K;d ießieÍug olaIhs'. Tjqkaf.a mßj¾;kSh iajNdjh Tjqkag w¿ j,ska keÕS fjk ljrodg;a jvd Yla;su;a ùug bv i,ihs"},
    { id: 9, image: img9, title: "ධනු", link: "/zodiac/dhanu" ,"description": "Okq\" ÿkqjdhd úiska ksfhdackh lrkq ,nkafka íryiam;s úiska md,kh lrkq ,nk .sks ,l=Kls'. fuu ,l=K hgf;a Wmka wh YqNjd§\" úlarudkaú; iy od¾Yksl h'. ksoyig iy .fõIKhg we,aula we;s Okq rdYsh hkq Ôjk .ufka wre; iy i;Hh fidhk iajNdúl bnd.df;a hk whhs'. Tjqkaf.a úfkdaoldó wd;auh iy fndajk Woafhda.h kj w;aoelSï je,| .ekSug iy Tjqkaf.a laIs;sch mq¿,a lsÍug wka whj fmd<Ujhs'.",},
    { id: 10, image: img10, title: "මකර", link: "/zodiac/makara","description": "uqyqÿ)t¿jd úiska ixfla;j;a lrk ,o ulr ,.akh\" fikiqre úiska md,kh lrkq ,nk mD:sú ,l=Kls'. Tjqkaf.a wNs,dIh\" úkh iy m%dfhda.sl;ajh i|yd m%isoaO\" ulr ,.akh rdYs pl%fha fjfyi uykais ù jev lrk wh fõ'. j.lSï iy fkdmiqng W;aidyh ms<sn| oeä yeÕSulska hq;=j\" Tjqka ;u wruqKq lrd <Õd ùug iy wkd.;h i|yd iqrlaIs; mokula f.dvkÕd .ekSug lemù isá;s'. Tjqkaf.a bjis,sjka; iy wêIaGdkYS,S iajNdjh Tjqkaf.a ish¨ lghq;=j, id¾:l;ajh iy;sl lrhs'.", },
    { id: 12, image: img12, title: "කුම්භ", link: "/zodiac/kumbha" ,"description": "c,)orkakd úiska ksfhdackh lrk l=ïN\" hqf¾kia iy fikiqre úiska md,kh lrk jdhq ,l=Kls'. fuu ,l=K hgf;a Wmka mqoa.,hka iajdëk\" mar.;sYS,S iy udkqISh fõ'. ;SlaIaK nqoaêhla iy ler,sldr wd;auhla we;s\" Aquarians iudc wruqKq fjkqfjka iy kfjda;amdokhka je,| .kakd ¥ro¾YS fõ'. Tjqkaf.a úflakao%sh;ajh iy m%Njh Tjqka jgd f,dalh fjkia lsÍug iy úma,jhla we;s lrhs'.",},
    { id: 11, image: img11, title: "මීන", link: "/zodiac/meena" ,"description": "u;aiahhd úiska ixfla;j;a lrk ,o ók\" fkmapQka iy íryiam;s úiska md,kh lrk c, ,l=Kls'. Tjqkaf.a wkqlïmdj\" nqoaêh iy mßl,amkh i|yd m%isoaO\" ók rdYs pl%fha isysk olskakka iy iqj lrkakka fõ' há is;g iy wOHd;añl lafIa;%hg .eUqre iïnkaOhla we;s Tjqka wka whj ;uka fj;g weo .kakd woaNQ; m%fndaOhla we;' Tjqkaf.a mrd¾:ldó iajNdjh iy ixfõ§ yoj; Tjqka f,dalhg wdf,dalh iy iqjh f.k fok iajNdúl ixfõokhka njg m;a lrhs'.",},
    
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen text-sin"
      style={{ backgroundImage: "url('/assets/image/nume.jpg')" }} // Path to your background image
    >
      {/* Overlay to reduce opacity */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto py-6 px-4">
        <h2 className="text-3xl font-bold text-center text-amber-300 mb-6">
          ලග්න අභිරහස් විවෘත කිරීම
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-50  rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  {card.title}
                </h3>
                <p className="text-justify">
                 {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGridView;
