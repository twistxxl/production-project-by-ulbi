export type {
    Profile,
    ProfileSchema,
} from './model/types/profile'

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice'

export { fetchProfileData } from './model/fetchProfileData/fetchProfileData'

export {ProfileCard} from '../Profile/ui/ProfileCard/ProfileCard'