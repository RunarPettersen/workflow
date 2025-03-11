import { describe, it, expect } from "vitest";
import { isActivePath } from "../utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/venue/", "/venue/")).toBe(true);
  });

  it("returns true for root path when path is '/' or '/index.html'", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns false when paths don't match", () => {
    expect(isActivePath("/venue/", "/register/index.html")).toBe(false);
    expect(isActivePath("/login/", "/venue/index.html")).toBe(false);
  });
});