import { ICON_COMPLETE, ICON_DELETE, ICON_EDIT } from './../atoms/icon'
import Btn from './../atoms/btn'
import { TvalQuest } from '../../mock/listTodo'
import Modals from './Modals'
import Ask from './Ask'
import Detail from './Detail'

export default (Args: TvalQuest, isComplete: boolean) => {
  let FooterTodo = ''
  if (!isComplete) {
    FooterTodo = Btn({
      TEXT: ICON_EDIT,
      href: `#quest/edit?id=${Args.id}`,
      BtnName: ['todo', 'success'],
      WIDTH: 'w-fit',
    })
  }
  const NAME_CHECKBOX = isComplete ? 'uncomplete' : 'complete'
  FooterTodo +=
    Modals({
      BtnName: ['todo', 'delete'],
      TITLE: '',
      id: String(Args.id),
      ICON: ICON_DELETE,
      BODY: Ask(String(Args.id)),
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
