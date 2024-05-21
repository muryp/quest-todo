export type TIdReward = number
export interface Tval {
  id: TIdReward // PK,UQ,AI
  title: string
  description: string
  point: number
  duration?: number //in sec
  qty?: number
  reset: {
    byDate?: number // date
    byTime?: number //in sec
  }
}
export const LIST_QUEST: Tval[] = [
  {
    id: 1,
    title: '',
    description: '',
    point: 1,
    duration: 3600,
    reset: {
      byDate: Date.now(),
    },
  },
  {
    id: 1,
    title: '',
    description: '',
    point: 1,
    qty: 1,
    reset: {
      byTime: 86400,
    },
  },
] as const
