export const createButtonTemplate = ({ title }) => {
  return `
    <div class="early_access_section__right">
      <button class="early_access_btn">${title}</button>
    </div>
  `;
};

export const createContentTemplate = ({ subtitle, title }) => {
  return `
    <div class="early_access_sectionleft">
      <h3 class="sectionsubtitle">${subtitle}</h3>
      <h2 class="sectiontitle">${title}</h2>
    </div>
  `;
};

export const earlyAccessTemplate = ({ ctaButton, earlyAccessContent }) => {
  const buttonTemplate = createButtonTemplate(ctaButton);
  const contentTemplate = createContentTemplate(earlyAccessContent);

  const resultTemplate = `
     <section class="section early_access_section">
      <div class="early_access_sectioncontent">
          ${contentTemplate}
          ${buttonTemplate}
      </div>
    </section>
    `;

  return resultTemplate;
};
