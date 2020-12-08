import developer  from '../../images/developer.svg';
import database  from '../../images/database.svg';
import frameworks  from '../../images/frameworks.svg';
import freelancer  from '../../images/freelancer-ok.svg';
import mobile  from '../../images/mobile.svg';
import team  from '../../images/team.svg';
import profile from '../../images/profile.jpg'

export const heroInfo = {
    img: profile,
    alt:'antonio'
}
export const homeObj = {
    id:'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Premium Account',
    headLine: 'Unlimited transactions, and functionalities',
    description:'Get access to our service that is leading the freelancing market, our exclusive model is exactly what you want',
    buttonLabel:'Get started',
    imgStart: false,
    img: developer,
    alt:'front dev',
    primaryColorBtn: true,
    primaryButton: false
}

export const homeObj2 = {
    id:'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'New technologies',
    headLine: 'The market is always evolving',
    description:'Antonio is a engineer who is always learning new stuff, stay tuned for new updates',
    buttonLabel:'Check my github',
    imgStart: true,
    img: frameworks,
    alt:'technologies',
    primaryColorBtn: true,
    primaryButton: false,
}
export const homeObj3 = {
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