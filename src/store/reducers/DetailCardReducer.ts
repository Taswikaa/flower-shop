interface detailCardState {
  title: string;
  src: string;
  detail: string;
}

const initialState: detailCardState = {
  title: 'Название',
  src: 'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  detail: 'Подробное описание',
}

interface GetCardDataAction {
  type: 'getData';
  payload: detailCardState,
}

export const detailCardReducer = (state: detailCardState = initialState, action: GetCardDataAction): detailCardState => {
  switch (action.type) {
    case 'getData' :
      return action.payload;
    default:
      return state;
  }
}