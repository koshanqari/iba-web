# Insights Data Management

This directory contains the centralized data source for all insights across the website.

## Files

### `insights.ts`

This is the single source of truth for all insight articles on the website.

## Managing Insights

### How to Add a New Insight

1. Open `/data/insights.ts`
2. Add a new object to the `insights` array with the following structure:

```typescript
{
  id: 13, // Use the next sequential number
  category: 'Healthcare', // Industry category
  title: 'Your Insight Title',
  excerpt: 'A brief summary that appears on card previews.',
  image: 'https://images.unsplash.com/photo-xxxxx?w=1200&q=80', // High-quality image URL
  readTime: '6 min read',
  date: 'Dec 20, 2024',
  content: `
    <p>Your full article content in HTML format...</p>
    
    <h3>Section Heading</h3>
    <p>More content...</p>
    
    <ul>
      <li><strong>Point 1:</strong> Description</li>
      <li><strong>Point 2:</strong> Description</li>
    </ul>
  `
}
```

3. **Add the insight ID to the page configuration** (see below)

### Page Assignment System

The `pageInsights` object controls which insights appear on which pages:

```typescript
export const pageInsights = {
  homepage: [1, 4, 5], // Insight IDs for homepage
  services: [4, 3, 6], // Insight IDs for services page  
  industries: [1, 2, 3], // Insight IDs for industries page
};
```

#### How to Control Page Assignments:

**To show insight #7 on homepage:**
```typescript
pageInsights = {
  homepage: [1, 4, 5, 7], // Add 7 to homepage array
  services: [4, 3, 6],
  industries: [1, 2, 3],
};
```

**To move insight #4 from homepage to services only:**
```typescript
pageInsights = {
  homepage: [1, 5], // Remove 4 from homepage
  services: [4, 3, 6], // Keep 4 in services
  industries: [1, 2, 3],
};
```

**To show insight #8 on all pages:**
```typescript
pageInsights = {
  homepage: [1, 4, 5, 8], // Add 8 to homepage
  services: [4, 3, 6, 8], // Add 8 to services
  industries: [1, 2, 3, 8], // Add 8 to industries
};
```

### Where Insights Appear

- **Homepage (`/`)**: Shows insights with IDs in `pageInsights.homepage`
- **Services Page (`/services`)**: Shows insights with IDs in `pageInsights.services`
- **Industries Page (`/industries`)**: Shows insights with IDs in `pageInsights.industries`
- **Insights Page (`/insights`)**: Shows ALL insights (regardless of page assignment)
- **Individual Insight Page (`/insights/[id]`)**: Shows the full content for a specific insight

### How to Edit an Existing Insight

1. Open `/data/insights.ts`
2. Find the insight by its `id` or `title`
3. Update any field (title, excerpt, content, image, etc.)
4. Save the file

### How to Remove an Insight

1. Open `/data/insights.ts`
2. Find and delete the entire object for that insight
3. **Important**: Remove the insight ID from all page arrays in `pageInsights`
4. **Important**: Don't renumber the remaining IDs - leave them as they are to avoid breaking links

### How to Move an Insight Between Pages

1. Open `/data/insights.ts`
2. Find the `pageInsights` object
3. Update the arrays:
   - To remove from homepage: Remove the ID from `homepage` array
   - To add to services page: Add the ID to `services` array
   - To show on multiple pages: Add the ID to multiple arrays

## Best Practices

1. **Images**: Use high-quality images from Unsplash (1200px width minimum)
2. **Excerpts**: Keep them concise (1-2 sentences)
3. **Content**: Use proper HTML formatting with `<p>`, `<h3>`, `<ul>`, `<li>`, and `<strong>` tags
4. **Page Assignment**: Use the `pageInsights` object to control where insights appear
5. **Categories**: Use consistent category names that match your industries (Healthcare, Financial Services, Energy & Utilities, Manufacturing, Technology, Retail)
6. **Read Time**: Be honest about the estimated read time
7. **Dates**: Use format "MMM DD, YYYY" (e.g., "Dec 15, 2024")

## Example Workflows

### To add a new insight and show it on homepage:

```typescript
// 1. Add the insight to the insights array:
{
  id: 13,
  category: 'Technology',
  title: 'Cybersecurity Best Practices for 2025',
  excerpt: 'Essential strategies to protect your organization from emerging cyber threats.',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
  readTime: '7 min read',
  date: 'Dec 22, 2024',
  content: `<p>As cyber threats evolve...</p>`
}

// 2. Add it to the homepage in pageInsights:
export const pageInsights = {
  homepage: [1, 4, 5, 13], // Add 13 to homepage
  services: [4, 3, 6],
  industries: [1, 2, 3],
};
```

### To move an insight from homepage to services page only:

```typescript
// Update the pageInsights object:
export const pageInsights = {
  homepage: [1, 5], // Remove 4 from homepage
  services: [4, 3, 6], // Keep 4 in services
  industries: [1, 2, 3],
};
```

### To show an insight on all pages:

```typescript
// Add the ID to all page arrays:
export const pageInsights = {
  homepage: [1, 4, 5, 8], // Add 8 to homepage
  services: [4, 3, 6, 8], // Add 8 to services
  industries: [1, 2, 3, 8], // Add 8 to industries
};
```

## Questions?

This centralized system ensures:
- ✅ **Consistency** across all pages
- ✅ **Easy content management** from one location
- ✅ **No duplicate data** - single source of truth
- ✅ **Simple page assignment** - just add/remove insight IDs from arrays
- ✅ **Scalable** - easy to add new pages or insights
- ✅ **Clear and intuitive** - no complex configuration needed

