import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "~/features/header/component";
import { ItemList } from "~/features/item-list/component";

export default component$(() => {
  return (
    <div class="column w-100">
      <Header />
      <div class="row" style={{minHeight: "0"}}>
        <ItemList />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "DCC Extensões",
  meta: [
    {
      name: "description",
      content: "Possibilidades para cursar horas de extensão no DCC",
    },
  ],
};
