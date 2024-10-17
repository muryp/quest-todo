import LIST from '../../../configs/nav'

export default function () {
  const currentUrl = new URL(window.location.href).hash.replace(/#/, '')
  return LIST.map(({ icon, link, title }) => {
    const activeClass = link === currentUrl ? 'bg-base-300' : ''
    return html`
      <li class="m-auto align-middle">
        <a
          href="#${link}"
          class="${activeClass} tooltip md:tooltip-left m-1 capitalize font-Rokkit font-bold"
          data-tip="${title}">
          ${icon}
        </a>
      </li>
    `
  }).join('')
}
