import React from 'react';

const AstrologyInfo = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/image/num2.jpg)' }} // Replace with your image path
    >
      {/* Background overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-10 w-full h-full relative z-10 text-sin">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-center text-amber-500 mt-16">
          ජ්‍යොතිෂය යනු කුමක් ද?
        </h2>

        {/* Content */}
        <div className="space-y-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify max-w-4xl mx-auto ">
          <p className='sinhala-text '>
          ජ්‍යොතිෂය ශාස්ත‍්‍රය නැරණිතම චාරිත‍්‍ර වලින් එකකි බුදු දහමේ දැක්වෙන්නේ මීට වසර (2600) කට පෙර "තව්තිසා" දෙව්ලොව සිට "සිදිධාර්ථ" කුමරු ලෙස බුදුන් වහන්සේ උපත ලැබීමට අවශ්‍ය උපන් දිනය වේලාව සහ උපන් ස්ථානය තීරණය කළ බව නොරහසකි. එලෙසම ඉස්ලාමීය නව සඳ බැලීම මෙන්ම කතෝලික ආගම තුළද ජ්‍යොතිෂයට යම් යම් ක්‍රමවලින් ප්‍රතිලාභ ලැබෙන අවස්ථා තිබේ ඒ අනුව බලන කල ජ්‍යොතිෂය අනාදිමත් කාලයක සිට මිනිසා විසින් විවිධ අරමුණු සඳහා භාවිත කර ඇති ඉතින් මිනිසුන් තේරුම් ගෙන ඇත්තේ ආකාශ වස්තූන්ගේ චක්‍ර ග්‍රහලෝක සහ තරු සහ පෘථිවියේ චක්‍ර අතර සහසම්බන්ධයක් ඇති බවයි කඳ සහ සූර්යයා අපගේ දින දර්ශන නියාමනය කරන අතර අහසේ සිතියම නැවියන් සහ සංචාරකයින් කාලය පුරාවට මඟ පෙන්වයි ජ්‍යොතිෂය බටහිර හා පෙරදිග සංස්කෘතීන් කෙරෙහි ද විශාල බලපෑමක් ඇති කරන විද්‍යාවකි ඒ අනුව ජ්‍යෝති: ශාස්ත්‍රඥයින් ජ්‍යොතිෂය පුද්ගලයාගේ ජිව්තයට බලපාන ආකාරය සහ ඔහුගේ ඡන්ම තාරකාව (රාශි චක්‍රය) තේරුම් ගැනීමට මෙවලමක් ලෙස භාවිතා කරයි          </p>

          <p className='sinhala-text'>
          එසේම "ජ්‍යෝතිෂය" තාර්කික ආකාරයෙන් ග්‍රහලෝකවල බලපෑම් සහ අහසේ ඒවායේ චලනයන් අර්ථ කථනය කරයි කෑම ග්‍රහ ලෝකයකටම මිනිසුනට භෞතිකව ඔවුන්ගේ පෞරුෂය සහ ප්‍රදර්ශණය වන ගති ලක්ෂණ කෙරෙහි තමන්ගේම බලපෑමක් ඇති කේන්දරයක් යනු කුමක්ද? කේන්දරයක් යනු උපන් දිනය වේලාව සහ උපන් ස්ථානය ඇතුළුව උපන් දත්ත මත ගණනය කිරීමක් සහිත ජ්‍යොතිෂ්‍ය සටහනකි මූලික වශයෙන් ජෝති ශාස්ත්‍රීය කේන්දුර මගින් තාරකා ග්‍රහලෝක සහ ඒවායේ කක්ෂ සහ ඒවා මිනිස් හැසිරීම් කෙරෙහි ඇති කරන බලපෑම අධ්‍යයනය කරයි ඔබට සිදුවන්නේ කුමක්ද සහ කවදාද යන්න කෙලින්ම අනාවැකි කීමට කේන්දරයකට හැකියාවක් නැත. නමුත් ඒ වෙනුවට ඔබ කුමන ආකාරයේ පුද්ගලයෙක්ද සහ ඔබ දේවල වලට ප්‍රතිචාර දක්වන්නේ කෙසේද යන්න පැවසිය හැකියි          </p>

          <p className='sinhala-text'>
          විවාහය යනු පුද්ගලයෙකු තම ජිවිතයේ කරන විශාලතම සුදුවයි එබැවින් යුවල එකිනෙකාට ගැළපෙනවාද යන්න හැකි කෑම ආකාරයකින්ම සොයා බැලීම කැමවිටම සුදුසුයි පවුල් උසාවි වල කාලය ගතකර විශාල නීතිඥ ගාස්තු ගෙවා ඔබේ කාලය ගත කරනවාට වඩා හොඳ සහකරුවෙක් සොයා ගැනීමට දැන් කාලය හා මුදල් වැය කිරීම වඩා හොඳයි ශ්‍රී ලංකාවේ සහ ඉන්දියාවේ සිදුවන විවාහ වලින් බහුතරයක් යෝජිත විවාහයන් වන අතර බොහෝ අවස්ථාවල විවාහ දිනය දක්වාම අඹු කැමියන් එකිනෙකාට ආගන්තුක වන බැවින් අඹු කැමියන්ගේ ජන්ම පත්‍ර කන්දනය කිරීම ඉතා වැදගත් අංගයකි තීරණ ගැනීම සහ එය මානව වර්ගයා විසින් නිර්මාණය කරන ලද පැරණිතම ශක්‍යතා අධ්‍යයනයයි (ඩකික චදාරදාęබෝප) (UĐසත්) ((20)) ලෙස හඳුන්වන කේන්ද්‍රර ගැලපීම් වර්ග විස්සකී උපන් දිනය අනුව විවාහය සඳහා සබැඳි නොමිලයේ ගැලපෙන කේන්දරි          </p>

          <p className='sinhala-text'>
          ඔබගේ ජ්‍යොතිෂ අවශ්‍යතා සහ විශ්වාසවන්ත කේන්දර ගැලපීම ආශ‍්‍රිත සේවාවන් සඳහා අප හා එක්වන්න අපගේ නොමිලේ මාර්ගගත කේන්දර ගැලපීම සිංහල සේවා සේවාව මගින් ඔබගේ නරග ප්‍රති වල 20 ඉක්මනින් ලබා ගත හැකි මෙම මෘදුකාංගය භාවිතා කිරීමෙන් ඔබට දහස් ගණනක සිංහල දෙමළ මිනිසුන්ගේ විශ්වාසය වන අයුරින් යුවලකගේ විවාහ ගැළපීම ඉක්මනින තීරණය කළ හැකියි එය නව සම්බන්ධයක් හෝ ඔවුන්ගේ විවාහ ජීවිතය ආරම්භ කිරීමට පෙර යුවළගේ සම්බන්ධතාවයේ ප්‍රතිශනය තීරණය කිරීම ඥානවන්ත ක්‍රමයකි ඔබ සම්බන්ධතාවයක සිටි නම් L ඒ අනුව ඔබේ සම්බන්ධතාවය වැඩිදියුණු කිරීමට සහ මෙය මාර්ගෝපදේශයක් ලෙස භාවිතා කළ හැකියි එසේම මෙම සියලු පරීක්ෂාවන් ((1100%) කැබෑ සිංහල ජ්‍යෝති: ශාස්ත්‍රවේදියකු විසින් සම්පූර්ණයෙන් අධීක්ෂණය කරනු ලබන අතර මේ අනුව සියලුම දෙනාට නව කේන්දර සෑදීම L සෑදීම හෝ නිර්මාණය කිරීම කේන්ද්‍රර කියවීම ළදරු නම් තැබීම සඳහා අකුරු හෝ අර්ථවත් ළදරු නාම රාහු කාලය වැනි අදාළ සේවාවන් ලබා ගත හැකියි (.L) නැකත් සහ අපගේ මංගල සේවය හොඳම අකෙ 1 විවාහ සේවා සහ ඔබගේ සියලුම ජ්‍යොතිෂ උපදේශන අවශ්‍යනා වේ අපි වසර 12කට වැඩි කාලයක් ජ්‍යෝනි ශාස්ත්‍ර සේවයේ යෙදී සිටින බැවින් අපි මෙම වෙබ් අඩවිය සහ යෙදුම හරහා මෙය මාර්ගගතව ආරම්භ කළෙමු
          </p>
        </div>
      </div>
    </div>
  );
};

export default AstrologyInfo;
