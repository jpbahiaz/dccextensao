import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Item } from "~/components/item/component";
import { items } from "~/shared/constants";
import styles from "./styles.css?inline";

export const ItemList = component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <div class="item-list">
        <div class="list-header">
          <div>Nome</div>
          <div>Horas</div>
        </div>
        {items.map((i, index) => (
          <Item item={i} key={`${i.name}${index}`} />
        ))}
      </div>
    </div>
  );
});
