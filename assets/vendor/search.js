app({
  appId: "0LUMG2U2NT",
  apiKey: "6952f5c65c1fc81a2c0ff4ba7d2326cf",
  indexName: "lbenicio-blog",
  searchParameters: {
    hitsPerPage: 10,
  },
});

const searchImage = ``;

function app(opts) {
  const search = instantsearch({
    searchClient: algoliasearch(opts.appId, opts.apiKey),
    indexName: opts.indexName,
    routing: true,
    searchFunction: opts.searchFunction,
  });

  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: "#search-input",
      placeholder: "Search for ...",
    }),
    instantsearch.widgets.hits({
      container: "#hits",
      templates: {
        item: (item) => {
          const isThereASearch = document.querySelector("input.ais-SearchBox-input").value !== "";
          const pagination = document.querySelector("section#search-box div#pagination");
          const stats = document.querySelector("section#search-box div#stats");
          const sort = document.querySelector("section#search-box div#sort-by-wrapper");
          const rightColumn = document.querySelector("section#search-box div#right-column");
          if (isThereASearch) {
            pagination.classList.remove("d-none");
            stats.classList.remove("d-none");
            sort.classList.remove("d-none");
            rightColumn.classList.remove("d-none");
          } else {
            pagination.classList.add("d-none");
            stats.classList.add("d-none");
            sort.classList.add("d-none");
            rightColumn.classList.add("d-none");
          }
          console.log(pagination)
          return isThereASearch
            ? `
            <div class="hit">
                <div class="hit-image ${item.image ? '' : 'd-none'}"><img src="${
                item.image
              }" alt="${item.name}"></div>
                <div class="hit-content">
                    <h5 class="hit-name"><a href="${item.url}">${
                item.title
              }</a></h5>
                    <p class="hit-description"><a href="${item.url}"
                    }>${item.content.slice(0, 300)}</a></p>
                </div>
            </div>
				    `
            : "";
        },
        empty: getTemplate("no-results"),
      },
    }),
    instantsearch.widgets.stats({
      container: "#stats",
    }),
    instantsearch.widgets.sortBy({
      container: "#sort-by",
      items: [
        {
          value: opts.indexName,
          label: "Most relevant",
        },
      ],
    }),
    instantsearch.widgets.pagination({
      container: "#pagination",
      scrollTo: "#search-input",
    }),
  ]);

  search.start();
}
function getTemplate(templateName) {
  return document.querySelector(`#${templateName}-template`).innerHTML;
}

function getHeader(title) {
  return `<h5>${title}</h5>`;
}
