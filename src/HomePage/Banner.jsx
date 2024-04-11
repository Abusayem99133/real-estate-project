import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
const Banner = () => {
  return (
    <div className="sm:ml-0 md:ml-0 lg:ml-80">
      <Swiper navigation={true} modules={[Navigation]} loop={true}>
        <SwiperSlide>
          <div
            className="min-h-screen "
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/m2sKmRr5/pexels-binyamin-mellish-186077.jpg) ",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>Slide 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" min-h-screen "
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/R07HQcp8/pexels-binyamin-mellish-1396132.jpg)",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>Slide 2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.postimg.cc/sx4zT2C3/pexels-pixabay-164558.jpg)",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>Slide 3</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
