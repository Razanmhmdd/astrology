import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import img1 from '/assets/image/planet/11.png';
import img2 from '/assets/image/planet/22.png';
import img3 from '/assets/image/planet/33.png';
import img4 from '/assets/image/planet/44.png';
import img5 from '/assets/image/planet/55.png';
import img6 from '/assets/image/planet/66.png';
import bgImg from '/assets/image/content/new.jpg'; // Background image

export default function Planat() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 3000,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div
        className="glide-09 overflow-hidden relative w-full px-4 sm:px-8 lg:px-12 py-6 bg-black"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 10, // Adjust opacity
        }}
      >
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 gap-4 md:gap-6 lg:gap-8">
            {[img1, img2, img3, img4, img5, img6].map((img, index) => (
              <li key={index} className="px-2 md:px-4 lg:px-6">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={img}
                    className="object-cover m-auto h-20 w-20"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
