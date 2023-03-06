/**
 * Persistence of redux store
 */
import {MMKV} from 'react-native-mmkv';
import {PersistConfig, Storage} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const storage = new MMKV({
  id: 'plant',
  encryptionKey: 'smokeweedeveryday?.',
});

const mmkvStorageEngine: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

/**
 * Encrypted mmkv storage
 */
const mmkvPersistConfig: PersistConfig<RootState> = {
  key: 'mmkv',
  storage: mmkvStorageEngine,
  stateReconciler: autoMergeLevel2,
  // Only that reducers have been persist on the device's local storage
  whitelist: ['user'],
};

export {mmkvPersistConfig};
