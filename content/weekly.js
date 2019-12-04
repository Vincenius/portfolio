import { WeeklyPreview } from '../components'

const data = [
    {
        id: 2,
        title: 'Weekly web development update from 4th December 2019',
        date: 'December 04, 2019',
        link: 'https://vincentwill.com/weekly/2',
        image: '/weekly/weekly2.jpg',
        preview: '/weekly/2.jpg',
        description: 'Bootstrap Icons, SVG Landscapes, roughViz.js, JavaScript Christmas, Curlie, Cell and more..',
    },
    {
        id: 1,
        title: 'Weekly web development update from 27th November 2019',
        date: 'November 27, 2019',
        link: 'https://vincentwill.com/weekly/1',
        image: '/resources/resources01.jpg',
        preview: '/weekly/1.jpg',
        description: 'SWR, Fresh Folk, Colors & fonts, Animated CSS Backgrounds, Postwoman, Pika and more',
    }
]

export default data

// TODO move to generator
export const generateWeekly = () => {
    return data.map(d => <WeeklyPreview
        key={`weekly-${d.id}`}
        number={d.id}
        date={d.date}
        description={d.description}
    />)
}
