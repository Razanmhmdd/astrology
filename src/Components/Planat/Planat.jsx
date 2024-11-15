import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import img1 from '/assets/image/planet/mars.jpg';
import img2 from '/assets/image/planet/eaeth.jpg';
import img3 from '/assets/image/planet/jupi.jpg';
import img4 from '/assets/image/planet/mercury.jpg';
import img5 from '/assets/image/planet/Neptune.webp';
import img6 from '/assets/image/planet/Saturn.jpg';
import img7 from '/assets/image/planet/uranus.webp';
import img8 from '/assets/image/planet/venus.jpg';


export default function Planat() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 2000,
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
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 overflow-hidden relative w-full px-4 sm:px-8 lg:px-12 py-6 bg-black">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 gap-4 md:gap-6 lg:gap-8">
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img1}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img2}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img3}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img4}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img5}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img6}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img7}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="px-2 md:px-4 lg:px-6">
              <img
                src={img8}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  )
}
