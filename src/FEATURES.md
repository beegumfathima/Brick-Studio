# Sahal's Chess Portfolio - 3D Features

## Photorealistic 3D Chess Pieces

This portfolio features stunning, **photorealistic black marble chess pieces** with cinematic lighting and advanced visual effects:

### Visual Features

1. **Real 3D Photography**
   - Professional Unsplash photography of actual chess pieces
   - Black marble material with realistic textures
   - High-resolution renders for crisp detail
   - Natural shadows and highlights baked in

2. **Cinematic Lighting Effects**
   - **Ambient Glow**: Purple/blue halo for black pieces, bright white for white pieces
   - **Rim Lighting**: Edge highlights from 25% top-left
   - **Volumetric Rays**: Rotating conic gradient light beams
   - **Floor Reflections**: Elliptical shadow projections
   - **Glossy Overlay**: Linear gradient shine effect

3. **Interactive Mouse Tracking**
   - Pieces tilt on X and Y axes based on cursor position
   - Real-time 3D rotation (rotateX/Y/Z transforms)
   - Smooth spring-back to center when mouse leaves
   - Perspective depth of 1200px

4. **Advanced Animations**
   - **Continuous Y-axis rotation**: 360° slow spin
   - **Floating motion**: Gentle 15px up/down movement
   - **Pulsing effects**: Glow, scale, and shadow breathing
   - **Particle sparkles**: 8 radiating light particles
   - **Light ray rotation**: 20-second full rotation

5. **Material Variants**
   - **Black Marble Pieces**: Purple (#B197FC) and blue (#4444FF) glow
   - **White Pieces**: Bright white with cyan/blue tint glow
   - **Smart filtering**: Brightness, contrast, saturation adjustments
   - **Drop shadows**: Color-matched dramatic shadows

### Technical Implementation

**Transform Stack:**
```css
transform: 
  rotateY(rotation) 
  rotateX(mouseY) 
  rotateZ(mouseX)
  translateZ(depth)
```

**Lighting Simulation:**
- Multiple text-shadow layers for depth
- CSS filters (brightness, contrast, drop-shadow)
- Radial gradients for ambient lighting
- Perspective transforms for 3D space

**Performance:**
- Hardware-accelerated transforms
- Optimized animation loops
- Conditional rendering based on visibility
- Smooth 60fps animations

### Usage Examples

```tsx
// Static 3D piece
<ChessPiece3D piece="king" size="large" animate={false} />

// Animated black piece (default)
<ChessPiece3D piece="queen" size="medium" animate={true} />

// White opponent piece
<ChessPiece3D piece="knight" size="small" color="white" animate={true} />
```

### Available Pieces

All pieces are photorealistic black marble chess pieces from professional photography:

- **King** - The Vision (main hero piece)
- **Queen** - Passion & Power (regal and powerful)
- **Knight** - Creative Moves (unique L-shaped strategy)
- **Rook** - Work That Stands (castle tower strength)
- **Bishop** - Career & Growth (diagonal movement)
- **Pawn** - The First Move (foundation piece)

### Size Options
- `small`: 8xl text size - Navigation previews
- `medium`: 12rem - Section headers
- `large`: 20rem - Hero displays

## Typography

### Dual Font System

**Headings - PP Right Gothic Wide**
- All titles, navigation, and emphasis text
- Wide character spacing (0.02em)
- Modern, impactful, cinematic aesthetic
- Applied via `.font-heading` class or automatic on h1-h4

**Body - Inter**
- All paragraphs, descriptions, and subtext
- Normal letter spacing for readability
- Clean, professional, highly legible
- Weights: 300, 400, 500, 600, 700
- Applied via `.font-body` class or automatic on p, label, input

This creates a strong visual hierarchy: bold, wide headings paired with clean, readable body text.

## Color System

**Primary Colors:**
- Chess Dark: #0E0E0E (Background)
- Chess Accent: #B197FC (Lavender Purple)
- Chess Secondary: #4444FF (Royal Blue)
- Text Primary: #FFFFFF
- Text Secondary: #B3B3B3

**Lighting:**
- Ambient glows use radial gradients
- Shadows use rgba with low opacity
- Multiple light sources for realism

## Page Structure

All pages follow the consistent chess theme:
1. **Board** - Homepage with all pieces
2. **Pawn** - The First Move (beginnings)
3. **Rook** - Work That Stands (projects)
4. **Bishop** - Career & Growth (timeline)
5. **Knight** - Creative Moves (unique work)
6. **Queen** - Passion & Power (achievements)
7. **King** - The Vision (future goals)
8. **Endgame** - Contact/conclusion

Each page features:
- Animated background with chess board grid
- Spotlight effects
- 3D chess piece hero
- Smooth page transitions
- Interactive hover states
