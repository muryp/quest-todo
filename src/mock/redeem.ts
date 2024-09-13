import { faker } from '@faker-js/faker'

export interface TvalRedeem {
  id: string
  title: string
  description: string
  point: number
  createdAt?: number
  UpdatedAt?: number
}
const ListRedeem: TvalRedeem[] = [] as const
for (let i = 0; i < 20; i++) {
  ListRedeem.push({
    id: faker.string.uuid(),
    title: faker.word.words(5),
    description: faker.word.words(15),
    point: faker.number.int({ max: 3, min: 1 }),
    createdAt: faker.date.past().getTime(),
    UpdatedAt: faker.date.past().getTime(),
  })
}
export default ListRedeem