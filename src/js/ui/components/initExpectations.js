import expectationsData from "../../mockData/expectationsData.js";
import { expectationsTemplate } from "../templates/expectationsTemplate.js";

const initExpectations = (expectationsNode) => {
  expectationsNode.insertAdjacentHTML(
    "beforeend",
    expectationsTemplate(expectationsData),
  );
};

export default initExpectations;
