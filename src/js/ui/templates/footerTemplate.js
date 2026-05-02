export const createFooterCtaTemplate = ({ header, button }) => {
  return `
    <div class="footer-cta">
      <h2 class="footer-cta__title">
        ${header}
      </h2>
      <button class="footer-cta__btn">
        ${button.title}
      </button>
    </div>
  `;
};

export const createFooterBrandTemplate = ({ logoText, address, rights }) => {
  return `
    <div class="footer-brand">
      <h3 class="footer-brand__logo">
        ${logoText}
      </h3>
      <p class="footer-brand__text">
        ${address}
      </p>
      <p class="footer-brand__rights">
        ${rights}
      </p>
    </div>
  `;
};

export const createFooterColumnTemplate = ({ title, links }) => {
  const linksTemplate = links
    .map(
      ({ href, title: linkTitle }) => `
    <li>
      <a href="${href}" class="footer-col__link">
        ${linkTitle}
      </a>
    </li>
  `,
    )
    .join("");

  const template = `
    <div class="footer-col">
      <h4 class="footer-col__title">
        ${title}
      </h4>
      <ul class="footer-col__list">
        ${linksTemplate}
      </ul>
    </div>
  `;

  return template;
};

export const footerTemplate = ({ cta, brand, columns, copyright }) => {
  const footerCtaTemplate = createFooterCtaTemplate(cta);
  const footerBrandTemplate = createFooterBrandTemplate(brand);
  const footerColumnsTemplate = columns
    .map(createFooterColumnTemplate)
    .join("");

  const resultTemplate = `
    <section class="footer section">
      <div class="site-footer">
        ${footerCtaTemplate}
        <div class="footer-main">
          <div class="footer-row">
            ${footerBrandTemplate}
            ${footerColumnsTemplate}
          </div>
        </div>
        <div class="copyright-bar">
          <p>
            ${copyright}
          </p>
        </div>
      </div>
    </section>
  `;

  return resultTemplate;
};
