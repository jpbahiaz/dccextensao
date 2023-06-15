import { component$ } from "@builder.io/qwik";
import { Header } from "~/features/header/component";

const Sobre = component$(() => {
  return (
    <div class="w-100">
      <Header />
      <div>Hi from Sobre</div>{" "}
    </div>
  );
});

export default Sobre;
