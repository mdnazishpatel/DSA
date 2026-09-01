async function printSecretMessage() {
    const docUrl =
        "https://docs.google.com/document/d/e/2PACX-1vSvM5gDlNvt7npYHhp_XfsJvuntUhq184By5xO_pA4b_gCWeXb6dM6ZxwN8rE6S4ghUsCj2VKR21oEP/pub";

    try {
        // Fetch Google Doc HTML content
        const response = await fetch(docUrl);
        const html = await response.text();

        // Parse HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // Extract text content
        const text = doc.body.innerText;

        // Split into lines
        const lines = text.split("\n").map(line => line.trim()).filter(Boolean);

        const points = [];
        let maxX = 0;
        let maxY = 0;

        // Parse lines
        // Expected format: x y character
        for (const line of lines) {
            const parts = line.split(/\s+/);

            if (parts.length < 3) continue;

            const x = parseInt(parts[0], 10);
            const y = parseInt(parts[1], 10);

            // Character may contain spaces/unicode
            const char = parts.slice(2).join(" ");

            if (isNaN(x) || isNaN(y)) continue;

            points.push({ x, y, char });

            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }

        // Create grid filled with spaces
        const grid = Array.from({ length: maxY + 1 }, () =>
            Array(maxX + 1).fill(" ")
        );

        // Place characters into grid
        for (const { x, y, char } of points) {
            grid[y][x] = char;
        }

        // Print final output
        console.log("\nSECRET MESSAGE:\n");

        for (const row of grid) {
            console.log(row.join(""));
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

// Run function
printSecretMessage();