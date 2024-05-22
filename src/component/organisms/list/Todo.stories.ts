import Content from './Todo'
import { LIST_QUEST } from '../../../mock/listQuest'
import Card from '../../moleculs/card/Card'

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
      const { title, id, point } = LIST_QUEST[i]
      CardList.push(Card({ title, id, point: point.success }))
    }
    return html`<div class="bg-base-100">${Content(CardList.join(''))}</div>`
  },
}
export const Todo = {}