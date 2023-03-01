import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="OFERTAS" />
      <Item Links={RESOURCES} title="SUCURSALES" />
      <Item Links={COMPANY} title="LA EMPRESA" />
      <Item Links={SUPPORT} title="CONTACTO" />
    </div>
  );
};

export default ItemsContainer;
