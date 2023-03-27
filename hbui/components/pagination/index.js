import React, { useState } from 'react'
import tw, { styled, css } from 'twin.macro'

function Pagination({ count = 7, defaultPage = 2, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(defaultPage ?? 1)

  return (
    <PaginationRoot>
      {renderItems({
        count,
        currentPage,
        setCurrentPage,
        onPageChange,
      })}
    </PaginationRoot>
  )
}

function renderItems({ count, currentPage, setCurrentPage, onPageChange }) {
  const totalPages = count

  const handlePrevClick = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
    onPageChange?.(currentPage - 1)
  }

  const handleNextClick = () => {
    if (currentPage === totalPages) return
    setCurrentPage(currentPage + 1)
    onPageChange?.(currentPage + 1)
  }

  function renderPageNumbers() {
    const maxPages = 7
    const pages = []

    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, currentPage + 2)

    if (totalPages <= maxPages) {
      startPage = 1
      endPage = totalPages
    } else if (currentPage <= Math.ceil(maxPages / 2) - 1) {
      startPage = 1
      endPage = maxPages - 2
    } else if (currentPage >= totalPages - Math.floor(maxPages / 2) + 1) {
      startPage = totalPages - maxPages + 3
      endPage = totalPages
    } else {
      startPage = currentPage - Math.floor((maxPages - 4) / 2)
      endPage = currentPage + Math.floor((maxPages - 4) / 2)
    }

    if (startPage > 1) {
      pages.push(
        <PaginationItem
          key={1}
          onClick={() => {
            setCurrentPage(1)
            onPageChange?.(1)
          }}
          active={currentPage === 1}
        >
          1
        </PaginationItem>,
      )
      if (startPage > 2) {
        pages.push(
          <PaginationItem
            key="ellipsis-start"
            onClick={() => {
              setCurrentPage(startPage - 1)
              onPageChange?.(startPage - 1)
            }}
            active={undefined}
          >
            ...
          </PaginationItem>,
        )
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      const active = i === currentPage
      pages.push(
        <PaginationItem
          key={i}
          onClick={() => {
            setCurrentPage(i)
            onPageChange?.(i)
          }}
          active={active}
        >
          {i}
        </PaginationItem>,
      )
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <PaginationItem
            key="ellipsis-end"
            onClick={() => {
              setCurrentPage(endPage + 1)
              onPageChange?.(endPage + 1)
            }}
            active={undefined}
          >
            ...
          </PaginationItem>,
        )
      }
      pages.push(
        <PaginationItem
          key={totalPages}
          onClick={() => {
            setCurrentPage(totalPages)
            onPageChange?.(totalPages)
          }}
          active={currentPage === totalPages}
        >
          {totalPages}
        </PaginationItem>,
      )
    }

    return pages
  }

  return (
    <>
      <PaginationItem
        onClick={() => handlePrevClick()}
        dimmed={currentPage === 1}
      >
        <ChevronLeftIcon />
      </PaginationItem>
      {renderPageNumbers()}
      <PaginationItem
        onClick={() => handleNextClick()}
        dimmed={currentPage === totalPages}
      >
        <ChevronRightIcon />
      </PaginationItem>
    </>
  )
}

const PaginationRoot = styled.div(() => [
  tw`bg-window flex`,
  tw`w-fit`,

  css`
    height: 47px;
    border-radius: 3px;
  `,
])

const PaginationItem = styled.li(({ active, dimmed }) => [
  tw`flex justify-center  items-center`,
  tw`pl-5 pr-5 h-full w-full`,
  tw`text-tertiary hover:text-primary`,
  tw`dark:hover:fill-white fill-grey-dark-scale-100 hover:fill-black`,
  tw`font-bold`,

  dimmed &&
    css`
      opacity: 20%;
    `,

  active && tw`text-green`,

  css`
    user-select: none;

    cursor: pointer;
    width: 50px;

    :first-child {
      padding-right: 12px;
      margin-right: 12px;
    }

    :last-child {
      padding-left: 12px;
      margin-left: 12px;
    }
  `,
])

function ChevronRightIcon({ ...props }) {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12">
      <path d="M6.97013 10.3581L10.6344 6.96628L0.955904 6.96628C0.398293 6.96628 4.77989e-07 6.53244 5.22813e-07 6.01972C5.71084e-07 5.46756 0.398294 5.07316 0.955904 5.07316L10.6344 5.07316L6.97013 1.64188C6.77098 1.44468 6.69132 1.20804 6.69132 0.971404C6.69132 0.734765 6.77098 0.498125 6.9303 0.300925C7.28876 -0.0934747 7.8862 -0.0934747 8.2845 0.261485L13.7013 5.3098C14.0996 5.66476 14.0996 6.33524 13.7013 6.6902L8.2845 11.7385C7.8862 12.0935 7.28876 12.0935 6.9303 11.6991C6.57184 11.3047 6.57184 10.7131 6.97013 10.3581Z" />
    </svg>
  )
}

function ChevronLeftIcon({ ...props }) {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12">
      <path d="M7.02987 1.64188L3.36558 5.03372L13.0441 5.03372C13.6017 5.03372 14 5.46756 14 5.98028C14 6.53244 13.6017 6.92684 13.0441 6.92684L3.36558 6.92684L7.02987 10.3581C7.22902 10.5553 7.30868 10.792 7.30868 11.0286C7.30868 11.2652 7.22902 11.5019 7.0697 11.6991C6.71124 12.0935 6.1138 12.0935 5.7155 11.7385L0.298719 6.6902C-0.0995746 6.33524 -0.0995746 5.66476 0.298719 5.3098L5.7155 0.261484C6.1138 -0.0934759 6.71124 -0.0934759 7.0697 0.300924C7.42816 0.695324 7.42816 1.28692 7.02987 1.64188Z" />
    </svg>
  )
}

export default Pagination
