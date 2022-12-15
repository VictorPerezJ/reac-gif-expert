import { useState } from "react";
import { AddCategory, GiftGrid } from "./componets";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

        {
        categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))
        }
    </>

  );
};
