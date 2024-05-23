import db from './init'
import { TSetting } from '../../mock/setting'

export const update = async (data: TSetting) => {
  return await db.settings.put(data)
}