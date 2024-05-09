import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const slides = [
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6628caca5c5a792dc35e334e/BANNER_15164575812303.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6634b46531444639f701a3b9/BANNER_114755840197468.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6634b582612806540fb5cc24/BANNER_29521659210053.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/661e26cfed10e573241db298/BANNER_546435820938249.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/6628cf684612774f0ecdb8fb/BANNER_197827613670845.png",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/65d3092febbb2771ded6b290/BANNER_275774641174217.jpg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/660fd3c5b4f9e115a0f6c48a/BANNER_162814980521707.jpeg",
    "https://img.wynk.in/unsafe/880x307/filters:no_upscale():strip_exif():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/660fd84724d0da7514839227/BANNER_34658055899916.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <img className="w-full" src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
