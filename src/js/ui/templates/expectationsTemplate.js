export const createExpectationsLeftTemplate = ({ src, alt }) => {
  return `
    <div class="expectations__left">
      <img src="${src}" alt="${alt}" />
    </div>
  `;
};

export const createExpectationsRightTemplate = ({
  label,
  header,
  text,
  cta,
}) => {
  return `
    <div class="expectations__right">
      <a href="${cta.href}" class="label__cta">
        ${label}
      </a>
      <h2 class="expectations_header">
        ${header}
      </h2>
      <p class="expectations_content">
        ${text}
      </p>
      <a href="${cta.href}" class="right__cta">
        ${cta.title}
      </a>
    </div>
  `;
};

export const expectationsTemplate = ({
  expectationsImage,
  expectationsContent,
}) => {
  const expectationsLeftTemplate =
    createExpectationsLeftTemplate(expectationsImage);
  const expectationsRightTemplate =
    createExpectationsRightTemplate(expectationsContent);

  const resultTemplate = `
    <section class="expectations">
      ${expectationsLeftTemplate}
      ${expectationsRightTemplate}
    </section>
  `;

  return resultTemplate;
};
