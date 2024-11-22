
import React from "react";
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
                <p className="text-justify font-medium">
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
