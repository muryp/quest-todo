import { updateDb } from '../scripts/db/import'
import { LIST_QUEST } from './listTodo'
import ListRedeem from './redeem'

updateDb({
  quest: LIST_QUEST,
  redeem: ListRedeem,
})
