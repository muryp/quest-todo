import { ICON_COMPLETE, ICON_DELETE, ICON_EDIT } from './../atoms/icon'
import Btn from './../atoms/btn'
import { TvalQuest } from '../../mock/listTodo'
import Modals from './Modals'
import { uncomplete, rm } from './Ask'
import Detail from './Detail'

export default (Args: TvalQuest, isComplete: boolean) => {
  let FooterTodo = ''
  if (!isComplete) {
    FooterTodo =
      Btn({
        TEXT: ICON_EDIT,
        href: `#quest/edit?id=${Args.id}`,
        BtnName: ['todo', 'success'],
        WIDTH: 'w-fit',
      }) +
      Modals({
        BtnName: ['todo', 'delete'],
        TITLE: 'uncomplete',
        id: String(Args.id),
        ICON: ICON_COMPLETE,
        BODY: uncomplete(String(Args.id)),
      })
  }
  const NAME_CHECKBOX = isComplete ? 'undo complete' : 'complete'
  FooterTodo +=
    Modals({
      BtnName: ['todo', 'delete'],
      TITLE: 'rm',
      id: String(Args.id),
      ICON: ICON_DELETE,
      BODY: rm(String(Args.id)),
    }) +
    Btn({
      TEXT: `${ICON_COMPLETE} ${NAME_CHECKBOX}`,
      BtnName: ['todo', 'second'],
      WIDTH: 'w-fit',
      href: `#quest/${NAME_CHECKBOX}?id=${Args.id}`,
    }) +
    Detail(Args)
  return FooterTodo
}
