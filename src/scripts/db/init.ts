import Dexie, { EntityTable } from 'dexie'
import type { TvalHistory } from '../../mock/history'
import { TInputDbTodo } from '../../mock/listTodo'
import { TvalReward } from '../../mock/reward'
import { TvalRedeem } from '../../mock/redeem'

//TODO: change name reward and redeem
interface setting {
  title: string
  theme: string
}
const db = new Dexie('TodoQuest') as Dexie & {
  history: EntityTable<TvalHistory>
  quest: EntityTable<TInputDbTodo>
  redeem: EntityTable<TvalRedeem>
  reward: EntityTable<TvalReward>
  settings: EntityTable<setting>
  point: EntityTable<{ id: number; point: number }>
}

db.version(1).stores({
  history: '++id,idTodo,date,type,reward',
  quest:
    '++id,title,description,createdAt,UpdatedAt,point.success,point.fail,isComplete,isFail',
  redeem: '++id,title,description,point,duration',
  reward: 'id,qty',
  myReward: '++id,idreward,duration,qty',
  setting: 'title,theme,autoBackup,lastBackup,timeBackup',
  point: 'id,point',
})

export default db