/* eslint-disable lit/attribute-value-entities */
import { TvalQuest } from '../../../mock/listTodo'
import Input from '../../atoms/input'

export default (
  { id, title, point, description }: TvalQuest,
  type: 'update' | 'add',
) => {
  const DeleteTodo =
    type == 'update' ? '<a href="#" class="btn btn-error m-3">Delete</a>' : ''

  return html`
    <form
      class="md:m-auto p-3 leading-9 [&>*]:uppercase w-full"
      id="${id || ''}">
      ${Input('title', 'text', title)}
      <h3>Point</h3>
      success: ${Input('point.success', 'number', String(point?.success || ''))}
      fail: ${Input('point.fail', 'number', String(point?.fail || ''))}
      <h3>Description</h3>
      <!--prettier-ignore-->
      <textarea
        class="textarea textarea-bordered h-24 w-full"
        placeholder="description..."
        required>${description}</textarea>
      <button class="btn btn-success w-full" id="add">${type}</button>
      <a href="#" class="btn btn-warning m-3">Back to Home</a>
      ${DeleteTodo}
    </form>
  `
}
