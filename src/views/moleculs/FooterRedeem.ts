import {
  ICON_COMPLETE,
  ICON_DELETE,
  ICON_DETAIL,
  ICON_EDIT,
} from './../atoms/icon'
import Btn from './../atoms/btn'
import Modals from './Modals'
import { rmRedeem } from './Ask'
import { TvalRedeem } from '../../mock/redeem'

export default (Args: TvalRedeem) => {
  let FooterTodo = ''
  FooterTodo = Btn({
    TEXT: ICON_EDIT,
    href: `#redeem/edit?id=${Args.id}`,
    BtnName: ['todo', 'success'],
    WIDTH: 'w-fit',
  })
  FooterTodo +=
    Modals({
      BtnName: ['todo', 'delete'],
      TITLE: '',
      id: String(Args.id),
      ICON: ICON_DELETE,
      BODY: rmRedeem(String(Args.id)),
    }) +
    Btn({
      TEXT: `${ICON_COMPLETE} buy`,
      BtnName: ['todo', 'second'],
      WIDTH: 'w-fit',
      href: `#redeem/buy?id=${Args.id}`,
    }) +
    Modals({
      id: String(Args.id),
      BODY: Args.description,
      ICON: ICON_DETAIL,
      TITLE: 'Description',
      BtnName: ['todo', 'second'],
    }) +
    Btn({
      TEXT: `${Args.point}`,
      BtnName: ['todo', 'null'],
      WIDTH: 'w-fit',
    })

  return FooterTodo
}
