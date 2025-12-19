# 3D Models Directory

Place your 3D model files here!

## Supported Formats

- `.glb` (recommended - binary format, smaller file size)
- `.gltf` (JSON format with separate files)

## Tips for Best Results

1. **Optimize your models** before exporting:
   - Keep polygon count reasonable (under 100k triangles)
   - Use texture compression
   - Remove unnecessary details

2. **Naming convention**:
   - Use descriptive names: `christmas-tree.glb`, `santa.glb`
   - Avoid spaces in filenames (use dashes or underscores)

3. **Testing your models**:
   - After adding a model, update the corresponding component in `/components/`
   - Test different scale values to ensure proper sizing
   - Adjust positions if needed in `Scene3D.tsx`

## Example File Structure

```
public/models/
├── christmas-tree.glb
├── snowman.glb
├── santa.glb
└── gifts.glb
```

## Free 3D Model Resources

If you need Christmas-themed models:
- [Sketchfab](https://sketchfab.com/search?q=christmas&type=models)
- [Poly Haven](https://polyhaven.com/)
- [CGTrader](https://www.cgtrader.com/)

Remember to check licensing requirements before using models!

