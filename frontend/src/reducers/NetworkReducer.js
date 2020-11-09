const initialState = {
  outputData: null, // Partially Generated Code
  testGeneratedCode: false, // Partially Generated Code
  isInProgress: false,
}

export default function networkReducer(state = initialState, action) {
  switch (action.type) {
    
    // Partially Generated Code
    case 'TEST_GENERATED_CODE':
      console.log('DISPATCHING TEST_GENERATED_CODE');
      return {
        ...state,
        testGeneratedCode: true,
        isInProgress: true,
      }
    case 'TEST_GENERATED_CODE_COMPLETED':
      console.log('DISPATCHING TEST_GENERATED_CODE_COMPLETED');
      return {
        ...state,
        outputData: action.outputData,
        testGeneratedCode: false,
        isInProgress: false,
      }
    case 'TEST_GENERATED_CODE_FAILED':
      console.log('DISPATCHING TEST_GENERATED_CODE_FAILED');
      return {
        ...state,
        testGeneratedCode: false,
        isInProgress: false,
      }
    default:
      return state;
  }
}