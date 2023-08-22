import random_joke from "./../img/projects/Random-Joke__API.jpg"
import pizza_app from "./../img/projects/Pizza__App.jpg"
import toDo_App from "./../img/projects/ToDo_App.jpg"
import portfolio from "./../img/projects/Portfolio.jpg"
import lease_cars from "./../img/projects/Lease-cars.jpg"

const projects = [
    {
        id: 1,
        title:'Random Joke API',
        skills: 'HTML, CSS, JS, API',
        desc: 'A simple project in which I focused on working with api, getting data from the server using fetch.',
        img: random_joke,
        bigImg: random_joke,
        gitHubLink: 'https://github.com/RoshensLove/Random-Joke__API',
        gitPageLink: 'https://roshenslove.github.io/Random-Joke__API/',
    },
    {
        id: 2,
        title:'Pizza App',
        skills: 'HTML, CSS, TypeScript, React',
        desc: 'In this project, the focus was on TypeScript and React',
        img: pizza_app,
        bigImg: pizza_app,
        gitHubLink: 'https://github.com/RoshensLove/Pizza-App',
        gitPageLink: 'https://pizza-app-lemon.vercel.app/',
    },
    {
        id: 3,
        title:'ToDo App',
        skills: 'JS, HTML, CSS',
        desc: 'Worked with javascript, DOM element and some bootstrap.',
        img: toDo_App,
        bigImg: toDo_App,
        gitHubLink: 'https://github.com/RoshensLove/todo',
        gitPageLink: 'https://roshenslove.github.io/todo/',
    },
    {
        id: 4,
        title:'Portfolio practice',
        skills: 'HTML, CSS, React',
        desc: 'Worked with layout, JS, adaptive, cross-browser, REACT and React Router DOM. Made a focus on React .',
        img: portfolio,
        bigImg: portfolio,
        gitHubLink: 'https://github.com/RoshensLove/Protfolio-Practice',
        gitPageLink: 'https://roshenslove.github.io/Protfolio-Practice/',
    },
    {
        id: 5,
        title:'Lease-Cars',
        skills: 'HTML, CSS, JS, Flexbox, Greed',
        desc: 'Worked with swiper, HTML, CSS, JS adaptive, cross-browser. Focused on layout and JS.',
        img: lease_cars,
        bigImg: lease_cars,
        gitHubLink: 'https://github.com/RoshensLove/Lease-cars',
        gitPageLink: 'https://lease-cars-three.vercel.app/',
    }
];

export {projects}