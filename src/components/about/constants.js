import fox from '../../assets/fox.jpg';
import gamma from '../../assets/gamma.jpg';
import kood from '../../assets/kood.jpg';
import maksim from '../../assets/maksim.jpg'
import rasim from '../../assets/rasim.jpg'
import oleg from '../../assets/oleg.png'
import roman from '../../assets/roman.png'

export const schools = [
    {
        alt: 'kood/Jõhvi logo',
        url: 'https://imgonetwothree.com/gallery/company-logo_100_100/16408?',
        photo: kood,
        name: 'Kood/Jõhvi',
        location: 'Tallinn, Estonia',
        spec: 'Software Engineering',
        dates: '2023-2025',
    },
    {
        alt: 'foxminded logo',
        url: 'https://imgonetwothree.com/gallery/company-logo_100_100/07798?',
        photo: fox,
        name: 'foxmindEd',
        location: 'Online',
        spec: 'Frontend Development',
        dates: '2022-2023',
    },
    {
        alt: 'gamma logo',
        url: 'https://imgonetwothree.com/gallery/company-logo_100_100/07790?',
        photo: gamma,
        name: 'Gamma Intelligence',
        location: 'Tallinn, Estonia',
        spec: 'Frontend Development',
        dates: '2022-2023',
    },
];

export const technologies = [
    { name: 'React', level: 'Advanced', line: '2' },
    { name: 'JavaScript', level: 'Advanced', line: '3' },
    { name: 'TypeScript', level: 'Advanced', line: '4' },
    { name: 'HTML', level: 'Expert', line: '5' },
    { name: 'CSS', level: 'Expert', line: '6' },
];

export const experience = [
    {
        role: 'Junior Software Engineer',
        company: 'TOPIA OÜ · Contract',
        time: 'May 2023 - Jul 2023',
        location: 'Tallinn, Harjumaa, Estonia',
        skills: 'Jenkins · React.js · Git · TypeScript · Jira',
    },
    {
        role: 'Frontend Internship',
        company: 'Gamma Intelligence',
        time: 'Nov 2022 - Feb 2023',
        location: 'Tallinn, Harjumaa, Estonia',
        skills: 'React.js · Git · JavaScript',
    },
];

export const comments = {
    maksim: {
        name: 'Maksim Kolodijev',
        role: 'Software and Data Quality Engineer',
        comment: 'I would like to recommend Kurban as the one of our most motivated and competent student and developer from our longest (12 weeks) course "Front-end development with React.js". His strong motivation, attention to details and ability to fast learn and go deep inside technology certainly bring value for every software development project.',
        photo: maksim,
    },
    oleg: {
        name: 'Oleg Stoyanov',
        role: 'Senior Frontend Developer',
        comment: `I can confidently say that he is one of the most motivated and enthusiastic students I have ever had the pleasure of teaching. His passion for web development is infectious, and he has a keen eye for detail that sets him apart from his peers.`,
        photo: oleg,
    },
    roman: {
        name: 'Roman Kutselepa',
        role: 'Fullstack Developer.',
        comment: `He is a good and passionate person with a creative eye for design and a strong foundation in HTML, CSS, and JavaScript. I see Kurban as an always seeking new challenges and opportunities to grow as a frontend developer`,
        photo: roman,
    },
    rasim: {
        name: 'Rasim Mehtijev',
        role: 'Senior Frontend Developer.',
        comment: `As a junior developer, your performance has exceeded expectations. Your ability to quickly learn new technologies and apply them to the projects you are working on is impressive. Your attention to detail and commitment to writing clean, efficient code has not gone unnoticed. Your communication skills and willingness to collaborate with other team members have also been a valuable asset. Keep up the great work, and we look forward to seeing your continued growth and success as a developer.`,
        photo: rasim,
    }
}