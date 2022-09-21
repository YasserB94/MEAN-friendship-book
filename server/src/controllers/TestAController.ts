import ErrorHandler from "../models/ErrorHandler";

class TestAController {
    defaultMethod() {
        throw new ErrorHandler(501,'This is a test Error from TestAController!')
        return {
        text: `You've reached the ${this.constructor.name} default method`
      };
    }
}
  
export = new TestAController();