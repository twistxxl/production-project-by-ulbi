import { StateSchema } from '@/app/providers/StoreProvider';

export const addCommentFormTextSelector = (state: StateSchema) => state.addCommentForm?.text ?? '';
export const addCommentFormErrorSelector = (state: StateSchema) => state.addCommentForm?.error;
