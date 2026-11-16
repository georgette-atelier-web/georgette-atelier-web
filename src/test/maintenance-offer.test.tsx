import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// jsdom has no IntersectionObserver; Reveal only uses it to fade sections in.
class StubIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
globalThis.IntersectionObserver = StubIntersectionObserver as unknown as typeof IntersectionObserver;

function renderPage(path: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { queryClient: new QueryClient() },
    defaultPreload: false,
  });
  return render(<RouterProvider router={router} />);
}

afterEach(cleanup);

// Rule from Anna: the 40 €/month maintenance must be presented as optional —
// a client may keep their site without subscribing to it.
describe("Maintenance is optional", () => {
  it("states it on the offers page, both in the card and below the grid", async () => {
    renderPage("/creation-site-vitrine");

    expect(
      await screen.findByText(
        /est facultative : vous pouvez conserver votre site sans souscrire à cette prestation/i,
      ),
    ).toBeInTheDocument();

    const card = screen.getByRole("heading", { name: /^Maintenance$/ }).closest("article");
    expect(card).not.toBeNull();
    expect(within(card as HTMLElement).getByText(/conserver votre site sans souscrire/i)).toBeInTheDocument();
  });

  it("states it on the referencing & maintenance page", async () => {
    renderPage("/referencement-maintenance");

    expect(
      await screen.findByText(/cette prestation est facultative : vous pouvez conserver votre site sans la souscrire/i),
    ).toBeInTheDocument();
  });
});
