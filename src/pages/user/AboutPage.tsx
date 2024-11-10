import { Card } from "../../components/common/Card"
import { DivMotion } from "../../components/common/DivMotion"

type MemberProps = {
  firstName: string;
  lastName: string;
  position: string;
  description: string;
  photos: string[];
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

const CACD_ORG_MEMBERS: MemberProps[] = [
  {
    firstName: 'Michael',
    lastName: 'Green',
    position: 'CEO',
    description: 'Oversees all operations of the church organization, ensuring strategic goals are met.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2019-01-10T09:00:00Z'),
    updatedAt: new Date('2024-05-15T16:30:00Z')
  },
  {
    firstName: 'Susan',
    lastName: 'White',
    position: 'President',
    description: 'Leads the board meetings, represents the organization, and oversees church policies.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2017-05-15T11:30:00Z'),
    updatedAt: new Date('2024-04-20T15:45:00Z')
  },
  {
    firstName: 'James',
    lastName: 'Black',
    position: 'Board Member',
    description: 'Contributes to decision-making and policy setting for the church.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2018-02-20T14:45:00Z'),
    updatedAt: new Date('2024-07-12T10:30:00Z')
  },
  {
    firstName: 'Linda',
    lastName: 'Brown',
    position: 'Board Member',
    description: 'Provides insights and votes on organizational decisions and plans.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2020-06-01T13:00:00Z'),
    updatedAt: new Date('2024-08-15T09:45:00Z')
  },
  {
    firstName: 'Robert',
    lastName: 'Johnson',
    position: 'Secretary',
    description: 'Manages official documents, meeting notes, and correspondence for the organization.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2021-04-25T12:15:00Z'),
    updatedAt: new Date('2024-03-11T14:20:00Z')
  },
  {
    firstName: 'Emily',
    lastName: 'Clark',
    position: 'Board Member',
    description: 'Participates in strategic planning and oversight of the church’s initiatives.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2018-11-10T10:20:00Z'),
    updatedAt: new Date('2024-06-22T11:45:00Z')
  },
  {
    firstName: 'David',
    lastName: 'Martinez',
    position: 'Board Member',
    description: 'Advises on community outreach programs and mission efforts.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2019-03-05T09:40:00Z'),
    updatedAt: new Date('2024-07-05T13:20:00Z')
  },
  {
    firstName: 'Patricia',
    lastName: 'Harris',
    position: 'Board Member',
    description: 'Ensures adherence to church guidelines and assists with fundraising activities.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2021-01-15T08:30:00Z'),
    updatedAt: new Date('2024-08-10T10:50:00Z')
  },
  {
    firstName: 'Charles',
    lastName: 'Lopez',
    position: 'Board Member',
    description: 'Supports project development and provides input on new initiatives.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2020-09-12T15:00:00Z'),
    updatedAt: new Date('2024-05-25T14:35:00Z')
  },
  {
    firstName: 'Nancy',
    lastName: 'Adams',
    position: 'Board Member',
    description: 'Assists in reviewing financial statements and ensuring fiscal responsibility.',
    photos: [],
    deletedAt: null,
    createdAt: new Date('2019-06-20T12:00:00Z'),
    updatedAt: new Date('2024-07-30T09:25:00Z')
  }
];


export const AboutPage = () => {
  
  return (
    <>
      <section className="!min-h-[40vh] py-6 bg-cacdRed flex justify-between">
        <div className="w-[50vw] text-white">
          <DivMotion>
            <h3 className="mb-3 text-white">
             CACD Church of Christ
            </h3>
          </DivMotion>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          justo lacus, eleifend quis faucibus in, consectetur a libero.</span>
        </div>
        
      </section>
      <section className="flex flex-col min-h-[60vh] py-16">
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
      <section className="p-0 flex flex-row ">
        <div className="w-[48vw] min-h-[80vh] gap-6 bg-cacdRed px-16 text-center flex flex-col items-center justify-center  text-white">
          <h4 className="font-bold text-2xl">Our Story</h4>
          <p className="whitespace-pre-line w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem ante, eleifend id sollicitudin ac, dapibus sit amet eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ultrices maximus libero at facilisis. Pellentesque ut suscipit nisi.
          <br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nulla sed nisl gravida efficitur id ut turpis. Praesent lorem ante, eleifend id sollicitudin ac, dapibus sit amet eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ultrices maximus libero at facilisis. Pellentesque ut suscipit nisi.
          </p>
        </div>
        <div className="min-h-[80vh] bg-hero-image w-50 grow flex-1"></div>
      </section>

      <section className="flex flex-col gap-16">
      <div className="w-full justify-between flex">
          <h2 className="flex flex-col">
            <span className="text-cacdRed font-bold text-xs mb-2">
              CACD Church of Christ
            </span>
            <span className="uppercase font-bold !text-[2vw]">
             Meet CACD Organization
            </span>
            <p className="text-xs w-[50vw] mt-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem ante, eleifend id sollicitudin ac, dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lorem ante </p>
          </h2>
        </div>
        <div className="flex flex-wrap gap-8 justify-center ">
        {
          CACD_ORG_MEMBERS.map((member) => {
            return (
              <div className="bg-white gap-4 max-w-[40vh] border p-5 rounded-md flex flex-col">
              <img src="https://via.placeholder.com/150"/>
              <div className="flex flex-col gap-1">
                <span className="font-bold">{ member.firstName} {member.lastName}</span>
                <span className="text-xs text-neutral-600">{ member.position } </span>
                <span className="text-xs text-neutral-600">{ member.description } </span>
              </div>
            </div>
            )
          })
        }
         
        </div>
      </section>
    </>
  )
}
