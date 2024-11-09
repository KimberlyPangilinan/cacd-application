import { useState } from "react";
import { Gallery } from "../../components/gallery/Gallery";

const IMAGES = [
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

const ALBUMS = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    title: "Event CACD Fellowship",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    alt: "Boats (Jeshu John - designerspics.com)",
    title: "First Sunday Night",
    description: "first Sunday Night",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    title: "2024 Everything's Fine",
  },
];
const GalleryPage = () => {
  const gallery = {
    PHOTOS: 1,
    ALBUMS: 2,
  };
  const [images] = useState(IMAGES);
  const [albums] = useState(ALBUMS);
  const [selectedView, setSelectedView] = useState(gallery.PHOTOS);

  return (
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
          <button
            onClick={() => setSelectedView(gallery.PHOTOS)}
            className={`px-4 py-2 border-b text-sm ${
              selectedView === gallery.PHOTOS
                ? "border-cacdRed text-cacdRed"
                : "border-neutral-500  text-neutral-500"
            }`}
          >
            {" "}
            All Photos
          </button>
          <button
            onClick={() => setSelectedView(gallery.ALBUMS)}
            className={`px-4 py-2 border-b text-sm ${
              selectedView === gallery.ALBUMS
                ? "border-cacdRed text-cacdRed"
                : "border-neutral-500 border-b text-neutral-500"
            }`}
          >
            {" "}
            All Albums
          </button>
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
        {selectedView == gallery.PHOTOS && <Gallery images={images} />}
        {selectedView == gallery.ALBUMS && (
          <div className="max-h-[66vh] overflow-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {albums.map((image, index) => (
              <img
                key={index}
                src={image.src}
                className="w-full h-full rounded-lg object-cover shadow-md"
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryPage;
