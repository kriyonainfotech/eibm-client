import React, { useState , useEffect } from "react";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      imgSrc: "/student1.jpg",
      name: "Lorem P. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      imgSrc: "/student2.jpeg",
      name: "Lorem P. Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // autoplay every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="reviews py-32 bg-[url('/testimonial-bg.png')] relative">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between justify-center">
          <div className="col-sm-10 col-md-10 col-lg-5 col-xl-5">
            <h2 className="text-4xl font-bold text-black pb-4">
              What Our Students <font className="text-mainblue">Says</font>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              excepturi non odio quidem eligendi nostrum, dicta quis blanditiis
              natus explicabo est. Accusamus iusto quia, cum dignissimos
              cupiditate consectetur ex totam.
            </p>
            <div className="pt-4 flex items-center">
              <img src="/testimonialv4.png" alt="testimonialv4" />
              <span className="text-mainblue font-bold text-xl ps-4">
                3k + Happy Students
              </span>
            </div>
          </div>
          <div className="col-sm-10 col-md-10 col-lg-5 col-xl-5 xs:pt-10 sm:pt-10 lg:pt-0 mx-auto">
            <div className="bg-white border-indigo-700 border-2 p-3 rounded-xl sm:w-100 lg:w-75 mx-auto relative">
              <img
                src="/testimonialv1.png"
                alt="testimonialv1"
                className="tv1 absolute -left-12 -top-14 -z-10 animate-pulse"
              />
              <img
                src="/testimonialv2.png"
                alt="testimonialv2"
                className="tv2 absolute -left-32 bottom-0 h-4/5 -z-10"
              />
              <img
                src="/testimonialv3.png"
                alt="testimonialv3"
                className="tv3 absolute -right-16 -bottom-14 -z-10 xs:hidden sm:block"
              />
              <div id="testim" className="testim">
                <div className="testim-cover">
                  <div className="wrap">
                    <span
                      id="right-arrow"
                      className="arrow right fa fa-chevron-right"
                      onClick={nextSlide}
                    />
                    <span
                      id="left-arrow"
                      className="arrow left fa fa-chevron-left"
                      onClick={prevSlide}
                    />
                    <ul id="testim-dots" className="dots">
                      {testimonials.map((_, index) => (
                        <li
                          key={index}
                          className={`dot ${
                            currentSlide === index ? "active" : ""
                          }`}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </ul>
                    <div id="testim-content" className="cont">
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className={`testimonial ${
                            currentSlide === index ? "active" : "inactive"
                          }`}
                        >
                          <div className="img">
                            <img src={testimonial.imgSrc} alt="testimonials" />
                          </div>
                          <h2 className="text-mainblue lg:text-lg">{testimonial.name}</h2>
                          <p className="text-black sm:text-sm lg:text-base">{testimonial.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
