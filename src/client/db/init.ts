import Dexie, { EntityTable } from 'dexie'
import type {TvalHistory} from '../../mock/history'
import { TvalQuest } from '../../mock/listQuest';
import { TvalReward } from '../../mock/reward';

interface setting {
  title:string
  theme:string
}
const db = new Dexie('TodoQuest') as Dexie & {
  history: EntityTable<TvalHistory>;
  quest: EntityTable<TvalQuest>;
  reward: EntityTable<TvalReward>;
  settings: EntityTable<setting>;
};

db.version(1).stores({
  history: '++id,idTodo,date,type,reward',
  quest: '++id,title,description,createdAt,UpdatedAt,point.success,point.fail',
  reward: '++id,title,description,point,duration,qty,reset.byDate,reset.byTime',
  myReward: '++id,idreward,duration,qty',
  setting: 'title,theme,autoBackup,lastBackup,timeBackup',
})

export default db