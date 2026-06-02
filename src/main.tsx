import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ensure all links open in a new tab and use safe rel attributes.
function setAnchorTargets() {
	const setTarget = (a: HTMLAnchorElement) => {
		try {
			if (a.getAttribute("target") !== "_blank") a.setAttribute("target", "_blank");
			const rel = (a.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
			if (!rel.includes("noopener")) rel.push("noopener");
			if (!rel.includes("noreferrer")) rel.push("noreferrer");
			a.setAttribute("rel", rel.join(" "));
		} catch (e) {
			// ignore
		}
	};

	document.querySelectorAll("a[href]").forEach((el) => setTarget(el as HTMLAnchorElement));

	const mo = new MutationObserver((mutations) => {
		for (const m of mutations) {
			for (const node of Array.from(m.addedNodes)) {
				if (!(node instanceof HTMLElement)) continue;
				if (node.tagName === "A" && node.hasAttribute("href")) setTarget(node as HTMLAnchorElement);
				node.querySelectorAll?.("a[href]")?.forEach((el) => setTarget(el as HTMLAnchorElement));
			}
		}
	});

	if (document.body) mo.observe(document.body, { childList: true, subtree: true });
}

if (typeof window !== "undefined") {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", setAnchorTargets);
	} else {
		setAnchorTargets();
	}
}

createRoot(document.getElementById("root")!).render(<App />);
