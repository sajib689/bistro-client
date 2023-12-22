import FoodCard from "../../../Components/SectionTitle/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const OrderTab = ({ item }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-10 mt-12 mb-24">
            {item.map((items) => (
              <FoodCard items={items} key={items._id}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default OrderTab;
