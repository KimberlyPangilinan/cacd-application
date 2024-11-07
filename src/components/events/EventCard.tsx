import moment from "moment";
import { Icon } from '@iconify/react';
export type  Event = {
  name: string;
  description: string;
  img: string;
  date: number;
}

const EventCalendar = ({ date }: { date: number }) => {
  const day = moment(date).format("DD");
  const month = moment(date).format("MMM");
  return (
    <div className="flex flex-col font-sans bg-[#F5F5F5] text-center rounded-sm">
      <div className="text-xl py-1 px-3 ">{day}</div>
      <div className="bg-cacdRed p-1 text-[0.5rem] text-white uppercase rounded-b-sm">{month}</div>
    </div>
  );
};

const EventDetails = ({ event }: { event: Event } ) => {
  return (
  <div className="p-6 flex flex-col justify-between">
    <div  className="space-y-4">
    <div className="flex w-[70%] gap-4">
      <EventCalendar date={event.date} />
      <div className="flex flex-col">
        <div>
          <span className="text-2xl">{event.name}</span>
          <ul className="flex gap-6">
            <li className="italic font-bold flex gap-2 items-center">
              <Icon icon="la:user-solid" width="16" height="16" />
              Organizer
            </li>
            <li className="italic font-bold flex gap-2 items-center">
            <Icon icon="heroicons:calendar" width="16" height="16" />
              Date Range
            </li>
            <li className="italic font-bold flex gap-2 items-center">
              <Icon icon="heroicons:map-pin" width="16" height="16" />
              Location
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p>{event.description}</p>
    </div>
    <div>
      <button className="border-2 border-cacdRed rounded-full mt-8 px-6 py-2 text-sm text-cacdRed font-bold">Register to this event</button>
    </div>
  </div>
  );
};

const EventCard = ( { event }: { event: Event } ) => {
  return (
    <div className="flex w-full justify-between">
      <div>
        <img className="min-w-[30vw] h-[40vh] object-cover" src={event.img} />
      </div>
      <EventDetails event={event} />
    </div>
  );
};

export default EventCard;
