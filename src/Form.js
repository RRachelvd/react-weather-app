import { StrictMode } from "react";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form">
        <input
          type="search"
          required
          placeholder="Search for a city..."
          class="search-input"
        />
        <input type="submit" value="Search" class="search-button" />
      </form>
    </div>
  );
}
