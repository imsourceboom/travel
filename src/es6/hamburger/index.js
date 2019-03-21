import {
    header
} from '../elements'


const hamburger = header.hamburger;
const nav = header.nav;
const li = Array.from(header.li);

const trigger = (e) => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('active');
}

hamburger.addEventListener('click', trigger);

li.map((i) => {
    i.addEventListener('click', trigger);
});