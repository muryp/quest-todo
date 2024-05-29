import { ICON_DELETE, ICON_EDIT } from './../atoms/icon'
import Btn from './../atoms/btn'
import { TvalQuest } from '../../mock/listTodo'
import Modals from './Modals'

export default (Args: TvalQuest) => {
  const href = (targer: string) => {
    return `#${targer}?id=${Args.id}`
  }
  const FooterTodo =
    Btn({
      TEXT: ICON_EDIT,
      href: href('edit'),
      BtnName: ['todo', 'success'],
    }) +
    Btn({
      TEXT: ICON_DELETE,
      href: href('delete'),
      BtnName: ['todo', 'delete'],
    }) +
    Modals(Args)
  return FooterTodo
}