import Card from '../../organisms/Card/Todo'
import List from '../../organisms/list/Todo'
import layouts from '../../layouts'
import { LIST_QUEST } from '../../../mock/listTodo'

const CONTENT: string[] = []
const TOTAL = 5
for (let i = 0; i < TOTAL; i++) {
  CONTENT.push(Card(LIST_QUEST[i]))
}

export default html` ${layouts(List(CONTENT.join(''), true))} `