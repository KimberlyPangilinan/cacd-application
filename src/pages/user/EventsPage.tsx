import { DivMotion } from "../../components/common/DivMotion";
import EventTimer from "../../components/events/EventTimer";
import { PrimaryButton, PrimaryOutline } from "../../components/common/Buttons";
import EventCard, { Event } from "../../components/events/EventCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
type Events = {
  month: string;
  events: Event[];
};
const sampleEventsByMonth: Events[] = [
  {
    month: "January",
    events: [
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
    ],
  },
  {
    month: "February",
    events: [
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
    ],
  },
];

const EventsPage = () => {
  const [events, setEvents] = useState(sampleEventsByMonth)
  const [eventFilters, setEventFilters] = useState({
    name: '',
    category: '',
    status: 'UPCOMING',
    location: '',
    date: ''
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target
    setEventFilters({
      ...eventFilters,
      [name]: value
    })
  }
  useEffect(() => {
    console.log("Event filters updated:", eventFilters);
    const filteredEvents = events.map((month) => ({
      ...month,
      events: month.events.filter((event) =>
        event.name.toLowerCase().includes(eventFilters.name.toLowerCase())
      ),
    }));

    setEvents(filteredEvents);

  }, [eventFilters]); 
  return (
    <>
      {/* ------------------------- Featured Event Section ------------------------- */}
      { eventFilters.status == "UPCOMING" &&
      <section className="min-h-[36vh] bg-cacdRed flex justify-between">
        <div className="w-[40vw] text-white">
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
        </div>
      </section>
      } 
      {/* ------------------------- Upcoming Events Section ------------------------ */}
      { eventFilters.status == "UPCOMING" &&
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
            <div className="flex gap-4  justify-end">
              <div
                className="flex items-center justify-end gap-2 rounded-md border p-4 focus-within:border-red-600"
              >
                <input
                  type="text"
                  name="name"
                  className="w-100 grow focus:outline-none"
                  placeholder="Search by Name, Location, Tags"
                  onChange={handleChange}
                  value={eventFilters.name}
                />
                <Icon icon="line-md:search" />
              </div>
              <PrimaryButton
                title="View All Events"
                action={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 1500));
                  setEventFilters({...eventFilters, status: 'ALL'});
                }}
              />
            </div>
          </div>
  
          <div className="flex-1 w-full space-y-4">
            {events.slice(0, 5).map((events) => {
              return (
                <DivMotion>
                  <span className="text-neutral-600 uppercase text-sm font-bold mt-8">
                    {events.month}
                  </span>
                  {events.events.map((eventItem) => {
                    return <EventCard event={eventItem} />;
                  })}
                </DivMotion>
              );
            })}
          </div>
        </section>
      }
      { eventFilters.status == "ALL" &&
        <section className="flex flex-col min-h-[100vh] py-8">
          <div className="w-full justify-between flex mb-10">
            <h2 className="flex flex-col">
              <span className="text-cacdRed font-bold text-xs">
                CACD Church of Christ
              </span>
              <span className="uppercase font-bold text-3xl">
                All Events
              </span>
            </h2>
            <div className="flex gap-4  justify-end">
              <div
                className="flex items-center justify-end gap-2 rounded-md border p-4 focus-within:border-red-600"
              >
                <input
                  type="text"
                  name="name"
                  className="w-100 grow focus:outline-none"
                  placeholder="Search by Name, Location, Tags"
                  onChange={handleChange}
                  value={eventFilters.name}
                />
                <Icon icon="line-md:search" />
              </div>
              <PrimaryOutline
                title="Upcoming"
                action={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 1500));
                  alert("Changes saved!");
                }}
              />
               <PrimaryOutline
                title="Done"
                action={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 1500));
                  alert("Changes saved!");
                }}
              />
               <PrimaryOutline
                title="All"
                action={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 1500));
                  alert("Changes saved!");
                }}
              />
            </div>
          </div>
  
          <div className="flex-1 w-full space-y-4">
            {events.slice(0, 5).map((events) => {
              return (
                <DivMotion>
                  <span className="text-neutral-600 uppercase text-sm font-bold mt-8">
                    {events.month}
                  </span>
                  {events.events.map((eventItem) => {
                    return <EventCard event={eventItem} />;
                  })}
                </DivMotion>
              );
            })}
          </div>
        </section>
      }
    </>
  );
};

export default EventsPage;
