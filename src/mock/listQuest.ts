import { faker } from '@faker-js/faker'
export interface TvalQuest {
  id: string // PK,UQ,AI
  title: string
  description: string
  createdAt: Date
  UpdatedAt: Date
  point: {
    success: number
    fail: number
  }
}
const LIST_QUEST: TvalQuest[] = [] as const

for (let i = 0; i < 20; i++) {
  LIST_QUEST.push({
    id: faker.string.uuid(),
    title: faker.word.words(5),
    description: faker.word.words(15),
    createdAt: faker.date.past(),
    UpdatedAt: faker.date.past(),
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