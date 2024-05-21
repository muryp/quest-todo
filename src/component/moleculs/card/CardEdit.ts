import { TPoint } from '../../../mock/listQuest'

export interface Targs {
  title: string
  id: string
  point: TPoint
  description: string
  UpdatedAt: Date
  createdAt: Date
}
export default ({
  title,
  id,
  point,
  description,
  UpdatedAt,
  createdAt,
}: Targs) => {
  return html`
    <div class="collapse collapse-arrow bg-base-200 my-6 mx-auto">
      <input type="radio" name="my-accordion-2" id="${id}" />
      <div class="collapse-title text-xl font-medium">${title}</div>
      <div class="collapse-content leading-9">
        <label class="input input-bordered flex items-center gap-2">
          Title
          <!-- prettier-ignore -->
          <input type="text" class="grow" name="title" value="${title}" />
        </label>
        <ul>
          <li>createdAt : ${createdAt.toLocaleString()}</li>
          <li>UpdateAt : ${UpdatedAt.toLocaleString()}</li>
        </ul>
        <label class="input input-bordered flex items-center gap-2">
          Point Success
          <!-- prettier-ignore -->
          <input type="number" class="grow" name="point-success" value="${point.success}" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          Point Fail
          <!-- prettier-ignore -->
          <input type="number" class="grow" name="point-fail" value="${point.fail}" />
        </label>
        <label class="form-control">
          <div class="label">
            <span class="label-text">Your Description</span>
          </div>
          <!-- prettier-ignore -->
          <textarea class="textarea textarea-bordered h-24">${description}</textarea
          >
          <div class="label"></div>
        </label>
        <button class="btn btn-success">Save</button>
        <button class="btn btn-error">remove</button>
      </div>
    </div>
  `
}
