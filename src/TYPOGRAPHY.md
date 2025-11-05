# Typography System

## Font Families

### Headings - PP Right Gothic Wide
- **Usage**: All headings (h1, h2, h3, h4), titles, navigation items, numbers, buttons
- **Class**: `font-heading` (or default)
- **Letter Spacing**: 0.02em (wide, impactful)
- **Character**: Modern, cinematic, bold presence
- **Import**: CDN Fonts (PP Right Gothic)

### Body Text - Inter
- **Usage**: Paragraphs, descriptions, labels, input text, subtext
- **Class**: `font-body`
- **Letter Spacing**: normal (optimized readability)
- **Character**: Clean, readable, professional
- **Weights**: 300, 400, 500, 600, 700
- **Import**: Google Fonts

## Application Examples

### Headings
```tsx
<h1 className="font-heading">The Board</h1>
<h2 className="font-heading">Featured Work</h2>
<h3 className="font-heading">The Beginning</h3>
```

### Body Text
```tsx
<p className="font-body">
  Every game tells a story. Each piece, a chapter.
</p>

<label className="font-body">Email Address</label>

<div className="font-body text-[#B3B3B3]">
  Subtitle or description text
</div>
```

### Numbers (Statistics, Dates)
```tsx
<div className="text-5xl font-heading">2015</div>
<p className="font-body">First Creation</p>
```

## CSS Variables

```css
--font-family-base: 'PP Right Gothic Wide', 'PP Right Gothic', ...
--font-family-body: 'Inter', -apple-system, ...
```

## Automatic Application

The typography system automatically applies fonts through CSS:

- **Headings (h1-h4)**: PP Right Gothic Wide with 0.02em spacing
- **Paragraphs (p)**: Inter with normal spacing
- **Labels**: Inter with normal spacing
- **Inputs**: Inter with normal spacing
- **Buttons**: PP Right Gothic Wide (for strong CTAs)

## Manual Override

Use utility classes when needed:
- `.font-heading` - Forces PP Right Gothic Wide
- `.font-body` - Forces Inter

## Best Practices

1. **Hierarchy**: Use PP Right Gothic Wide for all navigational and headline elements
2. **Readability**: Use Inter for all reading content (paragraphs, descriptions)
3. **Consistency**: Don't mix fonts within the same text block
4. **Numbers**: Use heading font for impact numbers/stats, body font for inline numbers
5. **Buttons**: Primary CTAs use heading font, secondary text uses body font
