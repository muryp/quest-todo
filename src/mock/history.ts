import { faker } from '@faker-js/faker'
import type { TPointQuest, TIdQuest } from './listQuest'
export interface TvalHistory {
  id: string // PK,UQ,AI
  idTodo: TIdQuest
  date: Date
  type: TPointQuest
  reward: number
}
// random two string
const TYPE_QUEST = ['success', 'fail']
function randomSuccessFail(): TPointQuest {
  return TYPE_QUEST[
    Math.floor(Math.random() * TYPE_QUEST.length)
  ] as TPointQuest
}
const HISTORY: TvalHistory[] = [] as const
for (let i = 0; i < 20; i++) {
  const TYPE = randomSuccessFail()
  const MAX_MIN_REWARD =
    TYPE === 'success' ? { max: 3, min: 1 } : { max: 9, min: 5 }
  HISTORY.push({
    id: faker.string.uuid(),
    idTodo: faker.string.uuid(),
    date: faker.date.past(),
    type: TYPE,
    reward: faker.number.int(MAX_MIN_REWARD),
  })
}
export default HISTORY
