export const createEarlyAccessLeftTemplate = ({ subtitle, title }) => {
  return `
    <div class="early_access_sectionleft">
      <p class="sectionsubtitle">
        ${subtitle}
      </p>
      <h2 class="sectiontitle">
        ${title}
      </h2>
    </div>
  `;
};

export const createEarlyAccessRightTemplate = ({ button }) => {
  return `
    <div class="early_access_sectionright">
      <button class="early_access_btn">
        ${button.title}
      </button>
    </div>
  `;
};

export const earlyAccessTemplate = ({ subtitle, title, button }) => {
  const earlyAccessLeftTemplate = createEarlyAccessLeftTemplate({
    subtitle,
    title,
  });
  const earlyAccessRightTemplate = createEarlyAccessRightTemplate({ button });

  const resultTemplate = `
    <section class="early_access_section">
      <div class="early_access_sectioncontent">
        ${earlyAccessLeftTemplate}
        ${earlyAccessRightTemplate}
      </div>
    </section>
  `;

  return resultTemplate;
};
