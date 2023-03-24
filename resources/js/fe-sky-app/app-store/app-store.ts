import {createStore} from 'vuex';
import {moduleUser, type ModuleUserState} from './module-user';
import {moduleCourses} from './module-courses';
import {moduleDialog} from './module-dialog';
import {moduleLoadings} from './module-loadings';
import {storePageInfo, type StorePageInfoState} from './storePageInfo';

export interface AppStore {
  moduleUser: ModuleUserState,
  moduleCourses: any,
  moduleDialog: any,
  moduleLoadings: any,
  storePageInfo: StorePageInfoState,
}

export const appStore = createStore<AppStore>({
  modules: {
    moduleUser,
    moduleCourses,
    moduleDialog,
    moduleLoadings,
    storePageInfo
  }
});
