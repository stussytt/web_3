import earlyAccessData from "../../mockData/earlyAccessData.js";
import { earlyAccessTemplate } from "../templates/earlyAccessTemplate.js";

const initEarlyAccess = (EarlyAccessNode) => {
  EarlyAccessNode.insertAdjacentHTML(
    "beforeend",
    earlyAccessTemplate(earlyAccessData),
  );
};

export default initEarlyAccess;
