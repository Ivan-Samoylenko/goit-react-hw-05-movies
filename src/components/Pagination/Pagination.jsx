import { Wraper, Btn, PagList, PagListItem } from './Pagination.styled';

export function Pagination({ pages, currentPage, changePage }) {
  if (pages < 2) return null;

  const numbersOfPages = Array(pages)
    .fill(1)
    .map((_, index) => index + 1);

  const paginationPages = numbersOfPages.filter(
    page =>
      page < 2 ||
      page === pages ||
      (page >= currentPage - 2 && page <= currentPage + 2)
  );

  function onLeft() {
    changePage(currentPage - 1);
  }

  function onRight() {
    changePage(currentPage + 1);
  }

  function onPagination(event) {
    changePage(event.target.textContent);
  }

  return (
    <Wraper>
      {currentPage !== 1 && (
        <Btn type="button" onClick={onLeft}>
          ←
        </Btn>
      )}

      <PagList>
        {paginationPages.map(page => (
          <PagListItem key={page}>
            {page === pages && currentPage + 2 < pages - 1 && <p>...</p>}
            <Btn
              type="button"
              isCurrent={page === currentPage}
              onClick={onPagination}
            >
              {page}
            </Btn>
            {page < 2 && currentPage - 2 > 2 && <p>...</p>}
          </PagListItem>
        ))}
      </PagList>

      {currentPage !== pages && (
        <Btn type="button" onClick={onRight}>
          →
        </Btn>
      )}
    </Wraper>
  );
}
