export const createTitleTemplate = (BlogTitle) => {
  return `
    <h2 class="blog_title">${BlogTitle.title}
    </h2>
  `;
};

export const createBlogCardLargeTemplate = ({ image, date, title, link }) => {
  return `
    <div class="blog_card_large">
      <div class="blog_card_image">
        <img src="${image.src}" alt="${image.alt}" />
      </div>
      <div class="blog_card_content">
        <time class="blog_card_date">${date}</time>
        <h3 class="blog_card_title">${title}</h3>
        <a href="${link.href}" class="blog_card_link">${link.title}</a>
      </div>
    </div>
  `;
};

export const createBlogCardTopTemplate = ({ image, date, title, link }) => {
  return `
      <div class="blog_card">
        <div class="blog_card_image">
          <img src="${image.src}" alt="${image.alt}" />
        </div>
        <div class="blog_card_content">
          <time class="blog_card_date">${date}</time>
          <h3 class="blog_card_title">${title}</h3>
          <a href="${link.href}" class="blog_card_link">${link.title}</a>
        </div>
      </div>
  `;
};

export const createBlogCardBottomTemplate = ({ image, date, title, link }) => {
  return `
      <div class="blog_card">
        <div class="blog_card_image">
          <img src="${image.src}" alt="${image.alt}" />
        </div>
        <div class="blog_card_content">
          <time class="blog_card_date">${date}</time>
          <h3 class="blog_card_title">${title}</h3>
          <a href="${link.href}" class="blog_card_link">${link.title}</a>
        </div>
      </div>
  `;
};

export const BlogCardsTemplate = (data) => {
  const SmallBlogCardsTop = data.BlogCardsTop.map((item) =>
    createBlogCardTopTemplate(item),
  ).join("");

  const SmallBlogCardsBottom = data.BlogCardsBottom.map((item) =>
    createBlogCardBottomTemplate(item),
  ).join("");

  const BlogCardLarge = createBlogCardLargeTemplate(data.BlogCardLarge);
  const Title = createTitleTemplate(data.BlogTitle);

  return `
    <section class="blog section">
      ${Title}
        <div class="blog_cards">
          <div class="blog_cards_left">
            ${BlogCardLarge}
          </div>
          <div class="blog_cards_right">
            <div class="blog_cards_row">
              ${SmallBlogCardsTop}
            </div>
            <div class="blog_cards_row">
              ${SmallBlogCardsBottom}
            </div>
          </div>
        </div>
    </section>
`;
};
