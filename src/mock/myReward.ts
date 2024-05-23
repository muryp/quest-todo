import { faker } from '@faker-js/faker'
import { TIdReward } from './reward'

export type TIdMyReward = string
export interface Tval {
  id: TIdMyReward // PK,UQ,AI
  idReward: TIdReward
  duration?: number //in sec
  qty?: number
}

const isQty = () => Math.random() > 0.5
const LIST_QUEST: Tval[] = [] as const
for (let i = 0; i < 20; i++) {
  if (isQty()) {
    LIST_QUEST.push({
      id: faker.string.uuid(),
      idReward: faker.string.uuid(),
      qty: faker.number.int({ max: 3, min: 1 }),
    })
  } else {
    LIST_QUEST.push({
      id: faker.string.uuid(),
      idReward: faker.string.uuid(),
      duration:faker.number.int({ max: 86400, min: 3600 }),
    })
  }
}
export default LIST_QUEST
