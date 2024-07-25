import home from '.'
import debounce from '../../../utils/debounce'
import { search } from '../../db/todo'

export default function searchOnType() {
  const ELSearchBar = document.getElementById('search-bar')!
  const ElSelectShort1 = document.getElementById('search-select1')!
  const ElSelectShort2 = document.getElementById('search-select2')!

  ELSearchBar.addEventListener(
    'input',
    debounce((ev) => {
      const title = (ev.target! as HTMLInputElement).value
      const isAccend = (ElSelectShort1 as HTMLSelectElement).value === 'asc'
      const typeAccend = (ElSelectShort2 as HTMLSelectElement).value
      home(async ({ TOTAL, offset }) => {
        return await search({ title, offset, isAccend, typeAccend, TOTAL })
      })
    }, 1000),
  )
}
