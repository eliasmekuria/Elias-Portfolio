# Self-Hosted Spline Integration Guide

## What You'll Need from Spline Download
When you export/download from Spline, you should receive:
1. `scene.splinecode` - Your 3D scene file
2. `spline-runtime.js` - The Spline runtime library
3. Any texture/asset files your scene uses

## Folder Structure
```
your-portfolio/
├── index.html
├── style.css
├── spline-runtime.js          (from Spline export)
├── scene.splinecode            (from Spline export)
├── font/
│   └── RaptorText-Black.ttf
└── work.html                   (your portfolio page)
```

## Setup Steps

### 1. Place Your Spline Files
- Put `spline-runtime.js` in the root directory (same level as index.html)
- Put `scene.splinecode` in the root directory
- If you have texture files, keep them in the same relative path as exported

### 2. Update the Script Path (if needed)
In `index.html`, the script already references:
```javascript
import { Application } from './spline-runtime.js';
spline.load('./scene.splinecode')
```

If your files are in a different location, update these paths accordingly.

### 3. Make Enter Key Interactive in Spline
In Spline Editor:
1. Select your Enter key object
2. Go to Events panel
3. Add a "Mouse Down" or "Mouse Click" event
4. Set the event to trigger a URL: `work.html`

OR handle it in code (see below).

### 4. Alternative: Handle Events in JavaScript
If you want to handle the click in your code instead:

```javascript
spline.load('./scene.splinecode')
    .then(() => {
        console.log('Spline scene loaded');
        
        // Listen for mouse events
        spline.addEventListener('mouseDown', (e) => {
            console.log('Clicked on:', e.target.name);
            
            // If the clicked object is named "EnterKey" in Spline
            if (e.target.name === 'EnterKey') {
                window.location.href = 'work.html';
            }
        });
    });
```

## Testing Locally

### Option 1: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

### Option 2: Python Simple Server
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 3: Node.js http-server
```bash
npx http-server
```

**Important:** You MUST use a local server - opening the HTML file directly (file://) won't work due to CORS restrictions with module imports.

## Common Issues

### Issue: "Failed to load module script"
**Solution:** Make sure you're using a local server, not opening the file directly.

### Issue: Scene doesn't load
**Solution:** 
- Check browser console for errors
- Verify file paths are correct
- Ensure `spline-runtime.js` and `scene.splinecode` are in the correct location

### Issue: Can't click objects in scene
**Solution:**
- Make sure objects are set as "Interactive" in Spline Editor
- Name your objects in Spline so you can reference them in code
- Check that events are properly set up in Spline or in your JavaScript

## Deployment
Once working locally, you can deploy to:
- **Netlify** (drag & drop your folder)
- **Vercel** (connect your GitHub repo)
- **GitHub Pages** (free hosting for static sites)
- Any static hosting service

## Next Steps
1. Create your `work.html` portfolio page
2. Test the Enter key interaction
3. Add any additional interactivity
4. Deploy to your hosting platform
