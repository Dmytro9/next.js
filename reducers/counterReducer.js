export default function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
      case 'INCREMENT_COUNT':
        return {
          ...state,
          count: state.count + action.payload
        };
        
      case 'DECREMENT_COUNT':
        return {
          ...state,
          count: state.count - 1
        };
    
      default:
        return state;
    }
  }