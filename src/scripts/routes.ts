import edit from '../views/pages/edit'
import home from '../views/pages/home'
import reward from '../views/pages/reward'
import redeem from '../views/pages/redeem'
import setting from '../views/pages/setting'
import AddQuest from '../views/pages/add/quest'
import AddRedeem from '../views/pages/add/redeem'
import complete from '../views/pages/complete'
import editRedeem from '../views/pages/redeem/edit'

// TODO: change with muryp router
// merge reward and use
export type TRouteSub = {
  render: string
  script: Promise<{ default: () => void }>
}
export type TRoute = { [key: string]: TRouteSub | TRoute }
const routes: TRoute = {
  home: { render: home, script: import('./controller/home/home') },
  quest: {
    history: {
      render: complete,
      script: import('./controller/history'),
    },
    add: { render: AddQuest, script: import('./controller/add') },
    edit: { render: edit, script: import('./controller/edit') },
    fail: {
      render: 'unsuccess...',
      script: import('./controller/changeStatus'),
    },
    complete: {
      render: 'complete...',
      script: import('./controller/changeStatus'),
    },
    undo: {
      complete: {
        render: 'undo complete...',
        script: import('./controller/changeStatus'),
      },
      fail: {
        render: 'success...',
        script: import('./controller/changeStatus'),
      },
    },
  },
  redeem: {
    add: {
      render: AddRedeem,
      script: import('./controller/redeem/add'),
    },
    list: { render: redeem, script: import('./controller/redeem/list') },
    edit: { render: editRedeem, script: import('./controller/redeem/edit') },
    delete: { render: redeem, script: import('./controller/redeem/list') },
    buy: { render: '', script: import('./controller/redeem/buy') },
    rm: { render: '', script: import('./controller/redeem/buy') },
  },
  delete: { render: 'delete page', script: import('./controller/remove') },
  reward: {
    list: { render: reward, script: import('./controller/reward/list') },
    use: {
      render: 'use',
      script: import('./controller/reward/use'),
    },
    sell: {
      render: 'use',
      script: import('./controller/reward/sell'),
    },
  },
  setting: { render: setting, script: import('./controller/settings') },
}

export default routes
