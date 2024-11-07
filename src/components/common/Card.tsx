import { Icon } from '@iconify/react'
export type  CardProps = {
    title: string,
    description: string,
    link?: string,
    icon?: string,
    color?: string,
    backgroundColor?: string,
}
export const Card = ({icon, title, description}:  CardProps) => {
  return (
    <div className="flex flex-col text-center items-center justify-center h-[50vh] w-[25vw] p-8">
        {icon && <Icon icon={icon} width="32" height="32" />}
        <h3 className="mt-4 font-sans text-xl font-bold">{title}</h3>
        <p className="text-neutral-600 text-center whitespace-pre-line">{description}</p>
    </div>
  )
}
