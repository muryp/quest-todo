/* eslint-disable lit/attribute-value-entities */
import { TvalQuest } from '../../../mock/listTodo'
import Input from '../../atoms/input'

export default (
  { id, title, point, description }: TvalQuest,
  type: 'update' | 'add',
) => {
  const DeleteTodo = type == 'update'?'<a href="#" class="btn btn-error m-3">Delete</a>':''
  return html`
    <form
      class="md:w-1/3 md:m-auto p-3 leading-9 [&>*]:uppercase"
      id="${id || ''}">
      ${Input('title', 'text', title)}
      ${Input('point.success', 'number', String(point?.success || ''))}
      ${Input('point.fail', 'number', String(point?.fail || ''))}
      <!--prettier-ignore-->
      <textarea
        class="textarea textarea-bordered h-24 w-full"
        placeholder="description..."
        required>${description}</textarea>
      <button class="btn btn-success w-full m-3" id="add">${type}</button>
      <a href="#" class="btn btn-warning m-3">Back to Home</a>
      ${DeleteTodo}
    </form>
  `
}