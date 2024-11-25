export interface State {
  message: string | null;
  error: string | null;
}

export const initialState: State = {
  message: null,
  error: null,
};
