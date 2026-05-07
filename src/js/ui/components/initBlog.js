import blogData from "../../mockData/blogData.js";
import { BlogCardsTemplate } from "../templates/blogTemplate.js";

const initBlog = (blogNode) => {
  blogNode.innerHTML = BlogCardsTemplate(blogData);
};

export default initBlog;
