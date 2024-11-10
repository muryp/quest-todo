import Content from './Todo'
import { LIST_QUEST } from '../../../mock/listTodo'
import Card from '../Card/Todo'

const args = {
  LIST_QUEST,
  total: 5,
} as const
type Targs = typeof args
export default {
  args,
  render: ({ LIST_QUEST, total }: Targs) => {
    const CardList: string[] = []
    for (let i = 0; i < total; i++) {
      CardList.push(Card(LIST_QUEST[i],true,false))
    }
    return html`<div class="bg-base-100">${Content(CardList.join(''),true)}</div>`
  },
}
export const Todo = {}