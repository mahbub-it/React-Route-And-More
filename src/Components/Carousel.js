import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 0,
    image: "images/01.png",
    title: "Dramatically Engage",
    description: "Objectively innovate empowered manufactured products whereas parallel platforms."
  },
  {
    id: 1,
    image: "images/02.png",
    title: "Efficiently Unleash",
    description: "Dramatically maintain clicks-and-mortar solutions without functional solutions."
  },
  {
    id: 2,
    image: "images/03.png",
    title: "Proactively Pontificate",
    description: "Holistically pontificate installed base portals after maintainable products."
  }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, []);

  useEffect(() => {
    // Auto slide every 5 seconds
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
    {/* Carousel */}
          <div id="feature-carousel" className="carousel slide">
            <ol className="carousel-indicators">
              {slides.map((_, index) => (
                <li 
                  key={index}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                  style={{ cursor: 'pointer' }}
                ></li>
              ))}
            </ol>
            <div className="carousel-inner" role="listbox">
              {slides.map((slide, index) => (
                <div key={slide.id} className={`item ${index === activeIndex ? "active" : ""}`}>
                  <Link to="/"> 
                    <img className="img-responsive" src={slide.image} alt={slide.image} />
                  </Link>
                  <div className="carousel-caption"> 
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="left carousel-control" 
              onClick={prevSlide} 
              style={{ background: 'none', border: 'none', outline: 'none' }}
            >
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button 
              className="right carousel-control" 
              onClick={nextSlide} 
              style={{ background: 'none', border: 'none', outline: 'none' }}
            >
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
    </>
  )
}

export default Carousel