import React from 'react';

const AstrologyInfo = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/image/num2.jpg)' }} // Replace with your image path
    >
      {/* Background overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-10 w-full h-full relative z-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-center text-amber-500">
          ජ්‍යොතිෂය යනු කුමක් ද?
        </h2>

        {/* Content */}
        <div className="space-y-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify max-w-3xl">
          <p>
            ජ්‍යොනිපය ශාස්ත‍්‍රය පැරණිතම චාරිර වලින් එකකි. බුදු දහමේ දැක්වෙන්නේ
            මීට වසර (2600) කට පෙර "තවි නිසා" දෙව්ලොව සිට "සිද්ධාර්ථ" කුමරු ලෙස
            බුදුන් වහන්සේ උපත ලැබීමට අවශ්‍ය උපන් දිනය වේලාව සහ උපන් ස්ථානය
            තීරණය කළ බව නොරහසකි. එලෙසම ඉස්ලාමීය නව සඳ බැලීම මෙන්ම කතෝලික
            ආගම තුළද ජ්‍යොතිෂයට යම් යම් කුළු වලින් ප්‍රතිලාභ ලැබෙන අවස්ථා
            තිබේ. ඒ අනුව බලන කල, ජ්‍යොතිෂය අනාදිමත් කාලයක සිට මිනිසා විසින්
            විවිධ අරමුණු සඳහා භාවිත කර ඇත.
          </p>

          <p>
            මිනිසුන් තේරුම් ගෙන ඇත්තේ ආකාශ වස්තූන්ගේ චතු ගුහ ලෝක සහ තරු සහ
            පෘථිවියේ චතු අතර සහ සම්බන්ධයක් ඇති බවයි. සඳ සහ සූර්යයා අපගේ
            දින දර්ශන නියාමනය කරන අතර අහසේ සිතියම නැවියන් සහ සංචාරකයින් කාලය
            පුරාවට මඟ පෙන්වයි. ජ්‍යොතිෂය බටහිර හා පෙරදිග සංස්කෘතීන් කෙරෙහි ද
            විශාල බලපෑමක් ඇති කරන විද්‍යාවකි.
          </p>

          <p>
            ජ්‍යෝතිශාස්ත‍්‍රවේදින්, ජ්‍යොතිෂය පුද්ගලයාගේ ජිවිතයට බලපාන ආකාරය
            සහ ඔහුගේ ජන්ම තාරකාව (රාශි චක්‍රය) තේරුම් ගැනීමට මෙවලමක් ලෙස
            භාවිතා කරයි. එසේම "ජ්‍යෝතපය" තාර්කික ආකාරයෙන් ගුහ ලෝක වල බලපෑම්
            සහ අහසේ ඒවාගේ චලනයන් අර්ථ කථනය කරයි.
          </p>

          <p>
            කේන්ද්‍රරයක් යනු කුමක්ද? කේන්ද්‍රරයක් යනු උපන් දිනය, වේලාව සහ උපන්
            ස්ථානය ඇතුළුව උප දත්ත මත ගණනය කිරීම සහිත ජ්‍යොතිෂ්‍ය සටහනකි.
          </p>

          <p>
            විවාහය යනු පුද්ගලයෙකුගේ ජිවිතයේ විශාලතම සුවදැකි. එබැවින්
            අඹු සැමියන්ගේ ජනන්ම පතු සංසන්දනය කිරීම ඉතා වැදගත්. ශ්‍රී ලංකාවේ
            සහ ඉන්දියාවේ විවාහ බහුතරයක් යෝජිත විවාහයන් වන අතර, විවාහ දිනය
            දක්වා අඩුසැමියන් එකිනෙකාට ආගන්තුක වන බැවින්, අඹු සැමියන්ගේ ජනන්ම
            පතු සංසන්දනය කිරීම අවශ්‍යයි.
          </p>

          <p>
            අපි වසර 12කට වැඩි කාලයක් ජෝජ්‍යෝතිඃ ශාස්තු සේවයේ යෙදී සිටි අතර
            අපගේ නොමිලේ මාර්ගහන කේන්දර ගැලපීම සිංහල සේවා මගින් ඔබගේ තරග
            ප්‍රතිඵල 20 ඉක්මනින් ලබා ගත හැකියි. මෙම මෘදුකාංගය භාවිතා කිරීමෙන්
            ඔබට විශ්වාසවන්ත කේන්දර ගැලපීම සඳහා සහය ලබා ගත හැකියි.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AstrologyInfo;
