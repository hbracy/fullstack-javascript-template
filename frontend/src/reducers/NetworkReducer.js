const initialState = {
  somethingState: null,
  testOutput: null, // Partially Generated Code
  testGeneratedCode: false, // Partially Generated Code
  testOutpDut: null, // Partially Generated Code
  testGeneratedCode2: false, // Partially Generated Code
  testOutput: null, // Partially Generated Code
  testGeneratedCode3: false, // Partially Generated Code
}

export default function networkReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SOMETHING_STATE':
      console.log('DISPATCHING SET_SOMETHING_STATE');
      return {
        ...state,
        somethingState: action.somethingState,
      }
    case 'SET_SOMETHING_STATE_COMPLETED':
      console.log('DISPATCHING SET_SOMETHING_STATE_COMPLETED');
      return {
        ...state,
        somethingState: action.somethingState,
      }
    case 'SET_SOMETHING_STATE_FAILED':
      console.log('DISPATCHING SET_SOMETHING_STATE_COMPLETED');
      return {
        ...state,
        somethingState: action.somethingState,
      }
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
        testOutput: action.testOutput,
        testGeneratedCode: false,
      }
    case 'TEST_GENERATED_CODE_FAILED':
      console.log('DISPATCHING TEST_GENERATED_CODE_FAILED');
      return {
        ...state,
        testGeneratedCode: false,
      }
    // Partially Generated Code
    case 'TEST_GENERATED_CODE2':
      console.log('DISPATCHING TEST_GENERATED_CODE2');
      return {
        ...state,
        testGeneratedCode2: true,
      }
    case 'TEST_GENERATED_CODE2_COMPLETED':
      console.log('DISPATCHING TEST_GENERATED_CODE2_COMPLETED');
      return {
        ...state,
        testOutpDut: action.testOutpDut,
        testGeneratedCode2: false,
      }
    case 'TEST_GENERATED_CODE2_FAILED':
      console.log('DISPATCHING TEST_GENERATED_CODE2_FAILED');
      return {
        ...state,
        testGeneratedCode2: false,
      }
    // Partially Generated Code
    case 'TEST_GENERATED_CODE3':
      console.log('DISPATCHING TEST_GENERATED_CODE3');
      return {
        ...state,
        testGeneratedCode3: true,
      }
    case 'TEST_GENERATED_CODE3_COMPLETED':
      console.log('DISPATCHING TEST_GENERATED_CODE3_COMPLETED');
      return {
        ...state,
        testOutput: action.testOutput,
        testGeneratedCode3: false,
      }
    case 'TEST_GENERATED_CODE3_FAILED':
      console.log('DISPATCHING TEST_GENERATED_CODE3_FAILED');
      return {
        ...state,
        testGeneratedCode3: false,
      }
    default:
      return state;
  }
}