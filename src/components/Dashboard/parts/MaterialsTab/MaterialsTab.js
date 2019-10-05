import React, { useState, useEffect } from "react";
import { ViewWrapper } from "../ViewWrapper";
import NoMaterials from "./NoMaterials";
import MaterialsInnerWrapper from "./MaterialsInnerWrapper";
import ActionBar from "./ActionBar";

const fakeMaterials = [
  {
    _id: "1j3ih2i5bih123",
    name: "Shingles",
    unit: "sq ft",
    materials: [
      {
        _id: "oij1249hn9e1",
        category_id: "1j3ih2i5bih123",
        name: "Thompson Burgandy",
        description: "Dark red high grade shingle.",
        photoUrl:
          "https://modernize.com/wp-content/uploads/2018/12/roof-hero-desktop.jpg",
        grade: "A"
      },
      {
        _id: "oij1249hn9e2",
        category_id: "1j3ih2i5bih123",
        name: "Thompson Grey",
        description: "Dark grey mid grade shingle.",
        photoUrl:
          "https://1vimik2p9ntfppc8i3drdd5c-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/rubber-roof-shingles.jpg",
        grade: "B"
      },
      {
        _id: "oij1249hn9e3",
        category_id: "1j3ih2i5bih123",
        name: "Thompson Light Grey",
        description: "Light grey mid grade shingle.",
        photoUrl:
          "https://1vimik2p9ntfppc8i3drdd5c-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/architectural-roof-shingles.jpg",
        grade: "B"
      },
      {
        _id: "oij1249hn9e5",
        category_id: "1j3ih2i5bih123",
        name: "Thompson Matte",
        description: "Matte low grade shingle",
        photoUrl:
          "https://modernize.com/wp-content/uploads/2015/09/missing-shingles-1024x683.jpg",
        grade: "F"
      }
    ]
  },
  {
    _id: "1j3ih2i5bih124",
    name: "Tiles",
    unit: "sq ft",
    materials: [
      {
        _id: "fij1249hn9e1",
        category_id: "1j3ih2i5bih124",
        name: "Thompson Burgandy",
        description: "Dark red high grade shingle.",
        photoUrl:
          "https://modernize.com/wp-content/uploads/2018/12/roof-hero-desktop.jpg",
        grade: "A"
      },
      {
        _id: "oxij1249hn9e2",
        category_id: "1j3ih2i5bih124",
        name: "Thompson Grey",
        description: "Dark grey mid grade shingle.",
        photoUrl:
          "https://1vimik2p9ntfppc8i3drdd5c-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/rubber-roof-shingles.jpg",
        grade: "B"
      },
      {
        _id: "oij12x49hn9e3",
        category_id: "1j3ih2i5bih124",
        name: "Thompson Light Grey",
        description: "Light grey mid grade shingle.",
        photoUrl:
          "https://1vimik2p9ntfppc8i3drdd5c-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/architectural-roof-shingles.jpg",
        grade: "B"
      },
      {
        _id: "oij124x9hn9e5",
        category_id: "1j3ih2i5bih124",
        name: "Thompson Matte",
        description: "Matte low grade shingle",
        photoUrl:
          "https://modernize.com/wp-content/uploads/2015/09/missing-shingles-1024x683.jpg",
        grade: "D"
      }
    ]
  }
];

export default function MaterialsTab() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(fakeMaterials);
  }, []);

  return (
    <ViewWrapper>
      <h3>Your Materials</h3>
      <hr style={{ marginBottom: "16px" }} />
      <ActionBar />
      {categories.length === 0 ? (
        <NoMaterials />
      ) : (
        <MaterialsInnerWrapper categories={categories} />
      )}
    </ViewWrapper>
  );
}
