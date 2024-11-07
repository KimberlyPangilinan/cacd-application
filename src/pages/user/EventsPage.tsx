import React from 'react'
import { DivMotion } from '../../components/common/DivMotion'
import EventTimer from '../../components/events/EventTimer'
import { PrimaryButton } from '../../components/common/Buttons'
import EventCard , {Event} from '../../components/events/EventCard'
type  Events = {
    month: string;
    events: Event[];
   
  }
const sampleEventsByMonth: Events[] = [
    {
        month: "January",
        events:[ {
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
          },]
    },
    {
        month: "February",
        events:[ {
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
          },]
    },
   
    
 
  ];
  
const EventsPage = () => {
  return (
  <>
        {/* ------------------------- Featured Event Section ------------------------- */}
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
          <PrimaryButton title="View All Events" action ={async () => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Changes saved!');
  }}/>
        </div>

        <div className="flex-1 w-full space-y-4">
          {sampleEventsByMonth.slice(0, 5).map((events) => {
            return (
              <DivMotion>
              <h2 className='text-neutral-600 uppercase text-sm font-bold mb-6'>{events.month}</h2>
              {events.events.map((eventItem)=>{
              return (
                <EventCard event={eventItem} />
              )})}
              
              </DivMotion>
            );
          })}
        </div>
      </section>
  </>
  )
}

export default EventsPage