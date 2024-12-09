import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { CategoryCard, CategoryCardProps } from "./CategoryCard";

// Define metadata for the component
export default {
  title: "Components/CategoryCard",
  component: CategoryCard,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof CategoryCard>;

const Template: StoryFn<typeof CategoryCard> = (args: CategoryCardProps) => (
  <CategoryCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Default Title",
  description: "This is the default description.",
};

export const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  title: "Long Description",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
