import initHeader from "./../components/initHeader.js";
import initHero from "./../components/initHero.js";
import initBrands from "./../components/initBrands.js";
import initWhatIsGpt from "./../components/initWhatIsGpt.js";
import initFutureHere from "./../components/initFutureHere.js";
import initExpectations from "../components/initExpectations.js";
import initEarlyAccess from "./../components/initEarlyAccess.js";
import initFooter from "./../components/initFooter.js";
import initBlog from "./../components/initBlog.js";

const createHomePageTemplate = (rootNode) => {
  // формируем шаблон базовых секций для дальнейшего монтирования в них
  // соответствующих разделов
  const template = `
    <section class="section header"></section>
    <section class="section hero_section"></section>
    <section class="section brands_section"></section>
    <section class="section what_is_chatgpt_section"></section>
    <section class="section future_here"></section>
    <section class="section expectations"></section>
    <section class="section early_access_section"></section>
    <section class="section blog"></section>
    <section class="section footer"></section>
  `;

  rootNode.insertAdjacentHTML("beforeend", template);
};

const homePage = () => {
  // инициализация элементов страницы
  const rootNode = document.querySelector("#root");
  createHomePageTemplate(rootNode);

  // инициализация шапки страницы с мок датой
  const headerNode = rootNode.querySelector(".header");
  initHeader(headerNode);

  // инициализация хиро раздела
  const heroNode = rootNode.querySelector(".hero_section");
  initHero(heroNode);

  // инициализация секции брендов
  const brandsNode = rootNode.querySelector(".brands_section");
  initBrands(brandsNode);

  // инициализация раздела "Что такое GPT"
  const whatIsGptNode = rootNode.querySelector(".what_is_chatgpt_section");
  initWhatIsGpt(whatIsGptNode);

  // инициализация раздела "Будущее наступило" с мок датой
  const futureHereNode = rootNode.querySelector(".future_here");
  initFutureHere(futureHereNode);

  // инициализация раздела "Превосходя все ожидания"
  const expectationsNode = rootNode.querySelector(".expectations");
  initExpectations(expectationsNode);

  // инициализация раздела "Ранний доступ"
  const earlyAccessNode = rootNode.querySelector(".early_access_section");
  initEarlyAccess(earlyAccessNode);

  // инициализация раздела "Блог"
  const blogNode = rootNode.querySelector(".blog");
  initBlog(blogNode);

  // инициализация footer
  const footerNode = rootNode.querySelector(".footer");
  initFooter(footerNode);

  // инициализация бургера для адаптивного меню
  initBurger(headerNode);
};

export default homePage;
