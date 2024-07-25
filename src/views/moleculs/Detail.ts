import { TvalQuest } from '../../mock/listTodo'
import { ICON_DETAIL } from './../atoms/icon'
import Modals from './../moleculs/Modals'

export default ({ title, id, point, description }: TvalQuest) => {
  const Description =
    description !== ''
      ? html`
          <p class="bg-base-300 p-3 rounded-xl mt-3">
            <b>Description:</b> ${description}
          </p>
        `
      : ''
  const BODY = html`
    <h3 class="font-bold text-lg">${title}</h3>
    <ul>
      <li>Point Success : ${point!.success}</li>
      <li>Point fail : ${point!.fail}</li>
    </ul>
    ${Description}
  `
  return Modals({
    id: String(id),
    BODY,
    ICON: ICON_DETAIL,
    TITLE: 'Detail',
    BtnName: ['todo', 'second'],
  })
}