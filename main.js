import { HashMap } from "./hash-map.js";

runTests();

// Tests generated using ChatGPT
function runTests() {
    const test = new HashMap();
    // 1️⃣ Add a variety of key/value pairs
    test.set("apple", "red");
    test.set("banana", "yellow");
    test.set("carrot", "orange");
    test.set("dog", "brown");
    test.set("elephant", "gray");
    test.set("frog", "green");
    test.set("grape", "purple");
    test.set("hat", "black");
    test.set("ice cream", "white");
    test.set("jacket", "blue");
    test.set("kite", "pink");
    test.set("lion", "golden");

    console.log("Length after inserts:", test.length());
    console.assert(test.length() === 12, "❌ Length should be 12 after inserting 12 items");

    // 2️⃣ Test get()
    console.log("Get apple:", test.get("apple"));
    console.assert(test.get("apple") === "red", "❌ get('apple') should return 'red'");
    console.assert(test.get("kite") === "pink", "❌ get('kite') should return 'pink'");
    console.assert(test.get("missing") === null, "❌ get('missing') should return null");

    // 3️⃣ Test has()
    console.log("Has banana?", test.has("banana"));
    console.assert(test.has("banana") === true, "❌ has('banana') should return true");
    console.assert(test.has("missing") === false, "❌ has('missing') should return false");

    // 4️⃣ Test overwrite (set existing key)
    test.set("apple", "green");
    console.log("Overwrite apple ->", test.get("apple"));
    console.assert(test.get("apple") === "green", "❌ Overwriting apple should change value to 'green'");
    console.assert(test.length() === 12, "❌ Length should remain 12 after overwriting a key");

    // 5️⃣ Test remove()
    const removed = test.remove("grape");
    console.log("Removing grape:", removed);
    console.assert(removed === true, "❌ remove('grape') should return true");
    console.assert(test.has("grape") === false, "❌ 'grape' should no longer exist");
    console.assert(test.length() === 11, "❌ Length should be 11 after removing 1 item");
    console.assert(test.remove("missing") === false, "❌ remove('missing') should return false");

    // 6️⃣ Test keys()
    const keys = test.keys();
    console.log("Keys:", keys);
    console.assert(keys.includes("apple") && keys.includes("lion"), "❌ Keys array missing expected keys");

    // 7️⃣ Test values()
    const values = test.values();
    console.log("Values:", values);
    console.assert(values.includes("green") && values.includes("golden"), "❌ Values array missing expected values");

    // 8️⃣ Test entries()
    const entries = test.entries();
    console.log("Entries:", entries);
    console.assert(
        entries.some(([k, v]) => k === "apple" && v === "green"),
        "❌ Entries should contain ['apple','green']"
    );

    // 9️⃣ Test clear()
    test.clear();
    console.log("Length after clear:", test.length());
    console.assert(test.length() === 0, "❌ Length should be 0 after clear()");
    console.assert(test.keys().length === 0, "❌ Keys should be empty after clear()");
    console.assert(test.values().length === 0, "❌ Values should be empty after clear()");
    console.assert(test.entries().length === 0, "❌ Entries should be empty after clear()");

    console.log("✅ All tests finished");
}