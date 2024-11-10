import { ICON_DETAIL, ICON_QTY, ICON_SELL, ICON_USE } from './../atoms/icon'
import Btn from './../atoms/btn'
import Modals from './Modals'
import { TvalRedeem } from '../../mock/redeem'

// TODO: sell and use
export default (Args: TvalRedeem) => {
  let FooterTodo = ''
  FooterTodo +=
    Modals({
      id: String(Args.id),
      BODY: Args.description,
      ICON: ICON_DETAIL,
      TITLE: 'Description',
      BtnName: ['todo', 'second'],
    }) +
    Btn({
      TEXT: `${ICON_USE} use`,
      BtnName: ['todo', 'delete'],
      WIDTH: 'w-fit',
      href: `#reward/use?id=${Args.id}`,
    }) +
    Btn({
      TEXT: `${ICON_SELL} sell`,
      BtnName: ['todo', 'delete'],
      WIDTH: 'w-fit',
      href: `#reward/sell?id=${Args.id}`,
    }) +
    Btn({
      TEXT: `${ICON_QTY} ${Args.point}`,
      BtnName: ['todo', 'null'],
      WIDTH: 'w-fit',
    })

  return FooterTodo
}
