import React, { useRef } from 'react';
import 'tailwindcss/tailwind.css';
import a from '../assets/sell';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';  // Import Link

const SellSection = () => {
  const booksRef = useRef(null);
  const instrumentsRef = useRef(null);
  const notesRef = useRef(null);
  const utilitiesRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative px-10">

      {/* Marquee Section */}
      <div className="w-full flex flex-row justify-center items-center">
        <Marquee gradient={true} speed={60} pauseOnHover={true} direction="left">
          <div className="flex flex-row gap-0 w-full justify-center items-center">
            {a.map((item, idx) => (
              <div key={idx} className="rounded-lg border border-white w-64 h-36 max-w-lg m-2 mt-5 transform transition duration-300 ease-in-out hover:scale-105">
                <Link to={`/product/${item.id}`}> {/* Add Link wrapping the product */}
                  <div className="flex w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="w-1/3 bg-gray-300">
                      <img className="object-cover h-full w-full" src={item.pic} alt="Product" />
                    </div>
                    <div className="w-2/3 p-2">
                      <div className="flex justify-between items-center">
                        <h2 className="text-gray-900 font-bold text-xl">{item.price}</h2>
                      </div>
                      <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-gray-700 text-sm">{item.place}</span>
                        <button className="border hover:border-teal-500 bg-teal-500 text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-teal-500 hover:border transition duration-300 ease-in-out"> 
                          Buy Now 
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Section Component with Heading */}
      {/* Scrollable items below */}
      {[
        { name: "BOOKS", ref: booksRef },
        { name: "INSTRUMENTS", ref: instrumentsRef },
        { name: "NOTES", ref: notesRef },
        { name: "OTHER UTILITIES", ref: utilitiesRef },
      ].map((section, idx) => (
        <div key={idx} className="relative w-full my-20">
          
          {/* Section Heading */}
          <div className="flex justify-center items-center flex-col mb-6">
            <h2 className="text-3xl font-bold text-teal-600">{section.name}</h2>
            <hr className="w-24 border-t-4 border-teal-600 mt-2" />
          </div>

          {/* Scrollable Cards */}
          <div className="flex overflow-x-scroll space-x-6 px-8 no-scrollbar" ref={section.ref}>
            {a.map((item, index) => (
              <Link to={`/product/${item.id}`} key={index}>  {/* Add Link for each item */}
                <div className="min-w-[300px] max-w-xs rounded-lg overflow-hidden shadow-xl bg-white border-2 border-transparent border border-black">
                  <div className="relative">
                    <img className="w-full h-40 object-cover" src={item.pic} alt={`Image of ${item.desc}`} />
                  </div>
                  <div className="px-4 py-3">
                    <div className="font-bold text-lg mb-1">{item.price}</div>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                  <div className="flex items-center justify-between px-4 pb-4">
                    <span className="w-1/4 bg-gray-200 text-center rounded-sm px-3 py-1 text-xs font-semibold text-gray-700">{item.place}</span>
                    <span  className="w-1/2 border hover:border-teal-500 bg-teal-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-teal-500 transition duration-300 ease-in-out">Buy Now</span>
                    <span className="w-1/4 bg-gray-200 text-center rounded-sm px-3 py-1 text-xs font-semibold text-gray-700">{item.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellSection;
