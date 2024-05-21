import { TIdReward } from "./reward"

export type TIdMyReward = number
export interface Tval {
  id: TIdMyReward // PK,UQ,AI
  idReward: TIdReward
  duration?: number //in sec
  qty?: number
}
export const LIST_QUEST: Tval[] = [
  {
    id: 1,
    idReward:2,
    duration: 3600,
  },
  {
    id: 1,
    idReward:1,
    qty: 1,
  },
] as const