import EventCard, { Event } from "../../components/events/EventCard";
import EventTimer from "../../components/events/EventTimer";
import { DivMotion } from "../../components/common/DivMotion";

export const HomePage = () => {
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
  return (
    <>
      {/* ------------------------------ Hero Section ------------------------------ */}
      <section className="bg-hero-image bg-cover w-[100vw] h-[100vh]">
        <div>
          <div className="flex flex-col gap-2 w-[45vw] text-white text-center">
            <h2 className="text-4xl">Life Changing Journey to God</h2>
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
            <h3 className="text-2xl text-white">
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
            <button className="border border-white rounded-full px-8 py-2 text-sm text-white font-bold">
              Join us now
            </button>
            <button className="border-2 border-white rounded-full bg-white px-8 py-2 text-sm text-cacdRed font-bold">
              Join us now
            </button>
          </div>
        </div>
      </section>

      {/* ------------------------- Upcoming Events Section ------------------------ */}
      <section className="flex flex-col min-h-[100vh]">
        <div className="w-full justify-between flex mb-10">
          <h2 className="flex flex-col">
            <span className="text-cacdRed font-bold text-xs">
              CACD Church of Christ
            </span>
            <span className="uppercase font-bold text-3xl">
              Upcoming Events
            </span>
          </h2>
          <button className="bg-cacdRed rounded-full px-8 py-2 text-sm text-white font-bold">
            Join us now
          </button>
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
          <button className="border border-white rounded-full px-8 py-2 text-sm text-white font-bold">
            Read More About Us
          </button>
        </div>

        <div className="min-h-[64vh] w-[40vw] space-y-4 bg-about-image"></div>
      </section>
    </>
  );
};
