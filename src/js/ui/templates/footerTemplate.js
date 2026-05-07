export const createFooterTopTemplate = ({ title, cta }) => {
  const template = `
    <div class="footer-cta">
            <h2 class="footer-cta__title">${title}
            </h2>
            <button class="footer-cta__btn">${cta.title}</button>
          </div>
    `;

  return template;
};

export const createFooterBrandTemplate = ({ title, address, rights }) => {
  const template = `
  <div class="footer-brand">
    <div class="footer-brand__logo">${title}</div>
    <p class="footer-brand__text">${address}</p>
    <p class="footer-brand__rights">${rights}</p>
  </div>
  `;

  return template;
};

export const createFooterColTemplate = ({ title, list }) => {
  const Collum = list
    .map((item) => `<li><a href="${item.href}">${item.title}</a></li>`)
    .join("");

  return `
    <div class="footer-col">
      <h4 class="footer-col__title">${title}</h4>
      <ul class="footer-col__list">
        ${Collum}
      </ul>
    </div>
  `;
};

export const createFooterMiddleTemplate = (footerMiddleData) => {
  const template = footerMiddleData
    .map((item) => createFooterColTemplate(item))
    .join("");

  return template;
};

export const createFooterBottomTemplate = ({ title }) => {
  return `
    <div class="copyright-bar">
      <p>${title}</p>
    </div>
  `;

  return template;
};

export const footerTemplate = ({
  footerTop,
  footerBrand,
  footerMiddle,
  footerBottom,
}) => {
  const footerTopTemplate = createFooterTopTemplate(footerTop);
  const footerBrandTemplate = createFooterBrandTemplate(footerBrand);
  const footerMiddleTemplate = createFooterMiddleTemplate(footerMiddle);
  const footerBottomTemplate = createFooterBottomTemplate(footerBottom);

  const resultTemplate = `
    <div class="site-footer">
      ${footerTopTemplate}
      <div class="footer-main">
        <div class="footer-row">
          ${footerBrandTemplate}
          ${footerMiddleTemplate}
        </div>
      </div>
      ${footerBottomTemplate}
    </div>  
  `;

  return resultTemplate;
};
