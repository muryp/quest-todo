import { faker } from '@faker-js/faker'

export type TIdReward = string
export interface TvalReward {
  id: TIdReward // PK,UQ,AI
  title: string
  description: string
  point: number
  duration?: number //in sec
  qty?: number
  reset: {
    byDate?: Date // date
    byTime?: number //in sec
  }
}
const isQty = () => Math.random() > 0.5
const LIST_QUEST: TvalReward[] = [] as const
for (let i = 0; i < 20; i++) {
  if (isQty()) {
    LIST_QUEST.push({
      id: faker.string.uuid(),
      title: faker.word.words(5),
      description: faker.word.words(15),
      point: faker.number.int({ max: 3, min: 1 }),
      qty: faker.number.int({ max: 3, min: 1 }),
      reset: {
        byDate: faker.date.past(),
        byTime: faker.number.int({ max: 86400, min: 3600 }),
      },
    })
  } else {
    LIST_QUEST.push({
      id: faker.string.uuid(),
      title: faker.word.words(5),
      description: faker.word.words(15),
      point: faker.number.int({ max: 3, min: 1 }),
      duration: faker.number.int({ max: 86400, min: 3600 }),
      reset: {
        byDate: faker.date.past(),
        byTime: faker.number.int({ max: 86400, min: 3600 }),
      },
    })
  }
}
export default LIST_QUEST
