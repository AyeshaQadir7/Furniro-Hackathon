import { type SchemaTypeDefinition } from "sanity";
import heroSection from "./HomePage/hero";
import rangeSection from "./HomePage/rangeSection";
import roomInspo from "./HomePage/roomInspo";
import shareSetup from "./HomePage/shareSetup";
import blogPage from "./BlogPage/blogPage";
import contactPage from "./ContactPage/contactPage";
import footer from "./Footer/footer";
import { product } from "./HomePage/product";
import {shopProduct} from "./Shop/shopProduct";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    rangeSection,
    roomInspo,
    shareSetup,
    blogPage,
    contactPage,
    footer,
    product,
    shopProduct,
  ],
};
