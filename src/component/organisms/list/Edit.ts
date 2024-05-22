import Search from './Search'
import Select from './Select'
export default function (child: string) {
  return html`
    ${Search} ${Select}
    <div id="content">${child}</div>
    <div class="flex justify-center">
    <button type="btn" class="btn btn-primary w-1/3 cursor-pointer">load more</button>
    </div>
  `
}
