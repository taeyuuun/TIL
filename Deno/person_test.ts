import { assert } from "https://deno.land/std@0.219.0/assert/mod.ts";
import Person, { sayHello } from "./person";

Deno.test("sayHello function", () => {
    const grace: Person = {
        lastName: "Hopper",
        firstName: "Grace",
    };

    assert("Hello, Grace!", sayHello(grace));
});