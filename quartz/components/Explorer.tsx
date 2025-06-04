sortFn: (a, b) => {
// Always keep folders at the top, sorted alphabetically
if (a.isFolder && b.isFolder) {
return a.displayName.localeCompare(b.displayName, undefined, {
numeric: true,
sensitivity: “base”,
})
}

// Folders come before files
if (a.isFolder && !b.isFolder) {
return -1
}
if (!a.isFolder && b.isFolder) {
return 1
}

// Both are files - sort by creation date (newest first)
// If creation date is not available, fall back to alphabetical sorting
const aDate = a.file?.dates?.created || a.file?.dates?.modified
const bDate = b.file?.dates?.created || b.file?.dates?.modified

if (aDate && bDate) {
// Sort by date (newest first) - reverse chronological order
return new Date(bDate).getTime() - new Date(aDate).getTime()
}

// If dates are not available, fall back to alphabetical sorting
return a.displayName.localeCompare(b.displayName, undefined, {
numeric: true,
sensitivity: “base”,
})
}