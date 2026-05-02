export const createBlogCardTemplate = ({ image, date, title, link }) => {
  return `
    <div class="blog_card">
      <div class="blog_card_image">
        <img src="${image.src}" alt="${image.alt}" />
      </div>
      <div class="blog_card_content">
        <span class="blog_card_date">
          ${date}
        </span>
        <h4 class="blog_card_title">
          ${title}
        </h4>
        <a href="${link.href}" class="blog_card_link">
          ${link.title}
        </a>
      </div>
    </div>
  `;
};

export const createBlogCardLargeTemplate = ({ image, date, title, link }) => {
  return `
    <div class="blog_card_large">
      <div class="blog_card_image">
        <img src="${image.src}" alt="${image.alt}" />
      </div>
      <div class="blog_card_content">
        <span class="blog_card_date">
          ${date}
        </span>
        <h4 class="blog_card_title">
          ${title}
        </h4>
        <a href="${link.href}" class="blog_card_link">
          ${link.title}
        </a>
      </div>
    </div>
  `;
};

export const blogTemplate = ({ header, posts }) => {
  const largeCardTemplate = createBlogCardLargeTemplate(posts[0]);
  const row1CardsTemplate = posts
    .slice(1, 3)
    .map(createBlogCardTemplate)
    .join("");
  const row2CardsTemplate = posts.slice(3).map(createBlogCardTemplate).join("");

  const resultTemplate = `
    <section class="blog">
      <h2 class="blog_title">
        ${header}
      </h2>
      <div class="blog_cards">
        <div class="blog_cards_left">
          ${largeCardTemplate}
        </div>
        <div class="blog_cards_right">
          <div class="blog_cards_row">
            ${row1CardsTemplate}
          </div>
          <div class="blog_cards_row">
            ${row2CardsTemplate}
          </div>
        </div>
      </div>
    </section>
  `;

  return resultTemplate;
};
