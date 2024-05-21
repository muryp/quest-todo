import LIST from '../../../configs/nav'

export default LIST.map(({ icon, link, title }) => {
  return html`
    <li class="m-auto align-middle">
      <a
        href="#${link}"
        class="tooltip md:tooltip-left m-1 capitalize font-Rokkit font-bold"
        data-tip="${title}">
        ${icon}
      </a>
    </li>
  `
}).join('')