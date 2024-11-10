import { LIST_QUEST } from '../../../mock/listTodo'
import Todo from './Todo'

const args = {
  LIST_QUEST,
  total: 5,
} as const
type Targs = typeof args
export default {
  args,
  render: ({ LIST_QUEST, total }: Targs) => {
    const CONTENT: string[] = []
    for (let i = 0; i < total; i++) {
      CONTENT.push(Todo(LIST_QUEST[i],true,false))
    }
    return html`<div class="bg-base-100">${CONTENT.join('')}</div>`
  },
}
export const Card = {}