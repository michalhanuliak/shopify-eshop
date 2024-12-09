import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  nextPagePath: string;
  prevPagePath: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  nextPagePath,
  prevPagePath,
}) => {
  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center mt-6"
      data-testid="pagination"
    >
      <ul className="flex items-center space-x-4">
        {currentPage > 1 && (
          <li>
            <Link
              href={prevPagePath}
              prefetch={true}
              aria-label="Go to previous page"
            >
              <ChevronLeft aria-hidden="true" />
            </Link>
          </li>
        )}

        <li aria-current="page">
          <span className="px-4 py-2 text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
        </li>

        {currentPage < totalPages && (
          <li>
            <Link
              href={nextPagePath}
              prefetch={true}
              aria-label="Go to next page"
            >
              <ChevronRight aria-hidden="true" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
