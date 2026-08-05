import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { VehicleGallery } from "./vehicle-gallery";

const images = ["/truck-1.jpg", "/truck-2.jpg", "/truck-3.jpg"];

describe("VehicleGallery", () => {
  it("navigates with controls and thumbnails", async () => {
    const user = userEvent.setup();
    render(
      <VehicleGallery
        images={images}
        title="Volkswagen Worker"
        notice="Seminovo certificado"
      />,
    );

    expect(screen.getByText("1 de 3 fotos")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Próxima foto" }));
    expect(screen.getByText("2 de 3 fotos")).toBeInTheDocument();
    expect(screen.getByAltText("Volkswagen Worker — foto 2 de 3")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Ver foto 3" }));
    expect(screen.getByText("3 de 3 fotos")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Ir para foto 1" }));
    expect(screen.getByText("1 de 3 fotos")).toBeInTheDocument();
  });

  it("wraps from the first photo to the last photo", async () => {
    const user = userEvent.setup();
    render(
      <VehicleGallery images={images} title="Volkswagen Worker" notice="Disponível" />,
    );

    await user.click(screen.getByRole("button", { name: "Foto anterior" }));
    expect(screen.getByText("3 de 3 fotos")).toBeInTheDocument();
  });
});
