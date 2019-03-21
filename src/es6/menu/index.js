import {
    header,
    main
} from "../elements"

const menus = Array.from(header.li);
const sections = Array.from(main.section);

const activeMenu = () => {
    sections.map((s, i) => {
        const y = s.getBoundingClientRect().top;
        if (y > -300 && y < 300) {
            menus[i].classList.add('active')
        } else {
            menus[i].classList.remove('active')
        }
    })
}

window.addEventListener('scroll', activeMenu);