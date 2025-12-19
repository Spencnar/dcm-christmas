# 🎄 DCM Christmas - 3D Experience

A beautiful Christmas-themed Next.js application featuring interactive 3D models powered by Three.js and React Three Fiber.

## Features

- ✨ Interactive 3D scene with customizable models
- ❄️ Animated snowfall effect
- 🎨 Christmas-themed color palette and styling
- 🖱️ Mouse-controlled camera rotation
- 📱 Responsive design
- 🎭 Placeholder models (Christmas tree and snowman) ready to be replaced

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Your Own 3D Models

The project comes with placeholder models (a Christmas tree and a snowman). Here's how to replace them with your own models:

### Step 1: Prepare Your Models

1. Export your 3D models in `.glb` or `.gltf` format
2. Create a `public/models` directory in the project root
3. Place your model files in this directory (e.g., `model1.glb`, `model2.glb`)

### Step 2: Update the Model Components

#### For Model 1 (components/Model1.tsx):

Replace the placeholder code with:

```typescript
import { useGLTF } from '@react-three/drei'

export default function Model1({ position = [0, 0, 0] }: Model1Props) {
  const { scene } = useGLTF('/models/your-model-1.glb')
  
  return (
    <primitive 
      object={scene} 
      position={position} 
      scale={1} // Adjust scale as needed
    />
  )
}
```

#### For Model 2 (components/Model2.tsx):

Replace the placeholder code with:

```typescript
import { useGLTF } from '@react-three/drei'

export default function Model2({ position = [0, 0, 0] }: Model2Props) {
  const { scene } = useGLTF('/models/your-model-2.glb')
  
  return (
    <primitive 
      object={scene} 
      position={position} 
      scale={1} // Adjust scale as needed
    />
  )
}
```

### Step 3: Adjust Positioning

In `components/Scene3D.tsx`, you can adjust the position of each model:

```typescript
<Model1 position={[-2.5, 0, 0]} /> {/* Left side */}
<Model2 position={[2.5, 0, 0]} />  {/* Right side */}
```

## Customization

### Colors

The Christmas color theme is defined in `tailwind.config.ts`:

```typescript
colors: {
  christmas: {
    red: '#C41E3A',
    green: '#165B33',
    gold: '#FFD700',
    white: '#FFFAFA',
    darkGreen: '#0F4229',
  },
}
```

### Lighting

Adjust lighting in `components/Scene3D.tsx` to match your models:

```typescript
<ambientLight intensity={0.5} />
<directionalLight position={[10, 10, 5]} intensity={1} />
<pointLight position={[-10, 10, -10]} intensity={0.5} color="#FFD700" />
```

### Camera Settings

Modify camera controls in `components/Scene3D.tsx`:

```typescript
<OrbitControls
  enablePan={false}
  enableZoom={true}
  minDistance={5}
  maxDistance={15}
  minPolarAngle={Math.PI / 4}
  maxPolarAngle={Math.PI / 2}
/>
```

## Project Structure

```
dcm-christmas/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Scene3D.tsx      # Main 3D scene
│   ├── Model1.tsx       # First 3D model
│   ├── Model2.tsx       # Second 3D model
│   ├── LoadingSpinner.tsx
│   └── Snowfall.tsx     # Snowfall effect
├── public/
│   └── models/          # Place your .glb/.gltf files here
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Technologies Used

- **Next.js 14** - React framework
- **React Three Fiber** - React renderer for Three.js
- **Three.js** - 3D graphics library
- **@react-three/drei** - Useful helpers for R3F
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety

## Building for Production

```bash
npm run build
npm start
```

## Tips for 3D Models

1. Keep models optimized (under 5MB each)
2. Use compressed textures when possible
3. Test different scale values to ensure models fit well in the scene
4. Consider adding animations using `useFrame` hook
5. Use Draco compression for smaller file sizes

## Troubleshooting

### Models not loading
- Ensure your model files are in the `public/models/` directory
- Check that file paths are correct (case-sensitive)
- Verify models are in `.glb` or `.gltf` format

### Performance issues
- Reduce polygon count in your 3D models
- Optimize textures (use smaller resolutions)
- Reduce the number of lights in the scene

## License

MIT

## Credits

Created with ❤️ for the Christmas season

