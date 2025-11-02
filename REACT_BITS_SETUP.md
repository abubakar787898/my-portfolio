# React Bits MCP Integration

This project uses React Bits MCP server for component management.

## Setup

The `components.json` file is already configured with the React Bits registry:

```json
{
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
```

## Using React Bits Components

You can use the MCP server to browse and install components from React Bits registry:

### Example Commands:

1. **Browse available components:**
   - "Show me all available backgrounds from React Bits registry"

2. **Add components:**
   - "Add the Dither background from React Bits to the page, make it purple"
   - "Add a new section which fades in on scroll using FadeContent from React Bits"

3. **Install components:**
   - Components can be installed via the MCP server using natural language commands

## Manual Installation

To manually install React Bits components:

```bash
npx shadcn@latest add [component-name] --registry @react-bits
```

## Available Component Categories

- Backgrounds
- Animations
- Layouts
- Navigation
- Forms
- And more...

Check the React Bits website for the full catalog: https://reactbits.dev

