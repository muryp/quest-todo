import { ICON_DELETE, ICON_EDIT } from './../atoms/icon'
import Btn from './../atoms/btn'
import { TvalQuest } from '../../mock/listTodo'
import Modals from './Modals'
import Ask from './Ask'
import Detail from './Detail'

export default (Args: TvalQuest) => {
  const FooterTodo =
    Btn({
      TEXT: ICON_EDIT,
      href: `#edit?id=${Args.id}`,
      BtnName: ['todo', 'success'],
      WIDTH: 'w-fit',
    }) +
    Modals({
      BtnName: ['todo', 'delete'],
      TITLE: 'Delete',
      id: String(Args.id),
      ICON: ICON_DELETE,
      BODY: Ask(String(Args.id)),
    }) +
    Detail(Args)
  return FooterTodo
}
