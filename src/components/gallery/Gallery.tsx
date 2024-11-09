import { useState } from "react";

type ImagesProps = {
  images: { src: string }[];
};

export const Gallery = ({ images }: ImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(-1);
  const showNextPreviousImage = (direction: number) => {
    setSelectedImage(
      (prevIndex) => (prevIndex + direction + images.length) % images.length
    );
  };
  return (
    <>
      <div className="max-h-[66vh] overflow-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </>
  );
};
