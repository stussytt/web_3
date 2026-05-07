export const createFeatureImageTemplate = ({ src, alt }) => {
  return `
    <div class="expectations__left">
        <img
            src="${src}"
            alt="${alt}"
          />
    </div>
  `;
};

export const createExpectationsContentRightTemplate = ({
  label,
  header,
  content,
  cta,
}) => {
  return `
    <div class="expectations__right">
          <a href="${cta.href}" class="label__cta">${label}</a>
          <h2 class="right__header">${header}
          </h2>
          <p class="expectations_content">${content}
          </p>
          <a href="${cta.href}" class="right__cta">${cta.title}</a>
        </div>
  `;
};

export const expectationsTemplate = ({
  FeatureImage,
  expectationsContentRight,
}) => {
  const FeatureImageTemplate = createFeatureImageTemplate(FeatureImage);
  const ExpectationsContentRightTemplate =
    createExpectationsContentRightTemplate(expectationsContentRight);

  const resultTemplate = `
    <section class="section expectations">
      ${FeatureImageTemplate}
      ${ExpectationsContentRightTemplate}
    </section>
  `;

  return resultTemplate;
};
