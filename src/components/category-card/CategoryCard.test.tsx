import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CategoryCard } from "./CategoryCard";

describe("CategoryCard", () => {
  const mockOnClick = vi.fn();

  it("renders correctly", () => {
    render(
      <CategoryCard
        title="Test Title"
        description="Test Description"
        onClick={mockOnClick}
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(
      <CategoryCard
        title="Test Title"
        description="Test Description"
        onClick={mockOnClick}
      />
    );
    fireEvent.click(screen.getByRole("group"));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
