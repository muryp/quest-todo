import { LIST_QUEST } from '../../../mock/listQuest'
import Content from './Card'

const args = {
  LIST_QUEST,
  total: 5,
} as const
type Targs = typeof args
export default {
  args,
  render: ({ LIST_QUEST, total }: Targs) => {
    const CONTENT:string[] = []
    for (let i = 0; i < total; i++) {
      const { title, id, point } = LIST_QUEST[i]
      CONTENT.push(Content({ title, id, point: point.success }))
    }
    return `<div class="bg-base-100">
      ${CONTENT.join('')}
    </div>`
  },
}
export const Card = {}