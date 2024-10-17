import { ICON_COMPLETE, ICON_DELETE, ICON_EDIT } from './../atoms/icon'
import Btn from './../atoms/btn'
import { TvalQuest } from '../../mock/listTodo'
import Modals from './Modals'
import { rm } from './Ask'
import Detail from './Detail'

export default (Args: TvalQuest, isComplete: boolean, isFail: boolean) => {
  let FooterTodo = ''
  if (!isComplete) {
    FooterTodo =
      Btn({
        TEXT: ICON_EDIT,
        href: `#quest/edit?id=${Args.id}`,
        BtnName: ['todo', 'success'],
        WIDTH: 'w-fit',
      }) +
      Btn({
        TEXT: 'Fail',
        href: `#quest/fail?id=${Args.id}`,
        BtnName: ['todo', 'delete'],
        WIDTH: 'w-fit',
      })
  }
  let NAME_CHECKBOX = ''
  if (isFail) {
    NAME_CHECKBOX = 'undo fail'
  } else if (isComplete) {
    NAME_CHECKBOX = 'undo complete'
  } else {
    NAME_CHECKBOX = 'complete'
  }

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
      href: `#quest/${NAME_CHECKBOX.replace(/\s/, '/')}?id=${Args.id}`,
    }) +
    Detail(Args)
  return FooterTodo
}
