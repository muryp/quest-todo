import type { TPointQuest, TIdQuest } from './listQuest'
interface Tval {
  id: string // PK,UQ,AI
  quest: {
    id: TIdQuest
    type: TPointQuest
  }
  reward: number
}
export default [
  {
    id: 'hlsa',
    quest: {
      id: 'sd',
      type: 'success',
    },
  },
] as Tval[]