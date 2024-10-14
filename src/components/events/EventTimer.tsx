import moment from "moment";
import { useEffect, useState } from "react";

const EventTimer = () => {
  const [endDate] = useState(moment("2024-11-10"));
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment(); 
      const duration = moment.duration(endDate.diff(now)); 

      if (duration.asSeconds() <= 0) {
        clearInterval(interval); 
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(duration.asDays()),
          hours: duration.hours(), 
          minutes: duration.minutes(), 
          seconds: duration.seconds(),
        });
      }
    }, 1000); 

    return () => clearInterval(interval); 
  }, [endDate]);
    
  return (
    <div className="flex-1 flex justify-center">
    <div className="text-white flex text-center">
      <div className="flex flex-col">
        <span className="text-4xl p-4 w-20">{timeLeft.days}</span>
        <span>Days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl p-4 w-20">{timeLeft.hours}</span>
        <span>Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl p-4 w-20">{timeLeft.minutes}</span>
        <span>Minutes</span>
      </div>
      <div className="flex flex-col">
        <span className="text-4xl p-4 w-20">{timeLeft.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  </div>
  )
}

export default EventTimer