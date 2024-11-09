import EventCard, { Event } from "../../components/events/EventCard";
import EventTimer from "../../components/events/EventTimer";
import { DivMotion } from "../../components/common/DivMotion";
import { Card } from "../../components/common/Card";
import { useState } from "react";
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryButtonOutline,
} from "../../components/common/Buttons";
import { Gallery } from "../../components/gallery/Gallery";

const sampleEvents: Event[] = [
  {
    name: "Sample Event 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus laoreet nulla, non sagittis ipsum egestas ut. Integer a arcu quis enim vestibulum viverra euismod quis tortor. Fusce luctus magna at mauris aliquam, ac cursus orci ultricies. Phasellus porta dolor et quam venenatis vehicula. Mauris dictum nulla a mi vestibulum, at accumsan ex lacinia. Integer ut bibendum erat. Pellentesque tincidunt a quam nec semper",
    img: "https://via.placeholder.com/150",
    date: 1730261613000,
  },
  {
    name: "Sample Event 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus laoreet nulla, non sagittis ipsum egestas ut. Integer a arcu quis enim vestibulum viverra euismod quis tortor. Fusce luctus magna at mauris aliquam, ac cursus orci ultricies. Phasellus porta dolor et quam venenatis vehicula. Mauris dictum nulla a mi vestibulum, at accumsan ex lacinia. Integer ut bibendum erat. Pellentesque tincidunt a quam nec semperThis is the description of the second event.",
    img: "https://via.placeholder.com/150",
    date: 1730261613000,
  },
  {
    name: "Sample Event 3",
    description: "This is the description of the third event.",
    img: "https://via.placeholder.com/150",
    date: 1730261613000,
  },
];
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
];
export const HomePage = () => {
  const [images] = useState(images1);

  return (
    <>
      {/* ------------------------------ Hero Section ------------------------------ */}
      <section className="bg-hero-image bg-cover w-[100vw] h-[100vh]">
        <div>
          <div className="flex flex-col gap-2 w-[45vw] text-white text-center">
            <h1 className=" text-[3vw]">Life Changing Journey to God</h1>
            <p>
              To bring all peoples to the kingdom of the living God regardless
              of race, status, belief and religious affiliations through the
              saving.
            </p>
            <div className="mt-2">
              <DivMotion>
                <button className="border-2 border-white rounded-full px-6 py-2 text-sm text-white font-bold">
                  Join us Now
                </button>
              </DivMotion>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- Featured Event Section ------------------------- */}
      <section className="min-h-[48vh] bg-cacdRed flex justify-between">
        <div className="w-[30vw] text-white">
          <DivMotion>
            <h3 className="text-2xl mb-3 text-white">
              Let’s make the world a better place
            </h3>
          </DivMotion>
          <span>Subheading</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            justo lacus, eleifend quis faucibus in, consectetur a libero.
          </p>
        </div>
        <div className="flex-1 flex justify-around">
          <EventTimer />
          <div className="flex flex-col items-center justify-center gap-4 px-8">
            <SecondaryButtonOutline title="Register Now" />
            <SecondaryButton title="View Event" />
          </div>
        </div>
      </section>

      {/* ------------------------- Upcoming Events Section ------------------------ */}
      <section className="flex flex-col min-h-[100vh]">
        <div className="w-full justify-between flex mb-10">
          <h2 className="flex flex-col">
            <span className="text-cacdRed font-bold text-xs mb-2">
              CACD Church of Christ
            </span>
            <span className="uppercase font-bold text-3xl">
              Upcoming Events
            </span>
          </h2>
          <PrimaryButton
            title="View All Events"
            action={async () => {
              // Simulate a network request or long-running process
              await new Promise((resolve) => setTimeout(resolve, 1500));
              alert("Changes saved!");
            }}
          />
        </div>

        <div className="flex-1 w-full space-y-4">
          {sampleEvents.slice(0, 2).map((sampleEvent) => {
            return (
              <DivMotion>
                <EventCard event={sampleEvent} />
              </DivMotion>
            );
          })}
        </div>
      </section>

      {/* ------------------------------ About Section ----------------------------- */}
      <section className="flex bg-cacdRed p-0">
        <div className="w-[60vw] justify-center items-center text-white flex flex-col p-8 gap-4">
          <h2 className="text-3xl font-sans ">About the Church</h2>
          <p className="w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu
            nulla sed nisl gravida efficitur id ut turpis. Praesent lorem ante,
            eleifend id sollicitudin ac, dapibus sit amet eros. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Cras ultrices maximus libero at facilisis.
            Pellentesque ut suscipit nisi.
          </p>
          <SecondaryButtonOutline title="Read More About Us" />
        </div>

        <div className="min-h-[64vh] w-[40vw] space-y-4 bg-about-image"></div>
      </section>

      {/* ------------------------------ Mission, Vision & Core values Section ----------------------------- */}
      <section className="flex flex-col min-h-[100vh]">
        <div className="w-full justify-between flex mb-10">
          <h2 className="flex flex-col">
            <span className="text-cacdRed font-bold text-xs mb-2">
              CACD Church of Christ
            </span>
            <span className="uppercase font-bold text-3xl">
              Mission, Vision, & Core Values
            </span>
          </h2>
        </div>

        <div className="flex-1 flex justify-between gap-4 w-full space-y-4">
          <Card
            title="Mission"
            description="To bring all peoples to the kingdom of the living God regardless of  race, status, belief and religious affiliations through the saving,  healing, delivering, and transforming power of the Lord Jesus Christ."
            icon="prime:globe"
          />
          <Card
            title="Vision"
            description="A glorious church evangelizing and discipling Filipinos and all the  peoples of the world through teaching, preaching and living-out the  full-Gospel of the Lord Jesus Christ."
            icon="prime:heart"
          />
          <Card
            title="Core Values"
            description="Passionate Love for God
            Love and Compassion for Others 
            Integrity 
            Faithfulness"
            icon="ph:users"
          />
        </div>
      </section>
      <section className="flex justify-center items-center min-h-[60vh] bg-divider-image bg-black bg-cover text-white">
        <div className="text-center flex flex-col gap-4 justify-center items-center">
          <h1 className="text-4xl font-bold">
            Let's make the world, a better place
          </h1>
          <p className="w-[80%]">
            To bring all peoples to the kingdom of the living God regardless of
            race, status, belief and religious affiliations through the saving.
          </p>
        </div>
      </section>
      <section className="flex flex-col min-h-[100vh]">
        <div className="w-full justify-between flex mb-10">
          <h2 className="flex flex-col">
            <span className="text-cacdRed font-bold text-xs mb-2">
              CACD Church of Christ
            </span>
            <span className="uppercase font-bold text-3xl">Gallery</span>
          </h2>
        </div>

        <Gallery images={images} />
      </section>
      <section className="p-0">
        <div className="min-h-[55vh] w-[100vw] flex justify-end pr-[10%] space-y-4 bg-about-image">
          <div className="bg-cacdRed w-[50vw] justify-center items-center text-white flex flex-col p-8 gap-4">
            <h2 className="text-xl font-sans ">Support the Ministry</h2>
            <p className="w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eu nulla sed nisl gravida efficitur id ut turpis. Praesent lorem
              ante, eleifend id sollicitudin ac, dapibus sit amet eros.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Cras ultrices maximus libero at
              facilisis. Pellentesque ut suscipit nisi.
            </p>
            <SecondaryButtonOutline title="Let's Donate" />
          </div>
        </div>
      </section>
    </>
  );
};
