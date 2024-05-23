import Card from '../../moleculs/card/Card'
import Todo from '../../organisms/list/Todo'
import layouts from '../../layouts'
import { LIST_QUEST } from '../../../mock/listQuest'

const CONTENT: string[] = []
const TOTAL = 5
for (let i = 0; i < TOTAL; i++) {
  const { title, id, point } = LIST_QUEST[i]
  CONTENT.push(Card({ title, id, point: point.success }))
}

export default html`
  ${layouts(Todo(CONTENT.join('')))}
`