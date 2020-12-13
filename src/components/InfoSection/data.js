import developer  from '../../images/developer.svg';
import back_database  from '../../images/database.svg';
import version  from '../../images/version-control.svg';
import freelancer  from '../../images/freelancer-ok.svg';
import mobile  from '../../images/mobile.svg';
import frontend  from '../../images/frontend-dev.svg';
import profile from '../../images/profile.jpg'

export const heroInfo = {
    img: profile,
    alt:'antonio'
}
export const homeObj2 = {
    // this will be definetely to show who am i, talking about experience
    id:'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'What I do',
    headLine: 'Web development and hibryd mobile apps',
    description:'I have 2 years of professional experience, I can help you with an idea and transform this into a high quality product',
    buttonLabel:'My linked in',
    imgStart: false,
    img: freelancer,
    alt:'experience',
    primaryColorBtn: false,
    primaryButton: true,
    darkText: true
}

export const homeObj = {
    id:'mycode',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'My github',
    headLine: 'Fell free to check it out',
    description:'Antonio is a engineer who enjoys writing javascript code, and other web technologies as well.',
    buttonLabel:'Check my github',
    imgStart: false,
    img: version,
    alt:'my github',
    primaryColorBtn: false,
    primaryButton: true,
}


export const ServicesObj = {
    id:'experience',
    lightBg: false,
    lightTitle: true,
    lightText: false,
    titleSection: 'My experience',
    cards: [
        {
            icon: frontend,
            iconAlt: 'frontend dev',
            title: 'Frontend development',
            paragraphText: 'Nearly 2 years working with Angular, JS ES6+, Typescript, CSS flexbox, grid, React (Hooks, router, styled components)'
        },
        {
            icon: back_database,
            iconAlt: 'backend dev',
            title: 'Backend development',
            paragraphText: 'Experience in the develop of restful APIS using Node, express and MongoDB'
        },
        {
            icon: mobile,
            iconAlt: 'hybrid apps',
            title: 'Hybrid Apps development',
            paragraphText: 'Last year I worked in the develop of 2 mobile Apps using Ionic and Angular'
        }
    ]
}

export const footerObj = {
    github: 'https://github.com/Antoniomora95',
    facebook:'https://www.facebook.com/antmor95ASOT/',
    twitter:'https://twitter.com/ANTONIOMORABAU1',
    linkedin:'https://www.linkedin.com/in/antonio-mora-bautista-b02363133/',
    instagram:'https://www.instagram.com/antoniomora.b/',
    gmail:'mailto: morabautistaantonio@gmail.com'
}