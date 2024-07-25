import darkmode from './darkMode'
import listHtml from './listHtml'

export default html`
  <nav
    class="fixed bottom-0 left-0 md:left-auto
      md:right-0 z-50 w-full md:w-fit md:h-full
      flex justify-center items-center"
    data-aos="zoom-in">
    <div class="w-fit h-fit m-auto ">
      <ul
        class="menu menu-horizontal md:menu-vertical bg-base-200 rounded-box m-auto align-middle">
        ${listHtml}
      </ul>
      ${darkmode}
    </div>
  </nav>
`