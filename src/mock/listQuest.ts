import { faker } from '@faker-js/faker'
export interface TvalQuest {
  id?: number // PK,UQ,AI
  title: string
  description: string
  createdAt?: number
  UpdatedAt?: number
  point?: {
    success: number
    fail: number
  }
}
const LIST_QUEST: TvalQuest[] = [] as const

for (let i = 0; i < 20; i++) {
  LIST_QUEST.push({
    id: faker.number.int(),
    title: faker.word.words(5),
    description: faker.word.words(15),
    createdAt: faker.date.past().getTime(),
    UpdatedAt: faker.date.past().getTime(),
    point: {
      success: faker.number.int({ max: 3, min: 1 }),
      fail: faker.number.int({ max: 15, min: 5 }),
    },
  })
}

const QUEST = LIST_QUEST[0]

export type TPoint = typeof QUEST.point
export type TPointQuest = keyof TPoint
export type TIdQuest = typeof QUEST.id
export { LIST_QUEST }