import { useState } from "react";
import { Header } from "../../components/common/Headers";


const images1 = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
];
const GalleryPage = () => {
  const [images] = useState(images1);
  const [selectedImage, setSelectedImage] = useState(-1);

  const showNextPreviousImage = (direction: number) => {
    setSelectedImage(
      (prevIndex) => (prevIndex + direction + images.length) % images.length
    );
  };
  return (
    <div className=" flex flex-col max-h-screen  overflow-hidden">
    <Header />
    <main className="grow max-h-screen  overflow-hidden">
    
    <section className=" flex justify-start flex-col  py-2">
      <div className="h-[10vh] w-full justify-between flex">
        <h2 className="flex flex-col">
          <span className="text-cacdRed font-bold !text-[0.75rem] mb-2">
            CACD Church of Christ
          </span>
          <span className="uppercase font-bold text-3xl">Gallery</span>
        </h2>
      </div>
      <div className="h-[8vh] flex items-center w-full justify-between">
        <div>
        <button className="px-4 py-2 border-cacdRed border-b text-cacdRed text-sm">All Photos</button>
        <button className="px-4 py-2 border-neutral-500 border-b text-neutral-500 text-sm">All Albums</button>
        </div>
        <div>
          <select className="bg-white border px-4 py-3 text-sm min-w-[180px] rounded-sm text-neutral-700">
            <option>By Event</option>
            <option>hello</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
      </div>
      <div>
      <div className="max-h-[70vh] overflow-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img
              onClick={() => setSelectedImage(index)}
              key={index}
              src={image.src}
              className="w-full h-full rounded-lg object-cover shadow-md"
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
        {selectedImage != -1 && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button
              onClick={() => setSelectedImage(-1)}
              className="absolute top-2 right-2 text-4xl text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <button
              onClick={() => showNextPreviousImage(-1)}
              className="absolute top-1/2 left-2 text-4xl text-gray-600 hover:text-gray-800"
            >
              &lt;
            </button>
            <button
              onClick={() => showNextPreviousImage(1)}
              className="absolute top-1/2 right-2 text-4xl text-gray-600 hover:text-gray-800"
            >
              &gt;
            </button>
            <div className="relative shadow-lg  w-[80%]">
              <img
                src={images[selectedImage].src}
                alt="Selected"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </section>
    </main>
  </div>
  );
};

export default GalleryPage;
