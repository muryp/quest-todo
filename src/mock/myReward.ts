import { faker } from '@faker-js/faker'
import { TvalReward } from './reward'

export type TIdMyReward = string

const LIST_QUEST: TvalReward[] = [] as const
for (let i = 0; i < 20; i++) {
  LIST_QUEST.push({
    id: faker.number.int(),
    qty: faker.number.int({ max: 3, min: 1 }),
  })
}
export default LIST_QUEST
