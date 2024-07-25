import {render} from '.'
import debounce from '../../../utils/debounce'
import { search } from '../../db/todo'

export default function searchOnType() {
  const ELSearchBar = document.getElementById('search-bar')! as HTMLInputElement
  const ElSelectShort1 = document.getElementById(
    'search-select1',
  )! as HTMLSelectElement
  const ElSelectShort2 = document.getElementById(
    'search-select2',
  )! as HTMLSelectElement
  const ElBtn = document.getElementById('search-btn')! as HTMLButtonElement
  const callback = (ev: Event) => {
    ev.preventDefault()
    const title = ELSearchBar.value
    const isAccend = ElSelectShort1.value === 'Ascending'
    const typeAccend = ElSelectShort2.value
    render(async ({ TOTAL, offset }) => {
      return await search({ title, offset, isAccend, typeAccend, TOTAL })
    })
  }

  ELSearchBar.addEventListener('input', debounce(callback, 1000))
  ElSelectShort1.addEventListener('change', callback)
  ElSelectShort2.addEventListener('change', callback)
  ElSelectShort2.addEventListener('change', callback)
  ElBtn.addEventListener('click', callback)
}
