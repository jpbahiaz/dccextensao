import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";

export const Header = component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="container">
      <h1>Extensões para o DCC</h1>
      <div class="links">
        <a href="/">Home</a>
        <a href="/sobre">Sobre esse site</a>
      </div>
    </header>
  );
});
