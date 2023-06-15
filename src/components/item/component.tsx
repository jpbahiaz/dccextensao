import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Item as ItemT } from "~/shared/types";
import styles from "./styles.css?inline";

type Props = {
  item: ItemT;
};

export const Item = component$(({ item }: Props) => {
  useStylesScoped$(styles);

  return (
    <div class="container">
      <div class="name">{item.name}</div>
      <div class="hours">{item.hours}</div>
    </div>
  );
});
