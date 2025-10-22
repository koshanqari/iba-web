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
  featured: false, // Set to true to show on homepage
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

### How to Feature an Insight on the Homepage

1. Open `/data/insights.ts`
2. Find the insight you want to feature
3. Set `featured: true` in that insight object
4. **Note**: Only the first 3 featured insights will appear on the homepage

### Where Insights Appear

- **Homepage (`/`)**: Shows up to 3 insights where `featured: true`
- **Insights Page (`/insights`)**: Shows all insights in the array
- **Individual Insight Page (`/insights/[id]`)**: Shows the full content for a specific insight

### How to Edit an Existing Insight

1. Open `/data/insights.ts`
2. Find the insight by its `id` or `title`
3. Update any field (title, excerpt, content, image, etc.)
4. Save the file

### How to Remove an Insight

1. Open `/data/insights.ts`
2. Find and delete the entire object for that insight
3. **Important**: Don't renumber the remaining IDs - leave them as they are to avoid breaking links

## Best Practices

1. **Images**: Use high-quality images from Unsplash (1200px width minimum)
2. **Excerpts**: Keep them concise (1-2 sentences)
3. **Content**: Use proper HTML formatting with `<p>`, `<h3>`, `<ul>`, `<li>`, and `<strong>` tags
4. **Featured Insights**: Only feature 3-6 insights maximum to keep the homepage manageable
5. **Categories**: Use consistent category names that match your industries (Healthcare, Financial Services, Energy & Utilities, Manufacturing, Technology, Retail)
6. **Read Time**: Be honest about the estimated read time
7. **Dates**: Use format "MMM DD, YYYY" (e.g., "Dec 15, 2024")

## Example Workflow

### To add a new insight and feature it on the homepage:

```typescript
// In /data/insights.ts, add to the insights array:
{
  id: 13,
  category: 'Technology',
  title: 'Cybersecurity Best Practices for 2025',
  excerpt: 'Essential strategies to protect your organization from emerging cyber threats.',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80',
  readTime: '7 min read',
  date: 'Dec 22, 2024',
  featured: true, // This will show it on the homepage
  content: `
    <p>As cyber threats evolve, organizations must...</p>
    <!-- Rest of your content -->
  `
}
```

### To remove an insight from the homepage (but keep it on /insights):

```typescript
// Just change featured from true to false:
{
  id: 7,
  category: 'Healthcare',
  title: 'Telemedicine Best Practices',
  // ... other fields
  featured: false, // Changed from true to false
  // ... rest of content
}
```

## Questions?

This centralized system ensures:
- ✅ Consistency across all pages
- ✅ Easy content management
- ✅ No duplicate data
- ✅ Simple control over what appears on the homepage

