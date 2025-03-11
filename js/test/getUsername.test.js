import { describe, it, expect, beforeEach, vi } from "vitest";
import { getUsername, saveUser, clearStorage } from "../utils/storage.js";

describe("getUsername", () => {

  beforeEach(() => {
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    };
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    const user = { name: "TestUser" };
    saveUser(user);

    localStorage.getItem.mockReturnValue(JSON.stringify(user));

    expect(getUsername()).toBe("TestUser");
  });

  it("returns null when no user exists in storage", () => {
    localStorage.getItem.mockReturnValue(null);

    expect(getUsername()).toBe(null);
  });

});
