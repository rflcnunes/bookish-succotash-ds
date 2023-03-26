# Octopus Design System 🐙

The Octopus Design System is a Vue.js component library that follows best practices in user interface design to provide a consistent and high-quality visual experience. The library is built based on atomic components, which can be combined and reused to create flexible and scalable interfaces.

## Installation

```
npm i octopus-design-system
```

<br>

## Usage
After installation, you can import Octopus Design System components into your Vue.js project as follows:

Each component is imported from the "components" folder, which includes sub-folders for atoms, molecules, and organisms. Therefore, each component should be imported from its appropriate path to ensure proper usage and functionality.

```
<template>
  <AmButton label="Click me!" />
</template>

<script>
import { AmButton } from "octopus-design-system/src/components/atoms/AmButton/AmButton.vue";

export default {
  name: "MyComponent",
  components: {
    AmButton,
  },
};
</script>
```

<br>

## Components
The Octopus Design System library includes a range of Vue.js components that can be used to create consistent and high-quality user interfaces. Some examples of components available in the library include:

<br>

``AmButton``: A button with options for customizing size, color, and icon.
``AmIcon``: An icon with options for customizing size, color, and name.
``AmTypography``: Text with options for customizing size, color, and variation.

<br>

## Contributing

If you would like to contribute to Octopus, please fork the repository and submit a pull request. You can also open an issue if you have any questions or suggestions.
