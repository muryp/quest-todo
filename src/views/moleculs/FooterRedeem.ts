import {
  ICON_COMPLETE,
  ICON_DELETE,
  ICON_DETAIL,
  ICON_EDIT,
} from './../atoms/icon'
import Btn from './../atoms/btn'
import Modals from './Modals'
import Ask from './Ask'
import { TvalRedeem } from '../../mock/redeem'

export default (Args: TvalRedeem) => {
  let FooterTodo = ''
  FooterTodo = Btn({
    TEXT: ICON_EDIT,
    href: `#edit-redeem?id=${Args.id}`,
    BtnName: ['todo', 'success'],
    WIDTH: 'w-fit',
  })
  FooterTodo +=
    Modals({
      BtnName: ['todo', 'delete'],
      TITLE: '',
      id: String(Args.id),
      ICON: ICON_DELETE,
      BODY: Ask(String(Args.id)),
    }) +
    Btn({
      TEXT: `${ICON_COMPLETE} buy`,
      BtnName: ['todo', 'second'],
      WIDTH: 'w-fit',
      href: `#buy?id=${Args.id}`,
    }) +
    Modals({
      id: String(Args.id),
      BODY: Args.description,
      ICON: ICON_DETAIL,
      TITLE: 'Detail',
      BtnName: ['todo', 'second'],
    })

  return FooterTodo
}