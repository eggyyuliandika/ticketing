"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const targetDate = new Date("2024-06-10T00:00:00");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [calculateTimeLeft]);

  return (
    <div className="max-h-screen w-auto bg-white">
      <div>
        <div className="flex h-14 w-auto items-center justify-between bg-gray-200 p-5">
          <div>
            <Image src="/logo.png" width={100} height={100} alt="logo" />
          </div>
          <div className="flex text-black">
            <button type="submit">
              <h1 className="px-10">Project</h1>
            </button>
            <button type="submit">
              <h1 className="px-10">Skill</h1>
            </button>
            <button type="submit">
              <h1 className="px-10">Gallery</h1>
            </button>
          </div>
          <div>
            <div className="w-22 h-auto rounded-lg bg-red-500 px-2 py-1">
              <button type="submit" className="m-0 text-center text-xs">
                Buy Ticket
              </button>
            </div>
          </div>
        </div>
        <div className="px-10 pt-[50px] pb-6 text-black">
          <div className="flex justify-between  ">
            <div className="w-auto text-start">
              <div className="w-[500px]">
                <h1 className="px-4 text-2xl font-semibold">
                  What is Nyeni Fest?
                </h1>
                <h1 className="p-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  nulla, exercitationem natus quo ipsam assumenda voluptate
                  molestiae odit sequi, provident sit commodi, nobis
                  consectetur. Reiciendis sequi doloribus at dicta perferendis.
                </h1>
                <h1 className="p-4">Check out our media sosial bellow.</h1>
              </div>
              <div className="mx-4 h-[50px] w-[200px] rounded-md bg-gray-200 px-2 pt-2">
                <div className="flex items-center justify-between px-4 pt-2 ">
                  <Image
                    src="/linkedin.png"
                    width={20}
                    height={20}
                    alt="icon location"
                  />

                  <Image
                    src="/instagram.png"
                    width={20}
                    height={20}
                    alt="icon calendar"
                  />
                  <Image
                    src="/facebook.png"
                    width={20}
                    height={20}
                    alt="icon calendar"
                  />
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/konser.png"
                width={500}
                height={700}
                alt="konser"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="pl-14 pr-10 mb-5">
          <div>
            <div className="grid grid-cols-4 h-26 text-black text-center">
              <div className="bg-red-100 py-5 rounded-l-lg">
                <h1>{timeLeft.days}</h1>
                <p>Days</p>
              </div>
              <div className="bg-red-100 py-5">
                <h1>{timeLeft.hours}</h1>
                <p>Hours</p>
              </div>
              <div className=" bg-red-200 py-5">
                <h1>{timeLeft.minutes}</h1>
                <h1>Minutes</h1>
              </div>
              <div className="py-5 bg-red-300 rounded-r-lg">
                <p>{timeLeft.seconds}</p>
                <h1>Second</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1142x] bg-white py-20">
        <div>
          <h1 className="text-center text-xl text-black">Artist</h1>
        </div>
        <>
          <div className="navigation-wrapper h-100vh flex items-center py-10">
            <div className="pl-[40px] pt-[40px]">
              {loaded && instanceRef.current && (
                <>
                  <button
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                    type="submit"
                  >
                    <Image src="/left.png" width={30} height={30} alt="arrow" />
                  </button>
                </>
              )}
            </div>

            <div ref={sliderRef} className="keen-slider px-[6px]">
              <div className="keen-slider__slide number-slide1 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
              <div className="keen-slider__slide number-slide2 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>

              <div className="keen-slider__slide number-slide3 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
              <div className="keen-slider__slide number-slide4 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
              <div className="keen-slider__slide number-slide5 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
              <div className="keen-slider__slide number-slide6 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
            </div>
            <div className="pr-[40px] pt-[40px]">
              {loaded && instanceRef.current && (
                <>
                  <button
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                    type="submit"
                  >
                    <Image
                      src="/right.png"
                      width={30}
                      height={30}
                      alt="arrow"
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      </div>
      <div className="h-[512px] w-auto bg-white px-14 ">
        <div>
          <h1 className="pt-10 text-center text-xl text-black">Package</h1>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-10 pt-20">
          <div className="h-28 w-72 rounded-md bg-black">
            <div className="p-5">
              <div>
                <div>
                  <h1>Early Bird</h1>
                  <p>Rp. 100.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-28 w-72 rounded-md bg-black">
            <div className="p-5">
              <div>
                <div>
                  <h1>Reguler</h1>
                  <p>Rp. 200.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-28 w-72 rounded-md bg-black ">
            <div className="p-5">
              <div>
                <div>
                  <h1>Presale 1</h1>
                  <p>Rp. 250.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-28 w-72 rounded-md bg-black">
            <div className="p-5">
              <div>
                <div>
                  <h1>Presale 3</h1>
                  <p>Rp. 350.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-28 w-72 rounded-md bg-black">
            <div className="p-5">
              <div>
                <div>
                  <h1>Presale 4</h1>
                  <p>Rp. 450.000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-28 w-72 rounded-md bg-black">
            <div className="p-5">
              <div>
                <div>
                  <h1>Presale 5</h1>
                  <p>Rp. 500.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1142x] bg-white py-20">
        <div>
          <h1 className="text-center text-xl text-black">Artist</h1>
        </div>
        <>
          <div className="navigation-wrapper h-100vh flex items-center py-10">
            <div className="pl-[40px] pt-[40px]">
              {loaded && instanceRef.current && (
                <>
                  <button
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                    type="submit"
                  >
                    <Image src="/left.png" width={30} height={30} alt="arrow" />
                  </button>
                </>
              )}
            </div>

            <div ref={sliderRef} className="keen-slider px-[6px]">
              <div className="keen-slider__slide number-slide1 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
              <div className="keen-slider__slide number-slide2 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>

              <div className="keen-slider__slide number-slide3 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
              <div className="keen-slider__slide number-slide4 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
              <div className="keen-slider__slide number-slide5 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
              <div className="keen-slider__slide number-slide6 flex">
                <Image src="/konser.png" width={500} height={500} alt="image" />
                <Image src="/konser.png" width={500} height={500} alt="image" />
              </div>
            </div>
            <div className="pr-[40px] pt-[40px]">
              {loaded && instanceRef.current && (
                <>
                  <button
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                    type="submit"
                  >
                    <Image
                      src="/right.png"
                      width={30}
                      height={30}
                      alt="arrow"
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
