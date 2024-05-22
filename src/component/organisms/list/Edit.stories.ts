import Content from './Edit'
import { LIST_QUEST } from '../../../mock/listQuest'
import CardEdit from '../../moleculs/card/CardEdit'

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
      const { title, id, point, description, UpdatedAt, createdAt } =
        LIST_QUEST[i]
      CardList.push(CardEdit({ title, id, point, description, UpdatedAt, createdAt }))
    }
    return html`<div class="bg-base-100">${Content(CardList.join(''))}</div>`
  },
}
export const Edit = {}