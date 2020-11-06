const initialState = {
  outputData: null, // Partially Generated Code
  testGeneratedCode: false, // Partially Generated Code
}

export default function networkReducer(state = initialState, action) {
  switch (action.type) {
    
    // Partially Generated Code
    case 'TEST_GENERATED_CODE':
      console.log('DISPATCHING TEST_GENERATED_CODE');
      return {
        ...state,
        testGeneratedCode: true,
      }
    case 'TEST_GENERATED_CODE_COMPLETED':
      console.log('DISPATCHING TEST_GENERATED_CODE_COMPLETED');
      return {
        ...state,
        outputData: action.outputData,
        testGeneratedCode: false,
      }
    case 'TEST_GENERATED_CODE_FAILED':
      console.log('DISPATCHING TEST_GENERATED_CODE_FAILED');
      return {
        ...state,
        testGeneratedCode: false,
      }
    default:
      return state;
  }
}