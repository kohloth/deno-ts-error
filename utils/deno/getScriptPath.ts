export function getScriptPath(importMetaUrl: any) {
	return new URL(".", importMetaUrl).pathname;
}