export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';
export { UserRole } from './model/types/user';
export {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from './model/selectors/roleSelector';

export { 
    useJsonSettings,
    getJsonSettings,
    useJsonSettingsByKey,
    getJsonSettingsByKey
 } from './model/selectors/getUserInited/jsonSettings';

export { saveJsonSettings } from './model/services/saveJsonSettings';
