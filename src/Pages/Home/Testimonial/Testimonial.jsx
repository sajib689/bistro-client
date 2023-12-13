import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <section className="my-20">
            <SectionTitle 
            subHeading={'---What Our Clients Say---'}
            heading={'TESTIMONIALS'}
            >
        </SectionTitle>
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        {
            reviews.map(review => console.log(review))
        }
      </Swiper>
        </>
        </section>
    );
};

export default Testimonial;