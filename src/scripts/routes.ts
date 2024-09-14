import edit from '../views/pages/edit'
import home from '../views/pages/home'
import reward from '../views/pages/reward'
import redeem from '../views/pages/redeem'
import setting from '../views/pages/setting'
import AddQuest from '../views/pages/add/quest'
import AddRedeem from '../views/pages/add/redeem'
import complete from '../views/pages/complete'

export type TRouteSub = {
  render: string
  script: Promise<{ default: () => void }>
}
export type TRoute = { [key: string]: TRouteSub | TRoute }
const routes: TRoute = {
  home: { render: home, script: import('./controller/home/home') },
  quest: {
    Listcomplete: {
      render: complete,
      script: import('./controller/completeList'),
    },
    add: { render: AddQuest, script: import('./controller/add') },
    edit: { render: edit, script: import('./controller/edit') },
    uncomplete: {
      render: 'uncomplete...',
      script: import('./controller/changeStatus'),
    },
    complete: {
      render: 'complete...',
      script: import('./controller/changeStatus'),
    },
  },
  redeem: {
    add: {
      render: AddRedeem,
      script: import('./controller/redeem/add'),
    },
    list: { render: redeem, script: import('./controller/redeem/list') },
    edit: { render: redeem, script: import('./controller/redeem/list') },
    delete: { render: redeem, script: import('./controller/redeem/list') },
  },
  delete: { render: 'delete page', script: import('./controller/remove') },
  myreward: { render: reward, script: import('./controller/edit') },
  setting: { render: setting, script: import('./controller/settings') },
}

export default routes
