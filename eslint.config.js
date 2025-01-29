import { sheriff, tseslint  } from 'eslint-config-sheriff';

const sheriffOptions = {
  "react": true,
  "lodash": false,
  "remeda": false,
  "next": false,
  "astro": false,
  "playwright": false,
  "jest": false,
  "vitest": true
};

export default tseslint.config(sheriff(sheriffOptions),
  {
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": [
        0,
      ],
      "@typescript-eslint/naming-convention": [
        0,
      ],
      "fsecond/prefer-destructured-optionals": [
        0,
      ],
      "@typescript-eslint/no-extraneous-class": [
        0,
      ],
      "no-restricted-syntax": [
        0,
      ],
      "sonarjs/no-duplicate-string": [0],
      "arrow-return-style/arrow-return-style": [0],
    },
  }
);
