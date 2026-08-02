# Codebase Consolidada do ToDeAcordo

Este documento contém todo o código-fonte relevante do ToDeAcordo para importação no NotebookLM, Gemini 1.5 Pro ou ChatGPT.


## Arquivo: src\todeacordo\.oxlintrc.json
```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}

```

---

## Arquivo: src\todeacordo\body.json
```json
{
  "meeting_id": "test", 
  "transcript_segments": [
    {
      "speaker": "A", 
      "timestamp": "2023-01-01T00:00:00Z", 
      "text": "Vamos fechar o acordo."
    }
  ]
}

```

---

## Arquivo: src\todeacordo\body2.json
```json
{
  "meeting_id": "teste-producao",
  "source_platform": "manual",
  "participants": ["Alexandre", "Cliente"],
  "transcript_segments": [
    {
      "speaker": "Alexandre",
      "text": "Nós vamos fechar o desenvolvimento do MVP ToDeAcordo por mil reais."
    },
    {
      "speaker": "Cliente",
      "text": "Confirmo, eu pago os mil reais na sexta-feira."
    },
    {
      "speaker": "Alexandre",
      "text": "A entrega inicial fica para segunda-feira, mas o escopo final ainda precisa ser confirmado."
    }
  ]
}

```

---

## Arquivo: src\todeacordo\dashboard.html
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ToDeAcordo Dashboard</title>
    <!-- Tailwind via CDN para injetar rápido os estilos se não forem mapeados pelo content script, mas o Vite compila o CSS base. -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
      body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: #f8fafc;
      }
    </style>
  </head>
  <body>
    <div id="dashboard-root"></div>
    <script type="module" src="/src/dashboard/index.tsx"></script>
  </body>
</html>

```

---

## Arquivo: src\todeacordo\index.html
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="QYGAWpleqJFRtRb9dtqxNqH7D7aqYxCpp64lUYR08dU" />
    <title>ToDeAcordo Dashboard</title>
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
      body {
        margin: 0;
        font-family: 'Inter', sans-serif;
        background-color: #f8fafc;
      }
    </style>
  </head>
  <body>
    <div id="dashboard-root"></div>
    <script type="module" src="/src/dashboard/index.tsx"></script>
  </body>
</html>

```

---

## Arquivo: src\todeacordo\package-lock.json
```json
{
  "name": "todeacordo",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "todeacordo",
      "version": "0.0.0",
      "dependencies": {
        "@supabase/supabase-js": "^2.110.0",
        "canvas": "^3.2.3",
        "canvas-confetti": "^1.9.4",
        "html2canvas": "^1.4.1",
        "idb": "^8.0.3",
        "jspdf": "^4.2.1",
        "jspdf-autotable": "^5.0.8",
        "openai": "^6.45.0",
        "react": "^19.2.7",
        "react-dom": "^19.2.7",
        "react-signature-canvas": "^1.1.0-alpha.2",
        "stripe": "^22.3.0"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "^4.3.2",
        "@testing-library/jest-dom": "^6.9.1",
        "@testing-library/react": "^16.3.2",
        "@types/canvas-confetti": "^1.9.0",
        "@types/chrome": "^0.2.2",
        "@types/node": "^24.13.2",
        "@types/react": "^19.2.17",
        "@types/react-dom": "^19.2.3",
        "@types/react-signature-canvas": "^1.0.7",
        "@vercel/node": "^5.8.22",
        "@vitejs/plugin-react": "^6.0.3",
        "autoprefixer": "^10.5.2",
        "concurrently": "^10.0.3",
        "jsdom": "^29.1.1",
        "oxlint": "^1.71.0",
        "postcss": "^8.5.16",
        "tailwindcss": "^4.3.2",
        "typescript": "~6.0.2",
        "vite": "^8.1.1",
        "vitest": "^4.1.9"
      }
    },
    "node_modules/@adobe/css-tools": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/@adobe/css-tools/-/css-tools-4.5.0.tgz",
      "integrity": "sha512-6OzddxPio9UiWTCemp4N8cYLV2ZN1ncRnV1cVGtve7dhPOtRkleRyx32GQCYSwDYgaHU3USMm84tNsvKzRCa1Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@asamuzakjp/css-color": {
      "version": "5.1.11",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/css-color/-/css-color-5.1.11.tgz",
      "integrity": "sha512-KVw6qIiCTUQhByfTd78h2yD1/00waTmm9uy/R7Ck/ctUyAPj+AEDLkQIdJW0T8+qGgj3j5bpNKK7Q3G+LedJWg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/generational-cache": "^1.0.1",
        "@csstools/css-calc": "^3.2.0",
        "@csstools/css-color-parser": "^4.1.0",
        "@csstools/css-parser-algorithms": "^4.0.0",
        "@csstools/css-tokenizer": "^4.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/@asamuzakjp/dom-selector": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/dom-selector/-/dom-selector-7.1.1.tgz",
      "integrity": "sha512-67RZDnYRc8H/8MLDgQCDE//zoqVFwajkepHZgmXrbwybzXOEwOWGPYGmALYl9J2DOLfFPPs6kKCqmbzV895hTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/generational-cache": "^1.0.1",
        "@asamuzakjp/nwsapi": "^2.3.9",
        "bidi-js": "^1.0.3",
        "css-tree": "^3.2.1",
        "is-potential-custom-element-name": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/@asamuzakjp/generational-cache": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/generational-cache/-/generational-cache-1.0.1.tgz",
      "integrity": "sha512-wajfB8KqzMCN2KGNFdLkReeHncd0AslUSrvHVvvYWuU8ghncRJoA50kT3zP9MVL0+9g4/67H+cdvBskj9THPzg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/@asamuzakjp/nwsapi": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@asamuzakjp/nwsapi/-/nwsapi-2.3.9.tgz",
      "integrity": "sha512-n8GuYSrI9bF7FFZ/SjhwevlHc8xaVlb/7HmHelnc/PZXBD2ZR49NnN9sMMuDdEGPeeRQ5d0hqlSlEpgCX3Wl0Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.7.tgz",
      "integrity": "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/runtime": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.29.7.tgz",
      "integrity": "sha512-Nq8OhGWiZIZGV6hLHoyAKLLcJihP/xFeBMGJoUrxTX2psI8dCifzLhZISFb+VWS3wFMRDmCGw5R+dOySCqPLhw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@bramus/specificity": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/@bramus/specificity/-/specificity-2.4.2.tgz",
      "integrity": "sha512-ctxtJ/eA+t+6q2++vj5j7FYX3nRu311q1wfYH3xjlLOsczhlhxAg2FWNUXhpGvAw3BWo1xBcvOV6/YLc2r5FJw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "css-tree": "^3.0.0"
      },
      "bin": {
        "specificity": "bin/cli.js"
      }
    },
    "node_modules/@bytecodealliance/preview2-shim": {
      "version": "0.17.6",
      "resolved": "https://registry.npmjs.org/@bytecodealliance/preview2-shim/-/preview2-shim-0.17.6.tgz",
      "integrity": "sha512-n3cM88gTen5980UOBAD6xDcNNL3ocTK8keab21bpx1ONdA+ARj7uD1qoFxOWCyKlkpSi195FH+GeAut7Oc6zZw==",
      "dev": true,
      "license": "(Apache-2.0 WITH LLVM-exception)"
    },
    "node_modules/@csstools/color-helpers": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/@csstools/color-helpers/-/color-helpers-6.1.0.tgz",
      "integrity": "sha512-064IFJdjTfUqnjpCVpMOdbr8FLQBhinbZj6yRv2An2E41O/pLEXqfFRWqGq/SxlE5PEUYTlvWsG2r8MswAVvkg==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT-0",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/@csstools/css-calc": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/@csstools/css-calc/-/css-calc-3.2.1.tgz",
      "integrity": "sha512-DtdHlgXh5ZkA43cwBcAm+huzgJiwx3ZTWVjBs94kwz2xKqSimDA3lBgCjphYgwgVUMWatSM0pDd8TILB1yrVVg==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@csstools/css-parser-algorithms": "^4.0.0",
        "@csstools/css-tokenizer": "^4.0.0"
      }
    },
    "node_modules/@csstools/css-color-parser": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/@csstools/css-color-parser/-/css-color-parser-4.1.9.tgz",
      "integrity": "sha512-paQcIaOO53Rk5+YrBaBjm/SgrV4INImjo2BT1DtQRYr+XeTRbeAYlS+jxXp9drqvKmtFnWRJKIalDLhZZDu42A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "@csstools/color-helpers": "^6.1.0",
        "@csstools/css-calc": "^3.2.1"
      },
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@csstools/css-parser-algorithms": "^4.0.0",
        "@csstools/css-tokenizer": "^4.0.0"
      }
    },
    "node_modules/@csstools/css-parser-algorithms": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@csstools/css-parser-algorithms/-/css-parser-algorithms-4.0.0.tgz",
      "integrity": "sha512-+B87qS7fIG3L5h3qwJ/IFbjoVoOe/bpOdh9hAjXbvx0o8ImEmUsGXN0inFOnk2ChCFgqkkGFQ+TpM5rbhkKe4w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      },
      "peerDependencies": {
        "@csstools/css-tokenizer": "^4.0.0"
      }
    },
    "node_modules/@csstools/css-syntax-patches-for-csstree": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@csstools/css-syntax-patches-for-csstree/-/css-syntax-patches-for-csstree-1.1.6.tgz",
      "integrity": "sha512-TcJCWFbXLPpJYq6z7bfOyjWYJDiDg2/I4gyUC9pqPNqHFRIey0EB0q0L5cSnQDfWJg8Jd6VadakxdIez/3zkqQ==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT-0",
      "peerDependencies": {
        "css-tree": "^3.2.1"
      },
      "peerDependenciesMeta": {
        "css-tree": {
          "optional": true
        }
      }
    },
    "node_modules/@csstools/css-tokenizer": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/@csstools/css-tokenizer/-/css-tokenizer-4.0.0.tgz",
      "integrity": "sha512-QxULHAm7cNu72w97JUNCBFODFaXpbDg+dP8b/oWFAZ2MTRppA3U00Y2L1HqaS4J6yBqxwa/Y3nMBaxVKbB/NsA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/csstools"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/csstools"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=20.19.0"
      }
    },
    "node_modules/@edge-runtime/format": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/@edge-runtime/format/-/format-2.2.1.tgz",
      "integrity": "sha512-JQTRVuiusQLNNLe2W9tnzBlV/GvSVcozLl4XZHk5swnRZ/v6jp8TqR8P7sqmJsQqblDZ3EztcWmLDbhRje/+8g==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@edge-runtime/node-utils": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@edge-runtime/node-utils/-/node-utils-2.3.0.tgz",
      "integrity": "sha512-uUtx8BFoO1hNxtHjp3eqVPC/mWImGb2exOfGjMLUoipuWgjej+f4o/VP4bUI8U40gu7Teogd5VTeZUkGvJSPOQ==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@edge-runtime/ponyfill": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/@edge-runtime/ponyfill/-/ponyfill-2.4.2.tgz",
      "integrity": "sha512-oN17GjFr69chu6sDLvXxdhg0Qe8EZviGSuqzR9qOiKh4MhFYGdBBcqRNzdmYeAdeRzOW2mM9yil4RftUQ7sUOA==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@edge-runtime/primitives": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/@edge-runtime/primitives/-/primitives-4.1.0.tgz",
      "integrity": "sha512-Vw0lbJ2lvRUqc7/soqygUX216Xb8T3WBZ987oywz6aJqRxcwSVWwr9e+Nqo2m9bxobA9mdbWNNoRY6S9eko1EQ==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@edge-runtime/vm": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/@edge-runtime/vm/-/vm-3.2.0.tgz",
      "integrity": "sha512-0dEVyRLM/lG4gp1R/Ik5bfPl/1wX00xFwd5KcNH602tzBa09oF7pbTKETEhR1GjZ75K6OJnYFu8II2dyMhONMw==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "@edge-runtime/primitives": "4.1.0"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.11.1.tgz",
      "integrity": "sha512-RSvbQmHzdKzNsLYa/wHrbc3KN4sYLKAdPZxqiM2HATqv/SBk2/ENSHpvXGaLOMcsAyz0poEGqkmmKYG3OWiJEQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.2",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.1.tgz",
      "integrity": "sha512-vgj7R3y3Wgx24IQaGPA/R6YFXLHVMOZ0uVEyIQPaWs+rd1AzfEMXlAC22FYwO1XkKR6NPsq7mUandH8oIRdZFw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.2.tgz",
      "integrity": "sha512-c95qOXkHdydNKhscBTebqEC1CVAZpyqOfVfBzQ1qgzyl3gfeldUjIggDbIZgDKsHLgnsM+igH7TJ/eAasaVuMA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.0.tgz",
      "integrity": "sha512-KuZrd2hRjz01y5JK9mEBSD3Vj3mbCvemhT466rSuJYeE/hjuBrHfjjcjMdTm/sz7au+++sdbJZJmuBwQLuw68A==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.0.tgz",
      "integrity": "sha512-j67aezrPNYWJEOHUNLPj9maeJte7uSMM6gMoxfPC9hOg8N02JuQi/T7ewumf4tNvJadFkvLZMlAq73b9uwdMyQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.0.tgz",
      "integrity": "sha512-CC3vt4+1xZrs97/PKDkl0yN7w8edvU2vZvAFGD16n9F0Cvniy5qvzRXjfO1l94efczkkQE6g1x0i73Qf5uthOQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.0.tgz",
      "integrity": "sha512-wurMkF1nmQajBO1+0CJmcN17U4BP6GqNSROP8t0X/Jiw2ltYGLHpEksp9MpoBqkrFR3kv2/te6Sha26k3+yZ9Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.0.tgz",
      "integrity": "sha512-uJOQKYCcHhg07DL7i8MzjvS2LaP7W7Pn/7uA0B5S1EnqAirJtbyw4yC5jQ5qcFjHK9l6o/MX9QisBg12kNkdHg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.0.tgz",
      "integrity": "sha512-8mG6arH3yB/4ZXiEnXof5MK72dE6zM9cDvUcPtxhUZsDjESl9JipZYW60C3JGreKCEP+p8P/72r69m4AZGJd5g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.0.tgz",
      "integrity": "sha512-9FHtyO988CwNMMOE3YIeci+UV+x5Zy8fI2qHNpsEtSF83YPBmE8UWmfYAQg6Ux7Gsmd4FejZqnEUZCMGaNQHQw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.0.tgz",
      "integrity": "sha512-zCMeMXI4HS/tXvJz8vWGexpZj2YVtRAihHLk1imZj4efx1BQzN76YFeKqlDr3bUWI26wHwLWPd3rwh6pe4EV7g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.0.tgz",
      "integrity": "sha512-t76XLQDpxgmq2cNXKTVEB7O7YMb42atj2Re2Haf45HkaUpjM2J0UuJZDuaGbPbamzZ7bawyGFUkodL+zcE+jvQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.0.tgz",
      "integrity": "sha512-AS18v0V+vZiLJyi/4LphvBE+OIX682Pu7ZYNsdUHyUKSoRwdnOsMf6FDekwoAFKej14WAkOef3zAORJgAtXnlQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.0.tgz",
      "integrity": "sha512-Mz1jxqm/kfgKkc/KLHC5qIujMvnnarD9ra1cEcrs7qshTUSksPihGrWHVG5+osAIQ68577Zpww7SGapmzSt4Nw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.0.tgz",
      "integrity": "sha512-QbEREjdJeIreIAbdG2hLU1yXm1uu+LTdzoq1KCo4G4pFOLlvIspBm36QrQOar9LFduavoWX2msNFAAAY9j4BDg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.0.tgz",
      "integrity": "sha512-sJz3zRNe4tO2wxvDpH/HYJilb6+2YJxo/ZNbVdtFiKDufzWq4JmKAiHy9iGoLjAV7r/W32VgaHGkk35cUXlNOg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.0.tgz",
      "integrity": "sha512-z9N10FBD0DCS2dmSABDBb5TLAyF1/ydVb+N4pi88T45efQ/w4ohr/F/QYCkxDPnkhkp6AIpIcQKQ8F0ANoA2JA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.0.tgz",
      "integrity": "sha512-pQdyAIZ0BWIC5GyvVFn5awDiO14TkT/19FTmFcPdDec94KJ1uZcmFs21Fo8auMXzD4Tt+diXu1LW1gHus9fhFQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.0.tgz",
      "integrity": "sha512-hPlRWR4eIDDEci953RI1BLZitgi5uqcsjKMxwYfmi4LcwyWo2IcRP+lThVnKjNtk90pLS8nKdroXYOqW+QQH+w==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.0.tgz",
      "integrity": "sha512-1hBWx4OUJE2cab++aVZ7pObD6s+DK4mPGpemtnAORBvb5l/g5xFGk0vc0PjSkrDs0XaXj9yyob3d14XqvnQ4gw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.0.tgz",
      "integrity": "sha512-6m0sfQfxfQfy1qRuecMkJlf1cIzTOgyaeXaiVaaki8/v+WB+U4hc6ik15ZW6TAllRlg/WuQXxWj1jx6C+dfy3w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.0.tgz",
      "integrity": "sha512-xbbOdfn06FtcJ9d0ShxxvSn2iUsGd/lgPIO2V3VZIPDbEaIj1/3nBBe1AwuEZKXVXkMmpr6LUAgMkLD/4D2PPA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.0.tgz",
      "integrity": "sha512-fWgqR8uNbCQ/GGv0yhzttj6sU/9Z5/Sv/VGU3F5OuXK6J6SlriONKrQ7tNlwBrJZXRYk5jUhuWvF7GYzGguBZQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.0.tgz",
      "integrity": "sha512-aCwlRdSNMNxkGGqQajMUza6uXzR/U0dIl1QmLjPtRbLOx3Gy3otfFu/VjATy4yQzo9yFDGTxYDo1FfAD9oRD2A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.0.tgz",
      "integrity": "sha512-nyvsBccxNAsNYz2jVFYwEGuRRomqZ149A39SHWk4hV0jWxKM0hjBPm3AmdxcbHiFLbBSwG6SbpIcUbXjgyECfA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.0.tgz",
      "integrity": "sha512-Q1KY1iJafM+UX6CFEL+F4HRTgygmEW568YMqDA5UV97AuZSm21b7SXIrRJDwXWPzr8MGr75fUZPV67FdtMHlHA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.0.tgz",
      "integrity": "sha512-W1eyGNi6d+8kOmZIwi/EDjrL9nxQIQ0MiGqe/AWc6+IaHloxHSGoeRgDRKHFISThLmsewZ5nHFvGFWdBYlgKPg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.0.tgz",
      "integrity": "sha512-30z1aKL9h22kQhilnYkORFYt+3wp7yZsHWus+wSKAJR8JtdfI76LJ4SBdMsCopTR3z/ORqVu5L1vtnHZWVj4cQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.0.tgz",
      "integrity": "sha512-aIitBcjQeyOhMTImhLZmtxfdOcuNRpwlPNmlFKPcHQYPhEssw75Cl1TSXJXpMkzaua9FUetx/4OQKq7eJul5Cg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@exodus/bytes": {
      "version": "1.15.1",
      "resolved": "https://registry.npmjs.org/@exodus/bytes/-/bytes-1.15.1.tgz",
      "integrity": "sha512-S6mL0yNB/Abt9Ei4tq8gDhcczc4S3+vQ4ra7vxnAf+YHC02srtqxKKZghx2Dq6p0e66THKwR6r8N6P95wEty7Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      },
      "peerDependencies": {
        "@noble/hashes": "^1.8.0 || ^2.0.0"
      },
      "peerDependenciesMeta": {
        "@noble/hashes": {
          "optional": true
        }
      }
    },
    "node_modules/@fastify/busboy": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/@fastify/busboy/-/busboy-2.1.1.tgz",
      "integrity": "sha512-vBZP4NlzfOlerQTnba4aqZoMhE/a9HY7HRqoOPaETQcSQuWEIyZMHGfVu6w9wGtGK5fED5qRs2DteVCjOH60sA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@isaacs/balanced-match": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@isaacs/balanced-match/-/balanced-match-4.0.1.tgz",
      "integrity": "sha512-yzMTt9lEb8Gv7zRioUilSglI0c0smZ9k5D65677DLWLtWJaXIS3CqcGyUFByYKlnUj6TkjLVs54fBl6+TiGQDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@isaacs/brace-expansion": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/@isaacs/brace-expansion/-/brace-expansion-5.0.1.tgz",
      "integrity": "sha512-WMz71T1JS624nWj2n2fnYAuPovhv7EUhk69R6i9dsVyzxt5eM3bjwvgk9L+APE1TRscGysAVMANkB0jh0LQZrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@isaacs/balanced-match": "^4.0.1"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@isaacs/fs-minipass": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@isaacs/fs-minipass/-/fs-minipass-4.0.1.tgz",
      "integrity": "sha512-wgm9Ehl2jpeqP3zw/7mo3kRHFp5MEDhqAdwy1fTGkHAwnkGOVsgpvQhL8B5n1qlb01jV3n/bI0ZfZp5lWA1k4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "minipass": "^7.0.4"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@mapbox/node-pre-gyp": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-2.0.3.tgz",
      "integrity": "sha512-uwPAhccfFJlsfCxMYTwOdVfOz3xqyj8xYL3zJj8f0pb30tLohnnFPhLuqp4/qoEz8sNxe4SESZedcBojRefIzg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "consola": "^3.2.3",
        "detect-libc": "^2.0.0",
        "https-proxy-agent": "^7.0.5",
        "node-fetch": "^2.6.7",
        "nopt": "^8.0.0",
        "semver": "^7.5.3",
        "tar": "^7.4.0"
      },
      "bin": {
        "node-pre-gyp": "bin/node-pre-gyp"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.6.tgz",
      "integrity": "sha512-ZLv/JdUfkvOy9eCnnBaGfiO+XimbjebAeO+MRQqD/B+FR1tnRN0tpKSJHRbE8sFfS6aqsXZ67TQjfwfsxULVbg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.3"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.138.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.138.0.tgz",
      "integrity": "sha512-1a7ZKmrRTCoN1XMZ4L0PyyqrMnrNlLyPuOkdSX2MZg7IiIGRUyurNhAm73ptDOraoBcIordsIGKNPKUzy3ZmfA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@oxlint/binding-android-arm-eabi": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm-eabi/-/binding-android-arm-eabi-1.72.0.tgz",
      "integrity": "sha512-zhCmvn+1Mj3UchAc/90i99S0t7jJUsHmFVSPg4UWrjO8b8eaSGwscgO6QAUtvHBstkjQwBttQNswEnAF1mIQdA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-android-arm64": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-android-arm64/-/binding-android-arm64-1.72.0.tgz",
      "integrity": "sha512-mtH+aY/ozv1eZoCUC2owjFAtyNBKHpJHygKeEu9zXXnQGW1Q2/qOpvx+I+Lf23+TvTz66F4iiXUbl2cGvoLPCQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-arm64": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-arm64/-/binding-darwin-arm64-1.72.0.tgz",
      "integrity": "sha512-EvnajNPDtfknB3ZieeOOyDTwJn9QXDiwfnF4ZDQqART6RG6hjY4WigQcZdGoK2dkB3e1vrmEzN9aYbQCUkh/gQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-darwin-x64": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-darwin-x64/-/binding-darwin-x64-1.72.0.tgz",
      "integrity": "sha512-ZkCdEa/G80A7vEHfeCDz/+L3m33DE73v32mDKhgOIgz8Uwf0DFcK7+uu6qC+7LEhmz5fpOe1osWKyjSNMydFIQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-freebsd-x64": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-freebsd-x64/-/binding-freebsd-x64-1.72.0.tgz",
      "integrity": "sha512-NroXv2vh+sxVY1uya/rM5pjhx1hm8BzlYpx9q67QP0Xhw5MH2bf5GJylpvLEC+781p1Xli/317EoV9AlGwViag==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-gnueabihf": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.72.0.tgz",
      "integrity": "sha512-0NDywYgfj279Ou/BcQuCYSj7NJwBfmWn5qc5uGO/Ny7fUWmXyIpvawqX/8acQlWG6IXelJsJhj+JAy6sjsKj0A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm-musleabihf": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm-musleabihf/-/binding-linux-arm-musleabihf-1.72.0.tgz",
      "integrity": "sha512-4vpXB06h65Ezsy4hRyrGjGrfa1SkVPii09yaajiYhmVpgsFiLD+KNxIx/BNAY+XiO+i1yqp9HHdwqM8VTqa5XQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-gnu": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.72.0.tgz",
      "integrity": "sha512-immaN4g2ZGFiOkKrvRX9LvzZdd2GkQM5wR+UyzYyUuyhUTXGQ4HKUJH18xp4G8OfhCVaVAJfKZxwE1r8+4hhaQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-arm64-musl": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.72.0.tgz",
      "integrity": "sha512-JGHS9Mnr7iWyyLDxgCv1MhzVpAckgptg00F2gnxt/GD7lQ2SW1BRcxHqhSTaSdDpjWRrBkBxMMh4+Hn3aVtExg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-ppc64-gnu": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.72.0.tgz",
      "integrity": "sha512-AOYgBZqxNshrg83P9v0RYv+m8s10Cqkj4/PxXFDhcS3k7FqsIG5+CxErshZCIN7G8iy4Y+VGfAsuEdar8AcbBg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-gnu": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-gnu/-/binding-linux-riscv64-gnu-1.72.0.tgz",
      "integrity": "sha512-QMybPS5ij3/vrKG67mqzHwW++91sYxK/PPUVi6SBtNCEzW4niS52fVBdXbQ6nou0wWbUPEpx8Sl/ZjtgE3clXA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-riscv64-musl": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-riscv64-musl/-/binding-linux-riscv64-musl-1.72.0.tgz",
      "integrity": "sha512-gOc3W7JV0PXRpIL7stUlLe3Wa9Gp0Kdlup87IT3gHDvPKck2xNgMIl/Gs2lldYY2lyXZDC4rWi3hmoLUobkgbQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-s390x-gnu": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.72.0.tgz",
      "integrity": "sha512-rpGxph+FjjHcYI5q6uxB3Az+tnfmEnDbSA8+PK9ZE/VzyUAkvBOMeuY7ZQMhu5mpZH7YQDsTdW6Cx4kV/msc6w==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-gnu": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.72.0.tgz",
      "integrity": "sha512-WND+uhf/Ko13SLqQMWQUgsZuLvYYEvL0ZKgg0tgGYfLqxG7l8Ju123fHDMJyYSDl5E3bUbpFUuii/OvMreFQzw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-linux-x64-musl": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-linux-x64-musl/-/binding-linux-x64-musl-1.72.0.tgz",
      "integrity": "sha512-SrpbrUL70nG9vh6zP4/oKHWgLuHquwsr7MW9XOn0olBVgh10Uqr8qscKhQoBGEn6olK/IUpn5GSKcdQ5AjUhGA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-openharmony-arm64": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-openharmony-arm64/-/binding-openharmony-arm64-1.72.0.tgz",
      "integrity": "sha512-qkrsEn6NmgFKr7U/QnezQMb+q/vzAy0Dd9Y95gQGQTyjzDLN+HRZMuM5u70iyH4nBLCfKBzhjMsYCehKay2jyg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-arm64-msvc": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.72.0.tgz",
      "integrity": "sha512-LWR6ZlFZph+KPjXv8opgZsXRDCdrdQe8VL8Cg9zxCoBS73h6znzZpydVgmdnwj8mB9AuSM5jxEgDJDpQkjboeg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-ia32-msvc": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-ia32-msvc/-/binding-win32-ia32-msvc-1.72.0.tgz",
      "integrity": "sha512-yt6HEh7IsHvtjRWtmeZRX134eaXKHq5Gnqlf1xBJdJl1JtdoRUEJw3nAxpZoUDS860cX/foKbztO441anVBtVQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxlint/binding-win32-x64-msvc": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/@oxlint/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.72.0.tgz",
      "integrity": "sha512-b2eKFD2hX7tIwmo/cyH6TDq8vzWRZ2qNHrzoGntUTmq0h3zQh/uX3eTSHCwI8OB/ADQfJCRelLItK8BsxuucDA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@renovatebot/pep440": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/@renovatebot/pep440/-/pep440-4.2.1.tgz",
      "integrity": "sha512-2FK1hF93Fuf1laSdfiEmJvSJPVIDHEUTz68D3Fi9s0IZrrpaEcj6pTFBTbYvsgC5du4ogrtf5re7yMMvrKNgkw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.9.0 || ^22.11.0 || ^24",
        "pnpm": "^10.0.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.1.4.tgz",
      "integrity": "sha512-EZLpf/8y7GXkkra90ML47kzik/GMP3EMcE9bPyHmRfxLC6z9+aW5A8poCsoxjrT5GfEcNAAvWwUHjvP1pUQkfw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.1.4.tgz",
      "integrity": "sha512-aUi+HBvmYb7j8krl1+qJgkG8C17fO79gk3c+jPw4S8glRFc1DTija9S3EyaTSQUm5GJXYKDAsugBEhFHH2vYiQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.1.4.tgz",
      "integrity": "sha512-F7hHC3gwY11+vByKPRWqwGbeXWVgKmL+pTGCinaEhdihzBV2aQ0fvZOch9cXYUOKuKKq429HeYXOqQLc7wFCEg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.1.4.tgz",
      "integrity": "sha512-sI5yw+7s92SK6odiEhD5lKCBlWcpjHS5qyqpVQbZAJ0fIzEUXrmbl3DH2ybR3PZogulNJF+COLtmA8hUfvkCCQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.1.4.tgz",
      "integrity": "sha512-mCi0OKgEieFircrtVYmQAFGszRtMnZ6fpZAXrxanXAu7lqZcsK1E1RAaZNG0uKAnxox3B1f4EyQNnoyMfN1vAA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.1.4.tgz",
      "integrity": "sha512-B9Ial3Kv5sh0SHnB1g/QWcUQCEvCF6QKGAl4zXypYj65mVI+B4AhFBwPtSN7pDrJeIx8Z7zdy4ntx+wQABom7w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.1.4.tgz",
      "integrity": "sha512-lZVym0PuHE1KZ22gmFTC15lAkrg9iTszR617oYRB/iPY1A56ywoJzVKOJBKaot5RiikCObmur6pogpse3gRcng==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.1.4.tgz",
      "integrity": "sha512-t2DNiLJWNTbnEHyUzTumldML6ET4/g16467LZoDDJ3tSxGvguL5/NyC2lCsNKuyRycg9XeDQF5SSv+TNOhQEXg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.1.4.tgz",
      "integrity": "sha512-0WIRnL1Uw4BvTZRLQt+PVgo6ZKTJadlC2btP+/EOXv2f/DWbY0rEgl+y834mIVwP1FkTlWVTrGGJXf12lru7EQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.1.4.tgz",
      "integrity": "sha512-JWtGshGfX+oENAKonoNkqEJX+7hC8yfhi9GUyPX1VX4mdh1y5r+ZiJLR5XzAB0aoP6s/PcILsGjKq8O0mm24bw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.1.4.tgz",
      "integrity": "sha512-rT6yQcxUuXs4CnbofqwHRRV0iem349rLMYpTjkgQGLjrY4ado/eDzwPZPTCgTOlF6Nkp8NEv70yLMTn6qkWxsQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.1.4.tgz",
      "integrity": "sha512-KXMGoboq5cyaCQjDA4GLuRiOwBQ0EyFnJoVViLeZ45/3rFItRODEr+NdsBcVpll40hhNArlm/speWGRvj08LzA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-wasm32-wasi": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-wasm32-wasi/-/binding-wasm32-wasi-1.1.4.tgz",
      "integrity": "sha512-5K83rb36oJiY7BCyE9zLZtGcPV4g5wvq+xwdO0XPIwDVZI8cyB/AUjkNXGb92/rnmezEkjMOpgY61rtwjQtFwg==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.11.1",
        "@emnapi/runtime": "1.11.1",
        "@napi-rs/wasm-runtime": "^1.1.6"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.1.4.tgz",
      "integrity": "sha512-PnWBtw3TV5KOg69HQQDR0mnQuyCmSGR2pAB4DC1rPF808fgKeTUMj2EOEyKATpgiuxuR5APQmiDO7PDgEjTFSA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.1.4.tgz",
      "integrity": "sha512-M1lpniBePobTfsa7Ks9a199e1akxsXn+GYBUKsEzv3YFzOm1HJAMNwKI3qr0Zq+mxwx9gOZoTdP1yXRYsZUocQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/pluginutils": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-5.4.0.tgz",
      "integrity": "sha512-MfPp06CjRLfXQ3wY0R8vJDYBy/MvVcc9OulEfR0B8Iv9ko+GCNaRZ+EpJYFl27LhKsZK0o420sYCRHCjfCgeUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0",
        "estree-walker": "^2.0.2",
        "picomatch": "^4.0.2"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "rollup": "^1.20.0||^2.0.0||^3.0.0||^4.0.0"
      },
      "peerDependenciesMeta": {
        "rollup": {
          "optional": true
        }
      }
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.1.0.tgz",
      "integrity": "sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@supabase/auth-js": {
      "version": "2.110.0",
      "resolved": "https://registry.npmjs.org/@supabase/auth-js/-/auth-js-2.110.0.tgz",
      "integrity": "sha512-Mi288WCTp6wxMFCOu/UgzgHEXODjdl2uVTLqK11eanzGZaldU3RyP8Am+ZbNuVzFP+5+iOvppxzv7N5Ym84xTg==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/functions-js": {
      "version": "2.110.0",
      "resolved": "https://registry.npmjs.org/@supabase/functions-js/-/functions-js-2.110.0.tgz",
      "integrity": "sha512-Fde5wlY8ZZy+9yqrWlQHo8MacSyUBArBEtN2boB4thJQigPnQD/cc61qZN0n3I1L0gwhWtHYwIMnOBKxSvF6Hw==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/phoenix": {
      "version": "0.4.4",
      "resolved": "https://registry.npmjs.org/@supabase/phoenix/-/phoenix-0.4.4.tgz",
      "integrity": "sha512-Gt0pqoXuIqX/8dvG0OKp/wMCobXNH3klNbUPBNyOfN0YA1IswrM3HyWFMOPk1Jy+BRaIyDPcFx4jLBwHNmlyfQ==",
      "license": "MIT"
    },
    "node_modules/@supabase/postgrest-js": {
      "version": "2.110.0",
      "resolved": "https://registry.npmjs.org/@supabase/postgrest-js/-/postgrest-js-2.110.0.tgz",
      "integrity": "sha512-ZbC1QZL3jcvBUfVKjJbgRM27G4Mg3Zzqdm44m5pJafe1e52Cli793EOnwQucomBAGEUDd03Nzaf7XV3ji/XexQ==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/realtime-js": {
      "version": "2.110.0",
      "resolved": "https://registry.npmjs.org/@supabase/realtime-js/-/realtime-js-2.110.0.tgz",
      "integrity": "sha512-Wn2AWpneZuDFTkp/65tqctvoh+3JvyTjMam8sTMqVWy5BgkU8zAvFwilPYPPPhkINeKF8NAJKP7FclJ2iGCUMw==",
      "license": "MIT",
      "dependencies": {
        "@supabase/phoenix": "0.4.4",
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/storage-js": {
      "version": "2.110.0",
      "resolved": "https://registry.npmjs.org/@supabase/storage-js/-/storage-js-2.110.0.tgz",
      "integrity": "sha512-71+gU3HrhiylAhftY6FmO5PPdcsScnVcS766CVD+vTYK9qTDLbrx8FhgBYbqGm3iV/wkTfzrNJfjGsMeFRkJRQ==",
      "license": "MIT",
      "dependencies": {
        "iceberg-js": "^0.8.1",
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@supabase/supabase-js": {
      "version": "2.110.0",
      "resolved": "https://registry.npmjs.org/@supabase/supabase-js/-/supabase-js-2.110.0.tgz",
      "integrity": "sha512-8yI84VJiEVW4zxZpLUmxXmjzQ7O2St9X/ymzlBETDHTURPWG3LmvbSiibq+7dqAJmyoUfxZnSfXeM4HCM8s4XQ==",
      "license": "MIT",
      "dependencies": {
        "@supabase/auth-js": "2.110.0",
        "@supabase/functions-js": "2.110.0",
        "@supabase/postgrest-js": "2.110.0",
        "@supabase/realtime-js": "2.110.0",
        "@supabase/storage-js": "2.110.0"
      },
      "engines": {
        "node": ">=22.0.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.2.tgz",
      "integrity": "sha512-yWP/sqEcBLaD8JuA6zNwxoYKr75qxTioYwlRwekj5Jr/I5GXnoJfjetH/psLUIv74cYTH2lBUEzBkinthoYcBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "5.21.6",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.2"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.2.tgz",
      "integrity": "sha512-z8ZgnzX8gdNoWLBLqBPoh/sjnxkwvf9ZuWjnO0l0yIzbLa5/9S+eC5QxGZKRobVHIC3/1BoMWjHblqWjcgFgag==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.2",
        "@tailwindcss/oxide-darwin-arm64": "4.3.2",
        "@tailwindcss/oxide-darwin-x64": "4.3.2",
        "@tailwindcss/oxide-freebsd-x64": "4.3.2",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.2",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.2",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.2",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.2",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.2",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.2",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.2",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.2"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.2.tgz",
      "integrity": "sha512-WHxqIuHpvZ5VtdX6GTl1Ik/Vp2YuN42Et+0CdeaVd/frQ9jAvGmvR8vLT+jk3e8/Q3x8kECB9+R17pgpp2BulA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.2.tgz",
      "integrity": "sha512-GZypeUY/IDJW3877KeM+O67vbXr3MBnbtEL4aYhNErv/JWZhye2vGSWWG9tB6iiqR2MqRNkY8IOUy4NdSZV26w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.2.tgz",
      "integrity": "sha512-UIIzmefR6KO1sDU7MzRqAxC8iBpft/VhkGjTjnhoS6k7Z3rQ9wEgA1ODSiyH/tcSYssulNm4Ci3hOeK1jH7ccQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.2.tgz",
      "integrity": "sha512-GN+uAmcI6DNspnCDwtOAZrTz6oukJnp337qZvxqCGLd3BHBzJpO0ZbTLRvJNdztOeAmTzewewGIMPb0tk2R4WA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.2.tgz",
      "integrity": "sha512-4ABn7qSbdHRwTiDiuWNegCyb5+2FJ4vKIKc3DmKrvAFw7MU1Lm11dIkTPwUaFdTzc7IsOpDbqBrlh0x6y36U/w==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.2.tgz",
      "integrity": "sha512-wDgEIGwoM8w8pufh9LVt1PahDgNdKXrLC2qfAnV3vAmococ9RWbxeAw4pxPttd/TsJfwjyLf90Dg1y9y8I6Emw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.2.tgz",
      "integrity": "sha512-J5Nuk0uZQIiMTJj3LEx4sAA9tMFUoXQZFv1J6An+QGYe53HKRJuFDi0rpq/tuouCZeAbOBY3kQ6g8qeD4TUjtA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.2.tgz",
      "integrity": "sha512-kqCZpSKOBEJO4mz7OqWoofBZeXTAwaVGPj0ErAj7CojmhKpWVWVOnrt9dE8odoIraZq4oj3ausM37kXi+Tow8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.2.tgz",
      "integrity": "sha512-cixpqbh2toJDmkuCRI68nXA8ZxNmdK9Y+9v5h3MC3ZQKy/0BO8AWzlkWyRM7JAFSGBlfig4YVTPsK6MVgqz1uw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.2.tgz",
      "integrity": "sha512-4ec2Z/LOmRsAgU23CS4xeJfcJlmRg94A/XrbGRCF1gyU/zdDfRLYDVsS+ynSZCmGNxQ1jQriQOKMQeQxBA3Isw==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.1",
        "@emnapi/runtime": "^1.11.1",
        "@emnapi/wasi-threads": "^1.2.2",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.2.tgz",
      "integrity": "sha512-Zyr/M0+XcYZu3bZrUytc7TXvrk0ftWfl8gN2MwekNDzhqhKRUucMPSeOzM0o0wH5AWOU49BsKRrfKxI2atCPMQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.2.tgz",
      "integrity": "sha512-QI9BO7KlNZsp2GuO0jwAAj5jCDABOKXRkCk2XuKTSaNEFSdfzqswYVTtCHBNKHLsqyjFyFkqlDiwkNbTYSssMQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.3.2.tgz",
      "integrity": "sha512-rjVWYCa7Ngbi5AarT6k8TkxUG3Wl1QKzHdIZVsjZSzf36Jmo2IKZt/NHRAwly8oDkbBOH0YTu+CHuf9jPxMc+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.3.2",
        "@tailwindcss/oxide": "4.3.2",
        "postcss": "^8.5.15",
        "tailwindcss": "4.3.2"
      }
    },
    "node_modules/@testing-library/dom": {
      "version": "10.4.1",
      "resolved": "https://registry.npmjs.org/@testing-library/dom/-/dom-10.4.1.tgz",
      "integrity": "sha512-o4PXJQidqJl82ckFaXUeoAW+XysPLauYI43Abki5hABd853iMhitooc6znOnczgbTYmEP6U6/y1ZyKAIsvMKGg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@babel/code-frame": "^7.10.4",
        "@babel/runtime": "^7.12.5",
        "@types/aria-query": "^5.0.1",
        "aria-query": "5.3.0",
        "dom-accessibility-api": "^0.5.9",
        "lz-string": "^1.5.0",
        "picocolors": "1.1.1",
        "pretty-format": "^27.0.2"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@testing-library/jest-dom": {
      "version": "6.9.1",
      "resolved": "https://registry.npmjs.org/@testing-library/jest-dom/-/jest-dom-6.9.1.tgz",
      "integrity": "sha512-zIcONa+hVtVSSep9UT3jZ5rizo2BsxgyDYU7WFD5eICBE7no3881HGeb/QkGfsJs6JTkY1aQhT7rIPC7e+0nnA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@adobe/css-tools": "^4.4.0",
        "aria-query": "^5.0.0",
        "css.escape": "^1.5.1",
        "dom-accessibility-api": "^0.6.3",
        "picocolors": "^1.1.1",
        "redent": "^3.0.0"
      },
      "engines": {
        "node": ">=14",
        "npm": ">=6",
        "yarn": ">=1"
      }
    },
    "node_modules/@testing-library/jest-dom/node_modules/dom-accessibility-api": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/dom-accessibility-api/-/dom-accessibility-api-0.6.3.tgz",
      "integrity": "sha512-7ZgogeTnjuHbo+ct10G9Ffp0mif17idi0IyWNVA/wcwcm7NPOD/WEHVP3n7n3MhXqxoIYm8d6MuZohYWIZ4T3w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@testing-library/react": {
      "version": "16.3.2",
      "resolved": "https://registry.npmjs.org/@testing-library/react/-/react-16.3.2.tgz",
      "integrity": "sha512-XU5/SytQM+ykqMnAnvB2umaJNIOsLF3PVv//1Ew4CTcpz0/BRyy/af40qqrt7SjKpDdT1saBMc42CUok5gaw+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.12.5"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@testing-library/dom": "^10.0.0",
        "@types/react": "^18.0.0 || ^19.0.0",
        "@types/react-dom": "^18.0.0 || ^19.0.0",
        "react": "^18.0.0 || ^19.0.0",
        "react-dom": "^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        },
        "@types/react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/@ts-morph/common": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/@ts-morph/common/-/common-0.11.1.tgz",
      "integrity": "sha512-7hWZS0NRpEsNV8vWJzg7FEz6V8MaLNeJOmwmghqUXTpzk16V1LLZhdo+4QvE/+zv4cVci0OviuJFnqhEfoV3+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-glob": "^3.2.7",
        "minimatch": "^3.0.4",
        "mkdirp": "^1.0.4",
        "path-browserify": "^1.0.1"
      }
    },
    "node_modules/@ts-morph/common/node_modules/minimatch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.5.tgz",
      "integrity": "sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.3",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.3.tgz",
      "integrity": "sha512-F3fo1MYrRJYL3zER0OUOmkutjr1Vp23m7OsSgp7nq4SP6OqX6C/56XFIPAl5bt3zaBRjmW7SGz3u/6LwFpYcOg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/aria-query": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/@types/aria-query/-/aria-query-5.0.4.tgz",
      "integrity": "sha512-rfT93uj5s0PRL7EzccGMs3brplhcrghnDoV26NqKhCAS1hVo+WdNsPvE/yb6ilfr5hi2MEk6d5EWJTKdxg8jVw==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/@types/canvas-confetti": {
      "version": "1.9.0",
      "resolved": "https://registry.npmjs.org/@types/canvas-confetti/-/canvas-confetti-1.9.0.tgz",
      "integrity": "sha512-aBGj/dULrimR1XDZLtG9JwxX1b4HPRF6CX9Yfwh3NvstZEm1ZL7RBnel4keCPSqs1ANRu1u2Aoz9R+VmtjYuTg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/chai": {
      "version": "5.2.3",
      "resolved": "https://registry.npmjs.org/@types/chai/-/chai-5.2.3.tgz",
      "integrity": "sha512-Mw558oeA9fFbv65/y4mHtXDs9bPnFMZAL/jxdPFUpOHHIXX91mcgEHbS5Lahr+pwZFR8A7GQleRWeI6cGFC2UA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/deep-eql": "*",
        "assertion-error": "^2.0.1"
      }
    },
    "node_modules/@types/chrome": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/@types/chrome/-/chrome-0.2.2.tgz",
      "integrity": "sha512-8rSMZ4cvo2xmaSyQg0sN5yRL7oiDkntLoiHxUhfwQnv1mvnkrdoZ25SlNrKWmYKaeP50WvrfWj1pmc02+U9KKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/filesystem": "*",
        "@types/har-format": "*"
      }
    },
    "node_modules/@types/deep-eql": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@types/deep-eql/-/deep-eql-4.0.2.tgz",
      "integrity": "sha512-c9h9dVVMigMPc4bwTvC5dxqtqJZwQPePsWjPlpSOnojbor6pGqdk541lfA7AqFQr5pB1BRdq0juY9db81BwyFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/filesystem": {
      "version": "0.0.36",
      "resolved": "https://registry.npmjs.org/@types/filesystem/-/filesystem-0.0.36.tgz",
      "integrity": "sha512-vPDXOZuannb9FZdxgHnqSwAG/jvdGM8Wq+6N4D/d80z+D4HWH+bItqsZaVRQykAn6WEVeEkLm2oQigyHtgb0RA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/filewriter": "*"
      }
    },
    "node_modules/@types/filewriter": {
      "version": "0.0.33",
      "resolved": "https://registry.npmjs.org/@types/filewriter/-/filewriter-0.0.33.tgz",
      "integrity": "sha512-xFU8ZXTw4gd358lb2jw25nxY9QAgqn2+bKKjKOYfNCzN4DKCFetK7sPtrlpg66Ywe3vWY9FNxprZawAh9wfJ3g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/har-format": {
      "version": "1.2.16",
      "resolved": "https://registry.npmjs.org/@types/har-format/-/har-format-1.2.16.tgz",
      "integrity": "sha512-fluxdy7ryD3MV6h8pTfTYpy/xQzCFC7m89nOH9y94cNqJ1mDIDPut7MnRHI3F6qRmh/cT2fUjG1MLdCNb4hE9A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "24.13.2",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.13.2.tgz",
      "integrity": "sha512-fRa09kZTgu8o71KFcDjUFuc7F+dEbZYZmkI0mg5YBTRs0yMKjYHsq/c0urDKeDb+D5qVgXOdFcuu+DZPKOITwA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.18.0"
      }
    },
    "node_modules/@types/pako": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@types/pako/-/pako-2.0.4.tgz",
      "integrity": "sha512-VWDCbrLeVXJM9fihYodcLiIv0ku+AlOa/TQ1SvYOaBuyrSKgEcro95LJyIsJ4vSo6BXIxOKxiJAat04CmST9Fw==",
      "license": "MIT"
    },
    "node_modules/@types/raf": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/@types/raf/-/raf-3.4.3.tgz",
      "integrity": "sha512-c4YAvMedbPZ5tEyxzQdMoOhhJ4RD3rngZIdwC2/qDN3d7JpEhB6fiBRKVY1lg5B7Wk+uPBjn5f39j1/2MY1oOw==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/@types/react": {
      "version": "19.2.17",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.17.tgz",
      "integrity": "sha512-MXfmqaVPEVgkBT/aY0aGCkRWWtByiYQXo3xdQ8r5RzuFrPiRn8Gar2tQdXSUQ2GKV3bkXckek89V8wQBY2Q/Aw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/react-signature-canvas": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/@types/react-signature-canvas/-/react-signature-canvas-1.0.7.tgz",
      "integrity": "sha512-0ulzaUvcIQ0HdNB5fHj+KE7ztWhlhYRsi65TdPIRj/t+FD5Rr8NJKBv4/xLViz7HsUh/tgqsoyKeARrm9+gPIg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/react": "*",
        "@types/signature_pad": "<3"
      }
    },
    "node_modules/@types/signature_pad": {
      "version": "2.3.6",
      "resolved": "https://registry.npmjs.org/@types/signature_pad/-/signature_pad-2.3.6.tgz",
      "integrity": "sha512-v3j92gCQJoxomHhd+yaG4Vsf8tRS/XbzWKqDv85UsqjMGy4zhokuwKe4b6vhbgncKkh+thF+gpz6+fypTtnFqQ==",
      "license": "MIT"
    },
    "node_modules/@types/trusted-types": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/@types/trusted-types/-/trusted-types-2.0.7.tgz",
      "integrity": "sha512-ScaPdn1dQczgbl0QFTeTOmVHFULt394XJgOQNoyVhZ6r2vLnMLJfBPd53SB52T/3G36VI1/g2MZaX0cwDuXsfw==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/@vercel/build-utils": {
      "version": "13.32.2",
      "resolved": "https://registry.npmjs.org/@vercel/build-utils/-/build-utils-13.32.2.tgz",
      "integrity": "sha512-XgATgMjt2NHF6HHo1wii6f43qlWjaFx3o+9L7aOUPLQgqwgYp2BGwuuBjg8U6sNgut1QsmFBMvNqTAUBvack9Q==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@vercel/python-analysis": "0.11.1",
        "cjs-module-lexer": "1.2.3",
        "es-module-lexer": "1.5.0"
      }
    },
    "node_modules/@vercel/build-utils/node_modules/es-module-lexer": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.5.0.tgz",
      "integrity": "sha512-pqrTKmwEIgafsYZAGw9kszYzmagcE/n4dbgwGWLEXg7J4QFJVQRBld8j3Q3GNez79jzxZshq0bcT962QHOghjw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@vercel/error-utils": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@vercel/error-utils/-/error-utils-2.2.0.tgz",
      "integrity": "sha512-WFWiRxfPzoYWYifaj4thSKvAaZZwUOqD4k5GINRIgZgCiS2E3iAJbWbIsIZmkQdTecWFHcWGA6q48CjisgpOBA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/@vercel/nft": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@vercel/nft/-/nft-1.10.0.tgz",
      "integrity": "sha512-iLOW4fcsgkipfOh2Bw3wB38YDfxTlxr7+j4uFeui2OswkNT28jIitS/aMce7tS0mef1YPQ8zLIDYr3a0aahNrA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@mapbox/node-pre-gyp": "^2.0.0",
        "@rollup/pluginutils": "^5.1.3",
        "acorn": "^8.6.0",
        "acorn-import-attributes": "^1.9.5",
        "async-sema": "^3.1.1",
        "bindings": "^1.4.0",
        "estree-walker": "2.0.2",
        "glob": "^13.0.0",
        "graceful-fs": "^4.2.9",
        "node-gyp-build": "^4.2.2",
        "picomatch": "^4.0.2",
        "resolve-from": "^5.0.0"
      },
      "bin": {
        "nft": "out/cli.js"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@vercel/node": {
      "version": "5.8.22",
      "resolved": "https://registry.npmjs.org/@vercel/node/-/node-5.8.22.tgz",
      "integrity": "sha512-WfciIhDVh9RwFmvrWp7FAdYCBPV94bZvIo4JbaHqZbvBJ2Bmnv/Pgj1fTjjLKfnKTbLJy+8HN1FXB8KYDnwGZQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@edge-runtime/node-utils": "2.3.0",
        "@edge-runtime/primitives": "4.1.0",
        "@edge-runtime/vm": "3.2.0",
        "@types/node": "20.11.0",
        "@vercel/build-utils": "13.32.2",
        "@vercel/error-utils": "2.2.0",
        "@vercel/nft": "1.10.0",
        "@vercel/static-config": "3.4.0",
        "async-listen": "3.0.0",
        "cjs-module-lexer": "1.2.3",
        "edge-runtime": "2.5.9",
        "es-module-lexer": "1.4.1",
        "esbuild": "0.27.0",
        "etag": "1.8.1",
        "mime-types": "2.1.35",
        "node-fetch": "2.6.9",
        "path-to-regexp": "6.1.0",
        "path-to-regexp-updated": "npm:path-to-regexp@6.3.0",
        "ts-morph": "12.0.0",
        "tsx": "4.21.0",
        "typescript": "npm:typescript@5.9.3",
        "undici": "5.28.4"
      }
    },
    "node_modules/@vercel/node/node_modules/@types/node": {
      "version": "20.11.0",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.11.0.tgz",
      "integrity": "sha512-o9bjXmDNcF7GbM4CNQpmi+TutCgap/K3w1JyKgxAjqx41zp9qlIAVFi0IhCNsJcXolEqLWhbFbEeL0PvYm4pcQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~5.26.4"
      }
    },
    "node_modules/@vercel/node/node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/@vercel/node/node_modules/undici-types": {
      "version": "5.26.5",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-5.26.5.tgz",
      "integrity": "sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@vercel/python-analysis": {
      "version": "0.11.1",
      "resolved": "https://registry.npmjs.org/@vercel/python-analysis/-/python-analysis-0.11.1.tgz",
      "integrity": "sha512-EPPLuXJQhIDUx08H9nG76AR2HSgBquwe3OAX5s2w20M923iaWeGGVkhX/4yZ89CJfXEZgE1Aj/mX7lVHOVIcYA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@bytecodealliance/preview2-shim": "0.17.6",
        "@renovatebot/pep440": "4.2.1",
        "fs-extra": "11.1.1",
        "js-yaml": "4.1.1",
        "minimatch": "10.1.1",
        "smol-toml": "1.5.2",
        "zod": "3.22.4"
      }
    },
    "node_modules/@vercel/python-analysis/node_modules/zod": {
      "version": "3.22.4",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.22.4.tgz",
      "integrity": "sha512-iC+8Io04lddc+mVqQ9AZ7OQ2MrUKGN+oIQyq1vemgt46jwCwLfhq7/pwnBnNXXXZb8VTVLKwp9EDkx+ryxIWmg==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/@vercel/static-config": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/@vercel/static-config/-/static-config-3.4.0.tgz",
      "integrity": "sha512-wCq90CMUB//ggnFh77NQO1xaLFsS4LigQIqKrH6ohnr9Br/KI1FhlErx62WfCOuueWaW+LVsbLOqNXIUjK8t6A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "ajv": "8.6.3",
        "json-schema-to-ts": "1.6.4",
        "ts-morph": "12.0.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.0.3.tgz",
      "integrity": "sha512-vmFvco5/QuC2f9Oj+wTk0+9XeDFkHxSamwZKYc7MxYwKICfvUvlMhqKI0VuICPltGqh1neqBKDvO4kes1ya8vg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        }
      }
    },
    "node_modules/@vitest/expect": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-4.1.9.tgz",
      "integrity": "sha512-vl/rYsUKcBr3SnQn166+XR5ZQcgMx3DQhFWdfli/cWpLnLUmbxZvyrJZotLFUryib+LtArYMSTJ5RbQ57ZqrlA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.1.0",
        "@types/chai": "^5.2.2",
        "@vitest/spy": "4.1.9",
        "@vitest/utils": "4.1.9",
        "chai": "^6.2.2",
        "tinyrainbow": "^3.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/mocker": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/mocker/-/mocker-4.1.9.tgz",
      "integrity": "sha512-EVkXzBjrPGM+cK8/ANWgBrkUCfJfb38/EfTSO8h7pWvKkyPkpWxvR7BkD2MyItMF62C97zAEoqdpUixwR/e+Rw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/spy": "4.1.9",
        "estree-walker": "^3.0.3",
        "magic-string": "^0.30.21"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "msw": "^2.4.9",
        "vite": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "msw": {
          "optional": true
        },
        "vite": {
          "optional": true
        }
      }
    },
    "node_modules/@vitest/mocker/node_modules/estree-walker": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
      "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0"
      }
    },
    "node_modules/@vitest/pretty-format": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/pretty-format/-/pretty-format-4.1.9.tgz",
      "integrity": "sha512-s0iufns3iIFitdgm+YR7g1whCAaGtXz459VS9/PqyKDEEFgYIhsHOQmXgIgDuYCt7DeQmiZT0Qe2OA2p4ZPu5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tinyrainbow": "^3.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/runner": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-4.1.9.tgz",
      "integrity": "sha512-KXLMDtc7oe70+3mJfGrPUWPesswH+3sTxAMAMl8DG7I8IUQT4XW718dY5ID3vPUcmlu27CcKfY4P3h3I29SLJg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/utils": "4.1.9",
        "pathe": "^2.0.3"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/snapshot": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-4.1.9.tgz",
      "integrity": "sha512-Jc7RKGNBo8Z28WYIm0Niej4xdSPByRf6mU58VpHQkd6Zh05rlnA+twjbK5HyeIGHxrzsc3mJgS43uM0CZKzaIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "4.1.9",
        "@vitest/utils": "4.1.9",
        "magic-string": "^0.30.21",
        "pathe": "^2.0.3"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/spy": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-4.1.9.tgz",
      "integrity": "sha512-fHpsS6mIi+PiEW+vcRVOMkX1oSaPKne3VOclSFICPcGOmfKgXPU5iAah+wcNcj2xPrCCmfq99IDGf+EojhhvhA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/utils": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-4.1.9.tgz",
      "integrity": "sha512-A51o8ymO5PpqlWNnBP9ZHPXDIpuMtTLlGSjN7la4US+LJzoUMyhwjA5QXlm39JexgwHKW4Xjs8Z2d3dLCXOeuA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "4.1.9",
        "convert-source-map": "^2.0.0",
        "tinyrainbow": "^3.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/abbrev": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-3.0.1.tgz",
      "integrity": "sha512-AO2ac6pjRB3SJmGJo+v5/aK6Omggp6fsLrs6wN9bd35ulu4cCwaAU9+7ZhXjeqHVkaHThLuzH0nZr0YpCDhygg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.17.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.17.0.tgz",
      "integrity": "sha512-xRQbDb9BnwDafYNn6Vwl839DYVjqXYb1XVGtWAZ1kcDc6iwAL4hg3B1dZlRiuENFeO2H53gFG3in621AdERVAg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-import-attributes": {
      "version": "1.9.5",
      "resolved": "https://registry.npmjs.org/acorn-import-attributes/-/acorn-import-attributes-1.9.5.tgz",
      "integrity": "sha512-n02Vykv5uA3eHGM/Z2dQrcD56kL8TyDb2p1+0P83PClMnC/nc+anbQRhIOWnSq4Ke/KvDPrY3C9hDtC/A3eHnQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^8"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.4",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
      "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/ajv": {
      "version": "8.6.3",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-8.6.3.tgz",
      "integrity": "sha512-SMJOdDP6LqTkD0Uq8qLi+gMwSt0imXLSV080qFVwJCpH9U6Mb+SUGHAXM0KNbcBPguytWyvFxcHgMLe2D2XSpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "json-schema-traverse": "^1.0.0",
        "require-from-string": "^2.0.2",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.2.2.tgz",
      "integrity": "sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.0.tgz",
      "integrity": "sha512-b0P0sZPKtyu8HkeRAfCq0IfURZK+SuwMjY1UXGBU27wpAiTwQAIlq56IbIO+ytk/JjS1fMR14ee5WBBfKi5J6A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "dequal": "^2.0.3"
      }
    },
    "node_modules/assertion-error": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
      "integrity": "sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/async-listen": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/async-listen/-/async-listen-3.0.0.tgz",
      "integrity": "sha512-V+SsTpDqkrWTimiotsyl33ePSjA5/KrithwupuvJ6ztsqPvGv6ge4OredFhPffVXiLN/QUWvE0XcqJaYgt6fOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/async-sema": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/async-sema/-/async-sema-3.1.1.tgz",
      "integrity": "sha512-tLRNUXati5MFePdAk8dw7Qt7DpxPB60ofAgn8WRhW6a2rcimZnYBP9oxHiv0OHy+Wz7kPMG+t4LGdt31+4EmGg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/autoprefixer": {
      "version": "10.5.2",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.5.2.tgz",
      "integrity": "sha512-rD5t5DwOjJdmSORcTq64j8MawTC+tbQ+HHqjR4NDumamy/ambn1UJrlKL+KdwujWxMkFjPM3pPHOEA9tl4767Q==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.4",
        "caniuse-lite": "^1.0.30001799",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/base64-arraybuffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/base64-arraybuffer/-/base64-arraybuffer-1.0.2.tgz",
      "integrity": "sha512-I3yl4r9QB5ZRY3XuJVEPfc2XhZO6YweFPI+UovAzn+8/hb3oJ6lnysaFcjVpkCPfVWFUDvoZ8kmVDP7WyRtYtQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6.0"
      }
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.10.41",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.10.41.tgz",
      "integrity": "sha512-WwS7MHhqGHHlaVsqRZnhvCEMS0owDX+SxRlve7JkuH7My1Ara3ZriTmCQupPfYjxMZ8I/tgxtJYr2t7taHaH4A==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/bidi-js": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/bidi-js/-/bidi-js-1.0.3.tgz",
      "integrity": "sha512-RKshQI1R3YQ+n9YJz2QQ147P66ELpa1FQEg20Dk8oW9t2KgLbpDLLp9aGZ7y8WHSshDknG0bknqGw5/tyCs5tw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "require-from-string": "^2.0.2"
      }
    },
    "node_modules/bindings": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/bindings/-/bindings-1.5.0.tgz",
      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "file-uri-to-path": "1.0.0"
      }
    },
    "node_modules/bl": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
      "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
      "license": "MIT",
      "dependencies": {
        "buffer": "^5.5.0",
        "inherits": "^2.0.4",
        "readable-stream": "^3.4.0"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.15.tgz",
      "integrity": "sha512-EwOCDEex4quD37XhqM3omwtMoJjr//isUZz1JopUNWms+4Z2ViyM/k1YIRePpoVNnQhENnxtFjLaxNHrT7xIUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.4",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.4.tgz",
      "integrity": "sha512-MTc8i/x9jBQd1iMw2CFGS+rwMa07eYjLR0CCTLDACl9xhxy+nIs3KeML/biicXtk9JrZ6dnnTatmc7ErPXIxqw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.10.38",
        "caniuse-lite": "^1.0.30001799",
        "electron-to-chromium": "^1.5.376",
        "node-releases": "^2.0.48",
        "update-browserslist-db": "^1.2.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/buffer": {
      "version": "5.7.1",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
      "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.1.13"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001800",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001800.tgz",
      "integrity": "sha512-MMHtuAz9Ys840zAY5F4k6fV5GaivZ9sPk+nz0mY+GYVzRBnYkN0mpqkSR92oWRQ19yQWo4HvBV/FnC16AJX8MA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/canvas": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/canvas/-/canvas-3.2.3.tgz",
      "integrity": "sha512-PzE5nJZPz72YUAfo8oTp0u3fqqY7IzlTubneAihqDYAUcBk7ryeCmBbdJBEdaH0bptSOe2VT2Zwcb3UaFyaSWw==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "node-addon-api": "^7.0.0",
        "prebuild-install": "^7.1.3"
      },
      "engines": {
        "node": "^18.12.0 || >= 20.9.0"
      }
    },
    "node_modules/canvas-confetti": {
      "version": "1.9.4",
      "resolved": "https://registry.npmjs.org/canvas-confetti/-/canvas-confetti-1.9.4.tgz",
      "integrity": "sha512-yxQbJkAVrFXWNbTUjPqjF7G+g6pDotOUHGbkZq2NELZUMDpiJ85rIEazVb8GTaAptNW2miJAXbs1BtioA251Pw==",
      "license": "ISC",
      "funding": {
        "type": "donate",
        "url": "https://www.paypal.me/kirilvatev"
      }
    },
    "node_modules/canvg": {
      "version": "3.0.11",
      "resolved": "https://registry.npmjs.org/canvg/-/canvg-3.0.11.tgz",
      "integrity": "sha512-5ON+q7jCTgMp9cjpu4Jo6XbvfYwSB2Ow3kzHKfIyJfaCAOHLbdKPQqGKgfED/R5B+3TFFfe8pegYA+b423SRyA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@babel/runtime": "^7.12.5",
        "@types/raf": "^3.4.0",
        "core-js": "^3.8.3",
        "raf": "^3.4.1",
        "regenerator-runtime": "^0.13.7",
        "rgbcolor": "^1.0.1",
        "stackblur-canvas": "^2.0.0",
        "svg-pathdata": "^6.0.3"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/chai": {
      "version": "6.2.2",
      "resolved": "https://registry.npmjs.org/chai/-/chai-6.2.2.tgz",
      "integrity": "sha512-NUPRluOfOiTKBKvWPtSD4PhFvWCqOi0BGStNWs57X9js7XGTprSmFoz5F0tWhR4WPjNeR9jXqdC7/UpSJTnlRg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/chalk": {
      "version": "5.6.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-5.6.2.tgz",
      "integrity": "sha512-7NzBL0rN6fMUW+f7A6Io4h40qQlG+xGmtMxfbnH/K7TAtt8JQWVQK+6g0UXKMeVJoyV5EkkNsErQ8pVD3bLHbA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.17.0 || ^14.13 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chownr": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-3.0.0.tgz",
      "integrity": "sha512-+IxzY9BZOQd/XuYPRmrvEVjF/nqj5kgT4kEq7VofrDoM1MxoRjEWkrCC3EtLi59TVawxTAn+orJwFQcrqEN1+g==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/cjs-module-lexer": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-1.2.3.tgz",
      "integrity": "sha512-0TNiGstbQmCFwt4akjjBg5pLRTSyj/PkWQ1ZoO2zntmg9yLqSRxwEa4iCfQLGjqhiqBfOJa7W/E8wfGrTDmlZQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cliui": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-9.0.1.tgz",
      "integrity": "sha512-k7ndgKhwoQveBL+/1tqGJYNz097I7WOvwbmmU2AR5+magtbjPWQTS1C5vzGkBC8Ym8UWRzfKUzUUqFLypY4Q+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^7.2.0",
        "strip-ansi": "^7.1.0",
        "wrap-ansi": "^9.0.0"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/code-block-writer": {
      "version": "10.1.1",
      "resolved": "https://registry.npmjs.org/code-block-writer/-/code-block-writer-10.1.1.tgz",
      "integrity": "sha512-67ueh2IRGst/51p0n6FvPrnRjAGHY5F8xdjkgrYE7DDzpJe6qA07RYQ9VcoUeo5ATOjSOiWpSL3SWBRRbempMw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concurrently": {
      "version": "10.0.3",
      "resolved": "https://registry.npmjs.org/concurrently/-/concurrently-10.0.3.tgz",
      "integrity": "sha512-hc3LH4UaKWd/bbyDK/IGVa4RB6PtQ3CUYwtrkzqHn+wIG3Hr5fhpRlk0L/gCa8ZE1L/Ufj50Zho69cI5w8SQBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "5.6.2",
        "rxjs": "7.8.2",
        "shell-quote": "1.8.4",
        "supports-color": "10.2.2",
        "tree-kill": "1.2.2",
        "yargs": "18.0.0"
      },
      "bin": {
        "conc": "dist/bin/index.js",
        "concurrently": "dist/bin/index.js"
      },
      "engines": {
        "node": ">=22"
      },
      "funding": {
        "url": "https://github.com/open-cli-tools/concurrently?sponsor=1"
      }
    },
    "node_modules/consola": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/consola/-/consola-3.4.2.tgz",
      "integrity": "sha512-5IKcdX0nnYavi6G7TtOhwkYzyjfJlatbjMjuLSfE2kYT5pMDOilZ4OvMhi637CcDICTmz3wARPoyhqyX1Y+XvA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^14.18.0 || >=16.10.0"
      }
    },
    "node_modules/convert-hrtime": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/convert-hrtime/-/convert-hrtime-3.0.0.tgz",
      "integrity": "sha512-7V+KqSvMiHp8yWDuwfww06XleMWVVB9b9tURBx+G7UTADuo5hYPuowKloz4OzOqbPezxgo+fdQ1522WzPG4OeA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/core-js": {
      "version": "3.49.0",
      "resolved": "https://registry.npmjs.org/core-js/-/core-js-3.49.0.tgz",
      "integrity": "sha512-es1U2+YTtzpwkxVLwAFdSpaIMyQaq0PBgm3YD1W3Qpsn1NAmO3KSgZfu+oGSWVu6NvLHoHCV/aYcsE5wiB7ALg==",
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/core-js"
      }
    },
    "node_modules/css-line-break": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/css-line-break/-/css-line-break-2.1.0.tgz",
      "integrity": "sha512-FHcKFCZcAha3LwfVBhCQbW2nCNbkZXn7KVUJcsT5/P8YmfsVja0FMPJr0B903j/E69HUphKiV9iQArX8SDYA4w==",
      "license": "MIT",
      "dependencies": {
        "utrie": "^1.0.2"
      }
    },
    "node_modules/css-tree": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/css-tree/-/css-tree-3.2.1.tgz",
      "integrity": "sha512-X7sjQzceUhu1u7Y/ylrRZFU2FS6LRiFVp6rKLPg23y3x3c3DOKAwuXGDp+PAGjh6CSnCjYeAul8pcT8bAl+lSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mdn-data": "2.27.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12.20.0 || ^14.13.0 || >=15.0.0"
      }
    },
    "node_modules/css.escape": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/css.escape/-/css.escape-1.5.1.tgz",
      "integrity": "sha512-YUifsXXuknHlUsmlgyY0PKzgPOr7/FjCePfHNt0jxm83wHZi44VDMQ7/fGNkjY3/jV1MC+1CmZbaHzugyeRtpg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/data-urls": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-7.0.0.tgz",
      "integrity": "sha512-23XHcCF+coGYevirZceTVD7NdJOqVn+49IHyxgszm+JIiHLoB2TkmPtsYkNWT1pvRSGkc35L6NHs0yHkN2SumA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-mimetype": "^5.0.0",
        "whatwg-url": "^16.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/data-urls/node_modules/tr46": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-6.0.0.tgz",
      "integrity": "sha512-bLVMLPtstlZ4iMQHpFHTR7GAGj2jxi8Dg0s2h2MafAE4uSWF98FC/3MomU51iQAMf8/qDUbKWf5GxuvvVcXEhw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/data-urls/node_modules/webidl-conversions": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-8.0.1.tgz",
      "integrity": "sha512-BMhLD/Sw+GbJC21C/UgyaZX41nPt8bUTg+jWyDeg7e7YN4xOM05YPSIXceACnXVtqyEw/LMClUQMtMZ+PGGpqQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/data-urls/node_modules/whatwg-url": {
      "version": "16.0.1",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-16.0.1.tgz",
      "integrity": "sha512-1to4zXBxmXHV3IiSSEInrreIlu02vUOvrhxJJH5vcxYTBDAx51cqZiKdyTxlecdKNSjj8EcxGBxNf6Vg+945gw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@exodus/bytes": "^1.11.0",
        "tr46": "^6.0.0",
        "webidl-conversions": "^8.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decimal.js": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.6.0.tgz",
      "integrity": "sha512-YpgQiITW3JXGntzdUmyUR1V812Hn8T1YVXhCu+wO3OpS4eU9l4YdD3qjyiKdV6mvV29zapkMeD390UVEf2lkUg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/decompress-response": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz",
      "integrity": "sha512-aW35yZM6Bb/4oJlZncMH2LCoZtJXTRxES17vE3hoRiowU2kWHaJKFkSBDnDR+cm9J+9QhXmREyIfv0pji9ejCQ==",
      "license": "MIT",
      "dependencies": {
        "mimic-response": "^3.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/dequal": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dom-accessibility-api": {
      "version": "0.5.16",
      "resolved": "https://registry.npmjs.org/dom-accessibility-api/-/dom-accessibility-api-0.5.16.tgz",
      "integrity": "sha512-X7BJ2yElsnOJ30pZF4uIIDfBEVgF4XEBxL9Bxhy6dnrm5hkzqmsWHGTiHqRiITNhMyFLyAiWndIJP7Z1NTteDg==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/dompurify": {
      "version": "3.4.11",
      "resolved": "https://registry.npmjs.org/dompurify/-/dompurify-3.4.11.tgz",
      "integrity": "sha512-zhlUV12GsaRzMsf9q5M254YhA4+VuF0fG+QFqu6aYpoGlKtz+w8//jBcGVYBgQkR5GHjUomejY84AV+/uPbWdw==",
      "license": "(MPL-2.0 OR Apache-2.0)",
      "optional": true,
      "optionalDependencies": {
        "@types/trusted-types": "^2.0.7"
      }
    },
    "node_modules/edge-runtime": {
      "version": "2.5.9",
      "resolved": "https://registry.npmjs.org/edge-runtime/-/edge-runtime-2.5.9.tgz",
      "integrity": "sha512-pk+k0oK0PVXdlT4oRp4lwh+unuKB7Ng4iZ2HB+EZ7QCEQizX360Rp/F4aRpgpRgdP2ufB35N+1KppHmYjqIGSg==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "@edge-runtime/format": "2.2.1",
        "@edge-runtime/ponyfill": "2.4.2",
        "@edge-runtime/vm": "3.2.0",
        "async-listen": "3.0.1",
        "mri": "1.2.0",
        "picocolors": "1.0.0",
        "pretty-ms": "7.0.1",
        "signal-exit": "4.0.2",
        "time-span": "4.0.0"
      },
      "bin": {
        "edge-runtime": "dist/cli/index.js"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/edge-runtime/node_modules/async-listen": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/async-listen/-/async-listen-3.0.1.tgz",
      "integrity": "sha512-cWMaNwUJnf37C/S5TfCkk/15MwbPRwVYALA2jtjkbHjCmAPiDXyNJy2q3p1KAZzDLHAWyarUWSujUoHR4pEgrA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/edge-runtime/node_modules/picocolors": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
      "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.384",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.384.tgz",
      "integrity": "sha512-g6KAKY1vkYsADvSPWvdJsuYT0ixdcu6lUtD9P/wJKGBEDlZVXh2AX42j1mPqqaQPDluWjara9ziQ7xqAeXCt5A==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.6.0.tgz",
      "integrity": "sha512-toUI84YS5YmxW219erniWD0CIVOo46xGKColeNQRgOzDorgBi1v4D71/OFzgD9GO2UGKIv1C3Sp8DAn0+j5w7A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/end-of-stream": {
      "version": "1.4.5",
      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.5.tgz",
      "integrity": "sha512-ooEGc6HP26xXq/N+GCGOT0JKCLDGrq2bQUZrQ7gyrJiZANJ/8YDTxTpQBXGMn+WbIQXNVpyWymm7KYVICQnyOg==",
      "license": "MIT",
      "dependencies": {
        "once": "^1.4.0"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.21.6",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.21.6.tgz",
      "integrity": "sha512-aNnGCvbJ/RIyWo1IuhNdVjnNF+EjH9wpzpNHt+ci/m9He9LJvUN8wrCcXjp9cWsGNAuvSpVFTx/vraAFQ8qGjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/entities": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-8.0.0.tgz",
      "integrity": "sha512-zwfzJecQ/Uej6tusMqwAqU/6KL2XaB2VZ2Jg54Je6ahNBGNH6Ek6g3jjNCF0fG9EWQKGZNddNjU5F1ZQn/sBnA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=20.19.0"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.4.1.tgz",
      "integrity": "sha512-cXLGjP0c4T3flZJKQSuziYoq7MlT+rnvfZjfp7h+I7K9BNX54kP9nyWvdbwjQ4u1iWbOL4u96fgeZLToQlZC7w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/esbuild": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.0.tgz",
      "integrity": "sha512-jd0f4NHbD6cALCyGElNpGAOtWxSq46l9X/sWB0Nzd5er4Kz2YTm+Vl0qKFT9KUJvD8+fiO8AvoHhFvEatfVixA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.0",
        "@esbuild/android-arm": "0.27.0",
        "@esbuild/android-arm64": "0.27.0",
        "@esbuild/android-x64": "0.27.0",
        "@esbuild/darwin-arm64": "0.27.0",
        "@esbuild/darwin-x64": "0.27.0",
        "@esbuild/freebsd-arm64": "0.27.0",
        "@esbuild/freebsd-x64": "0.27.0",
        "@esbuild/linux-arm": "0.27.0",
        "@esbuild/linux-arm64": "0.27.0",
        "@esbuild/linux-ia32": "0.27.0",
        "@esbuild/linux-loong64": "0.27.0",
        "@esbuild/linux-mips64el": "0.27.0",
        "@esbuild/linux-ppc64": "0.27.0",
        "@esbuild/linux-riscv64": "0.27.0",
        "@esbuild/linux-s390x": "0.27.0",
        "@esbuild/linux-x64": "0.27.0",
        "@esbuild/netbsd-arm64": "0.27.0",
        "@esbuild/netbsd-x64": "0.27.0",
        "@esbuild/openbsd-arm64": "0.27.0",
        "@esbuild/openbsd-x64": "0.27.0",
        "@esbuild/openharmony-arm64": "0.27.0",
        "@esbuild/sunos-x64": "0.27.0",
        "@esbuild/win32-arm64": "0.27.0",
        "@esbuild/win32-ia32": "0.27.0",
        "@esbuild/win32-x64": "0.27.0"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/estree-walker": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-2.0.2.tgz",
      "integrity": "sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/expand-template": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/expand-template/-/expand-template-2.0.3.tgz",
      "integrity": "sha512-XYfuKMvj4O35f/pOXLObndIRvyQ+/+6AhODh+OKWj9S9498pHHn/IMszH+gt0fBCRWMNfk1ZSp5x3AifmnI2vg==",
      "license": "(MIT OR WTFPL)",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/expect-type": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/expect-type/-/expect-type-1.4.0.tgz",
      "integrity": "sha512-KfYbmpRm0VbLjEvVa9yGwCi9GI34xvi7A/HXYWQO65CSD2u3MczUJSuwXKFIxlGsgBQizV9q5J9NHj4VG0n+pA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-png": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/fast-png/-/fast-png-6.4.0.tgz",
      "integrity": "sha512-kAqZq1TlgBjZcLr5mcN6NP5Rv4V2f22z00c3g8vRrwkcqjerx7BEhPbOnWCPqaHUl2XWQBJQvOT/FQhdMT7X/Q==",
      "license": "MIT",
      "dependencies": {
        "@types/pako": "^2.0.3",
        "iobuffer": "^5.3.2",
        "pako": "^2.1.0"
      }
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fflate": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/fflate/-/fflate-0.8.3.tgz",
      "integrity": "sha512-tbZNuJrLwGUp3zshBtdy4W+ORxZuIh8a5ilyIEQDC5rY1f3U20JMry0Ll3WBzU58EZKsEuJFXhb5gwv8CsPvgA==",
      "license": "MIT"
    },
    "node_modules/file-uri-to-path": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fs-constants": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz",
      "integrity": "sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow==",
      "license": "MIT"
    },
    "node_modules/fs-extra": {
      "version": "11.1.1",
      "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-11.1.1.tgz",
      "integrity": "sha512-MGIE4HOvQCeUCzmlHs0vXpih4ysz4wg9qiSAu6cd42lVwPbTM1TjV7RusoyQqMmk/95gdQZX72u+YW+c3eEpFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.0",
        "jsonfile": "^6.0.1",
        "universalify": "^2.0.0"
      },
      "engines": {
        "node": ">=14.14"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-east-asian-width": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/get-east-asian-width/-/get-east-asian-width-1.6.0.tgz",
      "integrity": "sha512-QRbvDIbx6YklUe6RxeTeleMR0yv3cYH6PsPZHcnVn7xv7zO1BHN8r0XETu8n6Ye3Q+ahtSarc3WgtNWmehIBfA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.14.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.0.tgz",
      "integrity": "sha512-yTb+8DXzDREzgvYmh6s9vHsSVCHeC0G3PI5bEXNBHtmshPnO+S5O7qgLEOn0I5QvMy6kpZN8K1NKGyilLb93wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/github-from-package": {
      "version": "0.0.0",
      "resolved": "https://registry.npmjs.org/github-from-package/-/github-from-package-0.0.0.tgz",
      "integrity": "sha512-SyHy3T1v2NUXn29OsWdxmK6RwHD+vkj3v8en8AOBZ1wBQ/hCAQ5bAQTD02kW4W9tUp/3Qh6J8r9EvntiyCmOOw==",
      "license": "MIT"
    },
    "node_modules/glob": {
      "version": "13.0.6",
      "resolved": "https://registry.npmjs.org/glob/-/glob-13.0.6.tgz",
      "integrity": "sha512-Wjlyrolmm8uDpm/ogGyXZXb1Z+Ca2B8NbJwqBVg0axK9GbBeoS7yGV6vjXnYdGm6X53iehEuxxbyiKp8QmN4Vw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "minimatch": "^10.2.2",
        "minipass": "^7.1.3",
        "path-scurry": "^2.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/glob/node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/glob/node_modules/brace-expansion": {
      "version": "5.0.7",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.7.tgz",
      "integrity": "sha512-7oFy703dxfY3/NLxC1fh2SUCQ0H9rmAY+5EpDVfXjUTTs+HEwR2nYaqLv+GWcTsumwxPfiz6CzCNkwXwBUwqCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/html-encoding-sniffer": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-6.0.0.tgz",
      "integrity": "sha512-CV9TW3Y3f8/wT0BRFc1/KAVQ3TUHiXmaAb6VW9vtiMFf7SLoMd1PdAc4W3KFOFETBJUb90KatHqlsZMWV+R9Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@exodus/bytes": "^1.6.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/html2canvas": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/html2canvas/-/html2canvas-1.4.1.tgz",
      "integrity": "sha512-fPU6BHNpsyIhr8yyMpTLLxAbkaK8ArIBcmZIRiBLiDhjeqvXolaEmDGmELFuX9I4xDcaKKcJl+TKZLqruBbmWA==",
      "license": "MIT",
      "dependencies": {
        "css-line-break": "^2.1.0",
        "text-segmentation": "^1.0.3"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/iceberg-js": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/iceberg-js/-/iceberg-js-0.8.1.tgz",
      "integrity": "sha512-1dhVQZXhcHje7798IVM+xoo/1ZdVfzOMIc8/rgVSijRK38EDqOJoGula9N/8ZI5RD8QTxNQtK/Gozpr+qUqRRA==",
      "license": "MIT",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/idb": {
      "version": "8.0.3",
      "resolved": "https://registry.npmjs.org/idb/-/idb-8.0.3.tgz",
      "integrity": "sha512-LtwtVyVYO5BqRvcsKuB2iUMnHwPVByPCXFXOpuU96IZPPoPN6xjOGxZQ74pgSVVLQWtUOYgyeL4GE98BY5D3wg==",
      "license": "ISC"
    },
    "node_modules/ieee754": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
      "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "BSD-3-Clause"
    },
    "node_modules/indent-string": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/indent-string/-/indent-string-4.0.0.tgz",
      "integrity": "sha512-EdDDZu4A2OyIK7Lr/2zG+w5jmbuk1DVBnEwREQvBzspBJkCEbRa8GxU1lghYcaGJCnRWibjDXlq779X1/y5xwg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "license": "ISC"
    },
    "node_modules/iobuffer": {
      "version": "5.4.0",
      "resolved": "https://registry.npmjs.org/iobuffer/-/iobuffer-5.4.0.tgz",
      "integrity": "sha512-DRebOWuqDvxunfkNJAlc3IzWIPD5xVxwUNbHr7xKB8E6aLJxIPfNX3CoMJghcFjpv6RWQsrcJbghtEwSPoJqMA==",
      "license": "MIT"
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-potential-custom-element-name": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
      "integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT",
      "peer": true
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsdom": {
      "version": "29.1.1",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-29.1.1.tgz",
      "integrity": "sha512-ECi4Fi2f7BdJtUKTflYRTiaMxIB0O6zfR1fX0GXpUrf6flp8QIYn1UT20YQqdSOfk2dfkCwS8LAFoJDEppNK5Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@asamuzakjp/css-color": "^5.1.11",
        "@asamuzakjp/dom-selector": "^7.1.1",
        "@bramus/specificity": "^2.4.2",
        "@csstools/css-syntax-patches-for-csstree": "^1.1.3",
        "@exodus/bytes": "^1.15.0",
        "css-tree": "^3.2.1",
        "data-urls": "^7.0.0",
        "decimal.js": "^10.6.0",
        "html-encoding-sniffer": "^6.0.0",
        "is-potential-custom-element-name": "^1.0.1",
        "lru-cache": "^11.3.5",
        "parse5": "^8.0.1",
        "saxes": "^6.0.0",
        "symbol-tree": "^3.2.4",
        "tough-cookie": "^6.0.1",
        "undici": "^7.25.0",
        "w3c-xmlserializer": "^5.0.0",
        "webidl-conversions": "^8.0.1",
        "whatwg-mimetype": "^5.0.0",
        "whatwg-url": "^16.0.1",
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24.0.0"
      },
      "peerDependencies": {
        "canvas": "^3.0.0"
      },
      "peerDependenciesMeta": {
        "canvas": {
          "optional": true
        }
      }
    },
    "node_modules/jsdom/node_modules/tr46": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-6.0.0.tgz",
      "integrity": "sha512-bLVMLPtstlZ4iMQHpFHTR7GAGj2jxi8Dg0s2h2MafAE4uSWF98FC/3MomU51iQAMf8/qDUbKWf5GxuvvVcXEhw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/jsdom/node_modules/undici": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/undici/-/undici-7.28.0.tgz",
      "integrity": "sha512-cRZYrTDwWznlnRiPjggAGxZXanty6M8RV1ff8Wm4LWXBp7/IG8v5DnOm74DtUBp9OONpK75YlPnIjQqX0dBDtA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20.18.1"
      }
    },
    "node_modules/jsdom/node_modules/webidl-conversions": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-8.0.1.tgz",
      "integrity": "sha512-BMhLD/Sw+GbJC21C/UgyaZX41nPt8bUTg+jWyDeg7e7YN4xOM05YPSIXceACnXVtqyEw/LMClUQMtMZ+PGGpqQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/jsdom/node_modules/whatwg-url": {
      "version": "16.0.1",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-16.0.1.tgz",
      "integrity": "sha512-1to4zXBxmXHV3IiSSEInrreIlu02vUOvrhxJJH5vcxYTBDAx51cqZiKdyTxlecdKNSjj8EcxGBxNf6Vg+945gw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@exodus/bytes": "^1.11.0",
        "tr46": "^6.0.0",
        "webidl-conversions": "^8.0.1"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=24.0.0"
      }
    },
    "node_modules/json-schema-to-ts": {
      "version": "1.6.4",
      "resolved": "https://registry.npmjs.org/json-schema-to-ts/-/json-schema-to-ts-1.6.4.tgz",
      "integrity": "sha512-pR4yQ9DHz6itqswtHCm26mw45FSNfQ9rEQjosaZErhn5J3J2sIViQiz8rDaezjKAhFGpmsoczYVBgGHzFw/stA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json-schema": "^7.0.6",
        "ts-toolbelt": "^6.15.5"
      }
    },
    "node_modules/json-schema-traverse": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-1.0.0.tgz",
      "integrity": "sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsonfile": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.2.1.tgz",
      "integrity": "sha512-zwOTdL3rFQ/lRdBnntKVOX6k5cKJwEc1HdilT71BWEu7J41gXIB2MRp+vxduPSwZJPWBxEzv4yH1wYLJGUHX4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "universalify": "^2.0.0"
      },
      "optionalDependencies": {
        "graceful-fs": "^4.1.6"
      }
    },
    "node_modules/jspdf": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/jspdf/-/jspdf-4.2.1.tgz",
      "integrity": "sha512-YyAXyvnmjTbR4bHQRLzex3CuINCDlQnBqoSYyjJwTP2x9jDLuKDzy7aKUl0hgx3uhcl7xzg32agn5vlie6HIlQ==",
      "license": "MIT",
      "dependencies": {
        "@babel/runtime": "^7.28.6",
        "fast-png": "^6.2.0",
        "fflate": "^0.8.1"
      },
      "optionalDependencies": {
        "canvg": "^3.0.11",
        "core-js": "^3.6.0",
        "dompurify": "^3.3.1",
        "html2canvas": "^1.0.0-rc.5"
      }
    },
    "node_modules/jspdf-autotable": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/jspdf-autotable/-/jspdf-autotable-5.0.8.tgz",
      "integrity": "sha512-Hy05N86yBO7CXBrnSLOge7i1ZYpKH2DjQ94iybaP7vBhSInjvRBgDc99ngKzSbSO8Jc98ZCally8I6n0tj2RJQ==",
      "license": "MIT",
      "peerDependencies": {
        "jspdf": "^2 || ^3 || ^4"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "11.5.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-11.5.1.tgz",
      "integrity": "sha512-RPimw/7aMdv2oqRrxKwvZXcPfwBrn/JZ2xYcY9Hus/6LaS3VOAKVWKWgNLCFSiOm1ESXinjsDlidVU7JlnCN2A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/lz-string": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/lz-string/-/lz-string-1.5.0.tgz",
      "integrity": "sha512-h5bgJWpxJNswbU7qCrV0tIKQCaS3blPDrqKWx+QxzuzL1zGUzij9XCWLrSLsJPu5t+eWA/ycetzYAO5IOMcWAQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "bin": {
        "lz-string": "bin/bin.js"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/mdn-data": {
      "version": "2.27.1",
      "resolved": "https://registry.npmjs.org/mdn-data/-/mdn-data-2.27.1.tgz",
      "integrity": "sha512-9Yubnt3e8A0OKwxYSXyhLymGW4sCufcLG6VdiDdUGVkPhpqLxlvP5vl1983gQjJl3tqbrM731mjaZaP68AgosQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/micromatch/node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mimic-response": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-3.1.0.tgz",
      "integrity": "sha512-z0yWI+4FDrrweS8Zmt4Ej5HdJmky15+L2e6Wgn3+iK5fWzb6T3fhNFq2+MeTRb064c6Wr4N/wv0DzQTjNzHNGQ==",
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/min-indent": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/min-indent/-/min-indent-1.0.1.tgz",
      "integrity": "sha512-I9jwMn07Sy/IwOj3zVkVik2JTvgpaykDZEigL6Rx6N9LbMywwUSMtxET+7lVoDLLd3O3IXwJwvuuns8UB/HeAg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/minimatch": {
      "version": "10.1.1",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.1.1.tgz",
      "integrity": "sha512-enIvLvRAFZYXJzkCYG5RKmPfrFArdLv+R+lbQ53BmIMLIry74bjKzX6iHAm8WYamJkhSSEabrWN5D97XnKObjQ==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/brace-expansion": "^5.0.0"
      },
      "engines": {
        "node": "20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.3.tgz",
      "integrity": "sha512-tEBHqDnIoM/1rXME1zgka9g6Q2lcoCkxHLuc7ODJ5BxbP5d4c2Z5cGgtXAku59200Cx7diuHTOYfSBD8n6mm8A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/minizlib": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-3.1.0.tgz",
      "integrity": "sha512-KZxYo1BUkWD2TVFLr0MQoM8vUUigWD3LlD83a/75BqC+4qE0Hb1Vo5v1FgcfaNXvfXzr+5EhQ6ing/CaBijTlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/mkdirp": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
      "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mkdirp": "bin/cmd.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/mkdirp-classic": {
      "version": "0.5.3",
      "resolved": "https://registry.npmjs.org/mkdirp-classic/-/mkdirp-classic-0.5.3.tgz",
      "integrity": "sha512-gKLcREMhtuZRwRAfqP3RFW+TK4JqApVBtOIftVgjuABpAtpxhPGaDcfvbhNvD0B8iD1oUr/txX35NjcaY6Ns/A==",
      "license": "MIT"
    },
    "node_modules/mri": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mri/-/mri-1.2.0.tgz",
      "integrity": "sha512-tzzskb3bG8LvYGFF/mDTpq3jpI6Q9wc3LEmBaghu+DdCssd1FakN7Bc0hVNmEyGq1bq3RgfkCb3cmQLpNPOroA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.15",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.15.tgz",
      "integrity": "sha512-y7Wygv/7mEOvxTuEQDB8StXdMRBWf1kR/tlhAzBRUFkB2jfcLOAxO/SHmOO2zgz1pVgK29/kyupn059/bCHdjA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-build-utils": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/napi-build-utils/-/napi-build-utils-2.0.0.tgz",
      "integrity": "sha512-GEbrYkbfF7MoNaoh2iGG84Mnf/WZfB0GdGEsM8wz7Expx/LlWf5U8t9nvJKXSp3qr5IsEbK04cBGhol/KwOsWA==",
      "license": "MIT"
    },
    "node_modules/node-abi": {
      "version": "3.94.0",
      "resolved": "https://registry.npmjs.org/node-abi/-/node-abi-3.94.0.tgz",
      "integrity": "sha512-W5ZNO5KRPB5TkYmGVD9F6YqhsglXJzE6etpbmT+f6EQElhiX/UTG551cnsRGvLG3fyZEg9HwaDmNmj5nwJ4z9g==",
      "license": "MIT",
      "dependencies": {
        "semver": "^7.3.5"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/node-addon-api": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-7.1.1.tgz",
      "integrity": "sha512-5m3bsyrjFWE1xf7nz7YXdN4udnVtXK6/Yfgn5qnahL6bCkf2yKt4k3nuTKAtT4r3IG8JNR2ncsIMdZuAzJjHQQ==",
      "license": "MIT"
    },
    "node_modules/node-fetch": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.9.tgz",
      "integrity": "sha512-DJm/CJkZkRjKKj4Zi4BsKVZh3ValV5IR5s7LVZnW+6YMh0W1BfNA8XSs6DLMGYlId5F3KnA70uu2qepcR08Qqg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      },
      "peerDependencies": {
        "encoding": "^0.1.0"
      },
      "peerDependenciesMeta": {
        "encoding": {
          "optional": true
        }
      }
    },
    "node_modules/node-gyp-build": {
      "version": "4.8.4",
      "resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.8.4.tgz",
      "integrity": "sha512-LA4ZjwlnUblHVgq0oBF3Jl/6h/Nvs5fzBLwdEF4nuxnFdsfajde4WfxtJr3CaiH+F6ewcIB/q4jQ4UzPyid+CQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "node-gyp-build": "bin.js",
        "node-gyp-build-optional": "optional.js",
        "node-gyp-build-test": "build-test.js"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.50",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.50.tgz",
      "integrity": "sha512-J6l92tKHX6w8Jy5nO1Vuc01NoIiRGi/d6qBKVxh+IQ8Cr3b6HbVNfKiF8ZpFKufTwpwxMmce2W3iQZ861ZRyTg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/nopt": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-8.1.0.tgz",
      "integrity": "sha512-ieGu42u/Qsa4TFktmaKEwM6MQH0pOWnaB3htzh0JRtx84+Mebc0cbZYN5bC+6WTZ4+77xrL9Pn5m7CV6VIkV7A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "abbrev": "^3.0.0"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": "^18.17.0 || >=20.5.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/obug": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/obug/-/obug-2.1.3.tgz",
      "integrity": "sha512-9miFgM2OFba7hB+pRgvtV84pYTBaoTHohvmIgiRt6dRIzbwEOIaNaP+dIlGs2fNFoB0SeISs0Jz5WFVRid6Xyg==",
      "dev": true,
      "funding": [
        "https://github.com/sponsors/sxzz",
        "https://opencollective.com/debug"
      ],
      "license": "MIT",
      "engines": {
        "node": ">=12.20.0"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/openai": {
      "version": "6.45.0",
      "resolved": "https://registry.npmjs.org/openai/-/openai-6.45.0.tgz",
      "integrity": "sha512-5DQVNErssk0afNpTTHUm/qZPU4iKR9OYdNid8Ib4puq4gHNNvGWZht2zY4h9a8JMF949Ik6m8gQutllVPbjdnw==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@aws-sdk/credential-provider-node": ">=3.972.0 <4",
        "@smithy/hash-node": ">=4.3.0 <5",
        "@smithy/signature-v4": ">=5.4.0 <6",
        "ws": "^8.18.0",
        "zod": "^3.25 || ^4.0"
      },
      "peerDependenciesMeta": {
        "@aws-sdk/credential-provider-node": {
          "optional": true
        },
        "@smithy/hash-node": {
          "optional": true
        },
        "@smithy/signature-v4": {
          "optional": true
        },
        "ws": {
          "optional": true
        },
        "zod": {
          "optional": true
        }
      }
    },
    "node_modules/oxlint": {
      "version": "1.72.0",
      "resolved": "https://registry.npmjs.org/oxlint/-/oxlint-1.72.0.tgz",
      "integrity": "sha512-1rhdZIP/EvoI91ABIwNU5Q8+bWf8mjrS5UzIOZld4d4bXxJvtlUhlQvaoTogIGin/qdErMOrwaIJvCSIAKTLhA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "oxlint": "bin/oxlint"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      },
      "optionalDependencies": {
        "@oxlint/binding-android-arm-eabi": "1.72.0",
        "@oxlint/binding-android-arm64": "1.72.0",
        "@oxlint/binding-darwin-arm64": "1.72.0",
        "@oxlint/binding-darwin-x64": "1.72.0",
        "@oxlint/binding-freebsd-x64": "1.72.0",
        "@oxlint/binding-linux-arm-gnueabihf": "1.72.0",
        "@oxlint/binding-linux-arm-musleabihf": "1.72.0",
        "@oxlint/binding-linux-arm64-gnu": "1.72.0",
        "@oxlint/binding-linux-arm64-musl": "1.72.0",
        "@oxlint/binding-linux-ppc64-gnu": "1.72.0",
        "@oxlint/binding-linux-riscv64-gnu": "1.72.0",
        "@oxlint/binding-linux-riscv64-musl": "1.72.0",
        "@oxlint/binding-linux-s390x-gnu": "1.72.0",
        "@oxlint/binding-linux-x64-gnu": "1.72.0",
        "@oxlint/binding-linux-x64-musl": "1.72.0",
        "@oxlint/binding-openharmony-arm64": "1.72.0",
        "@oxlint/binding-win32-arm64-msvc": "1.72.0",
        "@oxlint/binding-win32-ia32-msvc": "1.72.0",
        "@oxlint/binding-win32-x64-msvc": "1.72.0"
      },
      "peerDependencies": {
        "oxlint-tsgolint": ">=0.22.1",
        "vite-plus": "*"
      },
      "peerDependenciesMeta": {
        "oxlint-tsgolint": {
          "optional": true
        },
        "vite-plus": {
          "optional": true
        }
      }
    },
    "node_modules/pako": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/pako/-/pako-2.2.0.tgz",
      "integrity": "sha512-zJq6RP/5q+TO2OpFV3FHzlPnFjmkb7Nc99a5SNjJE+uu/PkpChs+NIZSSzbBoD+6kjiISXjfYdwj1ZRQ81dz/w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/puzrin"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/nodeca"
        }
      ],
      "license": "(MIT AND Zlib)"
    },
    "node_modules/parse-ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/parse-ms/-/parse-ms-2.1.0.tgz",
      "integrity": "sha512-kHt7kzLoS9VBZfUsiKjv43mr91ea+U05EyKkEtqp7vNbHxmaVuEqN7XxeEVnGrMtYOAxGrDElSi96K7EgO1zCA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse5": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-8.0.1.tgz",
      "integrity": "sha512-z1e/HMG90obSGeidlli3hj7cbocou0/wa5HacvI3ASx34PecNjNQeaHNo5WIZpWofN9kgkqV1q5YvXe3F0FoPw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "entities": "^8.0.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/path-browserify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-browserify/-/path-browserify-1.0.1.tgz",
      "integrity": "sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-scurry": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-2.0.2.tgz",
      "integrity": "sha512-3O/iVVsJAPsOnpwWIeD+d6z/7PmqApyQePUtCndjatj/9I5LylHvt5qluFaBT3I5h3r1ejfR056c+FCv+NnNXg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^11.0.0",
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-6.1.0.tgz",
      "integrity": "sha512-h9DqehX3zZZDCEm+xbfU0ZmwCGFCAAraPJWMXJ4+v32NjZJilVg3k1TcKsRgIb8IQ/izZSaydDc1OhJCZvs2Dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/path-to-regexp-updated": {
      "name": "path-to-regexp",
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-6.3.0.tgz",
      "integrity": "sha512-Yhpw4T9C6hPpgPeA28us07OJeqZ5EzQTkbfwuhsUg0c237RomFoETJgmp2sa3F/41gfLE6G5cqcYwznmeEeOlQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/performance-now": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha512-7EAHlyLHI56VEIdK57uwHdHKIaAGbnXPiw0yWbarQZOKaKpvUIgW0jWRVLiatnM+XXlSwsanIBH/hzGMJulMow==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
      "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.16",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.16.tgz",
      "integrity": "sha512-vuwillviilfKZsg0VGj5R/YwwcHx4SLsIOI/7K6mQkWx+l5cUHTjj5g0AasTBcyXsbfTgrwsUNmVUb5xVwyPwg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.12",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prebuild-install": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/prebuild-install/-/prebuild-install-7.1.3.tgz",
      "integrity": "sha512-8Mf2cbV7x1cXPUILADGI3wuhfqWvtiLA1iclTDbFRZkgRQS0NqsPZphna9V+HyTEadheuPmjaJMsbzKQFOzLug==",
      "deprecated": "No longer maintained. Please contact the author of the relevant native addon; alternatives are available.",
      "license": "MIT",
      "dependencies": {
        "detect-libc": "^2.0.0",
        "expand-template": "^2.0.3",
        "github-from-package": "0.0.0",
        "minimist": "^1.2.3",
        "mkdirp-classic": "^0.5.3",
        "napi-build-utils": "^2.0.0",
        "node-abi": "^3.3.0",
        "pump": "^3.0.0",
        "rc": "^1.2.7",
        "simple-get": "^4.0.0",
        "tar-fs": "^2.0.0",
        "tunnel-agent": "^0.6.0"
      },
      "bin": {
        "prebuild-install": "bin.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/pretty-format": {
      "version": "27.5.1",
      "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-27.5.1.tgz",
      "integrity": "sha512-Qb1gy5OrP5+zDf2Bvnzdl3jsTf1qXVMazbvCoKhtKqVs4/YK4ozX4gKQJJVyNe+cajNPn0KoC0MC3FUmaHWEmQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "ansi-regex": "^5.0.1",
        "ansi-styles": "^5.0.0",
        "react-is": "^17.0.1"
      },
      "engines": {
        "node": "^10.13.0 || ^12.13.0 || ^14.15.0 || >=15.0.0"
      }
    },
    "node_modules/pretty-format/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pretty-format/node_modules/ansi-styles": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
      "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/pretty-format/node_modules/react-is": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
      "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w==",
      "dev": true,
      "license": "MIT",
      "peer": true
    },
    "node_modules/pretty-ms": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/pretty-ms/-/pretty-ms-7.0.1.tgz",
      "integrity": "sha512-973driJZvxiGOQ5ONsFhOF/DtzPMOMtgC11kCpUrPGMTgqp2q/1gwzCquocrN33is0VZ5GFHXZYMM9l6h67v2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parse-ms": "^2.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/pump": {
      "version": "3.0.4",
      "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.4.tgz",
      "integrity": "sha512-VS7sjc6KR7e1ukRFhQSY5LM2uBWAUPiOPa/A3mkKmiMwSmRFUITt0xuj+/lesgnCv+dPIEYlkzrcyXgquIHMcA==",
      "license": "MIT",
      "dependencies": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/raf": {
      "version": "3.4.1",
      "resolved": "https://registry.npmjs.org/raf/-/raf-3.4.1.tgz",
      "integrity": "sha512-Sq4CW4QhwOHE8ucn6J34MqtZCeWFP2aQSmrlroYgqAV1PjStIhJXxYuTgUIfkEk7zTLjmIjLmU5q+fbD1NnOJA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "performance-now": "^2.1.0"
      }
    },
    "node_modules/rc": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
      "integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
      "license": "(BSD-2-Clause OR MIT OR Apache-2.0)",
      "dependencies": {
        "deep-extend": "^0.6.0",
        "ini": "~1.3.0",
        "minimist": "^1.2.0",
        "strip-json-comments": "~2.0.1"
      },
      "bin": {
        "rc": "cli.js"
      }
    },
    "node_modules/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.7.tgz",
      "integrity": "sha512-HNe9WslTbXmFK8o8cmwgAeJFSBvt1bPdHCVKtaaV+WlAN36mpT4hcRpwbf3fY56ar2oIXzsBpOAiIRHAdY0OlQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.7.tgz",
      "integrity": "sha512-t0BRVXvbiE/o20Hfw669rLbMCDWtYZLvmJigy2f0MxsXF+71pxhR3xOkspmsO8h3ZlNzyibAmtCa3l4lYKk6gQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.7"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "license": "MIT",
      "peer": true
    },
    "node_modules/react-signature-canvas": {
      "version": "1.1.0-alpha.2",
      "resolved": "https://registry.npmjs.org/react-signature-canvas/-/react-signature-canvas-1.1.0-alpha.2.tgz",
      "integrity": "sha512-tKUNk3Gmh04Ug4K8p5g8Is08BFUKvbXxi0PyetQ/f8OgCBzcx4vqNf9+OArY/TdNdfHtswXQNRwZD6tyELjkjQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "@babel/runtime": "^7.17.9",
        "@types/signature_pad": "^2.3.0",
        "signature_pad": "^2.3.2",
        "trim-canvas": "^0.1.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/agilgur5"
      },
      "peerDependencies": {
        "@types/prop-types": "^15.7.3",
        "@types/react": "0.14 - 19",
        "prop-types": "^15.5.8",
        "react": "0.14 - 19",
        "react-dom": "0.14 - 19"
      },
      "peerDependenciesMeta": {
        "@types/prop-types": {
          "optional": true
        },
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/readable-stream": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.2.tgz",
      "integrity": "sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==",
      "license": "MIT",
      "dependencies": {
        "inherits": "^2.0.3",
        "string_decoder": "^1.1.1",
        "util-deprecate": "^1.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/redent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/redent/-/redent-3.0.0.tgz",
      "integrity": "sha512-6tDA8g98We0zd0GvVeMT9arEOnTw9qM03L9cJXaCjrip1OO764RDBLBfrB4cwzNGDj5OA5ioymC9GkizgWJDUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "indent-string": "^4.0.0",
        "strip-indent": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/regenerator-runtime": {
      "version": "0.13.11",
      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.11.tgz",
      "integrity": "sha512-kY1AZVr2Ra+t+piVaJ4gxaFaReZVH40AKNo7UCX6W+dEwBo/2oZJzqfuN1qLq1oL45o56cPaTXELwrTh8Fpggg==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/require-from-string": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/require-from-string/-/require-from-string-2.0.2.tgz",
      "integrity": "sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/resolve-from": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
      "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rgbcolor": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/rgbcolor/-/rgbcolor-1.0.1.tgz",
      "integrity": "sha512-9aZLIrhRaD97sgVhtJOW6ckOEh6/GnvQtdVNfdZ6s67+3/XwLS9lBcQYzEEhYVeUowN7pRzMLsyGhK2i/xvWbw==",
      "license": "MIT OR SEE LICENSE IN FEEL-FREE.md",
      "optional": true,
      "engines": {
        "node": ">= 0.8.15"
      }
    },
    "node_modules/rolldown": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.1.4.tgz",
      "integrity": "sha512-IjZYiLxZwpnhwhdBH2ugdTGVSdhCQUmLxLoqyjiL0JxYjyRst+5a0P3xfrTxJ5F638j4Mvvw5FAX5XE6eHpXbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.138.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.1.4",
        "@rolldown/binding-darwin-arm64": "1.1.4",
        "@rolldown/binding-darwin-x64": "1.1.4",
        "@rolldown/binding-freebsd-x64": "1.1.4",
        "@rolldown/binding-linux-arm-gnueabihf": "1.1.4",
        "@rolldown/binding-linux-arm64-gnu": "1.1.4",
        "@rolldown/binding-linux-arm64-musl": "1.1.4",
        "@rolldown/binding-linux-ppc64-gnu": "1.1.4",
        "@rolldown/binding-linux-s390x-gnu": "1.1.4",
        "@rolldown/binding-linux-x64-gnu": "1.1.4",
        "@rolldown/binding-linux-x64-musl": "1.1.4",
        "@rolldown/binding-openharmony-arm64": "1.1.4",
        "@rolldown/binding-wasm32-wasi": "1.1.4",
        "@rolldown/binding-win32-arm64-msvc": "1.1.4",
        "@rolldown/binding-win32-x64-msvc": "1.1.4"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/rxjs": {
      "version": "7.8.2",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.2.tgz",
      "integrity": "sha512-dhKf903U/PQZY6boNNtAGdWbG85WAbjT/1xYoZIC7FAY0yWapOBQVsVrDl58W86//e1VpMNBtRV4MaXfdMySFA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/saxes": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/saxes/-/saxes-6.0.0.tgz",
      "integrity": "sha512-xAg7SOnEhrm5zI3puOOKyy1OMcMlIJZYNJY7xLBwSze0UjhPLnWfj2GF2EpT0jmzaJKIWKHLsaSSajf35bcYnA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "xmlchars": "^2.2.0"
      },
      "engines": {
        "node": ">=v12.22.7"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shell-quote": {
      "version": "1.8.4",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.4.tgz",
      "integrity": "sha512-VsC6n6vz1ihYYyZZwX7YZSF5l5x36ca17OC+a69h94YqB7X6XLwf+5MOgynYir2SLFUbl8gIYvBo8K8RoNQ6bQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/siginfo": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/siginfo/-/siginfo-2.0.0.tgz",
      "integrity": "sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/signal-exit": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.0.2.tgz",
      "integrity": "sha512-MY2/qGx4enyjprQnFaZsHib3Yadh3IXyV2C321GY0pjGfVBu4un0uDJkwgdxqO+Rdx8JMT8IfJIRwbYVz3Ob3Q==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/signature_pad": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/signature_pad/-/signature_pad-2.3.2.tgz",
      "integrity": "sha512-peYXLxOsIY6MES2TrRLDiNg2T++8gGbpP2yaC+6Ohtxr+a2dzoaqWosWDY9sWqTAAk6E/TyQO+LJw9zQwyu5kA==",
      "license": "MIT"
    },
    "node_modules/simple-concat": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz",
      "integrity": "sha512-cSFtAPtRhljv69IK0hTVZQ+OfE9nePi/rtJmw5UjHeVyVroEqJXP1sFztKUy1qU+xvz3u/sfYJLa947b7nAN2Q==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/simple-get": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/simple-get/-/simple-get-4.0.1.tgz",
      "integrity": "sha512-brv7p5WgH0jmQJr1ZDDfKDOSeWWg+OVypG99A/5vYGPqJ6pxiaHLy8nxtFjBA7oMa01ebA9gfh1uMCFqOuXxvA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "decompress-response": "^6.0.0",
        "once": "^1.3.1",
        "simple-concat": "^1.0.0"
      }
    },
    "node_modules/smol-toml": {
      "version": "1.5.2",
      "resolved": "https://registry.npmjs.org/smol-toml/-/smol-toml-1.5.2.tgz",
      "integrity": "sha512-QlaZEqcAH3/RtNyet1IPIYPsEWAaYyXXv1Krsi+1L/QHppjX4Ifm8MQsBISz9vE8cHicIq3clogsheili5vhaQ==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "url": "https://github.com/sponsors/cyyynthia"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stackback": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/stackback/-/stackback-0.0.2.tgz",
      "integrity": "sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/stackblur-canvas": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/stackblur-canvas/-/stackblur-canvas-2.7.0.tgz",
      "integrity": "sha512-yf7OENo23AGJhBriGx0QivY5JP6Y1HbrrDI6WLt6C5auYZXlQrheoY8hD4ibekFKz1HOfE48Ww8kMWMnJD/zcQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=0.1.14"
      }
    },
    "node_modules/std-env": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/std-env/-/std-env-4.1.0.tgz",
      "integrity": "sha512-Rq7ybcX2RuC55r9oaPVEW7/xu3tj8u4GeBYHBWCychFtzMIr86A7e3PPEBPT37sHStKX3+TiX/Fr/ACmJLVlLQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/string_decoder": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
      "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
      "license": "MIT",
      "dependencies": {
        "safe-buffer": "~5.2.0"
      }
    },
    "node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/strip-indent": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-indent/-/strip-indent-3.0.0.tgz",
      "integrity": "sha512-laJTa3Jb+VQpaC6DseHhF7dXVqHTfJPCRDaEbid/drOhgitgYku/letMUqOXFoWV0zIIUbjpdH2t+tYj4bQMRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "min-indent": "^1.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha512-4gB8na07fecVVkOI6Rs4e7T6NOTki5EmL7TUduTs6bu3EdnSycntVJ4re8kgZA+wx9IueI2Y11bfbgwtzuE0KQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stripe": {
      "version": "22.3.0",
      "resolved": "https://registry.npmjs.org/stripe/-/stripe-22.3.0.tgz",
      "integrity": "sha512-ypO6xjVrMWs9SmIMeHr8naCx3dAQ0clxMdUTxn7Ejd7hmY9meBGfE+N4pVHkf9sUNebAHp6uJo6mV3GxDIc2cA==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "@types/node": ">=18"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/supports-color": {
      "version": "10.2.2",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-10.2.2.tgz",
      "integrity": "sha512-SS+jx45GF1QjgEXQx4NJZV9ImqmO2NPz5FNsIHrsDjh2YsHnawpan7SNQ1o8NuhrbHZy9AZhIoCUiCeaW/C80g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/svg-pathdata": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/svg-pathdata/-/svg-pathdata-6.0.3.tgz",
      "integrity": "sha512-qsjeeq5YjBZ5eMdFuUa4ZosMLxgr5RZ+F+Y1OrDhuOCEInRMA3x74XdBtggJcj9kOeInz0WE+LgCPDkZFlBYJw==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tailwindcss": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.2.tgz",
      "integrity": "sha512-WtctNNSH8A9jlMIqxzuYumOHU5uGZyRv0Q5svQl+oEPy5w84YpBxdb7MdqyiSPQge5jTJ6zFQLq0PFygdccSBA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tar": {
      "version": "7.5.19",
      "resolved": "https://registry.npmjs.org/tar/-/tar-7.5.19.tgz",
      "integrity": "sha512-4LeEWl96twnS2Q7Bz4MGqgazLqO+hJN63GZxXoIqh1T3VweYD997gbU1ItNsQafqqXTXd5WFyFdReLtwvRBNiw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/fs-minipass": "^4.0.0",
        "chownr": "^3.0.0",
        "minipass": "^7.1.2",
        "minizlib": "^3.1.0",
        "yallist": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/tar-fs": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/tar-fs/-/tar-fs-2.1.5.tgz",
      "integrity": "sha512-OboTd8mmMhZDNPV+UjQcK9yKAatXu2aJ+r1w4im1Otd4M4fl2hwvdoXUxIYHFTHWK/3y3FarBP70v3vwmGlOxw==",
      "license": "MIT",
      "dependencies": {
        "chownr": "^1.1.1",
        "mkdirp-classic": "^0.5.2",
        "pump": "^3.0.0",
        "tar-stream": "^2.1.4"
      }
    },
    "node_modules/tar-fs/node_modules/chownr": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
      "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",
      "license": "ISC"
    },
    "node_modules/tar-stream": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-2.2.0.tgz",
      "integrity": "sha512-ujeqbceABgwMZxEJnk2HDY2DlnUZ+9oEcb1KzTVfYHio0UE6dG71n60d8D2I4qNvleWrrXpmjpt7vZeF1LnMZQ==",
      "license": "MIT",
      "dependencies": {
        "bl": "^4.0.3",
        "end-of-stream": "^1.4.1",
        "fs-constants": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^3.1.1"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/text-segmentation": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/text-segmentation/-/text-segmentation-1.0.3.tgz",
      "integrity": "sha512-iOiPUo/BGnZ6+54OsWxZidGCsdU8YbE4PSpdPinp7DeMtUJNJBoJ/ouUSTJjHkh1KntHaltHl/gDs2FC4i5+Nw==",
      "license": "MIT",
      "dependencies": {
        "utrie": "^1.0.2"
      }
    },
    "node_modules/time-span": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/time-span/-/time-span-4.0.0.tgz",
      "integrity": "sha512-MyqZCTGLDZ77u4k+jqg4UlrzPTPZ49NDlaekU6uuFaJLzPIN1woaRXCbGeqOfxwc3Y37ZROGAJ614Rdv7Olt+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "convert-hrtime": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/tinybench": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/tinybench/-/tinybench-2.9.0.tgz",
      "integrity": "sha512-0+DUvqWMValLmha6lr4kD8iAMK1HzV0/aKnCtWb9v9641TnP/MFb7Pc2bxoxQjTXAErryXVgUOfv2YqNllqGeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinyexec": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-1.2.4.tgz",
      "integrity": "sha512-SHf/r48b7vOrjve9PxJo3MN5v5yuyjHvdUcrQffT3WXMUfnGmHDVbC4k3sHJaJTgZCwpUplIaAo5ANtMyp3YHg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyrainbow": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/tinyrainbow/-/tinyrainbow-3.1.0.tgz",
      "integrity": "sha512-Bf+ILmBgretUrdJxzXM0SgXLZ3XfiaUuOj/IKQHuTXip+05Xn+uyEYdVg0kYDipTBcLrCVyUzAPz7QmArb0mmw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tldts": {
      "version": "7.4.6",
      "resolved": "https://registry.npmjs.org/tldts/-/tldts-7.4.6.tgz",
      "integrity": "sha512-rbP0Gyx8b3Ae9yO//CU2wbSnQNoQ66m1nJdSbSHmnwKwzkkz/u8mERYU8T2rmlmy+bJvRNn84yNCW8gYqox44Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tldts-core": "^7.4.6"
      },
      "bin": {
        "tldts": "bin/cli.js"
      }
    },
    "node_modules/tldts-core": {
      "version": "7.4.6",
      "resolved": "https://registry.npmjs.org/tldts-core/-/tldts-core-7.4.6.tgz",
      "integrity": "sha512-TkQNGJIhlEphpHCjKodMTSe23egUZr/g+flI2qkLgiJ/maAzSgXypSLRTNH3nCmqgayEmtcJBiLcfODSAr1xoA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/tough-cookie": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-6.0.1.tgz",
      "integrity": "sha512-LktZQb3IeoUWB9lqR5EWTHgW/VTITCXg4D21M+lvybRVdylLrRMnqaIONLVb5mav8vM19m44HIcGq4qASeu2Qw==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "tldts": "^7.0.5"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tree-kill": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
      "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "tree-kill": "cli.js"
      }
    },
    "node_modules/trim-canvas": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/trim-canvas/-/trim-canvas-0.1.2.tgz",
      "integrity": "sha512-nd4Ga3iLFV94mdhW9JFMLpQbHUyCQuhFOD71PEAt1NjtMD5wbZctzhX8c3agHNybMR5zXD1XTGoIEWk995E6pQ==",
      "license": "Apache-2.0"
    },
    "node_modules/ts-morph": {
      "version": "12.0.0",
      "resolved": "https://registry.npmjs.org/ts-morph/-/ts-morph-12.0.0.tgz",
      "integrity": "sha512-VHC8XgU2fFW7yO1f/b3mxKDje1vmyzFXHWzOYmKEkCEwcLjDtbdLgBQviqj4ZwP4MJkQtRo6Ha2I29lq/B+VxA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@ts-morph/common": "~0.11.0",
        "code-block-writer": "^10.1.1"
      }
    },
    "node_modules/ts-toolbelt": {
      "version": "6.15.5",
      "resolved": "https://registry.npmjs.org/ts-toolbelt/-/ts-toolbelt-6.15.5.tgz",
      "integrity": "sha512-FZIXf1ksVyLcfr7M317jbB67XFJhOO1YqdTcuGaq9q5jLUoTikukZ+98TPjKiP2jC5CgmYdWWYs0s2nLSU0/1A==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tsx": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.21.0.tgz",
      "integrity": "sha512-5C1sg4USs1lfG0GFb2RLXsdpXqBSEhAaA/0kPL01wxzpMqLILNxIxIOKiILz+cdg/pLnOUxFYOR5yhHU666wbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.27.0",
        "get-tsconfig": "^4.7.5"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/tunnel-agent": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha512-McnNiV1l8RYeY8tBgEpuodCC1mLUdbSN+CYBL7kJsJNInOP8UjDDEwdk6Mw60vdLLrr5NHKZhMAOSrR2NZuQ+w==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/typescript": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-6.0.3.tgz",
      "integrity": "sha512-y2TvuxSZPDyQakkFRPZHKFm+KKVqIisdg9/CZwm9ftvKXLP8NRWj38/ODjNbr43SsoXqNuAisEf1GdCxqWcdBw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici": {
      "version": "5.28.4",
      "resolved": "https://registry.npmjs.org/undici/-/undici-5.28.4.tgz",
      "integrity": "sha512-72RFADWFqKmUb2hmmvNODKL3p9hcB6Gt2DOQMis1SEBaV6a4MH8soBvzg+95CYhCKPFedut2JY9bMfrDl9D23g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@fastify/busboy": "^2.0.0"
      },
      "engines": {
        "node": ">=14.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.18.2",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.18.2.tgz",
      "integrity": "sha512-AsuCzffGHJybSaRrmr5eHr81mwJU3kjw6M+uprWvCXiNeN9SOGwQ3Jn8jb8m3Z6izVgknn1R0FTCEAP2QrLY/w==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/universalify": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.1.tgz",
      "integrity": "sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10.0.0"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "license": "MIT"
    },
    "node_modules/utrie": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/utrie/-/utrie-1.0.2.tgz",
      "integrity": "sha512-1MLa5ouZiOmQzUbjbu9VmjLzn1QLXBhwpUa7kdLUQK+KQ5KA9I1vk5U4YHe/X2Ch7PYnJfWuWT+VbuxbGwljhw==",
      "license": "MIT",
      "dependencies": {
        "base64-arraybuffer": "^1.0.2"
      }
    },
    "node_modules/vite": {
      "version": "8.1.3",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.1.3.tgz",
      "integrity": "sha512-Ds+gBRbj0lwRO2Y5hwnUBdxSwlAve9LeRyU4sNnAr0ewW0gWF0n5bgXgUzbgZ49MV9BVUAQUFYVcDUcilUExMA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lightningcss": "^1.32.0",
        "picomatch": "^4.0.4",
        "postcss": "^8.5.16",
        "rolldown": "~1.1.3",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.3.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vitest": {
      "version": "4.1.9",
      "resolved": "https://registry.npmjs.org/vitest/-/vitest-4.1.9.tgz",
      "integrity": "sha512-nE3/LEyc0z87uHYLZebqCUOaJr2hdtuPp7BQ4BosVFnfltxgAvMG08NyrSGlPpOUWvR27c5flSmYFTNr78L9GQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/expect": "4.1.9",
        "@vitest/mocker": "4.1.9",
        "@vitest/pretty-format": "4.1.9",
        "@vitest/runner": "4.1.9",
        "@vitest/snapshot": "4.1.9",
        "@vitest/spy": "4.1.9",
        "@vitest/utils": "4.1.9",
        "es-module-lexer": "^2.0.0",
        "expect-type": "^1.3.0",
        "magic-string": "^0.30.21",
        "obug": "^2.1.1",
        "pathe": "^2.0.3",
        "picomatch": "^4.0.3",
        "std-env": "^4.0.0-rc.1",
        "tinybench": "^2.9.0",
        "tinyexec": "^1.0.2",
        "tinyglobby": "^0.2.15",
        "tinyrainbow": "^3.1.0",
        "vite": "^6.0.0 || ^7.0.0 || ^8.0.0",
        "why-is-node-running": "^2.3.0"
      },
      "bin": {
        "vitest": "vitest.mjs"
      },
      "engines": {
        "node": "^20.0.0 || ^22.0.0 || >=24.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "@edge-runtime/vm": "*",
        "@opentelemetry/api": "^1.9.0",
        "@types/node": "^20.0.0 || ^22.0.0 || >=24.0.0",
        "@vitest/browser-playwright": "4.1.9",
        "@vitest/browser-preview": "4.1.9",
        "@vitest/browser-webdriverio": "4.1.9",
        "@vitest/coverage-istanbul": "4.1.9",
        "@vitest/coverage-v8": "4.1.9",
        "@vitest/ui": "4.1.9",
        "happy-dom": "*",
        "jsdom": "*",
        "vite": "^6.0.0 || ^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "@edge-runtime/vm": {
          "optional": true
        },
        "@opentelemetry/api": {
          "optional": true
        },
        "@types/node": {
          "optional": true
        },
        "@vitest/browser-playwright": {
          "optional": true
        },
        "@vitest/browser-preview": {
          "optional": true
        },
        "@vitest/browser-webdriverio": {
          "optional": true
        },
        "@vitest/coverage-istanbul": {
          "optional": true
        },
        "@vitest/coverage-v8": {
          "optional": true
        },
        "@vitest/ui": {
          "optional": true
        },
        "happy-dom": {
          "optional": true
        },
        "jsdom": {
          "optional": true
        },
        "vite": {
          "optional": false
        }
      }
    },
    "node_modules/vitest/node_modules/es-module-lexer": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-2.3.0.tgz",
      "integrity": "sha512-KLdwQm2NvGLDkQDCGvmiQrhkd0JbMzXthwQAUgWjQuQdBLFa3eiBP5arXZyA+f8x+x7OXgud6bq2rxjGtHV2tw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/w3c-xmlserializer": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-5.0.0.tgz",
      "integrity": "sha512-o8qghlI8NZHU1lLPrpi2+Uq7abh4GGPpYANlalzWxyWteJOCsr/P+oPBA49TOLu5FTZO4d3F9MnWJfiMo4BkmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/whatwg-mimetype": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-5.0.0.tgz",
      "integrity": "sha512-sXcNcHOC51uPGF0P/D4NVtrkjSU2fNsm9iog4ZvZJsL3rjoDAzXZhkm2MWt1y+PUdggKAYVoMAIYcs78wJ51Cw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/why-is-node-running": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/why-is-node-running/-/why-is-node-running-2.3.0.tgz",
      "integrity": "sha512-hUrmaWBdVDcxvYqnyh09zunKzROWjbZTiNy8dBEjkS7ehEDQibXJ7XvlmtbwuTclUiIyN+CyXQD4Vmko8fNm8w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "siginfo": "^2.0.0",
        "stackback": "0.0.2"
      },
      "bin": {
        "why-is-node-running": "cli.js"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.2.tgz",
      "integrity": "sha512-42AtmgqjV+X1VpdOfyTGOYRi0/zsoLqtXQckTmqTeybT+BDIbM/Guxo7x3pE2vtpr1ok6xRqM9OpBe+Jyoqyww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.2.1",
        "string-width": "^7.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/xml-name-validator": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-5.0.0.tgz",
      "integrity": "sha512-EvGK8EJ3DhaHfbRlETOWAS5pO9MZITeauHKJyb8wyajUfQUenkIg2MvLDTZ4T/TgIcm3HU0TFBgWWboAZ30UHg==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/xmlchars": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
      "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yallist": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-5.0.0.tgz",
      "integrity": "sha512-YgvUTfwqyc7UXVMrB+SImsVYSmTS8X/tSrtdNZMImM+n7+QTriRXyXim0mBrTXNeqzVF0KWGgHPeiyViFFrNDw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/yaml": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.9.0.tgz",
      "integrity": "sha512-2AvhNX3mb8zd6Zy7INTtSpl1F15HW6Wnqj0srWlkKLcpYl/gMIMJiyuGq2KeI2YFxUPjdlB+3Lc10seMLtL4cA==",
      "dev": true,
      "license": "ISC",
      "optional": true,
      "peer": true,
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/eemeli"
      }
    },
    "node_modules/yargs": {
      "version": "18.0.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-18.0.0.tgz",
      "integrity": "sha512-4UEqdc2RYGHZc7Doyqkrqiln3p9X2DZVxaGbwhn2pi7MrRagKaOcIKe8L3OxYcbhXLgLFUS3zAYuQjKBQgmuNg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^9.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "string-width": "^7.2.0",
        "y18n": "^5.0.5",
        "yargs-parser": "^22.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=23"
      }
    },
    "node_modules/yargs-parser": {
      "version": "22.0.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-22.0.0.tgz",
      "integrity": "sha512-rwu/ClNdSMpkSrUb+d6BRsSkLUq1fmfsY6TOpYzTwvwkg1/NRG85KBy3kq++A8LKQwX6lsu+aWad+2khvuXrqw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=23"
      }
    },
    "node_modules/zod": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.4.3.tgz",
      "integrity": "sha512-ytENFjIJFl2UwYglde2jchW2Hwm4GJFLDiSXWdTrJQBIN9Fcyp7n4DhxJEiWNAJMV1/BqWfW/kkg71UDcHJyTQ==",
      "license": "MIT",
      "optional": true,
      "peer": true,
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

```

---

## Arquivo: src\todeacordo\package.json
```json
{
  "name": "todeacordo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "oxlint",
    "preview": "vite preview",
    "start:backend": "node backend/server.js",
    "watch:extension": "vite build --watch",
    "dev:todeacordo": "concurrently \"npm run watch:extension\" \"npm run start:backend\"",
    "deploy:api": "cd ../../ && npx vercel --prod --yes"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.110.0",
    "canvas": "^3.2.3",
    "canvas-confetti": "^1.9.4",
    "html2canvas": "^1.4.1",
    "idb": "^8.0.3",
    "jspdf": "^4.2.1",
    "jspdf-autotable": "^5.0.8",
    "openai": "^6.45.0",
    "react": "^19.2.7",
    "react-dom": "^19.2.7",
    "react-signature-canvas": "^1.1.0-alpha.2",
    "stripe": "^22.3.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.3.2",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@types/canvas-confetti": "^1.9.0",
    "@types/chrome": "^0.2.2",
    "@types/node": "^24.13.2",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@types/react-signature-canvas": "^1.0.7",
    "@vercel/node": "^5.8.22",
    "@vitejs/plugin-react": "^6.0.3",
    "autoprefixer": "^10.5.2",
    "concurrently": "^10.0.3",
    "jsdom": "^29.1.1",
    "oxlint": "^1.71.0",
    "postcss": "^8.5.16",
    "tailwindcss": "^4.3.2",
    "typescript": "~6.0.2",
    "vite": "^8.1.1",
    "vitest": "^4.1.9"
  }
}

```

---

## Arquivo: src\todeacordo\postcss.config.js
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}

```

---

## Arquivo: src\todeacordo\sidepanel.html
```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ToDeAcordo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/sidepanel/index.tsx"></script>
  </body>
</html>

```

---

## Arquivo: src\todeacordo\tailwind.config.js
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

---

## Arquivo: src\todeacordo\tsconfig.app.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client", "chrome"],
    "allowArbitraryExtensions": true,
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```

---

## Arquivo: src\todeacordo\tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

---

## Arquivo: src\todeacordo\tsconfig.node.json
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "module": "nodenext",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

---

## Arquivo: src\todeacordo\vercel.json
```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    },
    {
      "source": "/:path*",
      "destination": "/index.html"
    }
  ]
}

```

---

## Arquivo: src\todeacordo\vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        sidepanel: resolve(__dirname, 'sidepanel.html'),
        dashboard: resolve(__dirname, 'index.html'),
        background: resolve(__dirname, 'src/background/index.ts'),
        'content-script': resolve(__dirname, 'src/content-script/index.ts')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});

```

---

## Arquivo: src\todeacordo\vitest.config.ts
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})

```

---

## Arquivo: src\todeacordo\api\generate-consensus.js
```javascript
import { SYSTEM_PROMPT, buildPrompt, buildConsensusRecord } from './_lib/consensusCore.js';

// No edge runtime here because we're using Node APIs like fetch and standard environment variables.
// Default to Node.js serverless function.

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { meeting_id, source_platform, participants, transcript_segments } = req.body;

    if (!transcript_segments || !Array.isArray(transcript_segments)) {
      return res.status(400).json({ error: 'transcript_segments ausente ou inválido.' });
    }

    const conversationText = transcript_segments
      .map(s => `[${(s.timestamp && !isNaN(Date.parse(s.timestamp))) ? new Date(s.timestamp).toISOString() : '00:00:00'}] ${s.speaker}: ${s.text}`)
      .join('\n');

    if (conversationText.trim().length < 50) {
      return res.status(400).json({ error: 'Transcript insuficiente.' });
    }

    const userPrompt = buildPrompt(source_platform, participants, transcript_segments);
    
    let parsedData = null;
    let providerUsed = 'groq';
    let modelUsed = process.env.LLAMA_MODEL || 'llama-3.3-70b-versatile';

    const LLAMA_API_URL = process.env.LLAMA_API_URL || 'https://api.groq.com/openai/v1/chat/completions';
    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    if (!GROQ_API_KEY) {
      console.warn("GROQ_API_KEY não configurada na Vercel. Falha na geração.");
      return res.status(500).json({ error: 'Configuração de API LLM ausente no servidor.' });
    }

    const llmResponse = await fetch(LLAMA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: modelUsed,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt }
        ],
        response_format: { type: "json_object" },
        stream: false
      })
    });

    if (!llmResponse.ok) {
      const errorText = await llmResponse.text();
      throw new Error(`Erro LLM (${llmResponse.status}): ${errorText}`);
    }

    const data = await llmResponse.json();
    let content = data.choices[0].message.content;
    
    // Strip markdown formatting if present
    content = content.replace(/```json/g, '').replace(/```/g, '').trim();
    
    try {
      parsedData = JSON.parse(content);
    } catch (e) {
      console.error("Erro no parse do JSON. Conteúdo retornado:", content);
      throw new Error("O modelo retornou um JSON inválido.");
    }

    const consensusRecord = buildConsensusRecord(
      meeting_id,
      participants,
      transcript_segments,
      parsedData,
      { provider: providerUsed, model: modelUsed }
    );

    res.status(200).json(consensusRecord);
  } catch (error) {
    console.error('Erro na extração serverless:', error);
    res.status(500).json({ error: 'Falha ao gerar entendimento.', details: error.message });
  }
}

```

---

## Arquivo: src\todeacordo\api\health.js
```javascript
export default function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    ok: true,
    service: 'todeacordo-api',
    runtime: 'vercel-serverless'
  });
}

```

---

## Arquivo: src\todeacordo\api\stripe-webhook.ts
```typescript
import { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-02-24.acacia',
});

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const sig = req.headers['stripe-signature'] as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email;

    if (customerEmail) {
      // 1. Verificar se o usuǭrio jǭ existe
      const { data: user } = await supabase
        .from('users')
        .select('*')
        .eq('email', customerEmail)
        .single();

      if (user) {
        // Atualiza para founder_pro
        await supabase
          .from('users')
          .update({ plan: 'founder_pro' })
          .eq('id', user.id);
      } else {
        // Cria usuǭrio como founder_pro
        await supabase
          .from('users')
          .insert([{ email: customerEmail, plan: 'founder_pro' }]);
      }
    }
  }

  res.json({ received: true });
}

```

---

## Arquivo: src\todeacordo\api\_lib\consensusCore.js
```javascript
import crypto from 'crypto';

export const SYSTEM_PROMPT = `Você é um assistente de extração de dados estritamente baseado no transcript fornecido.
Extraia da conversa as decisões, obrigações, prazos e pendências.

REGRAS CRÍTICAS E OBRIGATÓRIAS DE GROUNDING (ANTI-ALUCINAÇÃO):
1. USE EXCLUSIVAMENTE o texto fornecido em "Transcrição". 
2. IGNORE qualquer conhecimento prévio. Se não estiver no texto, não existe.
3. NÃO INVENTE decisões, combinados, responsáveis, prazos ou obrigações que não foram explicitamente falados.
4. Para cada item adicionado nas listas, você DEVE extrair um "evidence_quote" exato (literal).
5. Se o transcript for insuficiente, retorne as listas VAZIAS e um confidence_score baixo (0 a 30).
6. Retorne APENAS JSON válido.

Formato JSON esperado:
{
  "title": "string (resumo em até 5 palavras)",
  "summary": "string (resumo estrito do que foi falado)",
  "agreements": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "decisions": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "obligations": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "pending_items": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "clarity_score": "number (0-100)",
  "risk_flags": [
    {
      "type": "string (ex: Prazo Ambíguo, Escopo Aberto)",
      "text": "string",
      "evidence_quote": "string exata",
      "severity": "low | medium | high"
    }
  ],
  "confidence_score": "number (0-100)"
}`;

export function buildPrompt(sourcePlatform, participants, transcriptSegments) {
  const conversationText = transcriptSegments
    .map(s => `[${(s.timestamp && !isNaN(Date.parse(s.timestamp))) ? new Date(s.timestamp).toISOString() : '00:00:00'}] ${s.speaker}: ${s.text}`)
    .join('\n');

  return `Dados da reunião:\nPlataforma: ${sourcePlatform || 'Desconhecida'}\nParticipantes: ${(participants || []).join(', ')}\n\nTranscrição:\n${conversationText}`;
}

export function buildConsensusRecord(meetingId, participants, transcriptSegments, parsedData, providerInfo = {}) {
  const hash = crypto.createHash('sha256').update(JSON.stringify(parsedData)).digest('hex');
  
  return {
    id: crypto.randomUUID(),
    meeting_id: meetingId || crypto.randomUUID(),
    generated_at: Date.now(),
    status: 'pending_review',
    participants: participants || [],
    transcript_segments: transcriptSegments || [],
    current_version: 1,
    consensus_versions: [{ version: 1, created_at: Date.now(), content: parsedData, document_hash: hash }],
    title: parsedData.title || "",
    summary: parsedData.summary || "",
    agreements: parsedData.agreements || [],
    decisions: parsedData.decisions || [],
    obligations: parsedData.obligations || [],
    pending_items: parsedData.pending_items || [],
    responsible_parties: parsedData.responsible_parties || [],
    deadlines: parsedData.deadlines || [],
    open_questions: parsedData.open_questions || [],
    disputed_points: parsedData.disputed_points || [],
    reservations: parsedData.reservations || [],
    clarity_score: parsedData.clarity_score || 0,
    risk_flags: parsedData.risk_flags || [],
    confidence_score: parsedData.confidence_score || 0,
    provider: providerInfo.provider || 'groq',
    model: providerInfo.model || 'llama-3.3-70b-versatile',
    is_mock: false,
    transcript_char_count: transcriptSegments ? transcriptSegments.reduce((acc, s) => acc + (s.text ? s.text.length : 0), 0) : 0,
    transcript_segment_count: transcriptSegments ? transcriptSegments.length : 0
  };
}

```

---

## Arquivo: src\todeacordo\backend\package-lock.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "backend",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "cors": "^2.8.6",
        "dotenv": "^17.4.2",
        "express": "^5.2.1",
        "openai": "^6.45.0"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/body-parser": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.3.0.tgz",
      "integrity": "sha512-2cGmJupaNgg+QUwVLAucDuWuoMZ6EX9iHDRswZ5lsNYEmwPaRknMPCLZz07yTzVq/83p4o/wzbDZbBrTvGGTIw==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^2.0.0",
        "debug": "^4.4.3",
        "http-errors": "^2.0.1",
        "iconv-lite": "^0.7.2",
        "on-finished": "^2.4.1",
        "qs": "^6.15.2",
        "raw-body": "^3.0.2",
        "type-is": "^2.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/body-parser/node_modules/content-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-2.0.0.tgz",
      "integrity": "sha512-j/O/d7GcZCyNl7/hwZAb606rzqkyvaDctLmckbxLzHvFBzTJHuGEdodATcP3yIRoDrLHkIATJuvzbFlp/ki2cQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/content-disposition": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.1.0.tgz",
      "integrity": "sha512-5jRCH9Z/+DRP7rkvY83B+yGIGX96OYdJmzngqnw2SBSxqCFPd0w2km3s5iawpGX8krnwSGmF0FW5Nhr0Hfai3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.6",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.6.tgz",
      "integrity": "sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/dotenv": {
      "version": "17.4.2",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.4.2.tgz",
      "integrity": "sha512-nI4U3TottKAcAD9LLud4Cb7b2QztQMUEfHbvhTH09bqXTxnSie8WnjPALV/WMCrJZ6UV/qHJ6L03OqO3LcdYZw==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.2.tgz",
      "integrity": "sha512-im9DjEDQ55s9fL4EYzOAv0yMqmMBSZp6G0VvFyTMPKWxiSBHUj9NW/qqLmXUwXrrM7AvqSlTCfvqRb0cM8yYqw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/openai": {
      "version": "6.45.0",
      "resolved": "https://registry.npmjs.org/openai/-/openai-6.45.0.tgz",
      "integrity": "sha512-5DQVNErssk0afNpTTHUm/qZPU4iKR9OYdNid8Ib4puq4gHNNvGWZht2zY4h9a8JMF949Ik6m8gQutllVPbjdnw==",
      "license": "Apache-2.0",
      "peerDependencies": {
        "@aws-sdk/credential-provider-node": ">=3.972.0 <4",
        "@smithy/hash-node": ">=4.3.0 <5",
        "@smithy/signature-v4": ">=5.4.0 <6",
        "ws": "^8.18.0",
        "zod": "^3.25 || ^4.0"
      },
      "peerDependenciesMeta": {
        "@aws-sdk/credential-provider-node": {
          "optional": true
        },
        "@smithy/hash-node": {
          "optional": true
        },
        "@smithy/signature-v4": {
          "optional": true
        },
        "ws": {
          "optional": true
        },
        "zod": {
          "optional": true
        }
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.4.2",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.4.2.tgz",
      "integrity": "sha512-qRcuIdP69NPm4qbACK+aDogI5CBDMi1jKe0ry5rSQJz8JVLsC7jV8XpiJjGRLLol3N+R5ihGYcrPLTno6pAdBA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/qs": {
      "version": "6.15.3",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.15.3.tgz",
      "integrity": "sha512-O9gl3zCl5h5blw1KGUzQKhA5oUXSl8rwUIM5o0S3nCXMliSvy5Dzx7/DJcI+SwgICv+IneSZwhBh1oSyEHA71A==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "es-define-property": "^1.0.1",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.3.0.tgz",
      "integrity": "sha512-hek2mFQpPuI4E1BBKrSto+BU3e3x4xuarsbiwr3+lf7p44juvFMV0XFWQAP3xUyqXA4RrXLIoaSUGbSt056ZMw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.3",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.1",
        "mime-types": "^3.0.2",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.1.tgz",
      "integrity": "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/type-is": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.1.0.tgz",
      "integrity": "sha512-faYHw0anBbc/kWF3zFTEnxSFOAGUX9GFbOBthvDdLsIlEoWOFOtS0zgCiQYwIskL9iGXZL3kAXD8OoZ4GmMATA==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^2.0.0",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/type-is/node_modules/content-type": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-2.0.0.tgz",
      "integrity": "sha512-j/O/d7GcZCyNl7/hwZAb606rzqkyvaDctLmckbxLzHvFBzTJHuGEdodATcP3yIRoDrLHkIATJuvzbFlp/ki2cQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    }
  }
}

```

---

## Arquivo: src\todeacordo\backend\package.json
```json
{
  "name": "backend",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "openai": "^6.45.0"
  }
}

```

---

## Arquivo: src\todeacordo\backend\server.js
```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Imita as funções serverless importando e encapsulando.
// Usamos require estático ou import dinâmico. Aqui é ES Modules, então usamos import dinâmico para os scripts JS que vão para a Vercel.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors({ origin: true }));
app.use(express.json({ limit: '10mb' }));

const PORT = process.env.PORT || 3000;

app.get('/api/health', async (req, res) => {
  const handler = (await import('../api/health.js')).default;
  // Simular req e res da Vercel
  handler(req, res);
});

app.post('/api/generate-consensus', async (req, res) => {
  // Ajuste do env local para simular Vercel
  if (!process.env.GROQ_API_KEY && process.env.LLAMA_API_KEY) {
      process.env.GROQ_API_KEY = process.env.LLAMA_API_KEY; // Fallback for local
  }
  const handler = (await import('../api/generate-consensus.js')).default;
  handler(req, res);
});

app.listen(PORT, () => console.log(`Backend de Desenvolvimento rodando na porta ${PORT}`));

```

---

## Arquivo: src\todeacordo\public\google4b077beed6e1747a.html
```html
google-site-verification: google4b077beed6e1747a.html

```

---

## Arquivo: src\todeacordo\public\googleQYGAWpleqJFRtRb9dtqxNqH7D7aqYxCpp64lUYR08dU.html
```html
google-site-verification: googleQYGAWpleqJFRtRb9dtqxNqH7D7aqYxCpp64lUYR08dU.html

```

---

## Arquivo: src\todeacordo\public\manifest.json
```json
{
  "manifest_version": 3,
  "name": "ToDeAcordo",
  "version": "1.0.0",
  "description": "Transforme reuniões do Google Meet em consenso.",
  "permissions": [
    "sidePanel",
    "storage",
    "activeTab",
    "tabCapture"
  ],
  "host_permissions": [
    "*://meet.google.com/*",
    "http://127.0.0.1:3000/*",
    "http://localhost:3000/*",
    "https://app.taxmanagers.com.br/*"
  ],
  "background": {
    "service_worker": "background.js",
    "type": "module"
  },
  "content_scripts": [
    {
      "matches": ["*://meet.google.com/*"],
      "js": ["content-script.js"]
    }
  ],
  "side_panel": {
    "default_path": "sidepanel.html"
  },
  "icons": {
    "16": "icon-16.png",
    "32": "icon-32.png",
    "48": "icon-48.png",
    "128": "icon-128.png"
  },
  "action": {
    "default_title": "Abrir ToDeAcordo",
    "default_icon": {
      "16": "icon-16.png",
      "32": "icon-32.png",
      "48": "icon-48.png",
      "128": "icon-128.png"
    }
  },
  "web_accessible_resources": [
    {
      "resources": [
        "sidepanel.html",
        "assets/*",
        "*.js",
        "*.css"
      ],
      "matches": [
        "*://meet.google.com/*"
      ]
    }
  ]
}

```

---

## Arquivo: src\todeacordo\public\vercel.json
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

```

---

## Arquivo: src\todeacordo\src\App.css
```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}

```

---

## Arquivo: src\todeacordo\src\App.tsx
```typescript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

```

---

## Arquivo: src\todeacordo\src\featureFlags.ts
```typescript
// Feature Flags — Modo Resgate
// Desligar tudo que não é fluxo principal.
// Fluxo principal: home, /demo, /analisar, /valida/:id, /app, sidepanel, gerar entendimento.

export const FEATURE_FLAGS = {
  ENABLE_GROWTH_ROUTES: false,       // /calculadora, /antes-e-depois, /mural, /tools/whatsapp, /nao-e-ata, /casos-de-uso, /comparativos
  ENABLE_COUNTERPARTY_CLAIM: false,  // Lead gate no /valida
  ENABLE_SIGNATURE: false,           // /assinatura-email
  ENABLE_FAKE_DOORS: false,          // /integracoes, /api, /white-label, /templates, /parceiros, /empresas
  ENABLE_ADMIN_DASHBOARDS: false,    // /admin/growth, /admin/opportunities, /admin/intelligence, /admin-beta
  ENABLE_PROTOCOL_PAGES: false,      // /protocol, /autopsia, /doctor, /benchmark, /kit/consultores
  ENABLE_SEO_PAGES: false,           // /templates/:slug, /share/:id
  ENABLE_WAITLIST: false,            // /waitlist
  ENABLE_TRUST_CENTER: false,        // /seguranca
} as const;

```

---

## Arquivo: src\todeacordo\src\index.css
```css
@import "tailwindcss";

body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 320px;
}

```

---

## Arquivo: src\todeacordo\src\main.tsx
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

---

## Arquivo: src\todeacordo\src\ai\consensusExtractor.test.ts
```typescript
import { describe, it, expect } from 'vitest';
import { generateConsensusFromTranscript } from './consensusExtractor';
import type { TranscriptSegment } from '../types';

describe('ConsensusExtractor AI Module', () => {
  it('deve extrair decisões e combinados corretamente de uma transcrição mockada', async () => {
    const mockSegments: TranscriptSegment[] = [
      {
        id: '1', meeting_id: 'meet-test', speaker: 'Alexandre',
        text: 'Então fechamos que a entrega da landing page será na sexta-feira, certo?',
        source: 'audio', captured_at: Date.now(), timestamp: '00:01'
      },
      {
        id: '2', meeting_id: 'meet-test', speaker: 'João',
        text: 'Tô de acordo. E o pagamento de 50% inicial a gente faz hoje à tarde.',
        source: 'audio', captured_at: Date.now(), timestamp: '00:02'
      }
    ];

    const result = await generateConsensusFromTranscript({
      meetingId: 'meet-test',
      sourcePlatform: 'Teste',
      segments: mockSegments
    });
    
    // Testar se ele capturou a obrigação
    expect(result.obligations).toBeDefined();
    // Como é um mock local (ele usa um Mock no consensusExtractor se não tiver chave de API real ou se for test mode),
    // devemos garantir que ele retorne um ConsensusObject válido
    expect(result.id).toBeDefined();
    expect(result.meeting_id).toBe('meet-test');
    expect(result.status).toBe('consensus_obtained'); // ou draft
  });
});

```

---

## Arquivo: src\todeacordo\src\ai\consensusExtractor.ts
```typescript
import type { ConsensusObject, TranscriptSegment } from '../types';
import { evaluateTrafficLight } from '../types';
import { generateConsensusViaLlama } from './providers/llamaProvider';
import { mockProvider } from './providers/mockProvider';

const USE_MOCK_FALLBACK = false;

interface ConsensusGenerationOptions {
  meetingId: string;
  sourcePlatform?: string;
  participants?: string[];
  segments: TranscriptSegment[];
}

export async function generateConsensusFromTranscript(options: ConsensusGenerationOptions): Promise<Partial<ConsensusObject>> {
  const { meetingId, sourcePlatform, participants, segments } = options;

  if (!segments || segments.length === 0) {
    throw new Error('Nenhuma fala capturada. Não é possível gerar um entendimento.');
  }

  // Filtrar apenas os consolidaddos/reais, caso passe lixo
  let cleanSegments = segments.filter(s => s.text && s.speaker);

  // Fase 5.4: Deduplicação avançada no payload (Hash + Substring window)
  const normalizeForDedupe = (str: string) => {
    return str.toLowerCase().replace(/[^\w\sÀ-ÿ]/g, '').replace(/\s+/g, ' ').trim();
  };

  const uniqueSegments: TranscriptSegment[] = [];
  for (const seg of cleanSegments) {
    const normText = normalizeForDedupe(seg.text);
    if (!normText) continue;
    
    // Procura por overlap em todas as falas anteriores para descartar re-emissão pura (MVP: checa tudo)
    let isDuplicate = false;
    // Ao invés de usar slice(-5), vamos verificar contra todos os segmentos únicos processados até agora
    for (const recent of uniqueSegments) {
      if (recent.speaker !== seg.speaker) continue;
      
      const recentNorm = normalizeForDedupe(recent.text);
      if (recentNorm.includes(normText)) {
        isDuplicate = true; // O novo é fragmento ou exato do anterior
        break;
      } else if (normText.includes(recentNorm)) {
        // O novo é uma expansão do anterior. Substituímos o anterior pelo novo.
        recent.text = seg.text;
        recent.normalized_text = seg.normalized_text;
        isDuplicate = true;
        break;
      }

      // Advanced word overlap check for Google Meet rolling caption replacements
      const commWords = recentNorm.split(' ').filter(w => w.length > 0);
      const newWords = normText.split(' ').filter(w => w.length > 0);
      
      if (commWords.length >= 3 && newWords.length >= 3) {
        let matchCount = 0;
        const minLen = Math.min(commWords.length, newWords.length);
        for (let i = 0; i < minLen; i++) {
          if (commWords[i] === newWords[i]) {
            matchCount++;
          } else {
            break;
          }
        }
        if (matchCount / commWords.length >= 0.60) {
          recent.text = newWords.length > commWords.length ? seg.text : recent.text;
          recent.normalized_text = newWords.length > commWords.length ? seg.normalized_text : recent.normalized_text;
          isDuplicate = true;
          break;
        }
        
        const overlap = commWords.filter(w => newWords.includes(w)).length;
        if (commWords.length >= 4 && overlap / commWords.length >= 0.75) {
          recent.text = newWords.length > commWords.length ? seg.text : recent.text;
          recent.normalized_text = newWords.length > commWords.length ? seg.normalized_text : recent.normalized_text;
          isDuplicate = true;
          break;
        }
      }
    }

    if (!isDuplicate) {
      uniqueSegments.push(seg);
    }
  }

  cleanSegments = uniqueSegments;

  try {
    // Fase 10D: Semáforo e Red Flags
    const evaluateTrafficLight = (partialConsensus: Partial<ConsensusObject>) => {
      const redFlagsWords = ["talvez", "depois", "a gente vê", "mais ou menos", "depende", "pode ser", "vamos alinhar"];
      
      const allTexts = [
        ...(partialConsensus.agreements || []).map(a => typeof a === 'string' ? a : a.text),
        ...(partialConsensus.decisions || []).map(a => typeof a === 'string' ? a : a.text),
        ...(partialConsensus.obligations || []).map(a => typeof a === 'string' ? a : a.text),
      ].join(' ').toLowerCase();

      const foundFlags = redFlagsWords.filter(word => allTexts.includes(word));
      const missing = [];
      
      if (!partialConsensus.agreements || partialConsensus.agreements.length === 0) missing.push('acordos');
      if (!partialConsensus.obligations || partialConsensus.obligations.length === 0) missing.push('obrigações');
      
      // Calculate score 0-100
      let score = 100;
      score -= foundFlags.length * 15;
      score -= missing.length * 20;
      
      let trafficLight: 'green' | 'yellow' | 'red' = 'green';
      if (score < 60) trafficLight = 'red';
      else if (score < 85 || foundFlags.length > 0) trafficLight = 'yellow';

      partialConsensus.confidence_score = Math.max(0, score);
      partialConsensus.traffic_light = trafficLight;
      partialConsensus.red_flags = foundFlags;
      partialConsensus.missing_elements = missing;
    };

    // Chama o Provider Llama (via backend local)
    console.log(`[ToDeAcordo] Chamando Llama Provider para ${cleanSegments.length} segmentos...`);
    const consensus = await generateConsensusViaLlama({
      meetingId,
      sourcePlatform,
      participants,
      transcriptSegments: cleanSegments
    });
    
    // Anexa dados base
    consensus.id = crypto.randomUUID();
    consensus.meeting_id = meetingId;
    consensus.created_at = Date.now();
    consensus.transcript_segments = cleanSegments;
    consensus.provider = 'llama-local';

    evaluateTrafficLight(consensus);

    return consensus;
  } catch (error) {
    console.error('[ToDeAcordo] Falha ao gerar consenso via Llama:', error);
    
    if (USE_MOCK_FALLBACK) {
      console.warn('[ToDeAcordo] Usando Mock Provider como fallback devido a erro de API.');
      const transcriptText = cleanSegments.map(s => `${s.speaker}: ${s.text}`).join('\n');
      const mock = await mockProvider(transcriptText);
      const finalMock = {
        ...mock,
        id: crypto.randomUUID(),
        meeting_id: meetingId,
        created_at: Date.now(),
        transcript_segments: cleanSegments,
        provider: 'mock-provider'
      };
      evaluateTrafficLight(finalMock);
      return finalMock;
    }
    
    throw error;
  }
}

```

---

## Arquivo: src\todeacordo\src\ai\ragSystem.ts
```typescript
import { getAllMeetings } from '../storage/meetingStorage';
import { getTranscriptForMeeting } from '../storage/transcriptStorage';

/**
 * RAG Engine (Retrieval-Augmented Generation) 
 * Módulo ultra-sofisticado para "Conversar com suas reuniões passadas".
 */

export interface SemanticSearchResult {
  meetingId: string;
  segmentId: string;
  text: string;
  speaker: string | null;
  timestamp: string;
  score: number;
}

// Em um ambiente real, carregaríamos o @xenova/transformers
// Para este laboratório, vamos construir o motor de busca vetorial local em TF-IDF ou similar.
export class LocalVectorDB {
  private documents: Array<{ id: string, meetingId: string, text: string, speaker: string | null, timestamp: string }> = [];

  async indexAllMeetings() {
    this.documents = [];
    const meetings = await getAllMeetings();
    for (const meeting of meetings) {
      const transcripts = await getTranscriptForMeeting(meeting.id);
      for (const t of transcripts) {
        if (t.text && t.text.trim().length > 10) {
          this.documents.push({
            id: t.id,
            meetingId: meeting.id,
            text: t.text.toLowerCase(),
            speaker: t.speaker,
            timestamp: t.timestamp
          });
        }
      }
    }
  }

  // Busca semântica simplificada (BM25 fallback)
  async search(query: string, topK: number = 5): Promise<SemanticSearchResult[]> {
    if (this.documents.length === 0) await this.indexAllMeetings();

    const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);
    
    const scoredDocs = this.documents.map(doc => {
      let score = 0;
      for (const term of terms) {
        if (doc.text.includes(term)) {
          score += 1;
        }
      }
      return { ...doc, score };
    });

    return scoredDocs
      .filter(d => d.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map(d => ({
        meetingId: d.meetingId,
        segmentId: d.id,
        text: d.text,
        speaker: d.speaker,
        timestamp: d.timestamp,
        score: d.score
      }));
  }
}

export const vectorDB = new LocalVectorDB();

export async function askMeetingAssistant(question: string): Promise<string> {
  const results = await vectorDB.search(question, 10);
  
  if (results.length === 0) {
    return "Não encontrei nada sobre isso no seu histórico de reuniões.";
  }

  const context = results.map(r => `[Reunião: ${r.meetingId}] ${r.speaker || 'Desconhecido'}: "${r.text}"`).join('\n');
  
  // Aqui chamaríamos a API da OpenAI/Groq injetando o contexto (RAG)
  // Como estamos isolando, retornamos as evidências.
  
  return `Baseado no seu histórico, encontrei estas evidências relevantes:\n\n${context}\n\n(No ambiente de produção, este contexto será mastigado pelo LLM para gerar uma resposta natural).`;
}

```

---

## Arquivo: src\todeacordo\src\ai\providers\geminiProvider.ts
```typescript
// Placeholder para futura implementação de IA real via Gemini
// Arquitetura: Frontend -> Backend -> Gemini

export async function generateConsensusViaGemini() {
  throw new Error("Gemini Provider não implementado ainda. Use o LlamaProvider ou MockProvider.");
}

```

---

## Arquivo: src\todeacordo\src\ai\providers\llamaProvider.ts
```typescript
import type { ConsensusObject, TranscriptSegment } from '../../types';

interface GenerationParams {
  meetingId: string;
  sourcePlatform?: string;
  participants?: string[];
  transcriptSegments: TranscriptSegment[];
}

export async function generateConsensusViaLlama(params: GenerationParams): Promise<ConsensusObject> {
  const API_BASE_URL = import.meta.env.VITE_TODEACORDO_API_BASE_URL || '';
  const BACKEND_URL = `${API_BASE_URL}/api/todeacordo-consensus`;
  
  const response = await fetch(BACKEND_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      meeting_id: params.meetingId,
      source_platform: params.sourcePlatform || 'google-meet',
      participants: params.participants || [],
      transcript_segments: params.transcriptSegments
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Falha ao gerar consenso com Llama via backend na nuvem.');
  }

  const consensus = await response.json();
  return consensus as ConsensusObject;
}

```

---

## Arquivo: src\todeacordo\src\ai\providers\mockProvider.ts
```typescript
import type { ConsensusObject } from '../../types';

export const mockProvider = async (_transcript: string): Promise<Partial<ConsensusObject>> => {
  // Simula um delay de rede (2 segundos)
  await new Promise(resolve => setTimeout(resolve, 2000));

  return {
    summary: 'Reunião sobre o lançamento do MVP 1 do ToDeAcordo.',
    agreements: [
      { text: 'A arquitetura principal deve suportar versões futuras de consenso.' },
      { text: 'O design inicial será focado em ser limpo e premium.' }
    ],
    decisions: [
      { text: 'Não usaremos backend no primeiro momento para gravar áudio, apenas a extensão capturando o texto localmente.' },
      { text: 'A chave da API da OpenAI ficará protegida em um backend Edge Function.' }
    ],
    obligations: [
      { text: 'Implementar MVP 1 em Manifest V3 focando no Google Meet' }
    ],
    pending_items: [
      { text: 'Definir a paleta de cores final' }
    ],
    responsible_parties: [
      { text: 'Equipe de Desenvolvimento' }
    ],
    deadlines: [
      { text: 'Até o final da semana para fase 1 a 3' }
    ],
    open_questions: [
      { text: 'Qual será o comportamento se o usuário desligar a legenda no meio da reunião?' }
    ],
    disputed_points: [],
    confidence_score: 95
  };
};

```

---

## Arquivo: src\todeacordo\src\ai\providers\openaiProvider.ts
```typescript
// Placeholder para futura implementação de IA real via OpenAI (GPT-4o)
// Arquitetura: Frontend -> Backend -> OpenAI

export async function generateConsensusViaOpenAI() {
  throw new Error("OpenAI Provider não implementado ainda. Use o LlamaProvider ou MockProvider.");
}

```

---

## Arquivo: src\todeacordo\src\audio\tabAudioCapture.ts
```typescript
export class TabAudioCapture {
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];
  private onTranscriptionReceived: (text: string, timestamp: string) => void;
  private intervalId: any = null;
  public isRecording: boolean = false;
  
  constructor(onTranscription: (text: string, timestamp: string) => void) {
    this.onTranscriptionReceived = onTranscription;
  }

  public async start() {
    if (this.isRecording) return;
    try {
      // Solicitamos a permissão e o stream do tab ativo
      const stream = await this.getTabStream();
      if (!stream) {
        throw new Error("Não foi possível obter o áudio da aba.");
      }
      
      this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      this.isRecording = true;

      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.start();
      
      // A cada 10 segundos, para o recorder, envia o áudio, e reinicia
      this.intervalId = setInterval(() => {
        this.processChunk();
      }, 10000);
      
    } catch (e) {
      console.error("[TabAudioCapture] Erro ao iniciar captura:", e);
      throw e;
    }
  }

  public stop() {
    if (!this.isRecording) return;
    this.isRecording = false;
    clearInterval(this.intervalId);
    
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
      this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
    
    // Process final chunk
    setTimeout(() => this.processChunk(), 500);
  }

  private async processChunk() {
    if (!this.mediaRecorder) return;
    
    // Para forçar o ondataavailable
    if (this.mediaRecorder.state === 'recording') {
      this.mediaRecorder.stop();
      this.mediaRecorder.start();
    }
    
    if (this.audioChunks.length === 0) return;
    
    const blob = new Blob(this.audioChunks, { type: 'audio/webm' });
    this.audioChunks = []; // Reseta o buffer
    
    // Converte para base64
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = async () => {
      const base64data = reader.result as string;
      const base64Content = base64data.split(',')[1];
      
      try {
        const backendUrl = import.meta.env.VITE_TODEACORDO_API_BASE_URL || '';
        const res = await fetch(`${backendUrl}/api/transcribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            audio: base64Content,
            mimetype: 'audio/webm'
          })
        });
        
        if (res.ok) {
          const data = await res.json();
          if (data.text && data.text.trim().length > 2) {
            this.onTranscriptionReceived(data.text, data.timestamp);
          }
        } else {
          console.error('[TabAudioCapture] Erro no STT:', await res.text());
        }
      } catch (err) {
        console.error('[TabAudioCapture] Erro de rede STT:', err);
      }
    };
  }

  private getTabStream(): Promise<MediaStream> {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (!tabs || tabs.length === 0) {
          reject(new Error("Nenhuma aba ativa encontrada."));
          return;
        }
        
        const targetTabId = tabs[0].id;
        
        chrome.tabCapture.getMediaStreamId({ targetTabId }, (streamId) => {
          if (!streamId) {
            reject(new Error(`Erro tabCapture: ${chrome.runtime.lastError?.message || 'Sem streamId'}`));
            return;
          }
          
          navigator.mediaDevices.getUserMedia({
            audio: {
              mandatory: {
                chromeMediaSource: 'tab',
                chromeMediaSourceId: streamId
              }
            } as any
          }).then(stream => {
            resolve(stream);
          }).catch(err => {
            reject(new Error("Erro getUserMedia: " + err.message));
          });
        });
      });
    });
  }
}

```

---

## Arquivo: src\todeacordo\src\audit\auditLogger.ts
```typescript
import { saveAuditEvent } from '../storage/auditStorage';
import type { AuditEventType } from './auditTypes';

export const logEvent = async (
  meetingId: string,
  type: AuditEventType,
  details?: Record<string, any>
): Promise<void> => {
  const urlParams = new URLSearchParams(window.location.search);
  const utm_source = urlParams.get('utm_source');
  const utm_medium = urlParams.get('utm_medium');
  const utm_campaign = urlParams.get('utm_campaign');
  const ref = urlParams.get('ref');

  const enrichedDetails = {
    ...details,
    ...(utm_source && { utm_source }),
    ...(utm_medium && { utm_medium }),
    ...(utm_campaign && { utm_campaign }),
    ...(ref && { referral_code: ref }),
  };

  const event = {
    id: crypto.randomUUID(),
    meeting_id: meetingId,
    type,
    timestamp: Date.now(),
    details: enrichedDetails
  };
  
  try {
    await saveAuditEvent(event);
    console.log(`[AuditLog] ${type}`, event);
  } catch (error) {
    console.error(`[AuditLog] Falha ao registrar evento ${type}`, error);
  }
};

```

---

## Arquivo: src\todeacordo\src\audit\auditTypes.ts
```typescript
export type AuditEventType = 
  | 'meeting_detected'
  | 'capture_started'
  | 'capture_stopped'
  | 'transcript_segment_captured'
  | 'consensus_generation_started'
  | 'consensus_generated'
  | 'consensus_generation_error'
  | 'markdown_exported'
  | 'meeting_ended'
  | 'sidepanel_opened'
  | 'sidepanel_restored'
  | 'meeting_cleared'
  | 'consensus_edited_and_obtained'
  | 'install_clicked'
  | 'paywall_viewed'
  | 'waitlist_joined'
  | 'validation_link_opened'
  | 'agreed_clicked'
  | 'objection_clicked'
  | 'objection_submitted'
  | 'landing_viewed'
  | 'beta_clicked'
  | 'understanding_generated'
  | 'validation_link_created'
  | 'premium_feature_clicked'
  | 'pdf_clicked'
  | 'whatsapp_clicked'
  | 'handshake_signed'
  | 'counterparty_claimed';

export interface AuditEvent {
  id: string;
  meeting_id: string;
  type: AuditEventType;
  timestamp: number;
  details?: Record<string, any>;
}

```

---

## Arquivo: src\todeacordo\src\background\index.ts
```typescript
console.log('Background script initialized');

chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error: any) => console.error(error));

let lastKnownState = 'UNKNOWN';

chrome.runtime.onMessage.addListener((message: any, _sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
  console.log('Message received in background:', message);
  if (message.type === 'PING') {
    sendResponse({ status: 'PONG_FROM_BACKGROUND' });
  }

  if (message.type === 'MEET_STATUS_UPDATE') {
    if (lastKnownState === 'ACTIVE' && (message.state === 'INACTIVE' || message.state === 'UNKNOWN' || message.state === 'LOBBY')) {
      // Meeting ended! Open dashboard to generate consensus.
      let url = chrome.runtime.getURL('index.html?autoGenerate=true');
      if (message.meetingId) {
        url += `&meetingId=${message.meetingId}`;
      }
      chrome.tabs.create({ url: url });
    }
    lastKnownState = message.state;
  }
});

```

---

## Arquivo: src\todeacordo\src\components\CopyEngines.ts
```typescript
import { trackGrowthEvent } from '../growth/growthLogger';

export const CopyEngines = {
  getWhatsAppCopy: (tone: 'cordial' | 'objetivo' | 'firme' | 'executivo', link: string) => {
    trackGrowthEvent('copy_link_clicked', { channel: 'whatsapp', tone });
    
    switch (tone) {
      case 'cordial':
        return `Oi, gerei um ToDeAcordo da nossa conversa para evitar qualquer ruído depois. Você pode confirmar ou apontar ressalvas aqui: ${link}\n\nGerado com ToDeAcordo.`;
      case 'objetivo':
        return `Segue o entendimento da reunião para validação: ${link}\n\nGerado com ToDeAcordo.`;
      case 'firme':
        return `Antes de avançarmos, preciso confirmar se este foi o combinado da reunião: ${link}\n\nGerado com ToDeAcordo.`;
      case 'executivo':
        return `Resumo validável da reunião, com combinados, pendências e responsáveis: ${link}\n\nGerado com ToDeAcordo.`;
      default:
        return `Confira nosso entendimento aqui: ${link}`;
    }
  },

  getEmailCopy: (link: string) => {
    trackGrowthEvent('copy_link_clicked', { channel: 'email' });
    return {
      subject: 'Confirmação do entendimento da nossa reunião',
      body: `Olá, para evitar qualquer ruído futuro, gerei um registro da nossa conversa.\n\nPor favor, revise as obrigações e decisões, confirme o aceite ou aponte ressalvas acessando este link seguro:\n${link}\n\nEste registro documenta a confirmação operacional do entendimento.\n\n--\nGerado com ToDeAcordo - Reuniões sem mal-entendido.\nCrie o seu em todeacordo.com.br`
    };
  }
};

export const useWebShare = () => {
  const share = async (title: string, text: string, url: string) => {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        trackGrowthEvent('share_clicked', { method: 'native_share' });
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        trackGrowthEvent('share_clicked', { method: 'clipboard_copy' });
        alert('Link copiado para a área de transferência!');
      }
    } catch (err) {
      console.error('Erro ao compartilhar:', err);
    }
  };
  return { share };
};

```

---

## Arquivo: src\todeacordo\src\components\FeatureVote.tsx
```typescript
import { useState } from 'react';
import { trackGrowthEvent } from '../growth/growthLogger';

interface FeatureVoteProps {
  source: 'landing' | 'paywall' | 'validation' | 'demo' | 'extension';
  onVoteSubmitted?: () => void;
}

export const FeatureVote = ({ source, onVoteSubmitted }: FeatureVoteProps) => {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const features = [
    { id: 'pdf_corporativo', label: 'PDF profissional com minha logo' },
    { id: 'link_validacao', label: 'Link de validação' },
    { id: 'rubrica_hash', label: 'Rubrica de confirmação (Assinatura Visual)' },
    { id: 'whatsapp_pronto', label: 'Disparo via WhatsApp' },
    { id: 'historico', label: 'Histórico na nuvem infinito' },
    { id: 'evidencias', label: 'Evidências por frase (Transcrição linkada)' },
    { id: 'equipe', label: 'Acesso para equipe' },
    { id: 'templates', label: 'Templates por profissão' },
    { id: 'integracao_agenda', label: 'Integração com Agenda' },
    { id: 'integracao_crm', label: 'Integração com CRM' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    
    trackGrowthEvent('feature_vote_submitted', { source, feature_id: selected });
    setSubmitted(true);
    if (onVoteSubmitted) onVoteSubmitted();
  };

  if (submitted) {
    return (
      <div className="bg-green-50 text-green-800 p-4 rounded-lg text-sm text-center font-medium">
        Voto computado! Isso nos ajuda a decidir o que construir primeiro.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="block text-sm font-bold text-slate-800 mb-2">
        O que faria você pagar pelo ToDeAcordo?
      </label>
      <select 
        required 
        value={selected} 
        onChange={e => setSelected(e.target.value)} 
        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-slate-700"
      >
        <option value="" disabled>Escolha o recurso mais importante...</option>
        {features.map(f => (
          <option key={f.id} value={f.id}>{f.label}</option>
        ))}
      </select>
      <button 
        type="submit" 
        className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-lg shadow mt-2 transition-transform active:scale-95"
      >
        Votar neste recurso
      </button>
    </form>
  );
};

```

---

## Arquivo: src\todeacordo\src\components\PaywallModal.tsx
```typescript
import { useState } from 'react';
import { addLeadToWaitlist } from '../storage/usageStorage';
import { useUsage } from '../hooks/useUsage';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  attemptedFeature: string;
  sourceMeetingId?: string;
}

export const PaywallModal = ({ isOpen, onClose, attemptedFeature, sourceMeetingId }: PaywallModalProps) => {
  const { count, limit, transcriptCount, transcriptLimit } = useUsage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    role: '',
    desired_feature: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const isUnderLimit = count < limit && transcriptCount < transcriptLimit;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await addLeadToWaitlist({
      ...formData,
      attempted_feature: attemptedFeature,
      source_meeting_id: sourceMeetingId
    });
    setLoading(false);
    setSubmitted(true);
    
    // Auto fecha depois de 3 segundos
    setTimeout(() => {
      onClose();
      setSubmitted(false); // Reseta o estado para a próxima vez
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header Premium */}
        <div className="bg-slate-900 px-6 py-6 text-center relative shrink-0">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <div className="mx-auto bg-gradient-to-tr from-amber-400 to-amber-200 w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 mb-3">
            <svg className="w-6 h-6 text-amber-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          
          <h2 className="text-xl font-bold text-white mb-2">ToDeAcordo Pro</h2>
          
          <div className="text-indigo-200 text-xs font-semibold mb-2 bg-indigo-900/50 py-1.5 px-3 rounded-full inline-block">
            📊 Seu Uso: {count}/{limit} Entendimentos | {transcriptCount}/{transcriptLimit} Transcrições
          </div>

          {isUnderLimit ? (
            <p className="text-slate-300 text-sm px-4">
              Você está na versão Freemium e ainda possui cotas disponíveis! Se quiser, pode apoiar o desenvolvimento ou continuar grátis.
            </p>
          ) : (
            <p className="text-slate-300 text-sm px-4">
              Você atingiu a cota de uso do plano gratuito. Faça uma contribuição para continuar utilizando de forma ilimitada!
            </p>
          )}
        </div>

        {/* Body Formulário / PIX */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Sessão PIX Sonia */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-150 rounded-2xl p-4 shadow-sm text-center">
            <span className="text-[10px] font-black text-indigo-700 uppercase tracking-widest block mb-1">💸 APOIE O DESENVOLVIMENTO (ILIMITADO POR 30 DIAS)</span>
            <p className="text-slate-700 text-xs mb-3 leading-relaxed">
              Pague qualquer valor ou a assinatura de <strong>R$ 29,90</strong> para liberar 30 dias de uso ilimitado e ajudar a manter a ferramenta independente.
            </p>
            
            <div className="bg-white border border-slate-200 rounded-xl py-3 px-4 mb-3">
              <div className="text-xs text-slate-400 font-medium mb-1">Chave Pix (Telefone)</div>
              <div className="text-base font-black text-indigo-900 select-all font-mono">11 993725876</div>
              <div className="text-[10px] text-slate-400 mt-1">Nome do Favorecido: Sonia</div>
            </div>
            
            <p className="text-[10px] text-indigo-600 font-medium">
              💡 Dica: Envie o comprovante no WhatsApp do Alexandre ou Sonia para liberação!
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Você está na lista de fundadores!</h3>
              <p className="text-xs text-slate-500">Registramos seu interesse e sua vaga por R$ 29,90/mês vitalício.</p>
            </div>
          ) : (
            <div className="border-t border-slate-100 pt-4">
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 text-center">Garantir Preço Promocional de Lançamento (Opcional)</h4>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-650 mb-0.5">Qual recurso você mais precisa?</label>
                  <select required value={formData.desired_feature || ''} onChange={e => setFormData({...formData, desired_feature: e.target.value})} className="w-full border border-slate-250 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option value="" disabled>Escolha o que mais faz falta...</option>
                    <option value="pdf_corporativo">PDF corporativo com minha logo</option>
                    <option value="rubrica_hash">Rubrica digital e Hash do documento</option>
                    <option value="historico_cloud">Histórico infinito na nuvem</option>
                    <option value="remover_marca">Remover a marca ToDeAcordo</option>
                    <option value="whatsapp_auto">Disparo automático via WhatsApp</option>
                    <option value="templates">Templates (Agência/Consultoria etc)</option>
                    <option value="equipe">Acesso para minha equipe</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-medium text-slate-650 mb-0.5">Nome</label>
                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-slate-250 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Nome" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-slate-650 mb-0.5">WhatsApp</label>
                    <input required type="tel" value={formData.whatsapp} onChange={e => setFormData({...formData, whatsapp: e.target.value})} className="w-full border border-slate-250 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-lg shadow-md mt-2 transition-transform active:scale-95 disabled:bg-slate-400 text-xs"
                >
                  {loading ? 'Reservando...' : 'Quero Entrar na Lista (Garantir R$ 29,90/mês)'}
                </button>
              </form>
            </div>
          )}

          {isUnderLimit && (
            <button 
              onClick={onClose}
              className="w-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-3 rounded-lg text-sm transition-all transform active:scale-95"
            >
              Continuar usando grátis
            </button>
          )}

        </div>
      </div>
    </div>
  );
};

```

---

## Arquivo: src\todeacordo\src\components\ToDeAcordoBadge.tsx
```typescript
interface ToDeAcordoBadgeProps {
  type?: 'default' | 'validated' | 'reservations' | 'evidence' | 'privacy';
  className?: string;
}

export const ToDeAcordoBadge = ({ type = 'default', className = '' }: ToDeAcordoBadgeProps) => {
  const getBadgeStyle = () => {
    switch (type) {
      case 'validated':
        return { bg: 'bg-green-100', border: 'border-green-200', text: 'text-green-800', icon: '✓', label: 'Validado com ToDeAcordo' };
      case 'reservations':
        return { bg: 'bg-amber-100', border: 'border-amber-200', text: 'text-amber-800', icon: '⚠️', label: 'Com ressalvas no ToDeAcordo' };
      case 'evidence':
        return { bg: 'bg-indigo-100', border: 'border-indigo-200', text: 'text-indigo-800', icon: '🔍', label: 'Entendimento com evidências' };
      case 'privacy':
        return { bg: 'bg-slate-100', border: 'border-slate-200', text: 'text-slate-800', icon: '🔒', label: 'Sem gravação de áudio' };
      default:
        return { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-700', icon: '⚡', label: 'Gerado com ToDeAcordo' };
    }
  };

  const style = getBadgeStyle();

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium border ${style.bg} ${style.border} ${style.text} ${className}`}>
      <span>{style.icon}</span>
      <span>{style.label}</span>
    </div>
  );
};

```

---

## Arquivo: src\todeacordo\src\content-script\index.ts
```typescript
import type { MeetingState } from '../platforms/google-meet/detector';
import { MeetingDetector } from '../platforms/google-meet/detector';
import { CaptionExtractor } from '../platforms/google-meet/captionExtractor';
import { CaptionProbe } from '../platforms/google-meet/probe';
import { MEET_SELECTORS } from '../platforms/google-meet/selectors';

console.log('[ToDeAcordo][ContentScript] Script ativo.');

// Injeta CSS para "Ghost Captions" (Legendas Invisíveis)
const injectGhostCSS = () => {
  if (document.getElementById('todeacordo-ghost-css')) return;
  const style = document.createElement('style');
  style.id = 'todeacordo-ghost-css';
  style.textContent = `
    /* Ghost Captions by ToDeAcordo */
    .a4cQT, .VbKzg, [jsname="tX9u1b"], .KjMtvf, .i3PoEd, .X49Xn {
      opacity: 0.001 !important;
      pointer-events: none !important;
      z-index: -9999 !important;
    }
  `;
  document.head.appendChild(style);
  console.log('[ToDeAcordo][ContentScript] Ghost CSS Injetado (Legendas Invisíveis).');
};

const injectInPageUI = () => {
  if (document.getElementById('todeacordo-inpage-container')) return;

  const style = document.createElement('style');
  style.id = 'todeacordo-inpage-css';
  style.textContent = `
    #todeacordo-inpage-container {
      position: fixed;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      z-index: 2147483647;
      display: flex;
      align-items: center;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    #todeacordo-inpage-container.collapsed {
      transform: translate(calc(100% - 48px), -50%);
    }
    #todeacordo-fab {
      width: 48px;
      height: 48px;
      background: #f59e0b;
      border-radius: 24px 0 0 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: -2px 0 8px rgba(0,0,0,0.15);
      border: 1px solid #d97706;
      border-right: none;
      transition: background 0.2s;
    }
    #todeacordo-fab:hover {
      background: #d97706;
    }
    #todeacordo-fab svg {
      width: 24px;
      height: 24px;
      color: #fff;
    }
    #todeacordo-sidebar {
      width: 360px;
      height: 85vh;
      background: #fff;
      border-radius: 16px 0 0 16px;
      box-shadow: -4px 0 24px rgba(0,0,0,0.2);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      border: 1px solid #e2e8f0;
      border-right: none;
    }
    #todeacordo-sidebar iframe {
      width: 100%;
      height: 100%;
      border: none;
      background: #fff;
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.id = 'todeacordo-inpage-container';
  // Open by default
  container.className = '';

  const fab = document.createElement('div');
  fab.id = 'todeacordo-fab';
  fab.innerHTML = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="pointer-events: none;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
  
  const sidebar = document.createElement('div');
  sidebar.id = 'todeacordo-sidebar';
  
  const iframe = document.createElement('iframe');
  iframe.src = chrome.runtime.getURL('sidepanel.html');
  iframe.allow = "microphone; clipboard-write; clipboard-read";

  sidebar.appendChild(iframe);
  container.appendChild(fab);
  container.appendChild(sidebar);

  document.body.appendChild(container);

  fab.addEventListener('click', () => {
    container.classList.toggle('collapsed');
  });

  console.log('[ToDeAcordo][ContentScript] In-Page UI Injetada.');
};

const autoEnableCaptions = () => {
  if (!MeetingDetector.areCaptionsEnabled()) {
    for (const selector of MEET_SELECTORS.CAPTIONS_TOGGLE_BUTTONS) {
      const btn = document.querySelector(selector) as HTMLElement;
      if (btn) {
        btn.click();
        console.log('[ToDeAcordo][ContentScript] Botão CC clicado automaticamente.');
        return;
      }
    }
  }
};

let currentState: MeetingState = 'INACTIVE';
let captionsEnabled: boolean = false;
let captionExtractor: CaptionExtractor | null = null;
let isCapturing: boolean = false;
let meetingId: string = 'meet-' + Date.now();
let lastObservedUrl = window.location.href;

// Reconecta o observer se o DOM mudar drasticamente
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target && target.innerText) {
    const text = target.innerText.toLowerCase();
    if (text.includes('participar') || text.includes('entrar') || text.includes('join')) {
      setTimeout(() => {
        if (captionExtractor) captionExtractor.reconnect();
      }, 2000);
    }
  }
});

// Função para checar o status e notificar o painel
const checkMeetingState = () => {
  if (window.location.href !== lastObservedUrl) {
    lastObservedUrl = window.location.href;
    if (captionExtractor) captionExtractor.reconnect();
  }

  const newState = MeetingDetector.detectState();
  const newCaptionsEnabled = MeetingDetector.areCaptionsEnabled();

  // Tarefa 4: Se o estado da reunião mudar de ACTIVE para LOBBY/INACTIVE, autodesliga a captura
  // MAS apenas se currentCaptureAllowed também for falso.
  const captureAllowed = captionExtractor ? captionExtractor.currentCaptureAllowed : false;
  if (newState !== 'ACTIVE' && isCapturing && !captureAllowed) {
    console.log('[ToDeAcordo][ContentScript] Reunião não está mais ativa. Auto-desligando capture.');
    if (captionExtractor) {
      captionExtractor.stop();
    }
    isCapturing = false;
    
    // Notifica o painel sobre o auto-stop
    chrome.runtime.sendMessage({
      type: 'CAPTURE_AUTO_STOPPED',
      reason: `Estado da reunião mudou para: ${newState}`
    }).catch(() => {});
    
    // Se saiu da reunião ativa, limpa a sessão para não reusar o ID na próxima reunião na mesma aba
    sessionStorage.removeItem('todeacordo_meeting_id');
  }

  if (newState !== currentState || newCaptionsEnabled !== captionsEnabled) {
    currentState = newState;
    captionsEnabled = newCaptionsEnabled;
    console.log(`[ToDeAcordo][ContentScript] Status alterado. Reunião: ${currentState}, Legendas: ${captionsEnabled}`);
    
    if (currentState === 'ACTIVE') {
      // Usa sessionStorage para sobreviver a F5 (Reload da página)
      let storedMeetingId = sessionStorage.getItem('todeacordo_meeting_id');
      if (!storedMeetingId) {
        storedMeetingId = 'meet-' + Date.now();
        sessionStorage.setItem('todeacordo_meeting_id', storedMeetingId);
      }
      meetingId = storedMeetingId;
      injectInPageUI();
      
      // AUTO-START CAPTURE
      if (!isCapturing) {
        if (captionExtractor) {
          captionExtractor.stop();
        }
        injectGhostCSS();
        autoEnableCaptions();
        captionExtractor = new CaptionExtractor(meetingId, (event) => {
          chrome.runtime.sendMessage(event).catch(() => {});
        });
        
        captionExtractor.start();
        isCapturing = true;
        console.log('[ToDeAcordo][ContentScript] Captura AUTO-INICIADA com sucesso!');
      }
    }

    chrome.runtime.sendMessage({
      type: 'MEET_STATUS_UPDATE',
      state: currentState,
      captionsEnabled: captionsEnabled,
      isCapturing: isCapturing,
      meetingId: meetingId
    }).catch(() => {});
  }
};

setInterval(checkMeetingState, 1000);

// Listener para receber comandos do Side Panel
chrome.runtime.onMessage.addListener((message: any, _sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
  console.log(`[ToDeAcordo][ContentScript] Mensagem recebida:`, message.type);

  if (message.type === 'START_CAPTURE') {
    // Só inicia se estiver ACTIVE (Tarefa 4)
    if (currentState !== 'ACTIVE') {
      sendResponse({ status: 'ERROR', reason: 'Apenas é permitido capturar em reunião ACTIVE (ativa).' });
      return;
    }

    if (!captionExtractor) {
      // Ativa a magia invisível do ToDeAcordo
      injectGhostCSS();
      autoEnableCaptions();
      
      captionExtractor = new CaptionExtractor(meetingId, (event) => {
        chrome.runtime.sendMessage(event).catch(() => {});
      });
    }
    
    captionExtractor.start();
    isCapturing = true;
    sendResponse({ status: 'OK' });
  }

  else if (message.type === 'STOP_CAPTURE') {
    if (captionExtractor) {
      captionExtractor.stop();
    }
    isCapturing = false;
    sendResponse({ status: 'OK' });
  }
  
  else if (message.type === 'GET_STATUS') {
    sendResponse({
      activeTabUrl: window.location.href,
      contentScriptConnected: true,
      meetingState: currentState,
      captionsEnabled: captionsEnabled,
      mutationObserverActive: isCapturing,
      observedRoot: 'document.body',
      lastMutationAt: captionExtractor ? captionExtractor.lastMutationAt : 0,
      
      // Telemetria refatorada
      activeDraftText: captionExtractor ? captionExtractor.activeDraftText : '',
      activeDraftSpeaker: captionExtractor ? captionExtractor.activeDraftSpeaker : '',
      activeDraftUpdatedAt: captionExtractor ? captionExtractor.activeDraftUpdatedAt : 0,
      committedSegmentsCount: captionExtractor ? captionExtractor.committedSegmentsCount : 0,
      draftUpdateCount: captionExtractor ? captionExtractor.draftUpdateCount : 0,
      lastCommitReason: captionExtractor ? captionExtractor.lastCommitReason : '',
      lastDiscardReason: captionExtractor ? captionExtractor.lastDiscardReason : '',
      lastCleanedText: captionExtractor ? captionExtractor.lastCleanedText : '',
      // Rolling Segment Telemetry (Tarefa 6)
      lastCommittedText: captionExtractor ? captionExtractor.lastCommittedText : '',
      lastCommittedId: captionExtractor ? captionExtractor.lastCommittedId : '',
      lastSegmentUpdatedId: captionExtractor ? captionExtractor.lastSegmentUpdatedId : '',
      updateReason: captionExtractor ? captionExtractor.updateReason : '',
      isExpansionOfCommitted: captionExtractor ? captionExtractor.isExpansionOfCommitted : false,
      novelSuffix: captionExtractor ? captionExtractor.novelSuffix : '',
      segmentUpdatedCount: captionExtractor ? captionExtractor.segmentUpdatedCount : 0,
      
      emittedHashesCount: captionExtractor ? captionExtractor.getEmittedHashesCount() : 0,
      systemTextFilteredCount: captionExtractor ? captionExtractor.systemTextFilteredCount : 0,
      lastSystemTextFiltered: captionExtractor ? captionExtractor.lastSystemTextFiltered : '',
      currentCaptureAllowed: captionExtractor ? captionExtractor.currentCaptureAllowed : false,
      captureBlockedReason: captionExtractor ? captionExtractor.captureBlockedReason : 'Sem extractor ativo',
    });
  }

  else if (message.type === 'RUN_PROBE') {
    const result = CaptionProbe.scan();
    sendResponse({ status: 'OK', result });
  }

  else if (message.type === 'SCAN_NOW') {
    if (currentState !== 'ACTIVE') {
      sendResponse({ status: 'EMPTY', reason: 'Captura manual bloqueada fora de ACTIVE.' });
      return;
    }

    const result = CaptionProbe.scan();
    if (result.lastRawText) {
      const segment = {
        id: 'scan-' + Date.now(),
        meeting_id: meetingId,
        timestamp: new Date().toISOString(),
        speaker: `Scan (${result.tagName}${result.className ? `.${result.className.split(' ')[0]}` : ''})`,
        text: result.lastRawText,
        source: 'manual-scan',
        captured_at: Date.now()
      };
      
      chrome.runtime.sendMessage({ type: 'NEW_SEGMENT', segment }).catch(() => {});
      sendResponse({ status: 'OK', segment });
    } else {
      sendResponse({ status: 'EMPTY', reason: 'Nenhum texto detectado nos nós candidatos.' });
    }
  }
  
  return true;
});

```

---

## Arquivo: src\todeacordo\src\dashboard\AdminBetaPage.tsx
```typescript
import { useEffect, useState } from 'react';
import { getWaitlist, type WaitlistLead } from '../storage/usageStorage';

export default function AdminBetaPage() {
  const [leads, setLeads] = useState<WaitlistLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getWaitlist().then(data => {
      setLeads(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8">Carregando métricas...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard Growth (Sprint Canhão)</h1>
      
      <div className="grid grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-1">Total Waitlist</h3>
          <p className="text-4xl font-bold text-indigo-600">{leads.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-1">Potencial ($29,90/mês)</h3>
          <p className="text-4xl font-bold text-green-600">R$ {(leads.length * 29.9).toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-sm font-medium text-slate-500 mb-1">Paywalls Mais Acionados</h3>
          <p className="text-xl font-bold text-slate-800">1. PDF Oficial<br/>2. WhatsApp</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-slate-800 mb-4">Leads Capturados (Intenção de Compra)</h2>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500 uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Nome</th>
              <th className="px-6 py-4 font-medium">E-mail</th>
              <th className="px-6 py-4 font-medium">WhatsApp</th>
              <th className="px-6 py-4 font-medium">Perfil</th>
              <th className="px-6 py-4 font-medium">Recurso Bloqueado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {leads.map(lead => (
              <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium">{lead.name}</td>
                <td className="px-6 py-4 text-sm">{lead.email}</td>
                <td className="px-6 py-4 text-sm">{lead.whatsapp || '-'}</td>
                <td className="px-6 py-4 text-sm"><span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">{lead.role}</span></td>
                <td className="px-6 py-4 text-sm"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs">{lead.attempted_feature || 'manual'}</span></td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">Nenhum lead capturado ainda. Espalhe o link!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\dashboard\AdminGrowthDashboard.tsx
```typescript
import { useEffect, useState } from 'react';

export default function AdminGrowthDashboard() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('tda_growth_events') || '[]');
    setEvents(data);
  }, []);

  const totalEvents = events.length;
  const validationsOpened = events.filter(e => e.event_name === 'validation_link_opened').length;
  const aceites = events.filter(e => e.event_name === 'accepted_with_signature').length;
  
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Admin Growth OS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <p className="text-slate-400 text-sm font-medium mb-1">Total de Eventos</p>
          <p className="text-4xl font-bold text-white">{totalEvents}</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <p className="text-slate-400 text-sm font-medium mb-1">Links de Validação Abertos</p>
          <p className="text-4xl font-bold text-indigo-400">{validationsOpened}</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <p className="text-slate-400 text-sm font-medium mb-1">Aceites Registrados</p>
          <p className="text-4xl font-bold text-green-400">{aceites}</p>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-700 bg-slate-800/50">
          <h2 className="font-bold text-white">Últimos Eventos</h2>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900/50 text-slate-400">
            <tr>
              <th className="px-6 py-3 font-medium">Evento</th>
              <th className="px-6 py-3 font-medium">Data</th>
              <th className="px-6 py-3 font-medium">Origem / Referer</th>
              <th className="px-6 py-3 font-medium">UTM Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {events.slice().reverse().slice(0, 50).map((e: any) => (
              <tr key={e.id} className="hover:bg-slate-700/20">
                <td className="px-6 py-3 font-mono text-indigo-300">{e.event_name}</td>
                <td className="px-6 py-3 text-slate-400">{new Date(e.timestamp).toLocaleString()}</td>
                <td className="px-6 py-3">{e.attribution_ref || '-'}</td>
                <td className="px-6 py-3">{e.utm_source || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\dashboard\AdminOpportunities.tsx
```typescript
import { useEffect, useState } from 'react';
import { OpportunityLogger, type OpportunityLead } from '../doors/opportunityDoors';

interface GrowthEvent {
  id: string;
  event_name: string;
  timestamp: number;
  url: string;
  attribution_ref: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  source_page: string;
  user_role: string;
  payload?: any;
}

export default function AdminOpportunities() {
  const [leads, setLeads] = useState<OpportunityLead[]>([]);
  const [events, setEvents] = useState<GrowthEvent[]>([]);

  useEffect(() => {
    setLeads(OpportunityLogger.getOpportunities());
    try {
      const storedEvents = JSON.parse(localStorage.getItem('tda_growth_events') || '[]');
      setEvents(storedEvents);
    } catch (e) {
      console.error('Falha ao carregar eventos de growth', e);
    }
  }, []);

  // Agregações de Funil baseadas em eventos reais salvos
  const totalCreated = events.filter(e => e.event_name === 'agreement_created').length || 10; // default para demonstração se vazio
  const totalOpened = events.filter(e => e.event_name === 'validation_page_opened' || e.event_name === 'validation_link_opened').length || 8;
  const totalIdentified = events.filter(e => e.event_name === 'lead_captured_from_validation' || e.event_name === 'counterparty_identified').length || 5;
  const totalSigned = events.filter(e => e.event_name === 'accepted_with_signature').length || 3;
  const totalWaitlist = events.filter(e => e.event_name === 'waitlist_joined').length || 2;

  // Taxas de conversão
  const openRate = ((totalOpened / totalCreated) * 100).toFixed(0);
  const identifyRate = ((totalIdentified / totalOpened) * 100).toFixed(0);
  const signRate = ((totalSigned / totalIdentified) * 100).toFixed(0);
  const waitlistRate = ((totalWaitlist / totalSigned) * 100).toFixed(0);

  const handleExportCSV = () => {
    if (leads.length === 0 && events.length === 0) {
      alert('Nenhum dado disponível para exportação.');
      return;
    }

    const csvRows: string[][] = [];
    csvRows.push(['Origem/Tipo', 'Nome/Evento', 'E-mail/Detalhe', 'Referral/Atribuição', 'UTM Source', 'UTM Medium', 'UTM Campaign', 'Data Criação']);

    // Adiciona leads das oportunidades
    leads.forEach(l => {
      csvRows.push([
        `opp_${l.type}`,
        l.name || 'Anônimo',
        l.email || '',
        l.interest || l.volume || '',
        '',
        '',
        '',
        new Date(l.created_at).toISOString()
      ]);
    });

    // Adiciona eventos de growth significativos
    events.forEach(e => {
      csvRows.push([
        'growth_event',
        e.event_name,
        e.payload?.email || JSON.stringify(e.payload) || '',
        e.attribution_ref || '',
        e.utm_source || '',
        e.utm_medium || '',
        e.utm_campaign || '',
        new Date(e.timestamp).toISOString()
      ]);
    });

    const csvContent = csvRows.map(row => row.map(val => `"${val.replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `todeacordo_growth_data_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Growth Funnel & Leads</h1>
            <p className="text-slate-400 text-sm mt-1">Visão ponta-a-ponta das taxas de conversão e leads consolidados.</p>
          </div>
          <button 
            onClick={handleExportCSV}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md active:scale-95 text-sm flex items-center gap-2"
          >
            📊 Exportar Relatório CSV
          </button>
        </div>

        {/* Visualizador de Funil */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center relative overflow-hidden">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">1. Gerados</h3>
            <div className="text-3xl font-black text-white">{totalCreated}</div>
            <p className="text-[10px] text-slate-500 mt-1">Acordos Criados</p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center relative overflow-hidden">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">2. Abertos</h3>
            <div className="text-3xl font-black text-blue-400">{totalOpened}</div>
            <p className="text-[10px] text-blue-500 mt-1">Taxa: {openRate}%</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center relative overflow-hidden">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">3. Identificados</h3>
            <div className="text-3xl font-black text-amber-400">{totalIdentified}</div>
            <p className="text-[10px] text-amber-500 mt-1">Taxa: {identifyRate}%</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center relative overflow-hidden">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">4. Aceitos</h3>
            <div className="text-3xl font-black text-green-400">{totalSigned}</div>
            <p className="text-[10px] text-green-500 mt-1">Taxa: {signRate}%</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-center relative overflow-hidden">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">5. Waitlist (SSO)</h3>
            <div className="text-3xl font-black text-purple-400">{totalWaitlist}</div>
            <p className="text-[10px] text-purple-500 mt-1">Taxa: {waitlistRate}%</p>
          </div>
        </div>

        {/* Tabela de Leads */}
        <h2 className="text-xl font-bold mb-4">Leads das Portas Operacionais</h2>
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900 text-slate-400">
              <tr>
                <th className="p-4">Tipo</th>
                <th className="p-4">Nome</th>
                <th className="p-4">E-mail</th>
                <th className="p-4">Interesse/Volume</th>
                <th className="p-4">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {leads.map(lead => (
                <tr key={lead.id} className="hover:bg-slate-700/50">
                  <td className="p-4"><span className="bg-slate-700 px-2 py-1 rounded text-xs uppercase">{lead.type}</span></td>
                  <td className="p-4 font-medium">{lead.name}</td>
                  <td className="p-4 text-slate-300">{lead.email}</td>
                  <td className="p-4 text-slate-400">{lead.interest || lead.volume || '-'}</td>
                  <td className="p-4 text-slate-400">{new Date(lead.created_at).toLocaleString('pt-BR')}</td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">Nenhum lead capturado nas portas. Divulgue!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\dashboard\DemoPage.tsx
```typescript
import { useState } from 'react';
import { trackGrowthEvent } from '../growth/growthLogger';

export default function DemoPage() {
  const [step, setStep] = useState<'input' | 'processing' | 'result'>('input');
  const [transcript] = useState(
    `[João] Então ficou acordado que a gente entrega o layout na semana que vem, né?\n[Maria] Sim, mas depende do time de marketing me passar a logo nova.\n[João] Beleza, se eles passarem, a gente entrega. E o pagamento?\n[Maria] Pode ser 50% agora e o restante depois, ou a gente acerta tudo no final, vemos depois.`
  );

  const handleGenerate = () => {
    setStep('processing');
    trackGrowthEvent('demo_cta_clicked', { stage: 'processing' });
    setTimeout(() => {
      setStep('result');
      trackGrowthEvent('demo_opened', { stage: 'completed' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 font-sans selection:bg-indigo-500/30">
      <div className="max-w-4xl w-full">
        {/* Progresso */}
        <div className="flex justify-between items-center mb-8 px-4">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ToDeAcordo Demo
          </span>
          <span className="text-xs text-slate-500 uppercase tracking-widest font-mono">
            Fluxo de 60 Segundos
          </span>
        </div>

        {/* Card Principal */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden min-h-[480px] flex flex-col md:flex-row">
          
          {/* Lado Esquerdo: Input / Transcrição */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
            <div>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded font-bold uppercase tracking-wider mb-4 inline-block">
                Transcrição Confusa de Reunião
              </span>
              <h2 className="text-2xl font-bold mb-4 text-slate-100">O que a IA escuta:</h2>
              <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line bg-slate-950 p-4 rounded-xl font-mono text-xs border border-slate-900/50">
                {transcript}
              </p>
            </div>

            {step === 'input' && (
              <button 
                onClick={handleGenerate}
                className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-95 text-center text-sm"
              >
                🪄 Gerar Entendimento com IA
              </button>
            )}

            {step === 'processing' && (
              <div className="mt-6 flex items-center justify-center gap-3 py-4 text-indigo-400 text-sm font-semibold">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processando Ambiguidade...
              </div>
            )}

            {step === 'result' && (
              <div className="mt-6 text-xs text-slate-500 text-center font-mono">
                Análise concluída em 1.8s.
              </div>
            )}
          </div>

          {/* Lado Direito: Resultados / Ação */}
          <div className="flex-1 p-8 md:p-12 bg-slate-900/50 flex flex-col justify-center">
            {step === 'input' && (
              <div className="text-center py-12">
                <span className="text-4xl">🔮</span>
                <h3 className="text-lg font-bold text-slate-300 mt-4 mb-2">Pronto para Mapear</h3>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">Clique no botão para alinhar prazos, identificar riscos operacionais e obter o aceite da contraparte.</p>
              </div>
            )}

            {step === 'processing' && (
              <div className="space-y-4 animate-pulse">
                <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                <div className="h-4 bg-slate-800 rounded"></div>
                <div className="h-4 bg-slate-800 rounded w-5/6"></div>
              </div>
            )}

            {step === 'result' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <span className="text-[10px] bg-red-950 text-red-400 border border-red-900 px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                    🚨 2 Riscos Operacionais Detectados
                  </span>
                  <ul className="text-xs text-slate-400 space-y-2">
                    <li>• <b>Prazo Vago</b>: "semana que vem" sem data fixa estipulada.</li>
                    <li>• <b>Pagamento Indefinido</b>: "vemos depois" deixa brecha de inadimplência.</li>
                  </ul>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
                  <span className="text-indigo-400 font-bold block mb-1">Entendimento Gerado:</span>
                  <p className="text-slate-300">1. Layout v1 entregue condicionado ao recebimento do logotipo.</p>
                  <p className="text-slate-300 mt-1">2. Responsável: João Silva.</p>
                </div>

                {/* Unicorn CTA de 3 Créditos */}
                <div className="bg-gradient-to-br from-indigo-900 to-purple-950 p-6 rounded-2xl border border-indigo-800/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl">🦄</div>
                  <h4 className="font-bold text-sm text-white mb-1">Evite mal-entendidos nas suas reuniões</h4>
                  <p className="text-indigo-200 text-[11px] mb-4">Ganhando 3 créditos de entendimento operacional na sua conta agora.</p>
                  <a 
                    href="/?ref=demo-flow&utm_source=todeacordo&utm_medium=demo_flow&utm_campaign=shared_consensus"
                    className="w-full bg-white hover:bg-slate-100 text-indigo-950 font-bold py-2.5 rounded-lg transition-transform active:scale-95 text-center text-xs block"
                  >
                    Resgatar meus 3 Créditos
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center mt-6">
          <a href="/" className="text-xs text-slate-500 hover:text-slate-400 underline">
            Voltar para o site principal
          </a>
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\dashboard\index.tsx
```typescript
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PrivacyPolicy from './Privacy';
import { getAllMeetings, clearMeeting, saveMeeting } from '../storage/meetingStorage';
import { clearConsensusForMeeting } from '../storage/consensusStorage';
import { saveTranscriptSegment } from '../storage/transcriptStorage';
import ValidationPage from './ValidationPage';
import { MeetingDetailsPage } from './MeetingDetailsPage';
import LandingPage from './LandingPage';
import AdminBetaPage from './AdminBetaPage';
import DemoPage from './DemoPage';
import { PaywallModal } from '../components/PaywallModal';
import { FEATURE_FLAGS } from '../featureFlags';
import { useUsage } from '../hooks/useUsage';

import WaitlistPage from './WaitlistPage';
import TemplateSeoPage from './TemplateSeoPage';
import TrustCenterPage from './TrustCenterPage';
import AdminGrowthDashboard from './AdminGrowthDashboard';
import ShareCardPage from './ShareCardPage';

// Rotas Virais
import ProgrammaticSeoPage from '../viral/ProgrammaticSeoPage';
import MisunderstandingCalculator from '../viral/MisunderstandingCalculator';
import BeforeAfterLab from '../viral/BeforeAfterLab';
import PublicRoaster from '../viral/PublicRoaster';
import WallOfConfusion from '../viral/WallOfConfusion';
import WhatsAppViralKit from '../viral/WhatsAppViralKit';
import NotAMinuteMicrosite from '../viral/NotAMinuteMicrosite';
import CompetitorPositioning from '../viral/CompetitorPositioning';

// Portas de Expansão
import IntegrationsDoor from '../doors/IntegrationsDoor';
import ApiDoor from '../doors/ApiDoor';
import WhiteLabelDoor from '../doors/WhiteLabelDoor';
import MarketplaceDoor from '../doors/MarketplaceDoor';
import PartnerDoor from '../doors/PartnerDoor';
import EnterpriseDoor from '../doors/EnterpriseDoor';
import AdminOpportunities from './AdminOpportunities';

// Protocolo
import { ProtocolDoor, AutopsyDoor, DoctorDoor, BenchmarkDoor, IntelligenceDoor, ConsultantKitDoor, EmailSignatureDoor } from '../doors/CategoryDoors';

const DEMO_MEETINGS = [
  { id: 'demo-1', title: 'Combinado com cliente', started_at: Date.now() - 1000 * 60 * 60 * 24, ended_at: Date.now() - 1000 * 60 * 60 * 23, duration: '45 min', status: 'ended', participants: ['Você', 'Cliente'], isDemo: true, type: 'demo', consensusStatus: 'Confirmado' },
  { id: 'demo-2', title: 'Orçamento de reforma', started_at: Date.now() - 1000 * 60 * 60 * 48, ended_at: Date.now() - 1000 * 60 * 60 * 47, duration: '1h20', status: 'ended', participants: ['Você', 'Empreiteiro'], isDemo: true, type: 'demo', consensusStatus: 'Pendente' },
  { id: 'demo-3', title: 'Entrega com freelancer', started_at: Date.now() - 1000 * 60 * 60 * 72, ended_at: Date.now() - 1000 * 60 * 60 * 71, duration: '15 min', status: 'ended', participants: ['Você', 'Dev'], isDemo: true, type: 'demo', consensusStatus: 'Com ressalvas' },
  { id: 'demo-4', title: 'Aluguel casa de praia', started_at: Date.now() - 1000 * 60 * 60 * 96, ended_at: Date.now() - 1000 * 60 * 60 * 95, duration: '30 min', status: 'ended', participants: ['Você', 'Marcos'], isDemo: true, type: 'demo', consensusStatus: 'Confirmado' },
  { id: 'demo-5', title: 'Combinado da viagem', started_at: Date.now() - 1000 * 60 * 60 * 120, ended_at: Date.now() - 1000 * 60 * 60 * 119, duration: '45 min', status: 'ended', participants: ['Você', 'Ana'], isDemo: true, type: 'demo', consensusStatus: 'Confirmado' },
  { id: 'demo-6', title: 'Divisão de contas', started_at: Date.now() - 1000 * 60 * 60 * 144, ended_at: Date.now() - 1000 * 60 * 60 * 143, duration: '10 min', status: 'ended', participants: ['Você', 'João'], isDemo: true, type: 'demo', consensusStatus: 'Pendente' }
];

  const getInitialRoute = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const route = urlParams.get('route');
    if (route) return route;
    return window.location.pathname;
  };

const DashboardApp = () => {
  const [currentRoute] = useState(getInitialRoute());
  const [currentTab, setCurrentTab] = useState('meetings');
  const [meetings, setMeetings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [attemptedFeature, setAttemptedFeature] = useState('');
  const [showTopBanner, setShowTopBanner] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [creationModalOpen, setCreationModalOpen] = useState(false);
  const [successModalData, setSuccessModalData] = useState<{link: string} | null>(null);
  const [showPinModal, setShowPinModal] = useState(false);
  const { canCreateUnderstanding, recordUsage } = useUsage();

  const showToast = (message: string, type: 'success'|'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    try {
      const allMeetings = await getAllMeetings();
      const validMeetings = allMeetings.filter((m: any) => m.status !== 'cleared').sort((a: any, b: any) => b.started_at - a.started_at);
      setMeetings(validMeetings);

      // Auto-Generate Check
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('autoGenerate') === 'true') {
        const mId = urlParams.get('meetingId');
        if (mId) {
          // Open the specific meeting with a flag to auto-generate
          window.location.replace(`?route=/meeting/${mId}&autoGenerate=true`);
        }
      }

      // Auto-Open Paywall Check
      if (urlParams.get('showPaywall') === 'true') {
        const feature = urlParams.get('feature') || 'Recurso Pro';
        setAttemptedFeature(feature);
        setPaywallOpen(true);
      }

    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // Route is already initialized

  const handleDelete = async (meetingId: string, isDemo?: boolean) => {
    if (confirm('Tem certeza que deseja excluir este entendimento?')) {
      if (!isDemo) {
        await clearMeeting(meetingId);
        await clearConsensusForMeeting(meetingId);
        await loadData();
      } else {
        setMeetings(prev => prev.filter(m => m.id !== meetingId));
      }
      showToast('Excluído com sucesso', 'success');
    }
  };

  const [isPasting, setIsPasting] = useState(false);
  const [pastedText, setPastedText] = useState('');

  const handleCreateExample = async () => {
    try {
      if (!canCreateUnderstanding()) {
        openFeature('Limite Gratuito Atingido');
        return;
      }
      await recordUsage();
      setCreationModalOpen(false);

      const meetingId = `meet-demo-${Date.now()}`;
      const meeting = {
        id: meetingId,
        title: 'Exemplo de Reunião (João e Maria)',
        started_at: Date.now() - 1000 * 60 * 5,
        ended_at: Date.now(),
        duration: '5 min',
        status: 'ended',
        participants: ['Você', 'João', 'Maria'],
        is_active: false,
        transcript_segment_ids: []
      };

      const segments = [
        { id: `seg-1-${Date.now()}`, speaker: 'João', text: 'Então ficou acordado que a gente entrega o layout na semana que vem, né?', captured_at: Date.now() - 5000, meeting_id: meetingId, timestamp: new Date(Date.now() - 5000).toISOString(), source: 'demo' },
        { id: `seg-2-${Date.now()}`, speaker: 'Maria', text: 'Sim, mas depende do time de marketing me passar a logo nova.', captured_at: Date.now() - 4000, meeting_id: meetingId, timestamp: new Date(Date.now() - 4000).toISOString(), source: 'demo' },
        { id: `seg-3-${Date.now()}`, speaker: 'João', text: 'Beleza, se eles passarem, a gente entrega. E o pagamento?', captured_at: Date.now() - 3000, meeting_id: meetingId, timestamp: new Date(Date.now() - 3000).toISOString(), source: 'demo' },
        { id: `seg-4-${Date.now()}`, speaker: 'Maria', text: 'Pode ser 50% agora e o restante depois, ou a gente acerta tudo no final, vemos depois.', captured_at: Date.now() - 2000, meeting_id: meetingId, timestamp: new Date(Date.now() - 2000).toISOString(), source: 'demo' }
      ];

      await saveMeeting(meeting as any);
      for (const seg of segments) {
        await saveTranscriptSegment(seg);
      }

      window.location.replace(`?route=/meeting/${meetingId}&autoGenerate=true`);
    } catch (e) {
      console.error('Erro ao criar exemplo:', e);
      showToast('Erro ao criar exemplo operacional', 'error');
    }
  };

  const handleProcessPastedText = async () => {
    try {
      if (!pastedText.trim()) {
        showToast('Por favor, cole algum texto.', 'error');
        return;
      }
      if (!canCreateUnderstanding()) {
        openFeature('Limite Gratuito Atingido');
        return;
      }
      await recordUsage();
      setIsPasting(false);
      setCreationModalOpen(false);

      const meetingId = `meet-paste-${Date.now()}`;
      const meeting = {
        id: meetingId,
        title: 'Conversa Colada',
        started_at: Date.now() - 1000 * 60 * 2,
        ended_at: Date.now(),
        duration: '2 min',
        status: 'ended',
        participants: ['Você'],
        is_active: false,
        transcript_segment_ids: []
      };

      const lines = pastedText.split('\n').filter(l => l.trim() !== '');
      const segments = lines.map((line, idx) => {
        let speaker = 'Participante';
        let text = line;
        const match = line.match(/^\[?([^\]\:]+)\]?[\:\s](.*)$/);
        if (match) {
          speaker = match[1].trim();
          text = match[2].trim();
        }
        return {
          id: `seg-p-${idx}-${Date.now()}`,
          speaker,
          text,
          captured_at: Date.now() - (lines.length - idx) * 1000,
          meeting_id: meetingId,
          timestamp: new Date(Date.now() - (lines.length - idx) * 1000).toISOString(),
          source: 'pasted'
        };
      });

      await saveMeeting(meeting as any);
      for (const seg of segments) {
        await saveTranscriptSegment(seg);
      }
      setPastedText('');

      window.location.replace(`?route=/meeting/${meetingId}&autoGenerate=true`);
    } catch (e) {
      console.error('Erro ao processar texto colado:', e);
      showToast('Erro ao processar a conversa colada', 'error');
    }
  };

  const handleCreateAction = async () => {
    setIsPasting(true);
  };

  const openGoogleMeet = () => {
    setCreationModalOpen(false);
    window.open('https://meet.google.com/new', '_blank');
  };



  const openFeature = (feature: string) => {
    setCreationModalOpen(false);
    setAttemptedFeature(feature);
    setPaywallOpen(true);
  };

  const renderCreationModal = () => {
    if (!creationModalOpen) return null;
    return (
      <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative">
          <button onClick={() => { setCreationModalOpen(false); setIsPasting(false); }} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">✕</button>
          
          {isPasting ? (
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Colar conversa ou transcrição</h3>
              <p className="text-xs text-slate-500 mb-4">Cole a transcrição de um chat, e-mail ou reunião abaixo para extrair os combinados operacionais.</p>
              <textarea 
                value={pastedText}
                onChange={e => setPastedText(e.target.value)}
                placeholder="Ex:&#10;[João] Entrego na terça-feira&#10;[Maria] Combinado, te pago 50% após o recebimento"
                className="w-full h-48 border border-slate-200 rounded-xl p-3 text-slate-800 focus:border-amber-400 outline-none mb-4 resize-none text-sm"
              />
              <div className="flex gap-2">
                <button onClick={() => setIsPasting(false)} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 rounded-xl transition-colors text-sm">
                  Voltar
                </button>
                <button onClick={handleProcessPastedText} className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 rounded-xl transition-colors text-sm">
                  Gerar com IA
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Como deseja criar?</h3>
              <div className="space-y-3">
                <button onClick={handleCreateAction} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50 transition-colors flex items-center gap-3">
                  <span className="text-xl">📝</span>
                  <span className="font-bold text-slate-800">Colar conversa</span>
                </button>
                <button onClick={openGoogleMeet} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50 transition-colors flex items-center gap-3">
                  <span className="text-xl">📹</span>
                  <span className="font-bold text-slate-800">Usar Google Meet</span>
                </button>
                <button onClick={handleCreateExample} className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors flex items-center gap-3">
                  <span className="text-xl">👀</span>
                  <span className="font-bold text-slate-800">Criar exemplo</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPinModal = () => {
    if (!showPinModal) return null;
    return (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-white rounded-3xl p-6 w-full max-w-2xl shadow-2xl relative border border-slate-100">
          <button 
            onClick={() => setShowPinModal(false)} 
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center font-bold transition-colors"
          >
            ✕
          </button>
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black text-slate-900 mb-2 flex items-center justify-center gap-2">
              Você está quase lá! 🥳
            </h3>
            <p className="text-slate-500 text-sm">
              Fixe a extensão no seu navegador para ativá-la facilmente nas chamadas do Google Meet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Imagem Ilustrativa Gerada */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 p-2 shadow-inner">
              <img 
                src="/pin_extension_guide.png" 
                alt="Como fixar extensão" 
                className="w-full object-contain max-h-56 rounded-lg"
              />
            </div>

            {/* Passos do Tutorial */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                <div>
                  <p className="text-sm font-bold text-slate-800">Clique no ícone de Extensões</p>
                  <p className="text-xs text-slate-500">Ele tem o formato de quebra-cabeça 🧩 e fica no topo direito do seu Chrome.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                <div>
                  <p className="text-sm font-bold text-slate-800">Encontre o ToDeAcordo</p>
                  <p className="text-xs text-slate-500">Procure pelo ToDeAcordo na lista de extensões instaladas.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                <div>
                  <p className="text-sm font-bold text-slate-800">Clique no Alfinete 📌</p>
                  <p className="text-xs text-slate-500">Ao clicar para fixar, o ícone do ToDeAcordo ficará visível permanentemente na barra superior do navegador.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setShowPinModal(false)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-indigo-200 transition-all transform active:scale-95 text-sm"
            >
              Fixei a extensão!
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderMeetingRow = (meeting: any, isDemo: boolean = false) => {
    const validationLink = isDemo ? `/index.html?route=/valida/demo` : `/index.html?route=/valida/${meeting.id}`;
    const dashboardLink = isDemo ? `index.html?route=/meeting/demo` : `index.html?route=/meeting/${meeting.id}`;
    const statusText = meeting.consensusStatus || 'Pendente';
    const statusColor = statusText === 'Confirmado' ? 'bg-green-100 text-green-700 border-green-200' : statusText === 'Com ressalvas' ? 'bg-amber-100 text-amber-700 border-amber-200' : 'bg-slate-100 text-slate-600 border-slate-200';

    return (
      <div key={meeting.id} className={`p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:items-center justify-between transition-colors border-b border-slate-100 last:border-0 ${isDemo ? 'bg-amber-50/30' : 'hover:bg-slate-50'}`}>
        <div className="flex-1 min-w-0 pr-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <a href={dashboardLink} className="text-sm font-bold text-slate-900 truncate hover:text-blue-600 transition-colors">
                {meeting.title || 'Entendimento sem título'}
              </a>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${statusColor}`}>
                {statusText}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> {new Date(meeting.started_at).toLocaleDateString()}</span>
              {meeting.duration && (
                <>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{meeting.duration}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 ml-2">
          {statusText === 'Pendente' ? (
            <button onClick={() => {
              const link = `${window.location.origin}${validationLink}`;
              const msg = `Envie este link para confirmar o entendimento:\n👉 ${link}`;
              window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
            }} className="hidden md:flex bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded-lg shadow-sm transition-colors items-center gap-2 text-sm mr-2">
              <span>💬</span> Compartilhar para confirmar
            </button>
          ) : null}
          
          <a href={dashboardLink} className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors flex items-center gap-1 text-xs font-medium" title="Ver no Painel">
            <span className="text-sm">👁</span> <span className="hidden md:inline">Painel</span>
          </a>
          <button onClick={() => {
            navigator.clipboard.writeText(window.location.origin + validationLink);
            showToast('Link copiado!');
          }} className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors flex items-center gap-1 text-xs font-medium" title="Copiar Link de Validação">
            <span className="text-sm">🔗</span> <span className="hidden md:inline">Copiar Link</span>
          </button>
          {statusText !== 'Pendente' && (
            <button onClick={() => {
              const link = `${window.location.origin}${validationLink}`;
              const msg = `Envie este link para confirmar o entendimento:\n👉 ${link}`;
              window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
            }} className="p-1.5 text-slate-500 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex items-center gap-1 text-xs font-medium" title="WhatsApp">
              <span className="text-sm">💬</span> <span className="hidden md:inline">WhatsApp</span>
            </button>
          )}
          <button onClick={() => handleDelete(meeting.id, isDemo)} className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors" title="Excluir">
            <span className="text-sm">🗑</span>
          </button>
        </div>
      </div>
    );
  };

  const renderSuccessModal = () => {
    if (!successModalData) return null;
    return (
      <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative text-center">
          <button onClick={() => setSuccessModalData(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">✕</button>
          
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Tudo pronto. Seu link de confirmação foi gerado.</h3>
          <p className="text-slate-500 mb-8">Envie para a outra pessoa confirmar se entendeu da mesma forma.</p>
          
          <div className="space-y-3 mb-6">
            <button onClick={() => {
              const msg = `Envie este link para confirmar o entendimento:\n👉 ${successModalData.link}`;
              window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
            }} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-lg">
              <span>💬</span> Enviar por WhatsApp
            </button>
            <button onClick={() => {
              navigator.clipboard.writeText(successModalData.link);
              showToast('Link copiado!');
            }} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-lg">
              <span>🔗</span> Copiar link
            </button>
          </div>
          
          <a href={successModalData.link} target="_blank" rel="noreferrer" className="text-sm font-bold text-indigo-600 hover:text-indigo-700">
            Ver entendimento
          </a>
        </div>
      </div>
    );
  };

  const renderMeetingsList = () => {
    return (
      <div className="flex-1 flex flex-col min-h-screen bg-slate-50">
        {showTopBanner && (
          <div className="bg-indigo-600 text-white px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold shadow-md">
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Quer capturar combinados em tempo real no Google Meet? Instale nossa extensão oficial Chrome!</span>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button 
                onClick={() => setShowPinModal(true)}
                className="text-white hover:text-indigo-200 underline font-bold transition-colors text-xs"
              >
                Como fixar? 🧩
              </button>
              <a 
                href="https://chromewebstore.google.com/detail/jicbcgjheaebfkecdpeenpnifgpjjgig?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-indigo-50 transition-all shadow-sm"
              >
                Instalar no Chrome
              </a>
              <button onClick={() => setShowTopBanner(false)} className="text-white/80 hover:text-white font-bold text-base leading-none">✕</button>
            </div>
          </div>
        )}

        <div className="p-6 md:p-10 max-w-5xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h2 className="text-2xl font-black text-slate-900 mb-1 flex items-center gap-3">
              Meus entendimentos
            </h2>
            <button onClick={() => setCreationModalOpen(true)} className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all whitespace-nowrap text-xl flex items-center gap-3 border border-amber-300">
              + Criar entendimento
            </button>
          </div>

          {/* Social / Network Effect Indicator */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3 mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">📈</div>
            <p className="text-sm text-indigo-900 font-medium"><strong>47 pessoas</strong> já confirmaram entendimentos enviados por você.</p>
          </div>

          <div className="relative mb-6">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">🔍</span>
            <input 
              type="text" 
              placeholder="O que você procura?" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl py-4 pl-12 pr-4 text-base focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all shadow-sm"
            />
          </div>

          {/* Assinatura do Produto (Indicador Central) */}
          <div className="bg-white rounded-2xl p-6 mb-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-1">Entendimentos recentes</h2>
              <p className="text-slate-500 text-sm">Resumo da sua base de alinhamentos.</p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700"><span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> 12 Confirmados</div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> 2 Pendentes</div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> 1 Com ressalvas</div>
              </div>
              <div className="w-px h-16 bg-slate-200"></div>
              <div className="text-center pr-4">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Clareza média</div>
                <div className="text-3xl font-black text-green-600">97%</div>
              </div>
            </div>
          </div>

          {/* Seção Copiloto IA removida no MVP */}

          {meetings.length === 0 ? (
            <div className="mb-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-10 text-center shadow-sm max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">🤝</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Toda conversa importante merece terminar com um entendimento compartilhado.</h3>
                <p className="text-slate-500 text-sm mb-8">Cole uma conversa, importe do Google Meet ou comece escrevendo.</p>
                <div className="flex justify-center flex-wrap gap-3">
                  <button onClick={handleCreateAction} className="bg-slate-900 text-white font-bold px-6 py-2.5 rounded-lg shadow-sm hover:bg-slate-800 transition-colors text-sm">Colar conversa</button>
                  <button onClick={openGoogleMeet} className="bg-white border border-slate-300 text-slate-700 font-bold px-6 py-2.5 rounded-lg shadow-sm hover:bg-slate-50 transition-colors text-sm">Usar no Meet</button>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-4 px-2">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Exemplos para testar</h3>
                <span className="text-xs text-slate-500">Experimente o fluxo completo antes de usar uma conversa real.</span>
              </div>
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                {DEMO_MEETINGS.map(m => renderMeetingRow(m, true))}
              </div>
            </div>
          ) : (
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-16">
              {meetings.map(m => renderMeetingRow(m, false))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // === REDIRECIONAMENTO DE DOMÍNIO ===
  if (window.location.hostname === 'app.todeacordo.com.br' && currentRoute === '/') {
    window.location.replace('/app');
    return null;
  }

  // === ROTAS ESSENCIAIS ===
  if (currentRoute.startsWith('/meeting')) return <MeetingDetailsPage />;
  if (currentRoute.startsWith('/valida')) return <ValidationPage />;
  if (currentRoute === '/demo') return <DemoPage />;
  if (currentRoute.startsWith('/demo/')) return <ValidationPage />;
  if (currentRoute === '/analisar') return <PublicRoaster />;
  if (currentRoute === '/privacidade') return <PrivacyPolicy />;

  // === ROTAS SECUNDÁRIAS ===
  if (FEATURE_FLAGS.ENABLE_SEO_PAGES && currentRoute.startsWith('/templates/')) return <TemplateSeoPage />;
  if (FEATURE_FLAGS.ENABLE_SEO_PAGES && currentRoute.startsWith('/share/')) return <ShareCardPage />;
  if (FEATURE_FLAGS.ENABLE_WAITLIST && currentRoute === '/waitlist') return <WaitlistPage />;
  if (FEATURE_FLAGS.ENABLE_TRUST_CENTER && currentRoute === '/seguranca') return <TrustCenterPage />;
  
  // Rotas Virais
  if (FEATURE_FLAGS.ENABLE_GROWTH_ROUTES && currentRoute.startsWith('/casos-de-uso/')) return <ProgrammaticSeoPage />;
  if (FEATURE_FLAGS.ENABLE_GROWTH_ROUTES && currentRoute.startsWith('/comparativos/')) return <CompetitorPositioning />;
  if (FEATURE_FLAGS.ENABLE_GROWTH_ROUTES && currentRoute === '/calculadora') return <MisunderstandingCalculator />;
  if (FEATURE_FLAGS.ENABLE_GROWTH_ROUTES && currentRoute === '/antes-e-depois') return <BeforeAfterLab />;
  if (FEATURE_FLAGS.ENABLE_GROWTH_ROUTES && currentRoute === '/mural') return <WallOfConfusion />;
  if (FEATURE_FLAGS.ENABLE_GROWTH_ROUTES && currentRoute === '/tools/whatsapp') return <WhatsAppViralKit />;
  if (FEATURE_FLAGS.ENABLE_GROWTH_ROUTES && currentRoute === '/nao-e-ata') return <NotAMinuteMicrosite />;

  // Portas de Expansão
  if (FEATURE_FLAGS.ENABLE_FAKE_DOORS && currentRoute === '/integracoes') return <IntegrationsDoor />;
  if (FEATURE_FLAGS.ENABLE_FAKE_DOORS && currentRoute === '/api') return <ApiDoor />;
  if (FEATURE_FLAGS.ENABLE_FAKE_DOORS && currentRoute === '/white-label') return <WhiteLabelDoor />;
  if (FEATURE_FLAGS.ENABLE_FAKE_DOORS && currentRoute === '/templates') return <MarketplaceDoor />;
  if (FEATURE_FLAGS.ENABLE_FAKE_DOORS && currentRoute === '/parceiros') return <PartnerDoor />;
  if (FEATURE_FLAGS.ENABLE_FAKE_DOORS && currentRoute === '/empresas') return <EnterpriseDoor />;
  
  // Admin Dashboards
  if (FEATURE_FLAGS.ENABLE_ADMIN_DASHBOARDS && currentRoute === '/admin/growth') return <AdminGrowthDashboard />;
  if (FEATURE_FLAGS.ENABLE_ADMIN_DASHBOARDS && currentRoute === '/admin/opportunities') return <AdminOpportunities />;
  if (FEATURE_FLAGS.ENABLE_ADMIN_DASHBOARDS && currentRoute === '/admin/intelligence') return <IntelligenceDoor />;
  if (FEATURE_FLAGS.ENABLE_ADMIN_DASHBOARDS && currentRoute === '/admin-beta') return <AdminBetaPage />;
  
  // Protocolo
  if (FEATURE_FLAGS.ENABLE_PROTOCOL_PAGES && currentRoute === '/protocol') return <ProtocolDoor />;
  if (FEATURE_FLAGS.ENABLE_PROTOCOL_PAGES && currentRoute === '/autopsia') return <AutopsyDoor />;
  if (FEATURE_FLAGS.ENABLE_PROTOCOL_PAGES && currentRoute === '/doctor') return <DoctorDoor />;
  if (FEATURE_FLAGS.ENABLE_PROTOCOL_PAGES && currentRoute === '/benchmark') return <BenchmarkDoor />;
  if (FEATURE_FLAGS.ENABLE_PROTOCOL_PAGES && currentRoute === '/kit/consultores') return <ConsultantKitDoor />;
  if (FEATURE_FLAGS.ENABLE_SIGNATURE && currentRoute === '/assinatura-email') return <EmailSignatureDoor />;

  if (currentRoute === '/') return <LandingPage />;
  if (loading) return <div className="flex h-screen items-center justify-center">Carregando painel...</div>;

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      <aside className="w-[220px] bg-slate-900 border-r border-slate-800 flex flex-col shrink-0 h-full text-slate-300">
        <div className="p-4 flex items-center gap-3">
          <div className="w-7 h-7 bg-amber-400 rounded-lg flex items-center justify-center text-slate-900 font-bold text-base shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h1 className="text-lg font-black text-white tracking-tight">ToDeAcordo</h1>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col scrollbar-hide">
          <nav className="px-3 py-2 space-y-1 text-sm font-medium">
            <button onClick={() => setCurrentTab('meetings')} className={`w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg transition-colors ${currentTab === 'meetings' ? 'bg-amber-400/10 text-amber-400 font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
              <span className="opacity-70">📄</span> Meus entendimentos
            </button>
            
            <button onClick={() => setCreationModalOpen(true)} className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors mt-2">
              <span className="opacity-70">➕</span> Novo entendimento
            </button>
            
            <button onClick={() => setCurrentTab('privacy')} className={`w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg transition-colors ${currentTab === 'privacy' ? 'bg-amber-400/10 text-amber-400 font-bold' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}>
              <span className="opacity-70">🔒</span> Privacidade
            </button>

            <button 
              onClick={() => {
                setAttemptedFeature('Apoio Voluntário');
                setPaywallOpen(true);
              }}
              className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 transition-colors mt-4 border border-amber-400/20 bg-amber-450/5 text-xs font-bold"
            >
              <span>⚡</span> Apoiar / Virar Pro
            </button>
          </nav>

          <div className="mt-auto pb-4">
            {/* Upgrade/Plano usage hidden for MVP */}

            <div className="px-4 py-2 border-t border-slate-800/50 mt-2 flex items-center gap-3 hover:bg-slate-800 cursor-pointer transition-colors mx-2 rounded-lg">
              <div className="w-6 h-6 rounded bg-slate-700 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                AF
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">Alexandre Florio</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto relative bg-slate-50">
        {currentTab === 'meetings' ? renderMeetingsList() : <div className="p-8 max-w-5xl mx-auto"><PrivacyPolicy /></div>}

        {toast && (
          <div className="absolute bottom-6 right-6 z-50 animate-fadeIn">
            <div className={`px-4 py-3 rounded border text-sm font-bold shadow-lg flex items-center gap-2 ${
              toast.type === 'success' ? 'bg-green-600 border-green-700 text-white' : 'bg-red-600 border-red-700 text-white'
            }`}>
              {toast.message}
            </div>
          </div>
        )}

        {renderCreationModal()}
        {renderPinModal()}
      </main>

      {renderSuccessModal()}
      <PaywallModal 
        isOpen={paywallOpen} 
        onClose={() => setPaywallOpen(false)} 
        attemptedFeature={attemptedFeature} 
      /></div>
  );
};

const container = document.getElementById('dashboard-root');
if (container) {
  const root = createRoot(container);
  root.render(<DashboardApp />);
}

```

---

## Arquivo: src\todeacordo\src\dashboard\LandingPage.tsx
```typescript

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">✓</div>
           <span className="font-bold text-xl tracking-tight">ToDeAcordo</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#solucao" className="hover:text-slate-900 transition-colors">Solução</a>
          <a href="#casos" className="hover:text-slate-900 transition-colors">Casos de Uso</a>
          <a href="#planos" className="hover:text-slate-900 transition-colors">Planos</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/app" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block">Entrar</a>
          <a href="/app" className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-all shadow-sm flex items-center gap-2">
            Adicionar ao Chrome — É grátis
          </a>
        </div>
      </nav>

      <main>
        {/* Bloco 1: Headline de inadequação */}
        <section className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Novo padrão para reuniões
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              As pessoas não brigam pelo que foi dito. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Brigam pelo que cada uma entendeu.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Mais do que uma transcrição. O ToDeAcordo transforma conversas em um <strong>pacto de entendimento</strong> invisível e sem burocracia, que a outra pessoa confirma com um clique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a href="/app" className="bg-indigo-600 text-white text-base font-bold px-8 py-4 rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 text-center flex items-center justify-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6 0-5.302 4.298-9.6 9.6-9.6 5.302 0 9.6 4.298 9.6 9.6 0 5.302-4.298 9.6-9.6 9.6zm0-15.6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/>
                </svg>
                Instalar Extensão — É Grátis
              </a>
              <a href="#exemplo" className="bg-white text-slate-700 border border-slate-200 text-base font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-all shadow-sm text-center">
                Colar conversa agora
              </a>
            </div>
            <p className="text-sm text-slate-500 font-medium ml-2 flex items-center gap-2 justify-center sm:justify-start">
              <span className="text-amber-400 text-lg">★★★★★</span> Não exige cartão de crédito
            </p>
          </div>
          
          <div className="relative">
            {/* Mockup CSS */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden relative z-10 transform lg:translate-x-4">
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-amber-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
                <div className="mx-auto bg-white border border-slate-200 rounded-md px-4 py-1 text-[11px] text-slate-500 font-medium flex items-center gap-2">
                  <span className="opacity-50">🔒</span> todeacordo.com.br/valida/xyz
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Combinado do Projeto</h3>
                  <span className="bg-amber-100 text-amber-700 text-[10px] uppercase font-bold px-2 py-1 rounded">Aguardando aceite</span>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs shrink-0 mt-0.5 border border-indigo-100">✓</div>
                    <p className="text-sm text-slate-600 leading-snug">O João vai fazer a edição do vídeo e entregar até terça-feira.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs shrink-0 mt-0.5 border border-indigo-100">✓</div>
                    <p className="text-sm text-slate-600 leading-snug">A Maria ficou de mandar as imagens de apoio até segunda de manhã.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-green-600 text-white font-bold py-2.5 rounded-lg text-sm shadow">Tô de acordo</button>
                  <button className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-2.5 rounded-lg text-sm shadow-sm">Tenho ressalvas</button>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-indigo-100 to-purple-50 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>

        {/* Bloco 2: Identificação da dor */}
        <section className="py-24 bg-white border-y border-slate-100 text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 tracking-tight">Todo mundo já viveu isso.</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {['"Achei que estava incluído."', '"Mas eu entendi diferente."', '"Você nunca falou isso."', '"Não foi esse o combinado."', '"Depois a gente resolve."'].map((frase, i) => (
                <div key={frase} className={`bg-slate-50 border border-slate-200 text-slate-600 px-6 py-4 rounded-2xl font-medium text-lg transition-transform hover:scale-105 shadow-sm ${i % 2 === 0 ? 'rotate-1 hover:rotate-0' : '-rotate-1 hover:rotate-0'}`}>
                  {frase}
                </div>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              O problema não é a conversa.<br/>
              <span className="text-indigo-600 font-bold mt-2 inline-block">É cada um sair dela com uma versão diferente.</span>
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left mt-8">
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <div className="text-red-500 font-bold mb-2 flex items-center gap-2"><span className="text-xl">⏱️</span> Perda de Tempo</div>
                <p className="text-slate-700 text-sm leading-relaxed">Horas gastas tentando lembrar quem ficou de fazer o quê e buscando mensagens antigas.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <div className="text-amber-600 font-bold mb-2 flex items-center gap-2"><span className="text-xl">🤝</span> Desgaste na Relação</div>
                <p className="text-slate-700 text-sm leading-relaxed">O clima pesa. A outra pessoa jura que você prometeu algo que você tem certeza que não prometeu.</p>
              </div>
              <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
                <div className="text-slate-600 font-bold mb-2 flex items-center gap-2"><span className="text-xl">🔋</span> Dreno de Energia</div>
                <p className="text-slate-700 text-sm leading-relaxed">O estresse silencioso de depender da memória e ficar com a sensação de que algo ficou para trás.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 3: Inimigo comum */}
        <section className="py-24 bg-slate-900 text-white text-center px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900 -z-10"></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
              O inimigo não é falta de anotação.<br/>É falta de confirmação.
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
              Transcrição ajuda a lembrar. Resumo ajuda a organizar.<br/>
              <strong className="text-white font-medium mt-2 inline-block bg-white/10 px-4 py-1 rounded-lg">Mas só a confirmação mostra que os dois entenderam a mesma coisa.</strong>
            </p>
          </div>
        </section>

        {/* Bloco 4: Antes e depois */}
        <section className="py-24 bg-slate-50 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 tracking-tight">A diferença aparece quando surge a dúvida.</h2>
            
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 rounded-l-2xl"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Antes</span>
                  <div className="text-slate-600 italic text-lg font-medium ml-2">"Mas eu achei que..."</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-green-200 shadow-md flex flex-col justify-center relative bg-gradient-to-r from-green-50 to-white">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500 rounded-l-2xl"></div>
                  <span className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-2 ml-2">Com ToDeAcordo</span>
                  <div className="text-slate-900 font-bold flex items-center gap-2 ml-2">
                    <span className="text-green-600">✔</span> Confirmado em 04/07 às 15:42.
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 rounded-l-2xl"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Antes</span>
                  <div className="text-slate-600 italic text-lg font-medium ml-2">"Não foi isso que combinamos."</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-md flex flex-col justify-center relative bg-gradient-to-r from-amber-50 to-white">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 rounded-l-2xl"></div>
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-2 ml-2">Com ToDeAcordo</span>
                  <div className="text-slate-900 font-bold flex items-center gap-2 ml-2">
                    <span className="text-amber-500">⚠</span> João adicionou uma ressalva.
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 rounded-l-2xl"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Antes</span>
                  <div className="text-slate-600 italic text-lg font-medium ml-2">"Eu tinha entendido outra coisa."</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-indigo-200 shadow-md flex flex-col justify-center relative bg-gradient-to-r from-indigo-50 to-white">
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 rounded-l-2xl"></div>
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2 ml-2">Com ToDeAcordo</span>
                  <div className="text-slate-900 font-bold flex items-center gap-2 ml-2">
                    <span className="text-indigo-600">✔</span> Ambas as partes confirmaram o entendimento.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 5: Mecanismo único */}
        <section id="solucao" className="py-24 bg-white px-6 border-t border-slate-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Enquanto outros aplicativos apenas "anotam", o ToDeAcordo amarra a conversa e fecha o combinado.
            </h2>
            <p className="text-lg text-slate-500 mb-16 max-w-2xl mx-auto">
              O passo a passo simples para não deixar nada no ar.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 relative max-w-4xl mx-auto">
              {/* Fluxo */}
              {[
                { step: '1', title: 'Conversa', desc: 'No Meet ou Zoom', icon: '🗣️' },
                { step: '2', title: 'IA Organiza', desc: 'Extrai o que importa', icon: '🤖' },
                { step: '3', title: 'Você Revisa', desc: 'Ajusta os detalhes', icon: '👀' },
                { step: '4', title: 'Envia Link', desc: 'Via WhatsApp/Email', icon: '🔗' },
                { step: '5', title: 'Confirmação', desc: 'Aceite ou ressalva', icon: '🤝' },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center relative z-10 w-full md:w-auto flex-1">
                  <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-4 group hover:border-indigo-500 hover:shadow-md transition-all">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
              {/* Linha conectora desktop */}
              <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-slate-100 -z-10"></div>
            </div>
          </div>
        </section>

        {/* Bloco 6: Demonstração visual */}
        <section id="exemplo" className="py-24 bg-slate-50 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Você saiu da reunião achando que estava tudo certo. A outra pessoa também?</h2>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-[10px]">✓</div>
                <span className="font-bold text-slate-800 text-sm">ToDeAcordo</span>
              </div>
              <span className="text-xs text-slate-500 font-bold px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm uppercase tracking-wider">Simulação</span>
            </div>
            
            <div className="p-6 md:p-12">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">Reunião de Escopo: Projeto Alfa</h3>
              <p className="text-sm text-slate-500 mb-10">Gerado hoje • Por Alexandre Florio</p>
              
              <div className="space-y-8 mb-10">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Resumo da Conversa</h4>
                  <p className="text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    Definimos os passos para a próxima sprint. O foco será entregar a infraestrutura em nuvem antes de avançar para as integrações front-end.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    Combinados Firmados
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                      <div className="text-indigo-600 font-bold mt-0.5">1.</div>
                      <span className="text-slate-700">A equipe fará o setup do banco até sexta-feira (18/08).</span>
                    </li>
                    <li className="flex gap-3 bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                      <div className="text-indigo-600 font-bold mt-0.5">2.</div>
                      <span className="text-slate-700">A Maria ficou de comprar as passagens antes de quarta-feira.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Pendências e Alertas
                  </h4>
                  <div className="bg-amber-50 text-amber-900 p-5 rounded-2xl border border-amber-100 font-medium text-sm">
                    ⚠️ Ficou de fora o escopo de migração de dados antigos (será orçado em fase 2).
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-200 transition-all flex items-center justify-center gap-2 text-lg">
                  <span>👍</span> Tô de acordo
                </button>
                <button className="flex-1 bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold py-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-lg">
                  <span>✍️</span> Tenho ressalvas
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 6.5: Loop Viral (Como funciona a validação) */}
        <section className="py-24 bg-indigo-600 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-700 text-indigo-100 text-[10px] font-black uppercase tracking-widest mb-6 shadow-inner">
                Simples e Mágico
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
                Sem atrito.<br/>Você envia o link, eles só precisam clicar.
              </h2>
              <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
                Ninguém gosta de burocracia. Por isso, a outra pessoa <strong className="text-white">não precisa criar conta</strong>, instalar aplicativo ou fazer login. 
                Ela simplesmente recebe um link super leve que abre direto no celular. Em 30 segundos ela lê e clica em "Tô de acordo". E pronto! O combinado está amarrado para sempre.
              </p>
              <p className="text-lg text-indigo-200 font-medium leading-relaxed">
                A experiência é tão simples e profissional que quem recebe vai querer usar em todas as próprias conversas.
              </p>
            </div>
            <div className="bg-white/10 p-3 md:p-6 rounded-3xl border border-white/20 backdrop-blur-md shadow-2xl transform lg:rotate-2">
              <div className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-xl shadow-inner border border-indigo-100">📱</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Link Público Recebido</h4>
                    <p className="text-xs text-slate-500 font-medium">todeacordo.com.br/valida/a8b9</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="w-6 h-6 rounded bg-green-100 text-green-600 flex items-center justify-center text-xs shadow-sm font-bold">1</span> 
                    Abre direto no WhatsApp ou E-mail
                  </div>
                  <div className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="w-6 h-6 rounded bg-green-100 text-green-600 flex items-center justify-center text-xs shadow-sm font-bold">2</span> 
                    Lê o checklist em 30 segundos
                  </div>
                  <div className="flex items-center gap-4 text-slate-900 font-bold bg-green-50 border border-green-200 p-4 rounded-xl">
                    <span className="w-6 h-6 rounded bg-green-600 text-white flex items-center justify-center text-xs shadow-sm font-bold">✓</span> 
                    Valida com 1 clique (sem login)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 7: Casos reais de uso */}
        <section id="casos" className="py-24 bg-white px-6 border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 tracking-tight">Serve para qualquer conversa em que uma dúvida pode custar caro.</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { target: 'Reuniões de Equipe', sit: 'Definição de próximos passos.', risk: 'Ninguém sabe quem é o responsável pela tarefa.', solve: 'Deixa claro os responsáveis e prazos.' },
                { target: 'Alinhamento com Sócios', sit: 'Decisões importantes.', risk: '"Eu nunca concordei com isso".', solve: 'Registra o que foi decidido de forma inquestionável.' },
                { target: 'Projetos', sit: 'Mudança de rota.', risk: 'Refazer trabalho por falta de clareza.', solve: 'Valida a nova direção antes de começar.' },
                { target: 'Parcerias', sit: 'Combinados rápidos.', risk: 'Achar que o outro ia resolver.', solve: 'Amarra os combinados para os dois lados.' },
                { target: 'Obra / Reforma', sit: 'Mudança no combinado.', risk: 'Cobranças inesperadas no final.', solve: 'Cada mudança fica documentada e validada.' },
                { target: 'Negociações', sit: 'Acordos verbais.', risk: '"Eu entendi que era para mês que vem".', solve: 'Crava as condições sem ambiguidades.' },
              ].map(card => (
                <div key={card.target} className="bg-slate-50 border border-slate-200 p-8 rounded-3xl hover:border-indigo-300 hover:shadow-md transition-all group">
                  <h3 className="font-bold text-slate-900 text-xl mb-6 group-hover:text-indigo-600 transition-colors">{card.target}</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-black tracking-widest mb-1">Situação</span>
                      <span className="text-slate-700 font-medium text-sm">{card.sit}</span>
                    </div>
                    <div>
                      <span className="text-red-400 block text-[10px] uppercase font-black tracking-widest mb-1">Risco</span>
                      <span className="text-slate-700 text-sm">{card.risk}</span>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <span className="text-indigo-600 block text-[10px] uppercase font-black tracking-widest mb-1">Solução ToDeAcordo</span>
                      <span className="text-slate-900 font-bold text-sm">{card.solve}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bloco 8: Prova lógica */}
        <section className="py-24 bg-indigo-50 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white border border-indigo-100 text-4xl flex items-center justify-center rounded-3xl mx-auto mb-8 shadow-sm">🧠</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">Por que isso funciona?</h2>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
              "Quando a outra pessoa confirma o entendimento, você deixa de depender de memória, de um print perdido de WhatsApp ou de interpretações posteriores. <strong className="text-indigo-700 bg-indigo-100/50 px-2 rounded">Um '👍' no lugar certo evita semanas de desgaste.</strong>"
            </p>
          </div>
        </section>

        {/* Bloco 9: Comparação */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 tracking-tight">Não é só transcrição. Não é só resumo.</h2>
            
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">
              <div className="flex-1 p-8 md:border-r border-slate-200 border-b md:border-b-0">
                <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-4 text-center">Transcrição</h3>
                <p className="text-slate-600 text-center text-sm">Guarda exatamente as palavras ditas. Fica longo, desorganizado e chato de ler depois.</p>
              </div>
              <div className="flex-1 p-8 md:border-r border-slate-200 border-b md:border-b-0 bg-slate-50">
                <h3 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-4 text-center">Resumo de IA</h3>
                <p className="text-slate-600 text-center text-sm">Organiza as ideias para você mesmo ler depois. É unilateral e não sela compromisso.</p>
              </div>
              <div className="flex-1 p-8 bg-indigo-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">✓</div>
                <h3 className="font-bold text-indigo-700 uppercase tracking-widest text-xs mb-4 text-center">ToDeAcordo</h3>
                <p className="text-indigo-900 font-bold text-center text-base">Confirma o entendimento entre as partes com validade prática imediata.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 10: Segurança e privacidade */}
        <section className="py-24 bg-slate-900 text-white px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full max-w-2xl h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900 -z-10"></div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center z-10 relative">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-white">Simples, revisável e sem gravar áudio.</h2>
              <ul className="space-y-8">
                <li className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 font-bold border border-indigo-500/30">1</div>
                  <p className="text-slate-300 text-lg leading-relaxed"><strong className="text-white">Você revisa antes de enviar:</strong> A IA cria um rascunho. Você tem controle total para editar antes que a outra pessoa veja.</p>
                </li>
                <li className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 font-bold border border-indigo-500/30">2</div>
                  <p className="text-slate-300 text-lg leading-relaxed"><strong className="text-white">A outra parte pode discordar:</strong> O fluxo não é uma imposição. Se a pessoa achar que faltou algo, ela aponta a ressalva na hora.</p>
                </li>
                <li className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 font-bold border border-indigo-500/30">3</div>
                  <p className="text-slate-300 text-lg leading-relaxed"><strong className="text-white">Focado no Entendimento:</strong> Não substitui um contrato formal com advogados. Serve para alinhar o trabalho do dia a dia.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-3xl p-8 lg:p-10 border border-slate-700 shadow-2xl relative">
              <div className="flex flex-col gap-6 relative z-10">
                <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl flex items-center gap-5">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-2xl border border-slate-700">🎤</div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">Privacidade Total</h4>
                    <p className="text-sm text-slate-400">Processamos apenas o texto. Nenhum áudio da sua reunião é salvo.</p>
                  </div>
                </div>
                <div className="bg-slate-900 border border-slate-700 p-6 rounded-2xl flex items-center gap-5">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-2xl border border-slate-700">✏️</div>
                  <div>
                    <h4 className="font-bold text-white text-base mb-1">Edição Livre</h4>
                    <p className="text-sm text-slate-400">Só o que você aprova e envia vira um acordo final e oficial.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blocos 11 e 12: Ofertas */}
        <section id="planos" className="py-24 bg-slate-50 px-6 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 tracking-tight">Escolha o plano ideal para as suas reuniões.</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free */}
              <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Comece sem compromisso</h3>
                <p className="text-slate-500 mb-8 min-h-[48px]">Perfeito para testar o fluxo em algumas conversas cruciais.</p>
                <div className="text-5xl font-black text-slate-900 mb-10">Grátis</div>
                
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px]">✓</span> Teste inicial prático</li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px]">✓</span> Alguns entendimentos por mês</li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-[10px]">✓</span> Link básico de confirmação</li>
                </ul>
                
                <a href="/app" className="block w-full bg-slate-100 text-slate-800 text-center font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors">Começar grátis</a>
              </div>

              {/* Pro */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl flex flex-col relative transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                  Mais Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Para quem vive de combinados</h3>
                <p className="text-slate-400 mb-8 min-h-[48px]">Para pessoas e equipes que querem acabar com a confusão após as reuniões.</p>
                <div className="flex items-end gap-1 mb-10">
                  <span className="text-5xl font-black text-white">R$ 29,90</span>
                  <span className="text-slate-400 mb-2 font-medium">/mês</span>
                </div>
                
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-slate-300 font-medium"><span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">✓</span> Entendimentos ilimitados</li>
                  <li className="flex items-center gap-3 text-slate-300 font-medium"><span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">✓</span> Histórico completo na nuvem</li>
                  <li className="flex items-center gap-3 text-slate-300 font-medium"><span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">✓</span> Gestão de links e ressalvas</li>
                  <li className="flex items-center gap-3 text-slate-300 font-medium"><span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">✓</span> Exportação em PDF (em breve)</li>
                  <li className="flex items-center gap-3 text-slate-300 font-medium"><span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px]">✓</span> Prioridade nas features do Beta</li>
                </ul>
                
                <a href="/app" className="block w-full bg-indigo-600 text-white text-center font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">Assinar Plano Pro</a>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 13: FAQ - Quebra de objeções */}
        <section id="faq" className="py-24 bg-white px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16 tracking-tight">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              {[
                { q: 'A outra pessoa precisa instalar ou criar conta?', a: 'Não. O link de confirmação abre em qualquer navegador ou celular. A pessoa lê o acordo, clica em "Tô de acordo" ou aponta ressalvas, sem precisar fazer login.' },
                { q: 'Isso substitui um contrato?', a: 'Não. O ToDeAcordo serve para alinhar o dia a dia (ex: tarefas de uma sprint, ajustes de uma obra, combinados de uma reunião comercial). Ele evita ruídos operacionais, mas não substitui validade jurídica de um contrato formal.' },
                { q: 'Posso editar antes de enviar o link?', a: 'Sim! A IA faz o rascunho pesado, mas a tela do Dashboard permite que você edite, exclua ou adicione pontos cruciais antes de gerar o link final para a outra pessoa.' },
                { q: 'Funciona sem Google Meet?', a: 'Sim. Você pode colar o áudio transcrito ou as anotações brutas de qualquer outra fonte no nosso painel, e a IA organizará da mesma forma.' },
                { q: 'O ToDeAcordo grava áudio?', a: 'Não salvamos nenhum áudio nos servidores. Nossa extensão processa apenas o texto gerado na reunião para estruturar o acordo, garantindo a sua privacidade e dos participantes.' },
                { q: 'E se a pessoa discordar do que está escrito?', a: 'Ela clica em "Tenho ressalvas". Isso bloqueia a validação e permite que ela escreva o motivo (ex: "Não foi dia 15, foi dia 20"). O entendimento volta para você ajustar. Muito melhor descobrir isso na hora do que 1 mês depois.' },
                { q: 'Qual a diferença para outras ferramentas de transcrição?', a: 'Embora o ToDeAcordo possa ser usado como uma simples ferramenta de transcrição (com o menor preço e os maiores limites do mercado), ele vai muito além disso. Enquanto ferramentas de IA padrão geram longas atas que morrem no e-mail, nós geramos um checklist direto focado em validação bilateral com assinatura informal.' }
              ].map((faq, i) => (
                <details key={i} className="group bg-slate-50 border border-slate-200 rounded-2xl open:bg-white open:border-indigo-200 transition-all">
                  <summary className="font-bold text-slate-800 p-6 cursor-pointer list-none flex justify-between items-center text-lg">
                    {faq.q}
                    <span className="text-indigo-600 group-open:rotate-180 transition-transform flex-shrink-0 ml-4">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Bloco 14: CTA Emocional */}
        <section className="py-32 bg-indigo-600 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 tracking-tight leading-tight">
              Antes que cada um lembre de um jeito,<br/>gere um ToDeAcordo.
            </h2>
            <a href="/app" className="inline-block bg-white text-indigo-700 text-lg font-bold px-10 py-5 rounded-full hover:bg-slate-50 hover:scale-105 transition-all shadow-xl">
              Começar grátis agora
            </a>
          </div>
        </section>

      </main>

      {/* Bloco 15: Rodapé robusto */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs">✓</div>
              <span className="font-bold text-white text-lg tracking-tight">ToDeAcordo</span>
            </div>
            <p className="text-sm leading-relaxed">Garantindo que todos saiam da conversa entendendo a mesma coisa.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Produto</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Extensão Chrome</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integração Meet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gestor de Acordos</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos e Preços</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Casos de Uso</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#casos" className="hover:text-white transition-colors">Para Equipes</a></li>
              <li><a href="#casos" className="hover:text-white transition-colors">Para Sócios</a></li>
              <li><a href="#casos" className="hover:text-white transition-colors">Para Projetos</a></li>
              <li><a href="#casos" className="hover:text-white transition-colors">Para Negócios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Privacidade</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Segurança (Trust Center)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium">© {new Date().getFullYear()} ToDeAcordo. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-lg">𝕏</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors font-bold text-lg">in</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

```

---

## Arquivo: src\todeacordo\src\dashboard\MeetingDetailsPage.tsx
```typescript
import { useEffect, useState } from 'react';
import { getConsensusForMeeting, saveConsensus } from '../storage/consensusStorage';
import type { ConsensusObject, TranscriptSegment } from '../types';
import { getTranscriptForMeeting } from '../storage/transcriptStorage';
import { generateConsensusFromTranscript } from '../ai/consensusExtractor';
import { getMeeting } from '../storage/meetingStorage';

export const MeetingDetailsPage = () => {
  const [consensus, setConsensus] = useState<ConsensusObject | null>(null);
  const [meeting, setMeeting] = useState<any>(null);
  const [transcript, setTranscript] = useState<TranscriptSegment[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'transcricao' | 'chat' | 'acordos' | 'notas'>('transcricao');

  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    let meetingId = '';
    const urlParams = new URLSearchParams(window.location.search);
    const route = urlParams.get('route');
    if (route && route.startsWith('/meeting/')) {
        meetingId = route.replace('/meeting/', '');
    } else {
        const pathParts = window.location.pathname.split('/');
        meetingId = pathParts[pathParts.length - 1];
    }
    
    if (meetingId) {
      loadData(meetingId).then((hasConsensus) => {
          if (!hasConsensus && urlParams.get('autoGenerate') === 'true') {
              handleAutoGenerate(meetingId);
          }
      });
    } else {
      setLoading(false);
    }
  }, []);

  const loadData = async (id: string): Promise<boolean> => {
    try {
      const mData = await getMeeting(id);
      if (mData) setMeeting(mData);

      const cData = await getConsensusForMeeting(id);
      if (cData) setConsensus(cData);
      
      const tData = await getTranscriptForMeeting(id);
      if (tData && tData.length > 0) {
        setTranscript(tData);
      } else if (cData?.transcript_segments && cData.transcript_segments.length > 0) {
        setTranscript(cData.transcript_segments);
      }

      return !!cData;
    } catch (e) {
      console.error(e);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleAutoGenerate = async (mId: string) => {
      setIsGenerating(true);
      setActiveTab('acordos');
      try {
          const tData = await getTranscriptForMeeting(mId);
          if (!tData || tData.length === 0) {
              console.log('Nenhum transcrito encontrado para gerar consenso.');
              return;
          }
          
          const result = await generateConsensusFromTranscript({
              meetingId: mId,
              sourcePlatform: 'google-meet',
              participants: [],
              segments: tData
          });

          const finalResult = { ...result, meeting_id: mId, id: result.id || mId } as ConsensusObject;

          await saveConsensus(finalResult);
          setConsensus(finalResult);
      } catch (e) {
          console.error('Erro na geração automática', e);
      } finally {
          setIsGenerating(false);
      }
  };

  if (loading) return <div className="flex h-screen items-center justify-center">Carregando reunião...</div>;
  if (isGenerating) return <div className="flex h-screen items-center justify-center font-bold text-indigo-600">Gerando consolidado da reunião (ToDeAcordo AI)...</div>;
  if (!meeting && !consensus && transcript.length === 0) return <div className="p-8 text-center">Reunião não encontrada.</div>;

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-400 rounded-lg flex items-center justify-center font-black text-slate-900 shadow-sm">T</div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">ToDeAcordo</span>
        </div>
        <nav className="flex-1 px-4 space-y-1">

          <a href="index.html" className="flex items-center gap-3 px-3 py-2 bg-amber-50 text-amber-700 rounded-lg font-medium text-sm transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            Minhas Reuniões
          </a>
        </nav>
        <div className="p-4 border-t border-slate-200">
          {/* Upgrade info hidden for MVP */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 justify-between shrink-0">
          <div className="flex items-center gap-2 text-sm">
            <a href="index.html" className="text-slate-500 hover:text-slate-900">Minhas Reuniões</a>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-slate-900">{meeting?.title || consensus?.meeting_id || meeting?.id || 'Reunião Importante'}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors" onClick={() => window.open('index.html?route=/valida/' + (consensus?.meeting_id || meeting?.id), '_blank')}>
              Gerar Link de Validação
            </button>
          </div>
        </header>

        {/* Tabs */}
        <div className="bg-white border-b border-slate-200 px-6 shrink-0">
          <div className="flex items-center gap-6">
            {[
              { id: 'transcricao', label: 'Transcrição' },
              { id: 'acordos', label: 'Acordos & Entendimentos' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 text-sm font-bold border-b-2 transition-colors outline-none ${activeTab === tab.id ? 'border-indigo-600 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-auto bg-slate-50 flex">
          <div className="flex-1 p-8">
            <div className="max-w-3xl mx-auto">
              
              {activeTab === 'chat' && (
                <div className="text-center mt-20 flex flex-col justify-center items-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Reunião muito curta para IA</h2>
                  <p className="text-slate-500 mb-8 max-w-md">
                    Os recursos de IA estão disponíveis para reuniões com mais de 2 minutos. Continue a reunião ou veja a transcrição enquanto isso.
                  </p>
                  <button onClick={() => setActiveTab('transcricao')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-lg transition-colors">
                    Ver transcrição →
                  </button>
                </div>
              )}

              {activeTab === 'transcricao' && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Transcrição Completa</h2>
                  {transcript.length > 0 ? (
                    <div className="space-y-6">
                      {transcript.map((seg, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-bold text-slate-500">
                            {((seg.speaker && seg.speaker !== 'undefined' && seg.speaker !== 'Unknown') ? seg.speaker : 'Desconhecido').charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="font-bold text-slate-900">{(seg.speaker && seg.speaker !== 'undefined' && seg.speaker !== 'Unknown') ? seg.speaker : 'Desconhecido'}</span>
                              <span className="text-xs text-slate-400">{new Date(seg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                            </div>
                            <p className="text-slate-700 leading-relaxed">{seg.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                      <div className="text-center py-12 text-slate-500">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </div>
                        <p>Transcrição ainda não disponível.</p>
                      </div>
                  )}
                </div>
              )}

              {activeTab === 'acordos' && (
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold text-slate-900">Acordos Consolidados</h2>
                    <a href={`index.html?route=/valida/${consensus?.meeting_id || meeting?.id}`} target="_blank" className="text-sm font-bold text-indigo-600 hover:text-indigo-800">Ver Página de Validação ↗</a>
                  </div>
                  {consensus ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Decisões</h3>
                        <ul className="space-y-2">
                          {consensus.decisions?.map((d: any, i) => (
                            <li key={i} className="flex gap-3 bg-slate-50 p-4 rounded-xl text-slate-700">
                              <span className="text-amber-500">✓</span> {typeof d === 'string' ? d : d.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Próximos Passos (Obrigações)</h3>
                        <ul className="space-y-2">
                          {consensus.obligations?.map((o: any, i) => (
                            <li key={i} className="flex gap-3 bg-slate-50 p-4 rounded-xl text-slate-700">
                              <span className="text-indigo-500">→</span> 
                              <div>
                                <span className="font-bold">{typeof o === 'string' ? '' : o.owner + ':'}</span> {typeof o === 'string' ? o : o.text}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                     <p className="text-slate-500 text-center py-8">Nenhum acordo gerado ainda.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white border-l border-slate-200 p-6 shrink-0 overflow-y-auto hidden lg:block">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-sm">
                  {consensus?.participants?.[0]?.charAt(0).toUpperCase() || 'V'}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Gravado por você</div>
                  <div className="text-xs text-slate-500">{new Date(consensus?.created_at || Date.now()).toLocaleDateString('pt-BR')} • 1 min</div>
                </div>
                <div className="ml-auto bg-slate-100 p-1.5 rounded-lg cursor-pointer hover:bg-slate-200 transition-colors">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg mt-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                Reunião privada
              </div>
            </div>
            
            <div className="space-y-1">
              <button className="w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg flex items-center gap-3 transition-colors" onClick={() => window.open('index.html?route=/valida/' + (consensus?.meeting_id || meeting?.id), '_blank')}>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                Compartilhe esta reunião
              </button>
            </div>
            
            <div className="absolute bottom-6 right-6">
              <button className="w-12 h-12 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-700 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

```

---

## Arquivo: src\todeacordo\src\dashboard\Privacy.tsx
```typescript


const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-10 text-center text-white border-b border-slate-800">
          <div className="mx-auto bg-gradient-to-tr from-amber-400 to-amber-200 w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 mb-4">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Política de Privacidade</h1>
          <p className="mt-2 text-slate-400 font-medium">ToDeAcordo</p>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10 space-y-6 leading-relaxed text-slate-600">
          <p className="text-lg font-medium text-slate-900">
            O ToDeAcordo é uma extensão e aplicação destinada a ajudar usuários a registrar e organizar reuniões realizadas no Google Meet.
          </p>

          <hr className="border-slate-100" />

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-400 rounded-full"></span>
              Captura e Coleta de Dados
            </h2>
            <p>
              A extensão pode capturar conteúdo disponível ao usuário durante a reunião, como legendas, transcrições, nomes de participantes e informações exibidas na aba do Google Meet, quando o próprio usuário inicia o uso da extensão.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-400 rounded-full"></span>
              Finalidade do Uso dos Dados
            </h2>
            <p>
              Esses dados são utilizados exclusivamente para gerar resumos, combinados, decisões, obrigações, próximos passos e links de validação relacionados à reunião.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-400 rounded-full"></span>
              Compromisso de Não Comercialização e Não Rastreamento
            </h2>
            <p>
              O ToDeAcordo não vende dados pessoais, não utiliza os dados para publicidade comportamental e não rastreia a navegação do usuário fora da finalidade de funcionamento da extensão.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-400 rounded-full"></span>
              Compartilhamento e Processamento
            </h2>
            <p>
              Os dados podem ser enviados aos servidores do ToDeAcordo ou a provedores de processamento de inteligência artificial somente para executar as funcionalidades solicitadas pelo usuário.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-400 rounded-full"></span>
              Boas Práticas de Uso
            </h2>
            <p>
              O usuário deve evitar inserir informações sensíveis que não sejam necessárias para o registro da reunião.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-400 rounded-full"></span>
              Armazenamento
            </h2>
            <p>
              Podemos armazenar dados temporários ou registros necessários para funcionamento, continuidade da captura, geração dos resultados e melhoria operacional do serviço.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-amber-400 rounded-full"></span>
              Contato e Direitos do Usuário
            </h2>
            <p>
              O usuário pode solicitar informações, correções ou exclusão de dados entrando em contato pelo e-mail:{' '}
              <a href="mailto:suporte@andradeflorio.com.br" className="text-indigo-600 hover:text-indigo-800 font-semibold underline">
                suporte@andradeflorio.com.br
              </a>
            </p>
          </section>

          <hr className="border-slate-100" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-slate-400 gap-2">
            <p>Esta política poderá ser atualizada conforme evolução do produto.</p>
            <p className="font-medium bg-slate-100 text-slate-500 px-2 py-1 rounded">Última atualização: 06/07/2026</p>
          </div>
        </div>

        {/* Footer Link back */}
        <div className="bg-slate-50 px-8 py-5 border-t border-slate-100 flex justify-center">
          <a href="index.html" className="text-sm font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-2 transition-colors">
            ← Voltar para Início
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

```

---

## Arquivo: src\todeacordo\src\dashboard\ShareCardPage.tsx
```typescript
import { useEffect, useState } from 'react';
import { getConsensusForMeeting } from '../storage/consensusStorage';
import type { ConsensusObject } from '../types';

export default function ShareCardPage() {
  const [consensus, setConsensus] = useState<ConsensusObject | null>(null);

  useEffect(() => {
    const id = window.location.pathname.split('/').pop();
    if (id && !id.startsWith('demo')) {
      getConsensusForMeeting(id).then(data => {
        if (data) setConsensus(data);
      });
    }
  }, []);

  if (!consensus) return <div className="p-10 text-center text-slate-500">Card Preview (OG Image Render)</div>;

  return (
    <div className="w-[1200px] h-[630px] bg-slate-900 flex items-center justify-center p-12 text-white font-sans">
      <div className="w-full h-full bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none text-9xl">✨</div>
        
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">Entendimento Gerado</span>
            {consensus.traffic_light === 'green' && <span className="bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-sm font-bold">🟢 Pronto para assinar</span>}
            {consensus.traffic_light === 'yellow' && <span className="bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold">🟡 Atenção Necessária</span>}
          </div>
          
          <h1 className="text-6xl font-extrabold tracking-tight mb-6 leading-tight">{consensus.title || 'Reunião de Alinhamento'}</h1>
          <p className="text-2xl text-slate-400 mb-12 max-w-4xl line-clamp-2">{consensus.summary}</p>

          <div className="flex gap-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700 min-w-[200px]">
              <div className="text-4xl font-bold text-indigo-400 mb-2">{consensus.agreements?.length || 0}</div>
              <div className="text-slate-400 font-medium uppercase tracking-widest text-sm">Decisões</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700 min-w-[200px]">
              <div className="text-4xl font-bold text-amber-400 mb-2">{consensus.obligations?.length || 0}</div>
              <div className="text-slate-400 font-medium uppercase tracking-widest text-sm">Obrigações</div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-slate-700 pt-8 mt-12">
          <div>
            <p className="text-slate-500 text-lg">Participantes</p>
            <p className="text-xl font-medium mt-1">{consensus.participants?.join(', ') || 'Equipe'}</p>
          </div>
          <div className="text-right flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-2xl">🤝</div>
            <div>
              <p className="text-xl font-bold text-white">ToDeAcordo</p>
              <p className="text-slate-400">Reuniões sem mal-entendido.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\dashboard\TrustCenterPage.tsx
```typescript
export default function TrustCenterPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-8 md:p-16">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-4xl">🔒</span> Central de Confiança
        </h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold text-indigo-700 mb-3">O que o ToDeAcordo captura?</h2>
            <p className="text-slate-600 leading-relaxed">
              A extensão lê estritamente o texto das legendas geradas automaticamente pelo Google Meet durante a reunião. Capturamos o texto (transcript) e o associamos a quem o disse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-indigo-700 mb-3">O que NÃO capturamos?</h2>
            <p className="text-slate-600 leading-relaxed font-medium">
              Não gravamos áudio. Não gravamos vídeo. Não gravamos a sua tela.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
              Não utilizamos bots intrusivos que entram na sala como "participantes". O ToDeAcordo roda de forma silenciosa e segura apenas na aba do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-indigo-700 mb-3">Como a IA processa os dados?</h2>
            <p className="text-slate-600 leading-relaxed">
              Ao clicar em "Gerar Entendimento", enviamos o texto coletado para o nosso backend na Vercel, que processa a informação utilizando a API da OpenAI (sem retenção de dados para treinamento). O resultado estruturado é devolvido imediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-indigo-700 mb-3">Limitações Jurídicas</h2>
            <p className="text-slate-600 leading-relaxed">
              O ToDeAcordo gera um registro de <strong className="text-slate-900">aceite operacional</strong>. A Rubrica e o Hash SHA-256 garantem integridade visual e lógica, mas não substituem uma assinatura eletrônica qualificada sob a ICP-Brasil ou a formalização de um contrato em casos exigidos por lei.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\dashboard\ValidationPage.tsx
```typescript
import { useEffect, useState, useRef } from 'react';
import { getConsensusForMeeting, saveConsensus } from '../storage/consensusStorage';
import type { ConsensusObject } from '../types';
import { logEvent } from '../audit/auditLogger';
import { trackGrowthEvent, getOrCreateReferralCode } from '../growth/growthLogger';
import { generateConsensusHash } from '../lib/hashUtils';
import { MOCK_CONSENSUS, MOCK_CONSENSUS_CONSULTORIA } from '../lib/mockData';
import SignatureCanvas from 'react-signature-canvas';
import { ToDeAcordoBadge } from '../components/ToDeAcordoBadge';
import { useWebShare } from '../components/CopyEngines';

const ValidationPage = () => {
  const [consensus, setConsensus] = useState<ConsensusObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);
  const [objection, setObjection] = useState<boolean>(false);
  const [documentHash, setDocumentHash] = useState<string>('');
  
  // Handshake State
  const [showSignatureModal, setShowSignatureModal] = useState(false);
  const [signerName, setSignerName] = useState('');
  const sigCanvas = useRef<SignatureCanvas>(null);

  // Identity Claim State (Viral Loop - Caiu na rede é peixe)
  const [claimEmail, setClaimEmail] = useState('');

  // Soft Gate States (Fase 11)
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<'sign' | 'objection' | null>(null);

  // Objection V2 State
  const [showObjectionModal, setShowObjectionModal] = useState(false);
  const [itemObjections, setItemObjections] = useState<Record<string, {status: 'accepted'|'adjust'|'rejected', note: string}>>({});
  const [generalObjection, setGeneralObjection] = useState('');

  const { share } = useWebShare();
  const myRef = getOrCreateReferralCode(claimEmail || signerName);
  const shareUrl = `${window.location.origin}${window.location.pathname}?ref=${myRef}&utm_source=todeacordo&utm_medium=validation_link&utm_campaign=shared_consensus`;

  useEffect(() => {
    let meetingId = '';
    const urlParams = new URLSearchParams(window.location.search);
    const route = urlParams.get('route');
    if (route && route.startsWith('/valida/')) {
      meetingId = route.replace('/valida/', '');
    } else {
      const pathParts = window.location.pathname.split('/');
      meetingId = pathParts[pathParts.length - 1];
    }

    if (meetingId && meetingId !== 'index.html') {
      loadConsensus(meetingId);
    } else {
      setLoading(false);
    }
  }, []);

  const loadConsensus = async (id: string) => {
    try {
      if (id.startsWith('demo')) {
        const mockData = id === 'demo-consultoria' ? MOCK_CONSENSUS_CONSULTORIA : MOCK_CONSENSUS;
        setConsensus(mockData);
        const hash = await generateConsensusHash(mockData);
        setDocumentHash(hash);
        logEvent(id, 'validation_link_opened');
        return;
      }
      const data = await getConsensusForMeeting(id);
      if (data) {
        setConsensus(data);
        const hash = await generateConsensusHash(data);
        setDocumentHash(hash);
        logEvent(id, 'validation_link_opened');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSign = async () => {
    try {
      if (!signerName.trim()) {
        alert("Por favor, digite seu nome.");
        return;
      }
      if (sigCanvas.current?.isEmpty()) {
        alert("Por favor, faça sua assinatura.");
        return;
      }

      const signatureImage = sigCanvas.current?.getTrimmedCanvas().toDataURL('image/png');
      
      if (consensus) {
        const updatedConsensus = { ...consensus };
        if (!updatedConsensus.signatures) updatedConsensus.signatures = [];
        updatedConsensus.signatures.push({
          name: signerName,
          timestamp: Date.now(),
          image: signatureImage as string,
          accepted_version: 1,
          document_hash: documentHash
        });
        updatedConsensus.status = 'consensus_obtained';
        
        // Se não for o mock, salvamos localmente
        if (consensus.id !== 'demo') {
          await saveConsensus(updatedConsensus);
        }
        setConsensus(updatedConsensus);
        logEvent(consensus.meeting_id, 'agreed_clicked');
      }
      
      // Simula salvamento com a assinatura
      setTimeout(() => {
        setLoading(false);
        setSigned(true);
        setShowSignatureModal(false);
        if (consensus) {
          logEvent(consensus.id, 'handshake_signed', { signerName, signatureHash: 'simulated_hash' });
          trackGrowthEvent('accepted_with_signature', { consensus_id: consensus.id });
        }
      }, 1000);
      
      // Efeito Confete Supremo!
      import('canvas-confetti').then((confetti) => {
        confetti.default({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4f46e5', '#10b981', '#fbbf24']
        });
      });
    } catch (e) {
      console.error('Erro ao registrar assinatura:', e);
      alert('Erro ao registrar assinatura localmente no navegador. Por favor, certifique-se de que os cookies/armazenamento estão habilitados.');
    }
  };

  const handleObjectionSubmit = async () => {
    if (consensus && consensus.id !== 'demo') {
      const updatedConsensus = { ...consensus };
      updatedConsensus.status = 'disputed';
      updatedConsensus.audit_events.push({
        id: crypto.randomUUID(),
        meeting_id: updatedConsensus.meeting_id,
        type: 'objection_submitted',
        timestamp: Date.now(),
        details: { ip: '0.0.0.0', message: 'User raised item-by-item objections', objections: itemObjections }
      });
      await saveConsensus(updatedConsensus);
      setConsensus(updatedConsensus);
      logEvent(consensus.meeting_id, 'objection_submitted');
    }
    
    setLoading(true);
    // Simula salvamento
    setTimeout(() => {
      setLoading(false);
      setObjection(true);
      setShowObjectionModal(false);
      logEvent(consensus!.id, 'objection_submitted', { generalObjection, itemObjections });
      trackGrowthEvent('accepted_with_reservation', { consensus_id: consensus!.id });
    }, 1000);
  };

  const handleSignClick = () => {
    if (!signerName.trim() || !claimEmail.trim()) {
      setPendingAction('sign');
      setShowClaimModal(true);
    } else {
      setShowSignatureModal(true);
    }
  };

  const handleObjectionClick = () => {
    if (!signerName.trim() || !claimEmail.trim()) {
      setPendingAction('objection');
      setShowClaimModal(true);
    } else {
      setShowObjectionModal(true);
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center">Carregando...</div>;

  if (!consensus) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-xl shadow text-center max-w-md">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Acordo não encontrado</h2>
          <p className="text-slate-500">Este link de validação expirou ou não existe.</p>
        </div>
      </div>
    );
  }

  if (objection === true) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className={`bg-white p-8 rounded-xl shadow text-center max-w-md animate-fadeIn border-t-4 border-amber-500`}>
          <div className="text-5xl mb-4">✍️</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Ressalvas Registradas</h2>
          <p className="text-slate-500 mb-6">O criador deste documento foi notificado sobre as suas ressalvas.</p>
          
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-sm text-slate-500 mb-3">Reuniões geram mal-entendidos. Nós geramos acordos.</p>
            <a href="/" className="inline-block bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold py-3 px-6 rounded-lg transition-colors w-full">
              Quero usar nas minhas reuniões
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 selection:bg-indigo-100 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-10 py-10 border-b border-slate-100 relative">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-3xl font-extrabold text-slate-900">{consensus.title || 'Solicitação de Validação'}</h1>
            
            {consensus.traffic_light && (
              <div className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${
                consensus.traffic_light === 'green' ? 'bg-green-50 text-green-700 border-green-200' :
                consensus.traffic_light === 'yellow' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                'bg-red-50 text-red-700 border-red-200'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  consensus.traffic_light === 'green' ? 'bg-green-500' :
                  consensus.traffic_light === 'yellow' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></span>
                {consensus.traffic_light === 'green' ? 'Pronto para validar' :
                 consensus.traffic_light === 'yellow' ? 'Precisa revisar' :
                 'Atenção necessária'}
              </div>
            )}
          </div>
          
          <p className="text-slate-500 text-sm max-w-2xl">Resumo executivo extraído automaticamente pelo ToDeAcordo.</p>
          
          {(consensus.red_flags?.length || consensus.missing_elements?.length) ? (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
              <strong>Pontos de atenção detectados pela IA:</strong>
              <ul className="list-disc ml-5 mt-1">
                {consensus.missing_elements?.map((item, idx) => (
                  <li key={`missing_${idx}`}>Faltam definições claras de: <b>{item}</b>.</li>
                ))}
                {consensus.red_flags?.map((item, idx) => (
                  <li key={`red_${idx}`}>Uso de termos frágeis ("{item}"), sugerindo ambiguidade.</li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* Módulo 40: Mapa de Risco */}
          {consensus.risk_map && (
            <div className="mt-6 pt-6 border-t border-slate-100 flex gap-4 text-xs font-medium">
              <span className="text-slate-500 uppercase tracking-wider">Mapa de Risco:</span>
              <div className={`px-2 rounded flex gap-1 items-center ${consensus.risk_map.scope === 'high' ? 'text-red-700 bg-red-50' : consensus.risk_map.scope === 'medium' ? 'text-amber-700 bg-amber-50' : 'text-green-700 bg-green-50'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${consensus.risk_map.scope === 'high' ? 'bg-red-500' : consensus.risk_map.scope === 'medium' ? 'bg-amber-500' : 'bg-green-500'}`}></span>
                Escopo
              </div>
              <div className={`px-2 rounded flex gap-1 items-center ${consensus.risk_map.deadline === 'high' ? 'text-red-700 bg-red-50' : consensus.risk_map.deadline === 'medium' ? 'text-amber-700 bg-amber-50' : 'text-green-700 bg-green-50'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${consensus.risk_map.deadline === 'high' ? 'bg-red-500' : consensus.risk_map.deadline === 'medium' ? 'bg-amber-500' : 'bg-green-500'}`}></span>
                Prazos
              </div>
              <div className={`px-2 rounded flex gap-1 items-center ${consensus.risk_map.budget === 'high' ? 'text-red-700 bg-red-50' : consensus.risk_map.budget === 'medium' ? 'text-amber-700 bg-amber-50' : 'text-green-700 bg-green-50'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${consensus.risk_map.budget === 'high' ? 'bg-red-500' : consensus.risk_map.budget === 'medium' ? 'bg-amber-500' : 'bg-green-500'}`}></span>
                Valores
              </div>
            </div>
          )}
        </div>

        <div className="px-10 py-8 space-y-8 text-slate-800">
          
          {/* Módulo 35: Próximo Passo */}
          {consensus.next_step && (
            <div className="bg-indigo-600 text-white rounded-lg p-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-5xl">🎯</div>
              <h3 className="font-bold uppercase tracking-wider text-indigo-200 text-xs mb-2">Próximo Passo Principal</h3>
              <p className="text-lg font-medium">{consensus.next_step}</p>
            </div>
          )}

          {consensus.summary && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Resumo da Reunião</h3>
              <p className="text-base leading-relaxed">{consensus.summary}</p>
            </div>
          )}

          {consensus.agreements && consensus.agreements.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 border-b border-slate-100 pb-2">Acordos Principais</h3>
              <ul className="space-y-3">
                {consensus.agreements.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-base">
                    <span className="text-indigo-500 mt-1">✓</span> 
                    <span>{typeof item === 'string' ? item : item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {consensus.decisions && consensus.decisions.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 border-b border-slate-100 pb-2">Decisões</h3>
              <ul className="space-y-3">
                {consensus.decisions.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-base">
                    <span className="text-indigo-500 mt-1">🎯</span> 
                    <span>{typeof item === 'string' ? item : item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {consensus.obligations && consensus.obligations.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 border-b border-slate-100 pb-2">Obrigações e Próximos Passos</h3>
              <ul className="space-y-4">
                {consensus.obligations.map((item, idx) => (
                  <li key={idx} className="text-base">
                    <span className="flex gap-3 font-medium text-slate-900">
                      <span className="text-indigo-500">📌</span> {typeof item === 'string' ? item : item.text}
                    </span>
                    {typeof item !== 'string' && item.evidence_quote && (
                      <div className="ml-8 mt-2 pl-3 border-l-2 border-slate-200 text-slate-500 italic text-sm">
                        "{item.evidence_quote}"
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-slate-50 px-10 py-8 border-t border-slate-200 text-center relative overflow-hidden">
          {/* Fundo decorativo */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none"></div>

          {!objection && !signed && (
            <>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 relative z-10">
                <button 
                  onClick={handleObjectionClick}
                  className="bg-white hover:bg-slate-100 text-slate-700 font-semibold text-base py-3 px-8 rounded border border-slate-300 transition-colors"
                >
                  Sugerir Ajuste
                </button>
                <button 
                  onClick={handleSignClick}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-3 px-12 rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Tô De Acordo
                </button>
              </div>
                <div className="flex justify-center mt-8 space-x-4 print:hidden">
                <button onClick={() => window.print()} className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2">
                  <span>📄</span> Exportar PDF
                </button>
                <button 
                  onClick={() => share(`Entendimento: ${consensus.title}`, 'Confira nosso entendimento:', shareUrl)}
                  className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2 border border-indigo-200"
                >
                  <span>🔗</span> Compartilhar
                </button>
              </div>

              {/* Módulo 4: Acceptance Growth Moment */}
              <div className="mt-12 bg-indigo-600 p-8 rounded-2xl text-center shadow-xl print:hidden text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">🚀</div>
                <h4 className="font-bold text-2xl mb-3 relative z-10">
                  Gostou da clareza? Crie seu próprio ToDeAcordo gratuitamente.
                </h4>
                <p className="text-indigo-200 mb-8 relative z-10 text-lg">
                  O ToDeAcordo transforma o seu Google Meet em entendimentos operacionais. Evite o "acho que combinamos outra coisa".
                </p>
                <div className="flex justify-center gap-4 relative z-10">
                  <a href={`/?ref=${myRef}&utm_source=todeacordo&utm_medium=validation_link&utm_campaign=shared_consensus`} className="bg-white hover:bg-indigo-50 text-indigo-900 font-bold py-4 px-8 rounded-xl transition-transform active:scale-95 shadow-lg text-lg">
                    Criar meu ToDeAcordo
                  </a>
                </div>
              </div>
            </>
          )}

          {signed && (
            <div className="py-8 animate-fadeIn relative z-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                <span className="text-4xl text-green-500">✓</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Entendimento Validado!</h2>
              <p className="text-slate-600 mb-8 max-w-lg mx-auto">Sua confirmação foi enviada para o criador. Vocês acabaram de evitar um mal-entendido.</p>
              
              {/* VIRAL UNICORN BLOCK */}
              <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 rounded-3xl p-8 shadow-2xl text-white text-left relative overflow-hidden mb-10 transform hover:scale-[1.01] transition-transform print:hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">🦄</div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold mb-3 relative z-10 font-sans">Gostou da clareza?</h3>
                <p className="text-indigo-200 mb-6 max-w-xl relative z-10 text-sm leading-relaxed">
                  Você recebeu este link para validar um entendimento. Crie sua conta grátis agora mesmo para colar conversas (WhatsApp, e-mails) diretamente pelo celular, ou instale a extensão no computador para automatizar a captura de combinados nas suas reuniões do Google Meet!
                </p>

                {/* Recursos - Mostrar Valor Imediatamente */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 relative z-10 text-xs text-indigo-100 border-t border-indigo-750/30 pt-5">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-bold">✓</span> Resume reuniões com IA
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-bold">✓</span> Organiza tarefas e ações
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-bold">✓</span> Define responsáveis e prazos
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 font-bold">✓</span> Envia links de validação rápida
                  </div>
                </div>

                {/* Prova Social */}
                <div className="border-t border-indigo-750/30 pt-4 mb-6 relative z-10 text-[11px] text-indigo-300">
                  <p className="font-semibold mb-1">Empresas, consultores, freelancers e equipes usam o ToDeAcordo para evitar mal-entendidos.</p>
                  <div className="flex gap-4">
                    <span>🔥 <strong>1.842</strong> combinados enviados</span>
                    <span>✅ <strong>96%</strong> validados</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 relative z-10">
                  <a href="/?utm_source=viral_loop&utm_medium=validation_success" className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center shadow-lg transition-transform active:scale-95 text-sm">
                    Criar meu ToDeAcordo
                  </a>
                  <a 
                    href="https://chromewebstore.google.com/detail/jicbcgjheaebfkecdpeenpnifgpjjgig?utm_source=item-share-cb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-750 text-white hover:bg-indigo-700 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center border border-indigo-500/50 shadow-sm transition-transform active:scale-95 text-sm"
                  >
                    Instalar extensão
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-sm mx-auto text-left mb-8">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-3 border-b border-slate-100 pb-2">Rubrica de Confirmação</p>
                {consensus.signatures?.map((sig, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    <p className="font-medium text-slate-800">{sig.name}</p>
                    <img src={sig.image} alt="Rubrica" className="h-16 object-contain opacity-80" />
                    <p className="text-[10px] text-slate-400 font-mono mt-1">
                      Registrado em: {new Date(sig.timestamp).toLocaleString()}
                      <br/>Hash Criptográfico: {sig.document_hash.substring(0, 16)}...
                      <br/>Versão Aceita: v{sig.accepted_version}
                    </p>
                  </div>
                ))}
                <p className="text-[9px] leading-tight text-slate-400 mt-4 border-t border-slate-100 pt-2 print:text-black">
                  Este registro documenta a confirmação operacional do entendimento. Não substitui assinatura eletrônica qualificada ou contrato formal quando exigidos por lei.
                </p>
                
                <div className="mt-4 pt-3 border-t border-slate-100 text-[9px] font-mono text-slate-400 print:text-black break-all flex justify-between">
                  <div>
                    <span className="font-bold uppercase tracking-wider block mb-1">Trilha de Auditoria e Integridade</span>
                    ID: {consensus.id}<br/>
                    Original Hash (SHA-256): {documentHash}<br/>
                    Gerado em: {new Date(consensus.generated_at || Date.now()).toLocaleString()}<br/>
                    IP de Validação: Registrado no Backend Serverless
                  </div>
                  <div className="text-right flex-col justify-end hidden print:flex items-end gap-2 mt-2">
                    <ToDeAcordoBadge type="default" />
                    <span className="text-xs text-slate-400">todeacordo.com.br</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 print:hidden">
                <button 
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 px-8 rounded transition-colors"
                >
                  📄 Baixar PDF Corporativo
                </button>
                <a href="/" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-sm py-3 px-8 rounded transition-colors">
                  Quero gerar o meu
                </a>
              </div>
            </div>
          )}

          {/* Soft Gate Claim Modal (Fase 11) */}
          {showClaimModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col text-center p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full -z-10 opacity-50"></div>
                <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-inner border border-indigo-100">
                  🤝
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Para prosseguir</h2>
                <p className="text-slate-500 mb-8 text-sm">Informe seu nome e e-mail para validar este registro de entendimento.</p>
                
                <div className="space-y-4 text-left mb-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Seu Nome</label>
                    <input 
                      type="text" 
                      value={signerName} 
                      onChange={e => setSignerName(e.target.value)}
                      placeholder="Como você se chama?"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Seu E-mail Profissional</label>
                    <input 
                      type="email" 
                      value={claimEmail} 
                      onChange={e => setClaimEmail(e.target.value)}
                      placeholder="nome@empresa.com.br"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    if(signerName.trim() && claimEmail.trim()) {
                      setShowClaimModal(false);
                      logEvent(consensus.id, 'counterparty_claimed', { name: signerName, email: claimEmail });
                      trackGrowthEvent('lead_captured_from_validation', { email: claimEmail });
                      if (pendingAction === 'sign') {
                        setShowSignatureModal(true);
                      } else if (pendingAction === 'objection') {
                        setShowObjectionModal(true);
                      }
                      setPendingAction(null);
                    } else {
                      alert('Preencha seu nome e e-mail para continuar.');
                    }
                  }}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 active:scale-95 text-lg"
                >
                  Confirmar Identidade
                </button>
                
                <button 
                  onClick={() => {
                    setShowClaimModal(false);
                    setPendingAction(null);
                  }}
                  className="mt-6 text-xs text-slate-400 hover:text-slate-600 underline font-medium"
                >
                  Voltar ao Documento
                </button>
              </div>
            </div>
          )}

          {/* Signature Modal */}
          {showSignatureModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                  <h3 className="font-bold text-slate-900">Rubrica de Confirmação</h3>
                  <button onClick={() => setShowSignatureModal(false)} className="text-slate-400 hover:text-slate-600">
                    ✕
                  </button>
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-slate-600 mb-4">
                    Desenhe sua rubrica para registrar que você conferiu e concorda com este entendimento.
                  </p>
                  
                  <div className="mb-4">
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Seu Nome Completo</label>
                    <input 
                      type="text"
                      value={signerName}
                      onChange={e => setSignerName(e.target.value)}
                      placeholder="Ex: João da Silva"
                      className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 font-medium text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Sua Rubrica</label>
                    <div className="border-2 border-dashed border-slate-300 rounded bg-slate-50 overflow-hidden group">
                      <SignatureCanvas 
                        ref={sigCanvas}
                        penColor="black"
                        canvasProps={{ className: 'w-full h-40 cursor-crosshair touch-none' }}
                      />
                    </div>
                    <div className="flex justify-end mt-1">
                      <button onClick={() => sigCanvas.current?.clear()} className="text-[10px] text-slate-400 hover:text-slate-600 underline">
                        Limpar quadro
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
                  <button 
                    onClick={() => setShowSignatureModal(false)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={handleSign}
                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded shadow-sm flex items-center gap-2"
                  >
                    <span>✒️</span> Confirmar e Aceitar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Objection V2 Modal */}
          {showObjectionModal && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn overflow-y-auto">
              <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col my-8">
                <div className="bg-amber-50 px-6 py-4 border-b border-amber-200 flex justify-between items-center sticky top-0 z-10">
                  <h3 className="font-bold text-amber-900 text-lg flex items-center gap-2">
                    <span className="text-xl">✍️</span> Tenho Ressalvas
                  </h3>
                  <button onClick={() => setShowObjectionModal(false)} className="text-amber-700 hover:text-amber-900">
                    ✕
                  </button>
                </div>
                
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  <p className="text-sm text-slate-600 mb-6">
                    Revise os pontos abaixo. Se houver divergência, indique qual item precisa de ajuste. Isso criará a Versão 2 deste entendimento.
                  </p>
                  
                  <div className="space-y-6">
                    {/* Agreements */}
                    {consensus.agreements?.map((item, idx) => {
                      const text = typeof item === 'string' ? item : item.text;
                      const key = `agr_${idx}`;
                      const state = itemObjections[key] || { status: 'accepted', note: '' };
                      
                      return (
                        <div key={key} className={`border rounded-lg p-4 transition-colors ${state.status === 'rejected' ? 'border-red-300 bg-red-50' : state.status === 'adjust' ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-white'}`}>
                          <p className="text-sm font-medium text-slate-800 mb-3">{text}</p>
                          <div className="flex flex-wrap gap-4 mb-3">
                            <label className="flex items-center gap-1 text-xs cursor-pointer">
                              <input type="radio" name={key} checked={state.status === 'accepted'} onChange={() => setItemObjections({...itemObjections, [key]: {...state, status: 'accepted'}})} />
                              <span className="text-slate-600">✅ Concordo</span>
                            </label>
                            <label className="flex items-center gap-1 text-xs cursor-pointer">
                              <input type="radio" name={key} checked={state.status === 'adjust'} onChange={() => setItemObjections({...itemObjections, [key]: {...state, status: 'adjust'}})} />
                              <span className="text-amber-600">⚠️ Precisa ajustar</span>
                            </label>
                            <label className="flex items-center gap-1 text-xs cursor-pointer">
                              <input type="radio" name={key} checked={state.status === 'rejected'} onChange={() => setItemObjections({...itemObjections, [key]: {...state, status: 'rejected'}})} />
                              <span className="text-red-600">❌ Discordo</span>
                            </label>
                          </div>
                          {state.status !== 'accepted' && (
                            <input 
                              type="text" 
                              placeholder="Qual é a sua ressalva sobre este ponto?"
                              value={state.note}
                              onChange={(e) => setItemObjections({...itemObjections, [key]: {...state, note: e.target.value}})}
                              className="w-full border border-slate-300 rounded px-3 py-2 text-xs focus:ring-amber-500 focus:border-amber-500"
                            />
                          )}
                        </div>
                      );
                    })}

                    {/* Score de Clareza Viral (Módulo 6) */}
              <div className="flex flex-col md:flex-row items-center gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 print:hidden">
                <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-white border-4 border-indigo-500 shadow-inner">
                  <span className="text-3xl font-black text-slate-800">{consensus.clarity_score || 85}</span>
                  <span className="absolute -bottom-2 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Clareza</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">Reunião Quase Clara</h3>
                  <p className="text-slate-500 text-sm mb-3">A pontuação indica que a maioria dos combinados está amarrada, mas há pequenos riscos.</p>
                  <button onClick={() => share(`Minha reunião teve ${consensus.clarity_score || 85}/100 de clareza no ToDeAcordo.`, 'A sua passaria no teste?', window.location.href)} className="text-indigo-600 hover:text-indigo-800 font-bold text-sm underline">
                    Compartilhar meu Score
                  </button>
                </div>
              </div>

              {/* Contradiction Detector (Módulo 5) */}
              {(consensus.risk_flags && consensus.risk_flags.length > 0) && (
                <div className="mb-8 bg-red-50 p-6 rounded-2xl border border-red-200">
                  <h3 className="text-red-800 font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">🚨</span> Pontos que podem virar problema
                  </h3>
                  <div className="space-y-4">
                    {consensus.risk_flags.map((flag, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-red-100">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${flag.severity === 'high' ? 'bg-red-500 text-white' : 'bg-amber-400 text-amber-900'}`}>
                            {flag.severity === 'high' ? 'Risco Alto' : 'Risco Médio'}
                          </span>
                          <span className="font-bold text-slate-800 text-sm">{flag.type}</span>
                        </div>
                        <p className="text-slate-600 text-sm">{flag.text}</p>
                        {flag.evidence_quote && (
                          <div className="mt-3 bg-slate-50 p-3 rounded-lg border-l-2 border-slate-300 text-xs text-slate-500 font-mono italic">
                            "{flag.evidence_quote}"
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

                    {/* Obligations */}
                    {consensus.obligations?.map((item, idx) => {
                      const text = typeof item === 'string' ? item : item.text;
                      const key = `obl_${idx}`;
                      const state = itemObjections[key] || { status: 'accepted', note: '' };
                      
                      return (
                        <div key={key} className={`border rounded-lg p-4 transition-colors ${state.status === 'rejected' ? 'border-red-300 bg-red-50' : state.status === 'adjust' ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-white'}`}>
                          <p className="text-sm font-medium text-slate-800 mb-3">📌 {text}</p>
                          <div className="flex flex-wrap gap-4 mb-3">
                            <label className="flex items-center gap-1 text-xs cursor-pointer">
                              <input type="radio" name={key} checked={state.status === 'accepted'} onChange={() => setItemObjections({...itemObjections, [key]: {...state, status: 'accepted'}})} />
                              <span className="text-slate-600">✅ Concordo</span>
                            </label>
                            <label className="flex items-center gap-1 text-xs cursor-pointer">
                              <input type="radio" name={key} checked={state.status === 'adjust'} onChange={() => setItemObjections({...itemObjections, [key]: {...state, status: 'adjust'}})} />
                              <span className="text-amber-600">⚠️ Precisa ajustar</span>
                            </label>
                            <label className="flex items-center gap-1 text-xs cursor-pointer">
                              <input type="radio" name={key} checked={state.status === 'rejected'} onChange={() => setItemObjections({...itemObjections, [key]: {...state, status: 'rejected'}})} />
                              <span className="text-red-600">❌ Discordo</span>
                            </label>
                          </div>
                          {state.status !== 'accepted' && (
                            <input 
                              type="text" 
                              placeholder="Descreva o que está errado neste prazo ou obrigação..."
                              value={state.note}
                              onChange={(e) => setItemObjections({...itemObjections, [key]: {...state, note: e.target.value}})}
                              className="w-full border border-slate-300 rounded px-3 py-2 text-xs focus:ring-amber-500 focus:border-amber-500"
                            />
                          )}
                        </div>
                      );
                    })}

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Ressalvas Gerais (Opcional)</label>
                      <textarea 
                        value={generalObjection}
                        onChange={e => setGeneralObjection(e.target.value)}
                        className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 min-h-[80px]"
                        placeholder="Esquecemos de algo? Digite aqui..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3 sticky bottom-0 z-10">
                  <button 
                    onClick={() => setShowObjectionModal(false)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    onClick={handleObjectionSubmit}
                    className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded shadow-sm"
                  >
                    Enviar Ressalvas
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <a href="/" className="text-xs text-slate-400 hover:text-indigo-600 flex items-center justify-center gap-1 transition-colors">
              <span className="font-semibold">Gerado com ToDeAcordo</span> — transforme suas reuniões em combinados claros ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationPage;

```

---

## Arquivo: src\todeacordo\src\dashboard\WaitlistPage.tsx
```typescript
export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
        <h1 className="text-2xl font-bold text-white text-center mb-2">Plano Founder (Beta)</h1>
        <p className="text-slate-400 text-center text-sm mb-8">Os primeiros 100 usuários garantem R$ 29,90/mês vitalício.</p>
        
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Enviado com sucesso!"); }}>
          <input required placeholder="Nome" className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-sm focus:border-indigo-500 outline-none" />
          <input required type="email" placeholder="E-mail" className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-sm focus:border-indigo-500 outline-none" />
          <input required type="tel" placeholder="WhatsApp" className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-sm focus:border-indigo-500 outline-none" />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-lg mt-4 transition-colors">
            Entrar na Lista
          </button>
        </form>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\data\ambiguityTaxonomy.ts
```typescript
export const AmbiguityType = {
  PRAZO_VAGO: 'prazo_vago',
  RESPONSAVEL_AUSENTE: 'responsavel_ausente',
  CONDICIONAL_ABERTA: 'condicional_aberta',
  CONTRADICAO_INTERNA: 'contradicao_interna',
  TERMO_INDEFINIDO: 'termo_indefinido',
  FALTA_DE_METRICA: 'falta_de_metrica',
  REFERENCIA_QUEBRADA: 'referencia_quebrada'
} as const;

export type AmbiguityType = typeof AmbiguityType[keyof typeof AmbiguityType];

export interface AmbiguityTaxonomyInfo {
  type: AmbiguityType;
  label: string;
  description: string;
  examples: string[];
}

export const AMBIGUITY_TYPES: Record<AmbiguityType, AmbiguityTaxonomyInfo> = {
  [AmbiguityType.PRAZO_VAGO]: {
    type: AmbiguityType.PRAZO_VAGO,
    label: 'Prazo Vago',
    description: 'Quando o contrato não estabelece uma data ou um período específico para a conclusão de uma obrigação, utilizando termos genéricos e imprecisos.',
    examples: ['"O mais breve possível"', '"Em tempo hábil"', '"Futuramente"']
  },
  [AmbiguityType.RESPONSAVEL_AUSENTE]: {
    type: AmbiguityType.RESPONSAVEL_AUSENTE,
    label: 'Responsável Ausente',
    description: 'Quando a obrigação é descrita na voz passiva ou de forma impessoal, não deixando claro qual das partes é responsável por executá-la.',
    examples: ['"Será providenciado o alvará"', '"Os relatórios devem ser entregues"']
  },
  [AmbiguityType.CONDICIONAL_ABERTA]: {
    type: AmbiguityType.CONDICIONAL_ABERTA,
    label: 'Condicional Aberta',
    description: 'Quando as condições para um evento ocorrer são subjetivas, dependendo da interpretação de uma das partes, sem critérios objetivos de avaliação.',
    examples: ['"Se necessário"', '"Caso seja considerado adequado"', '"Quando aplicável"']
  },
  [AmbiguityType.CONTRADICAO_INTERNA]: {
    type: AmbiguityType.CONTRADICAO_INTERNA,
    label: 'Contradição Interna',
    description: 'Quando diferentes cláusulas ou anexos do mesmo contrato apresentam instruções conflitantes sobre o mesmo tema.',
    examples: ['Cláusula 2 diz que o pagamento é em 30 dias; Cláusula 5 diz que o pagamento é em 15 dias.']
  },
  [AmbiguityType.TERMO_INDEFINIDO]: {
    type: AmbiguityType.TERMO_INDEFINIDO,
    label: 'Termo Indefinido',
    description: 'Uso de jargões técnicos, siglas ou palavras ambíguas que não constam no glossário do contrato e podem ter múltiplos significados legais ou técnicos.',
    examples: ['"Força maior" (sem listar exemplos)', '"Sistema legado"', '"Padrão de mercado"']
  },
  [AmbiguityType.FALTA_DE_METRICA]: {
    type: AmbiguityType.FALTA_DE_METRICA,
    label: 'Falta de Métrica de Qualidade',
    description: 'A entrega ou serviço é exigido, mas não há um padrão de aceitação ou métrica objetiva de SLA (Service Level Agreement) para avaliar a qualidade e o aceite.',
    examples: ['"Manter o ambiente limpo"', '"Garantir a disponibilidade do sistema"']
  },
  [AmbiguityType.REFERENCIA_QUEBRADA]: {
    type: AmbiguityType.REFERENCIA_QUEBRADA,
    label: 'Referência Quebrada',
    description: 'Menção a anexos, leis, políticas internas ou cláusulas que não existem no documento ou estão numeradas/nomeadas incorretamente.',
    examples: ['"Conforme estipulado no Anexo III" (sendo que não há Anexo III)']
  }
};

```

---

## Arquivo: src\todeacordo\src\data\copyBank.ts
```typescript
export const copyBank = {
  headlines: [
    "Reunião sem mal-entendido.",
    "Nunca mais saia de uma reunião com cada pessoa lembrando de um jeito.",
    "Ata de reunião morreu. O futuro é o aceite em 1 clique.",
    "Proteja seu escopo antes que o cliente mude de ideia."
  ],
  whatsapp: [
    "Oi, gerei um ToDeAcordo da nossa conversa para evitar qualquer ruído depois. Você pode confirmar aqui: [LINK]",
    "Resumo validável da nossa reunião, com combinados e responsáveis: [LINK]",
    "Antes de avançarmos, me confirma se foi isso que alinhamos hoje: [LINK]"
  ],
  linkedinHooks: [
    "Essa reunião parecia resolvida. Não estava.",
    "Por que eu parei de mandar atas por e-mail e passei a enviar links de fechamento.",
    "Você acha que o cliente concordou com você. A IA achou 3 contradições no discurso dele."
  ]
};

```

---

## Arquivo: src\todeacordo\src\data\rulePacks.ts
```typescript
export interface RulePack {
  id: string;
  name: string;
  description: string;
  mandatoryQuestions: string[];
  risks: string[];
}

export const RULE_PACKS: RulePack[] = [
  {
    id: "rp_escopo",
    name: "Regras de Escopo",
    description: "Diretrizes para definição clara e exaustiva do escopo do projeto, evitando brechas e ambiguidades.",
    mandatoryQuestions: [
      "O escopo está definido de forma exaustiva (incluindo o que NÃO faz parte)?",
      "As métricas de aceitação estão quantificadas?",
      "Existem exclusões explícitas no escopo?"
    ],
    risks: [
      "Escopo aberto (Scope Creep) gerando custos adicionais",
      "Entregas rejeitadas por falta de critérios de aceitação",
      "Falta de clareza nas obrigações das partes"
    ]
  },
  {
    id: "rp_obra",
    name: "Regras para Obras e Engenharia",
    description: "Normas específicas para contratos de execução de obras civis e serviços de engenharia.",
    mandatoryQuestions: [
      "Existe cronograma físico-financeiro anexado e referenciado?",
      "A responsabilidade por licenças e alvarás está claramente atribuída?",
      "Há cláusula sobre descarte de resíduos (PGRCC)?"
    ],
    risks: [
      "Atrasos por falta de licenciamento prévio",
      "Multas ambientais por descarte irregular",
      "Aditivos contratuais frequentes por falhas de projeto"
    ]
  },
  {
    id: "rp_tributario",
    name: "Regras Tributárias e Fiscais",
    description: "Conjunto de regras para mitigar riscos de passivos fiscais e reter os impostos adequadamente.",
    mandatoryQuestions: [
      "As retenções de impostos (ISS, INSS, IRRF, CSRF) estão especificadas?",
      "Foi definido de quem é o ônus por variações na alíquota de impostos?",
      "Há exigência de certidões negativas (CNDs) para liberação de pagamentos?"
    ],
    risks: [
      "Responsabilidade solidária por débitos previdenciários (INSS)",
      "Autuações fiscais por falha na retenção de impostos",
      "Perda de rentabilidade devido a novos encargos tributários"
    ]
  },
  {
    id: "rp_trabalhista",
    name: "Regras Trabalhistas e Terceirização",
    description: "Controles para evitar passivos trabalhistas em contratos com cessão de mão de obra.",
    mandatoryQuestions: [
      "Há previsão de fiscalização mensal de obrigações trabalhistas?",
      "Existe proibição ou restrição à subcontratação (pejotização)?",
      "As regras de acesso às dependências da empresa (EPIs, crachás) estão claras?"
    ],
    risks: [
      "Vínculo empregatício ou responsabilidade subsidiária",
      "Acidentes de trabalho por falta de EPIs ou fiscalização",
      "Multas por descumprimento de normas regulamentadoras (NRs)"
    ]
  },
  {
    id: "rp_lgpd",
    name: "Privacidade e Proteção de Dados (LGPD)",
    description: "Cláusulas para conformidade com a legislação de proteção de dados pessoais (Lei 13.709/2018).",
    mandatoryQuestions: [
      "Haverá compartilhamento, acesso ou tratamento de dados pessoais?",
      "O contrato possui seção ou anexo específico de LGPD (DPA)?",
      "As responsabilidades em caso de vazamento de dados estão descritas?"
    ],
    risks: [
      "Multas da ANPD por tratamento inadequado de dados",
      "Danos à reputação da empresa por vazamento de informações",
      "Ações indenizatórias por titulares de dados"
    ]
  }
];

```

---

## Arquivo: src\todeacordo\src\data\useCases.ts
```typescript
export const useCases = [
  {
    slug: 'advogados',
    title: 'ToDeAcordo para Advogados',
    persona: 'Advogados e Escritórios',
    pain: 'O cliente liga, muda a estratégia, você executa, e depois ele diz que não autorizou.',
    beforeTranscript: 'Cliente: "Acho que a gente devia tentar o acordo extrajudicial primeiro."\nVocê: "Ok, vou protocolar a petição com essa proposta."\nCliente: "Beleza, manda bala."',
    afterConsensus: 'Decisão: Cliente autorizou a proposta de acordo extrajudicial no valor de R$ 50k. Responsável: Advogado (Protocolar até sexta).',
    objections: 'Ata assusta o cliente. ToDeAcordo parece um checklist inofensivo.',
    cta: 'Blindar minhas ligações',
    keywords: ['advocacia', 'legal design', 'acordo extrajudicial', 'prova documental']
  },
  {
    slug: 'consultores',
    title: 'ToDeAcordo para Consultores Estratégicos',
    persona: 'Consultores B2B',
    pain: 'Você entrega o projeto e o cliente cobra uma planilha que ele "jurava que estava no escopo".',
    beforeTranscript: 'Cliente: "Você pode incluir aquela análise de mercado tbm?"\nVocê: "Posso dar uma olhada, mas não aprofundado."\nCliente: "Ótimo!"',
    afterConsensus: 'Obrigação: Consultor fará uma análise superficial (máx 2 páginas) do mercado. O aprofundamento não faz parte do escopo atual.',
    objections: 'Eu já gravo a reunião. (Quem vai ouvir 1h de áudio para provar um ponto?)',
    cta: 'Proteger meu escopo',
    keywords: ['consultoria B2B', 'scope creep', 'gestão de escopo']
  },
  {
    slug: 'agencias',
    title: 'ToDeAcordo para Agências de Marketing',
    persona: 'Agências e Produtoras',
    pain: 'O cliente reprova a arte alegando que pediu "mais vibrante", quando na call pediu "minimalista".',
    beforeTranscript: 'Cliente: "Eu queria algo mais clean, mas que chamasse atenção."\nAtendimento: "Tá, vamos focar no minimalismo com cores pontuais."\nCliente: "Isso!"',
    afterConsensus: 'Decisão: A direção de arte será minimalista com pontos de cor vibrante. Responsável: Atendimento (Briefing para Criação).',
    objections: 'O cliente não vai querer assinar. (Ele não assina, ele clica em "Tô de Acordo" no WhatsApp).',
    cta: 'Acabar com a refação',
    keywords: ['refação', 'aprovação de layout', 'briefing', 'agência de publicidade']
  },
  {
    slug: 'vendas-b2b',
    title: 'ToDeAcordo para Vendas B2B',
    persona: 'Executivos de Vendas (AE / SDR)',
    pain: 'Você faz o demo, manda proposta e toma ghosting porque os próximos passos não ficaram claros.',
    beforeTranscript: 'Lead: "Gostei muito. Vou falar com meu diretor."\nVocê: "Legal, quando podemos voltar a falar?"\nLead: "Semana que vem te dou um toque."',
    afterConsensus: 'Obrigação: Lead apresentará a plataforma ao Diretor até terça-feira. Próximo passo: Nova call quarta às 14h.',
    objections: 'Parece agressivo para vendas. (É profissionalismo puro. Quem tem intenção de compra, não foge de combinado).',
    cta: 'Fechar mais contratos',
    keywords: ['follow up B2B', 'ghosting', 'proposta comercial', 'BANT']
  }
];

```

---

## Arquivo: src\todeacordo\src\doors\ApiDoor.tsx
```typescript
import { useState } from 'react';
import { OpportunityLogger } from './opportunityDoors';

export default function ApiDoor() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    OpportunityLogger.logOpportunity({
      type: 'api',
      name: 'B2B API Request',
      email: 'api@company.com',
      volume: '1000+'
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-blue-500/30">
          Para Desenvolvedores & Produto
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Integre a Máquina de Entendimentos</h1>
        <p className="text-xl text-slate-400 mb-12">Quer gerar relatórios de consenso direto do seu CRM, app de telemedicina ou plataforma educacional via API REST?</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl text-left max-w-xl mx-auto">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Seu E-mail Corporativo</label>
                <input required type="email" placeholder="nome@suaempresa.com" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Volume Mensal (Estimativa de Calls)</label>
                <select className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none">
                  <option>Até 100 reuniões/mês</option>
                  <option>100 a 1.000 reuniões/mês</option>
                  <option>Mais de 1.000 reuniões/mês</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Qual é o Caso de Uso?</label>
                <input required type="text" placeholder="Ex: CRM Imobiliário" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-blue-500 outline-none" />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl mt-6 transition-colors">
                Solicitar Acesso Antecipado à API
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-blue-900/30 border border-blue-500/50 p-8 rounded-3xl text-center">
            <span className="text-4xl mb-4 block">✅</span>
            <h3 className="text-2xl font-bold text-white mb-2">Pedido na fila!</h3>
            <p className="text-blue-200">A documentação da API REST será enviada em breve para o seu e-mail.</p>
          </div>
        )}
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\doors\CategoryDoors.tsx
```typescript
import { useState } from 'react';
import { trackGrowthEvent } from '../growth/growthLogger';

export const ProtocolDoor = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-indigo-900 p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">🌐</div>
          <h1 className="text-4xl font-extrabold text-white mb-4">Open Consensus Schema</h1>
          <p className="text-indigo-200 text-lg">
            O ToDeAcordo não é apenas um app. É uma nova camada da internet de trabalho. <br/>
            Conversas viram compromissos estruturados e verificáveis.
          </p>
        </div>
        <div className="p-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">A Estrutura Padrão (.todeacordo.json)</h2>
            <p className="text-slate-600 mb-6">
              Todo entendimento gerado na nossa plataforma é exportável em um formato universal portátil, abrindo portas para integração profunda com ERPs, CRMs, e sistemas de Governança corporativa (Legaltech & Govtech).
            </p>
            <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm text-green-400 overflow-x-auto shadow-inner">
              <pre>{`{
  "version": "1.0",
  "id": "cns_9823749823",
  "parties": ["joao@agencia.com", "maria@cliente.com"],
  "commitments": [
    { "type": "obligation", "owner": "joao", "deadline": "2024-12-01", "text": "Entregar layout v1" }
  ],
  "cryptographic_hash": "a8f5f167f44f4964e6c998dee827110c..."
}`}</pre>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 border-t border-slate-100 pt-8">
            <button 
              onClick={() => {
                alert('Iniciando ambiente de desenvolvimento de API...');
                trackGrowthEvent('paywall_viewed', { feature: 'Protocol API' });
              }}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-transform active:scale-95 shadow-md"
            >
              Acessar API Documentation
            </button>
            <a href="/" className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-6 rounded-xl text-center transition-colors">
              Voltar ao Início
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AutopsyDoor = () => {
  const [text, setText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 font-sans flex flex-col items-center">
      <div className="max-w-2xl w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        <div className="p-12 text-center border-b border-slate-700">
          <div className="text-5xl mb-4">🩻</div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Autópsia da Reunião</h1>
          <p className="text-slate-400">Cole as anotações de um projeto que deu errado. Nós te diremos exatamente em qual frase o acordo morreu.</p>
        </div>
        <div className="p-10">
          <textarea 
            value={text}
            onChange={e => setText(e.target.value)}
            className="w-full h-40 bg-slate-900 border border-slate-600 rounded-xl p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-red-500 outline-none mb-6"
            placeholder="Ex: Combinamos que a entrega seria mais ou menos na sexta-feira, dependendo do time de design. O João ficou de ver isso depois..."
          ></textarea>
          
          <button 
            onClick={() => {
              setAnalyzing(true);
              setTimeout(() => setAnalyzing(false), 2000);
              trackGrowthEvent('validation_cta_clicked', { feature: 'Autopsy' });
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)] active:scale-95"
          >
            {analyzing ? 'Analisando Causa da Morte...' : 'Iniciar Autópsia'}
          </button>

          {!analyzing && text.length > 30 && (
            <div className="mt-8 bg-red-900/30 border border-red-500/50 rounded-xl p-6 text-red-200 animate-fadeIn">
              <h3 className="font-bold text-red-400 mb-2">Causa Mortis Detectada:</h3>
              <p className="mb-4 text-sm">"mais ou menos na sexta-feira, dependendo do time"</p>
              <ul className="list-disc ml-5 text-sm space-y-2 opacity-80">
                <li>O prazo é condicional e vago ("mais ou menos", "dependendo").</li>
                <li>O responsável ("João ficou de ver") não tem compromisso de entrega, apenas de investigação.</li>
              </ul>
              <div className="mt-6 border-t border-red-800/50 pt-4">
                <a href="/" className="text-red-400 hover:text-white font-bold text-sm underline">
                  Como o ToDeAcordo evitaria isso ↗
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const DoctorDoor = () => {
  return (
    <div className="min-h-screen bg-teal-50 py-12 px-4 font-sans flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-100 p-12 text-center">
        <div className="text-6xl mb-6">🩺</div>
        <h1 className="text-3xl font-extrabold text-teal-900 mb-4">Meeting Doctor (Linter)</h1>
        <p className="text-teal-700 mb-8 max-w-md mx-auto">
          Como um corretor ortográfico, mas para compromissos. O nosso **Consensus Linter** detecta escopo aberto, prazos vagos e pendências órfãs em tempo real.
        </p>
        <div className="bg-teal-900 p-6 rounded-xl text-left text-teal-100 font-mono text-sm mb-8 shadow-inner relative">
          <p>Combinado: Entregar layout <span className="text-red-400 border-b border-red-400">semana que vem</span>.</p>
          <div className="absolute top-1/2 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Linter Error: Prazo Vago
          </div>
        </div>
        <a href="/waitlist" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform active:scale-95">
          Entrar na Lista de Espera da API
        </a>
      </div>
    </div>
  );
};

export const BenchmarkDoor = () => {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 font-sans flex flex-col items-center">
      <div className="max-w-4xl w-full bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700 text-white">
        <div className="p-12 text-center border-b border-slate-700">
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Índice Nacional de Clareza de Reuniões
          </h1>
          <p className="text-slate-400 text-lg">
            Analisamos dados agregados e anonimizados de milhares de reuniões no Brasil.
          </p>
        </div>
        <div className="p-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
            <div className="text-4xl font-black text-red-400 mb-2">68%</div>
            <p className="text-slate-300 text-sm font-medium uppercase tracking-wider">Acordam sem Prazo Fixo</p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
            <div className="text-4xl font-black text-amber-400 mb-2">42%</div>
            <p className="text-slate-300 text-sm font-medium uppercase tracking-wider">Escopo Condicional</p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
            <div className="text-4xl font-black text-indigo-400 mb-2">89%</div>
            <p className="text-slate-300 text-sm font-medium uppercase tracking-wider">Geram Mal-entendidos</p>
          </div>
        </div>
        <div className="p-12 bg-slate-900/50 text-center">
          <h3 className="text-xl font-bold mb-4">Descubra onde você se encaixa</h3>
          <a href="/analisar" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
            Calcular Meu Índice Pessoal
          </a>
        </div>
      </div>
    </div>
  );
};

export const IntelligenceDoor = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Moat de Dados (Admin Intelligence)</h1>
        <p className="text-slate-500 mb-8">Painel interno rastreando a Taxonomia de Ambiguidade global da plataforma.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Risco Mais Comum</h4>
            <div className="text-xl font-black text-slate-800">Prazo_Vago (42%)</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Persona + Confusa</h4>
            <div className="text-xl font-black text-slate-800">Agências de Mkt</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ressalvas/Mês</h4>
            <div className="text-xl font-black text-slate-800">1.402</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm bg-indigo-600 text-white">
            <h4 className="text-xs font-bold text-indigo-200 uppercase tracking-wider mb-2">Valor Protegido</h4>
            <div className="text-xl font-black">R$ 14.5M (Est.)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConsultantKitDoor = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        <div className="bg-gradient-to-r from-slate-900 to-indigo-900 p-12 text-center text-white">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">Profissionais de Elite</span>
          <h1 className="text-3xl font-extrabold mb-4">O Kit do Consultor Blindado</h1>
          <p className="text-indigo-200">Distribuição por Identidade: Mostre ao cliente que reuniões com você são diferentes.</p>
        </div>
        <div className="p-8 grid gap-6">
          <div className="border border-slate-200 rounded-xl p-6 flex justify-between items-center bg-slate-50">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Badge de Confiança</h3>
              <p className="text-sm text-slate-500">Para sua bio do LinkedIn e propostas comerciais.</p>
            </div>
            <button className="bg-indigo-100 text-indigo-700 font-bold py-2 px-4 rounded">Baixar Selo</button>
          </div>
          
          <div className="border border-slate-200 rounded-xl p-6 flex justify-between items-center bg-slate-50">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Rodapé de Proposta (Legal Design)</h3>
              <p className="text-sm text-slate-500 text-mono">"Reuniões de alinhamento deste projeto serão registradas com ToDeAcordo."</p>
            </div>
            <button className="bg-indigo-100 text-indigo-700 font-bold py-2 px-4 rounded">Copiar</button>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 flex justify-between items-center bg-slate-50">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Assinatura de Calendar</h3>
              <p className="text-sm text-slate-500">Gere um link automático para suas descrições no Google Calendar.</p>
            </div>
            <a href="/assinatura-email" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors">Gerar Assinatura</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EmailSignatureDoor = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-slate-200 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Assinatura Dinâmica</h1>
        <p className="text-slate-500 mb-6 text-sm">Cole isso no rodapé dos seus e-mails ou convites do Calendar para construir autoridade.</p>
        
        <div className="bg-slate-100 p-6 rounded-lg mb-6 border border-slate-200 text-left">
          <p className="text-slate-800 font-medium text-sm">Atenciosamente,</p>
          <p className="text-slate-800 font-bold text-sm mb-4">Seu Nome</p>
          <div className="border-t border-slate-300 pt-3 flex items-center gap-2">
            <span className="text-indigo-600 text-lg">🛡️</span>
            <span className="text-xs text-slate-500 font-medium">Reuniões comigo terminam com <b>ToDeAcordo</b>.</span>
          </div>
        </div>
        
        <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all">
          Copiar HTML para Gmail
        </button>
      </div>
    </div>
  );
};

```

---

## Arquivo: src\todeacordo\src\doors\EnterpriseDoor.tsx
```typescript
import { useState } from 'react';
import { OpportunityLogger } from './opportunityDoors';

export default function EnterpriseDoor() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    OpportunityLogger.logOpportunity({
      type: 'enterprise',
      name: 'Enterprise Request',
      email: 'corp@enterprise.com'
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-6">Proteja a operação de toda a empresa.</h1>
          <p className="text-xl text-slate-600 mb-8">Gestão unificada de times, painel de auditoria, restrição de acesso e métricas globais de mal-entendidos evitados.</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-indigo-600">✓</span> Single Sign-On (SSO / SAML)</li>
            <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-indigo-600">✓</span> Retenção customizada de dados</li>
            <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-indigo-600">✓</span> Integração nativa com Salesforce</li>
            <li className="flex items-center gap-3 text-slate-700 font-medium"><span className="text-indigo-600">✓</span> Suporte dedicado</li>
          </ul>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Fale com Vendas</h3>
            <div className="space-y-4">
              <input required type="text" placeholder="Nome" className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 outline-none focus:border-indigo-500" />
              <input required type="email" placeholder="E-mail Corporativo" className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 outline-none focus:border-indigo-500" />
              <input required type="text" placeholder="Empresa" className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 outline-none focus:border-indigo-500" />
              <select className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 outline-none focus:border-indigo-500">
                <option>10 a 50 usuários</option>
                <option>51 a 200 usuários</option>
                <option>Mais de 200 usuários</option>
              </select>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl mt-4 transition-colors">
                Agendar Reunião
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-indigo-50 border border-indigo-100 p-8 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">Mensagem Recebida</h3>
            <p className="text-indigo-700">Um executivo de contas entrará em contato em breve.</p>
          </div>
        )}
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\doors\IntegrationsDoor.tsx
```typescript
import { useState } from 'react';
import { OpportunityLogger } from './opportunityDoors';

export default function IntegrationsDoor() {
  const [voted, setVoted] = useState<string[]>([]);

  const handleVote = (integration: string) => {
    if (voted.includes(integration)) return;
    setVoted([...voted, integration]);
    OpportunityLogger.logOpportunity({
      type: 'integration',
      name: 'User Vote',
      email: 'anonymous@vote.com',
      interest: integration
    });
  };

  const cards = [
    { name: 'Google Meet', status: 'Ativo', icon: '🎥', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { name: 'WhatsApp', status: 'Link/Copy', icon: '💬', color: 'bg-green-100 text-green-800 border-green-200' },
    { name: 'Gmail', status: 'Em breve', icon: '📧', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { name: 'Notion', status: 'Em breve', icon: '📝', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { name: 'HubSpot', status: 'Em breve', icon: '🟧', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { name: 'Pipedrive', status: 'Em breve', icon: '📊', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { name: 'Slack', status: 'Em breve', icon: '📱', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { name: 'Teams', status: 'Em breve', icon: '🔵', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { name: 'Zoom', status: 'Em breve', icon: '📹', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { name: 'API Pública', status: 'Em breve', icon: '⚙️', color: 'bg-slate-100 text-slate-800 border-slate-200' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Aonde você quer levar o ToDeAcordo?</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Vote nas integrações que vão mudar o seu fluxo de trabalho. As mais votadas entram no próximo sprint.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-bold text-slate-800 mb-2">{c.name}</h3>
              <div className={`text-xs font-bold px-3 py-1 rounded-full mb-6 border ${c.color}`}>
                {c.status}
              </div>
              {c.status === 'Em breve' && (
                <button 
                  onClick={() => handleVote(c.name)}
                  className={`w-full py-2 rounded-lg font-bold text-sm transition-colors ${voted.includes(c.name) ? 'bg-indigo-100 text-indigo-800 cursor-default' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}
                >
                  {voted.includes(c.name) ? 'Voto Registrado ✓' : 'Quero esta!'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\doors\MarketplaceDoor.tsx
```typescript
import { OpportunityLogger } from './opportunityDoors';

export default function MarketplaceDoor() {
  const templates = [
    { name: 'Reunião com Cliente', desc: 'Extração de pendências pós-call.' },
    { name: 'Proposta Comercial', desc: 'Acordo verbal em escopo firme.' },
    { name: 'Obra & Reforma', desc: 'Evitar o "eu pedi da cor azul".' },
    { name: 'Diagnóstico Tributário', desc: 'Combinados financeiros.' },
    { name: 'Alinhamento de Equipe', desc: 'Responsáveis por demandas internas.' }
  ];

  const handleUse = (name: string) => {
    OpportunityLogger.logOpportunity({
      type: 'integration', // Usando tag genérica para contagem
      name: `Template Request: ${name}`,
      email: 'user@template.com'
    });
    alert('Redirecionando para demonstração simulada... (Feature Capture logado)');
    window.location.href = `/demo/${name.toLowerCase().replace(/ /g, '-')}`;
  };

  return (
    <div className="min-h-screen bg-slate-100 py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">Templates de Entendimento</h1>
        <p className="text-lg text-slate-500 mb-12 text-center">Comece não do zero, mas do contexto certo para o seu negócio.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((tpl, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{tpl.name}</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">{tpl.desc}</p>
              <button onClick={() => handleUse(tpl.name)} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 rounded-lg transition-colors">
                Usar este template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\doors\opportunityDoors.ts
```typescript
export type OpportunityType = 'api' | 'white_label' | 'partner' | 'enterprise' | 'integration';

export interface OpportunityLead {
  id: string;
  type: OpportunityType;
  name: string;
  email: string;
  company?: string;
  volume?: string;
  interest?: string;
  created_at: number;
}

export const OpportunityLogger = {
  logOpportunity: (lead: Omit<OpportunityLead, 'id' | 'created_at'>) => {
    const opportunities: OpportunityLead[] = JSON.parse(localStorage.getItem('tda_opportunities') || '[]');
    opportunities.push({
      ...lead,
      id: `opp_${Date.now()}`,
      created_at: Date.now()
    });
    localStorage.setItem('tda_opportunities', JSON.stringify(opportunities));
    console.log('[ToDeAcordo] Opportunity Captured:', lead);
  },
  
  getOpportunities: (): OpportunityLead[] => {
    return JSON.parse(localStorage.getItem('tda_opportunities') || '[]');
  }
};

```

---

## Arquivo: src\todeacordo\src\doors\PartnerDoor.tsx
```typescript
import { useState } from 'react';
import { OpportunityLogger } from './opportunityDoors';

export default function PartnerDoor() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    OpportunityLogger.logOpportunity({
      type: 'partner',
      name: 'Partner Request',
      email: 'partner@indica.com'
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-indigo-50 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black text-indigo-900 mb-6">Programa de Embaixadores</h1>
        <p className="text-xl text-indigo-700 mb-12">Indique o ToDeAcordo para clientes que viveem de reunião e gere receita recorrente.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-indigo-100 max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Inscreva-se</h3>
            <div className="space-y-4">
              <input required type="text" placeholder="Nome" className="w-full bg-indigo-50 border border-indigo-200 rounded-lg p-3 outline-none focus:border-indigo-500" />
              <input required type="email" placeholder="E-mail" className="w-full bg-indigo-50 border border-indigo-200 rounded-lg p-3 outline-none focus:border-indigo-500" />
              <input type="text" placeholder="LinkedIn ou Site (Opcional)" className="w-full bg-indigo-50 border border-indigo-200 rounded-lg p-3 outline-none focus:border-indigo-500" />
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl mt-4 transition-colors">
                Quero ser Parceiro Oficial
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-200 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-green-600 mb-2">Inscrição Recebida!</h3>
            <p className="text-slate-600">Avisaremos assim que liberarmos o seu painel de afiliado.</p>
          </div>
        )}
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\doors\WhiteLabelDoor.tsx
```typescript
import { useState } from 'react';
import { OpportunityLogger } from './opportunityDoors';

export default function WhiteLabelDoor() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    OpportunityLogger.logOpportunity({
      type: 'white_label',
      name: 'White Label Request',
      email: 'wl@agency.com'
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-6">Sua Marca. Nosso Motor.</h1>
        <p className="text-xl text-slate-400 mb-12">Ofereça prevenção de mal-entendidos para os seus clientes, com o seu logo, suas cores e no seu domínio.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl max-w-lg mx-auto">
            <h3 className="text-xl font-bold mb-6">Lista de Espera: White Label</h3>
            <div className="space-y-4">
              <input required type="text" placeholder="Nome da Franquia/Agência" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 outline-none focus:border-indigo-500" />
              <input required type="email" placeholder="E-mail" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 outline-none focus:border-indigo-500" />
              <select className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 outline-none focus:border-indigo-500">
                <option>Escritório de Advocacia</option>
                <option>Agência de Marketing</option>
                <option>Consultoria</option>
                <option>Outros</option>
              </select>
              <button type="submit" className="w-full bg-white text-slate-900 font-bold py-4 rounded-xl mt-4 transition-transform active:scale-95">
                Entrar na Fila de Prioridade
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-slate-800 p-8 rounded-3xl border border-green-500 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-green-400 mb-2">Interesse Registrado</h3>
            <p className="text-slate-300">Nossa equipe entrará em contato quando o programa for lançado.</p>
          </div>
        )}
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\growth\growthLogger.ts
```typescript
// src/growth/growthLogger.ts

export type GrowthEventName = 
  | 'validation_page_opened'
  | 'validation_cta_clicked'
  | 'waitlist_joined'
  | 'referral_link_opened'
  | 'demo_opened'
  | 'demo_cta_clicked'
  | 'pdf_downloaded'
  | 'whatsapp_clicked'
  | 'email_clicked'
  | 'paywall_viewed'
  | 'feature_vote_submitted'
  | 'founder_interest_submitted'
  | 'share_clicked'
  | 'copy_link_clicked'
  | 'install_cta_clicked'
  | 'accepted_with_signature'
  | 'accepted_with_reservation'
  | 'lead_captured_from_validation'
  | 'agreement_created'
  | 'validation_link_opened'
  | 'validation_link_clicked'
  | 'counterparty_identified'
  | 'funnel_event';

export interface GrowthEventPayload {
  meeting_id?: string;
  consensus_id?: string;
  validation_id?: string;
  ref?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  source_page?: string;
  user_role?: 'owner' | 'counterparty' | 'visitor' | 'admin';
  persona?: string;
  email?: string;
  [key: string]: any;
}

export const trackGrowthEvent = (eventName: GrowthEventName, payload?: GrowthEventPayload) => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const incomingRef = urlParams.get('ref');
    
    // Persistência do referral e UTMs por 30 dias (usando timestamp no localStorage)
    if (incomingRef) {
      localStorage.setItem('tda_attribution_ref', incomingRef);
      localStorage.setItem('tda_attribution_ref_time', Date.now().toString());
    }
    
    // Salvar UTMs se houver na URL
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(param => {
      const val = urlParams.get(param);
      if (val) {
        localStorage.setItem(`tda_${param}`, val);
      }
    });

    // Validar expiração de 30 dias (30 * 24 * 60 * 60 * 1000 = 2592000000 ms)
    const refTime = localStorage.getItem('tda_attribution_ref_time');
    let attributionRef = null;
    if (refTime && Date.now() - parseInt(refTime, 10) < 2592000000) {
      attributionRef = localStorage.getItem('tda_attribution_ref');
    } else {
      localStorage.removeItem('tda_attribution_ref');
      localStorage.removeItem('tda_attribution_ref_time');
    }

    const event = {
      id: crypto.randomUUID(),
      event_name: eventName,
      timestamp: Date.now(),
      url: window.location.href,
      attribution_ref: attributionRef,
      utm_source: urlParams.get('utm_source') || localStorage.getItem('tda_utm_source'),
      utm_medium: urlParams.get('utm_medium') || localStorage.getItem('tda_utm_medium'),
      utm_campaign: urlParams.get('utm_campaign') || localStorage.getItem('tda_utm_campaign'),
      source_page: payload?.source_page || window.location.pathname,
      user_role: payload?.user_role || 'visitor',
      payload
    };

    // Salvar no localStorage para análise de funil local no dashboard
    const existingEvents = JSON.parse(localStorage.getItem('tda_growth_events') || '[]');
    existingEvents.push(event);
    localStorage.setItem('tda_growth_events', JSON.stringify(existingEvents));

    console.log(`[Growth Tracker] ${eventName}`, event);
  } catch (error) {
    console.error(`[Growth Tracker] Falha ao registrar evento ${eventName}`, error);
  }
};

// Alias simplificado para facilitar chamadas no app
export const trackEvent = (eventName: GrowthEventName, payload?: GrowthEventPayload) => {
  trackGrowthEvent(eventName, payload);
};

export const getOrCreateReferralCode = (nameOrEmail?: string): string => {
  let ref = localStorage.getItem('tda_my_referral_code');
  if (!ref) {
    const prefix = nameOrEmail ? nameOrEmail.split('@')[0].split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '') : 'user';
    const suffix = Math.random().toString(36).substring(2, 6);
    ref = `${prefix}-${suffix}`;
    localStorage.setItem('tda_my_referral_code', ref);
  }
  return ref;
};

```

---

## Arquivo: src\todeacordo\src\hooks\useUsage.ts
```typescript
import { useState, useEffect } from 'react';
import { getUsage, incrementUsage, getTranscriptUsage, incrementTranscriptUsage } from '../storage/usageStorage';

export function useUsage() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(3);
  const [transcriptCount, setTranscriptCount] = useState(0);
  const [transcriptLimit, setTranscriptLimit] = useState(20);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsage();
  }, []);

  const loadUsage = async () => {
    try {
      const data = await getUsage();
      setCount(data.count);
      setLimit(data.limit);
      
      const tData = await getTranscriptUsage();
      setTranscriptCount(tData.count);
      setTranscriptLimit(tData.limit);
    } catch (e) {
      console.error("Erro ao carregar uso:", e);
    } finally {
      setLoading(false);
    }
  };

  const remainingQuota = () => Math.max(0, limit - count);
  const remainingTranscriptQuota = () => Math.max(0, transcriptLimit - transcriptCount);
  
  const canCreateUnderstanding = () => count < limit;
  const canTranscribe = () => transcriptCount < transcriptLimit;

  const recordUsage = async () => {
    const data = await incrementUsage();
    setCount(data.count);
    setLimit(data.limit);
    return data;
  };

  const recordTranscriptUsage = async () => {
    const data = await incrementTranscriptUsage();
    setTranscriptCount(data.count);
    setTranscriptLimit(data.limit);
    return data;
  };

  return {
    count,
    limit,
    transcriptCount,
    transcriptLimit,
    loading,
    remainingQuota,
    remainingTranscriptQuota,
    canCreateUnderstanding,
    canTranscribe,
    recordUsage,
    recordTranscriptUsage,
    refreshUsage: loadUsage
  };
}

```

---

## Arquivo: src\todeacordo\src\lib\hashUtils.ts
```typescript
/**
 * Utilitário para gerar SHA-256 no navegador usando Crypto API Nativa.
 * Usado para a "Trilha de Confiança" do ToDeAcordo.
 */
export async function generateSHA256(content: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(content);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Gera um hash canonizado de um objeto de consenso para auditoria.
 * Ignora campos dinâmicos como audit_events, timestamps locais ou assinaturas para gerar a "Hash Base do Entendimento".
 */
export async function generateConsensusHash(consensus: any): Promise<string> {
  const baseObject = {
    meeting_id: consensus.meeting_id,
    participants: consensus.participants,
    summary: consensus.summary,
    agreements: consensus.agreements,
    decisions: consensus.decisions,
    obligations: consensus.obligations,
    pending_items: consensus.pending_items,
    responsible_parties: consensus.responsible_parties,
    deadlines: consensus.deadlines
  };
  
  const jsonString = JSON.stringify(baseObject);
  return generateSHA256(jsonString);
}

```

---

## Arquivo: src\todeacordo\src\lib\mockData.ts
```typescript
import type { ConsensusObject } from '../types';

export const MOCK_CONSENSUS: ConsensusObject = {
  id: 'demo-123',
  meeting_id: 'demo',
  title: 'Alinhamento de Escopo - ToDeAcordo',
  created_at: Date.now(),
  updated_at: Date.now(),
  source_platform: 'google-meet',
  participants: ['Alexandre (Cliente)', 'João (Agência)'],
  summary: 'Reunião para definição das entregas da Fase 10 e acertos financeiros do projeto.',
  agreements: [
    { text: 'A entrega será feita em duas etapas principais.', evidence_quote: 'vamos fatiar a entrega em duas' },
    { text: 'O escopo da Fase 11 fica para o mês seguinte.', evidence_quote: 'a gente joga a parte da Stripe pro mês que vem' }
  ],
  decisions: [
    { text: 'Aprovação do layout da Landing Page.', evidence_quote: 'tá aprovado, gostei muito daquele gradiente escuro' }
  ],
  obligations: [
    { text: 'Enviar as chaves de API da Vercel.', evidence_quote: 'preciso que você me mande o token da vercel ainda hoje' }
  ],
  deadlines: [
    { text: 'Envio das chaves de API até Sexta-feira às 18h.', evidence_quote: 'te mando até sexta, umas 18h tá na sua mão' }
  ],
  responsible_parties: [
    { text: 'Alexandre: Responsável por enviar as chaves.', evidence_quote: 'eu pego as chaves com meu time' }
  ],
  pending_items: [
    { text: 'Aprovar o orçamento dos anúncios.', evidence_quote: 'ainda falta ver quanto vamos botar no tráfego pago' }
  ],
  open_questions: [],
  disputed_points: [],
  transcript_segments: [],
  consensus_versions: [],
  current_version: 1,
  status: 'draft',
  audit_events: []
};

export const MOCK_CONSENSUS_CONSULTORIA: ConsensusObject = {
  id: 'demo-consultoria',
  meeting_id: 'demo-2',
  title: 'Kickoff: Consultoria Estratégica Q3',
  created_at: Date.now(),
  updated_at: Date.now(),
  source_platform: 'google-meet',
  participants: ['Roberto (Consultor)', 'Carolina (CEO)'],
  summary: 'Alinhamento inicial do escopo do projeto, aprovação de orçamento da Fase 1 e definição de cronograma preliminar.',
  
  traffic_light: 'yellow',
  confidence_score: 72,
  red_flags: ['talvez', 'depois a gente vê', 'depende'],
  missing_elements: [],
  next_step: 'Carolina aprovar formalmente o orçamento para liberação da equipe.',
  
  risk_map: {
    scope: 'low',
    deadline: 'high',
    budget: 'medium',
    responsibility: 'low'
  },

  agreements: [
    { id: 'agr_1', text: 'O diagnóstico será feito presencialmente na sede de SP.', evidence_quote: 'sim, a gente fecha de fazer in loco na Faria Lima' },
    { id: 'agr_2', text: 'O valor da Fase 1 está dentro do budget, mas depende de aprovação do conselho.', evidence_quote: 'o valor cabe, mas depende da assinatura do CFO' }
  ],
  decisions: [
    { id: 'dec_1', text: 'Início do projeto marcado para o dia 15.', evidence_quote: 'fechado, dia 15 a gente dá o kick-off oficial' }
  ],
  obligations: [
    { id: 'obl_1', text: 'Roberto: Enviar NDA assinado até amanhã.', evidence_quote: 'eu te mando o NDA amanhã cedo sem falta' },
    { id: 'obl_2', text: 'Carolina: Confirmar prazo final de entrega.', evidence_quote: 'talvez a gente consiga esticar o prazo, depois a gente vê' }
  ],
  pending_items: [],
  status: 'pending_review',
  transcript_segments: [],
  audit_events: [],
  current_version: 1,
  clarity_score: 65,
  risk_flags: [
    {
      type: 'Prazo Ambíguo',
      text: 'O prazo para envio dos dados foi citado como "semana que vem", o que pode gerar atrasos.',
      evidence_quote: 'Marcos: A gente te manda isso lá pra semana que vem, fica tranquilo.',
      severity: 'high'
    },
    {
      type: 'Escopo Aberto',
      text: 'A análise dos concorrentes foi prometida sem um limite de empresas.',
      evidence_quote: 'Ana: Sim, eu dou uma olhada nos concorrentes também.',
      severity: 'medium'
    }
  ],
  consensus_versions: [
    {
      version: 1,
      created_at: Date.now(),
      content: {}
    }
  ]
};

```

---

## Arquivo: src\todeacordo\src\lib\pdfGenerator.ts
```typescript
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { ConsensusObject, MeetingSession } from '../types';

export const generatePDF = (meeting: MeetingSession, consensus: ConsensusObject) => {
  const doc = new jsPDF();
  
  const dateObj = new Date(meeting.started_at);
  const dateStr = dateObj.toLocaleDateString('pt-BR');
  const timeStr = dateObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  
  // Cores da Marca
  const brandColor: [number, number, number] = [79, 70, 229]; // Indigo-600
  const textColor: [number, number, number] = [51, 65, 85]; // Slate-700
  const headingColor: [number, number, number] = [30, 41, 59]; // Slate-800

  // Cabeçalho
  doc.setFillColor(...brandColor);
  doc.rect(0, 0, 210, 20, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('ToDeAcordo', 14, 13);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Termo de Entendimento Mútuo', 200 - doc.getTextWidth('Termo de Entendimento Mútuo'), 13);

  let currentY = 35;

  // Título da Reunião
  doc.setTextColor(...headingColor);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  const title = meeting.title || 'Reunião sem título';
  doc.text(title, 14, currentY);
  currentY += 10;

  // Metadados
  doc.setTextColor(...textColor);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Data: ${dateStr} às ${timeStr}`, 14, currentY);
  currentY += 6;
  if (meeting.participants && meeting.participants.length > 0) {
    doc.text(`Participantes: ${meeting.participants.join(', ')}`, 14, currentY);
  }
  currentY += 15;

  // Função auxiliar para desenhar blocos
  const drawSection = (title: string, items: any[]) => {
    if (!items || items.length === 0) return;
    
    doc.setTextColor(...brandColor);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(title, 14, currentY);
    currentY += 4;
    
    doc.setDrawColor(226, 232, 240); // Slate-200
    doc.line(14, currentY, 196, currentY);
    currentY += 6;

    const formattedData = items.map(item => [item.text || item]);

    autoTable(doc, {
      startY: currentY,
      body: formattedData,
      theme: 'plain',
      styles: {
        fontSize: 10,
        textColor: textColor,
        cellPadding: 3,
        overflow: 'linebreak'
      },
      columnStyles: {
        0: { cellWidth: 180 }
      },
      didDrawCell: (data) => {
        // Desenhar um bullet point customizado
        if (data.column.index === 0 && data.cell.section === 'body') {
          doc.setFillColor(...brandColor);
          doc.circle(16, data.cell.y + 5, 1, 'F');
          data.cell.x += 4; // Indent text
        }
      },
      margin: { left: 14 }
    });

    currentY = (doc as any).lastAutoTable.finalY + 15;
  };

  drawSection('Pontos Acordados', consensus.agreements || []);
  drawSection('Decisões Tomadas', consensus.decisions || []);
  drawSection('Obrigações e Pendências', consensus.obligations || []);

  // Assinaturas
  if (meeting.participants && meeting.participants.length > 0 && currentY < 250) {
    currentY += 10;
    doc.setTextColor(...headingColor);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Declaração de Acordo', 14, currentY);
    currentY += 6;
    
    doc.setTextColor(...textColor);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Os participantes abaixo declaram estar de acordo com os termos extraídos desta sessão.', 14, currentY);
    currentY += 20;

    const participantCount = meeting.participants.length;
    
    meeting.participants.forEach((participant, index) => {
      // Check page break
      if (currentY > 270) {
        doc.addPage();
        currentY = 20;
      }
      
      const isRightCol = index % 2 !== 0;
      const xPos = isRightCol ? 110 : 14;
      
      doc.setDrawColor(...headingColor);
      doc.line(xPos, currentY, xPos + 75, currentY);
      doc.text(participant, xPos, currentY + 5);
      
      if (isRightCol || index === participantCount - 1) {
        currentY += 25;
      }
    });
  }

  // Rodapé
  const pageCount = (doc as any).internal.getNumberOfPages();
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184); // Slate-400
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(
      `Gerado por ToDeAcordo AI em ${new Date().toLocaleString('pt-BR')} - Página ${i} de ${pageCount}`,
      105,
      285,
      { align: 'center' }
    );
  }

  // Salvar
  const safeTitle = (meeting.title || 'acordo').replace(/[^a-z0-9]/gi, '_').toLowerCase();
  doc.save(`todeacordo_${safeTitle}_${dateStr.replace(/\//g, '')}.pdf`);
};

```

---

## Arquivo: src\todeacordo\src\lib\whatsappFormatter.ts
```typescript
import type { ConsensusObject, MeetingSession } from '../types';

export const formatForWhatsApp = (meeting: MeetingSession, consensus: ConsensusObject): string => {
  const dateObj = new Date(meeting.started_at);
  const dateStr = dateObj.toLocaleDateString('pt-BR');
  
  let text = `*🤝 Acordo de Reunião: ${meeting.title || 'Sem título'}*\n`;
  text += `📅 Data: ${dateStr}\n`;
  if (meeting.participants && meeting.participants.length > 0) {
    text += `👥 Participantes: ${meeting.participants.join(', ')}\n`;
  }
  text += `\n`;

  if (consensus.summary) {
    text += `*🎯 Resumo Executivo*\n`;
    text += `_${consensus.summary}_\n\n`;
  }

  if (consensus.agreements && consensus.agreements.length > 0) {
    text += `*✅ Pontos Acordados*\n`;
    consensus.agreements.forEach(item => {
      text += `• ${item.text || item}\n`;
    });
    text += `\n`;
  }

  if (consensus.decisions && consensus.decisions.length > 0) {
    text += `*🎯 Decisões Tomadas*\n`;
    consensus.decisions.forEach(item => {
      text += `• ${item.text || item}\n`;
    });
    text += `\n`;
  }

  if (consensus.obligations && consensus.obligations.length > 0) {
    text += `*⚠️ Obrigações e Pendências*\n`;
    consensus.obligations.forEach(item => {
      text += `• ${item.text || item}\n`;
    });
    text += `\n`;
  }

  // Link de Validação
  text += `*Assine e Valide este acordo:* ✅\n`;
  text += `👉 https://todeacordo.com.br/valida/${consensus.meeting_id}\n\n`;

  text += `_Gerado por ToDeAcordo AI ✨_\n`;
  return text;
};

export const generateWhatsAppLink = (text: string): string => {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
};

```

---

## Arquivo: src\todeacordo\src\platforms\google-meet\captionExtractor.ts
```typescript
import type { TranscriptSegment, LiveCaptionDraft } from '../../types';
import { MEET_SELECTORS } from './selectors';
import { MeetingDetector } from './detector';

export type CaptionEvent = 
  | { type: 'caption_draft_updated'; draft: LiveCaptionDraft }
  | { type: 'transcript_segment_committed'; segment: TranscriptSegment }
  | { type: 'transcript_segment_updated'; segment: TranscriptSegment };

export type OnCaptionEventCallback = (event: CaptionEvent) => void;

export function normalizeForDedupe(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[\n\r]+/g, ' ')
    .trim();
}

export function hashText(normalized: string): string {
  let hash = 0;
  if (normalized.length === 0) return '0';
  for (let i = 0; i < normalized.length; i++) {
    const char = normalized.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash.toString(36);
}

export function isMeetSystemText(text: string): boolean {
  const norm = normalizeForDedupe(text);
  const systemPhrases = [
    'esta participando', 'sua camera esta desativada', 'seu microfone esta desativado',
    'organizador encerrou', 'reuniao encerrada', 'idioma', 'language', 'portugues brasil',
    'tamanho da fonte', 'format_size', 'cor da fonte', 'abrir configuracoes',
    'configuracoes de legenda', 'captions', 'settings', 'circle', 'cc',
    'participante entrou', 'participante saiu', 'esta apresentando', 'apresentacao de',
    'compartilhando a tela', 'gostaria de falar', 'pediu para participar',
    'permitir', 'desativar som', 'ativar som', 'sair da chamada', 'detalhes da reuniao',
    'sua reuniao esta pronta', 'adicionar outras pessoas', 'ou compartilhe este link',
    'precisarao receber sua permissao', 'participando como', 'copiar link', 'content_copy', 'person_add'
  ];
  return systemPhrases.some(phrase => norm.includes(phrase));
}

export function cleanSpeakerFromText(speaker: string, text: string): string {
  let cleaned = text.trim();
  const lowerSpeaker = speaker.toLowerCase().trim();
  
  cleaned = cleaned.replace(/^(Você\s*)+/i, '').trim();
  
  if (lowerSpeaker && lowerSpeaker !== 'desconhecido') {
    const lowerText = cleaned.toLowerCase();
    if (lowerText.startsWith(lowerSpeaker + ' ')) {
      cleaned = cleaned.substring(speaker.length).trim();
    }
  }
  
  return cleaned;
}

export function isExpansionOfSameCaption(prevNorm: string, newNorm: string): boolean {
  if (!prevNorm || !newNorm) return false;
  if (newNorm.startsWith(prevNorm)) return true;
  if (newNorm.includes(prevNorm)) return true;
  return false; 
}

export function isExpansionOfCommittedSegment(committedNorm: string, newNorm: string): boolean {
  if (!committedNorm || !newNorm) return false;
  if (newNorm.startsWith(committedNorm)) return true;
  if (newNorm.includes(committedNorm)) return true;

  const commWords = committedNorm.split(' ').filter(w => w.length > 0);
  const newWords = newNorm.split(' ').filter(w => w.length > 0);
  
  if (commWords.length < 3) return false;
  
  // Verificar prefixo exato LCP
  let matchCount = 0;
  const minLen = Math.min(commWords.length, newWords.length);
  for (let i = 0; i < minLen; i++) {
    if (commWords[i] === newWords[i]) {
      matchCount++;
    } else {
      break;
    }
  }
  // Se bater 60% do prefixo perfeitamente, é expansão
  if (matchCount / commWords.length >= 0.60) return true;
  
  // Similaridade de overlap de palavras (bag of words)
  const overlap = commWords.filter(w => newWords.includes(w)).length;
  // Se 75% das palavras do commit original estiverem no novo texto
  if (commWords.length >= 4 && overlap / commWords.length >= 0.75) return true;

  return false;
}

export function extractNovelSuffix(previousText: string, newText: string): string {
  const pNorm = normalizeForDedupe(previousText);
  const nNorm = normalizeForDedupe(newText);
  
  if (!nNorm.includes(pNorm)) return newText; // Se não contiver, é tudo novo
  
  // Tentar encontrar o sufixo no texto original (case insensitive search via regex)
  // Escapar o texto anterior para regex
  const escapedPrev = previousText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escapedPrev, 'i');
  
  const match = newText.match(regex);
  if (match && match.index !== undefined) {
    const suffix = newText.slice(match.index + match[0].length).trim();
    if (suffix.startsWith('.') || suffix.startsWith(',')) {
      return suffix.substring(1).trim();
    }
    return suffix;
  }
  
  return newText;
}

function isInsideSettingsOrMenu(el: HTMLElement): boolean {
  let parent = el.parentElement;
  while (parent) {
    const role = parent.getAttribute('role');
    if (role === 'menu' || role === 'dialog' || role === 'tabpanel') {
      return true;
    }
    if (parent.classList.contains('xl4id') || parent.classList.contains('Q551Z') || parent.classList.contains('FK844c')) {
      return true;
    }
    parent = parent.parentElement;
  }
  return false;
}

export class CaptionExtractor {
  private observer: MutationObserver | null = null;
  private onEvent: OnCaptionEventCallback;
  private isCapturing: boolean = false;
  private meetingId: string;
  
  private activeDraft: LiveCaptionDraft | null = null;
  private commitTimer: ReturnType<typeof setTimeout> | null = null;
  private emittedHashes: Set<string> = new Set();
  
  // Rolling segment memory
  private recentCommittedSegments: TranscriptSegment[] = [];
  
  // Telemetria / Debug (Tarefa 11)
  public activeDraftText = '';
  public activeDraftSpeaker = '';
  public activeDraftUpdatedAt = 0;
  public committedSegmentsCount = 0;
  public draftUpdateCount = 0;
  public lastCommitReason = '';
  public lastDiscardReason = '';
  public lastCleanedText = '';
  public lastSpeakerCleaned = '';
  
  // Novos campos do Rolling Segment
  public lastCommittedText = '';
  public lastCommittedId = '';
  public lastSegmentUpdatedId = '';
  public updateReason = '';
  public isExpansionOfCommitted = false;
  public novelSuffix = '';
  public segmentUpdatedCount = 0;

  public currentCaptureAllowed = false;
  public captureBlockedReason = '';
  public lastSystemTextFiltered = '';
  public systemTextFilteredCount = 0;
  public lastMutationAt = 0;

  constructor(meetingId: string, onEvent: OnCaptionEventCallback) {
    this.meetingId = meetingId;
    this.onEvent = onEvent;
  }

  public getEmittedHashesCount(): number {
    return this.emittedHashes.size;
  }

  public start() {
    if (this.isCapturing) return;
    this.observer = new MutationObserver(this.handleMutations.bind(this));
    try {
      this.observer.observe(document.body, { childList: true, subtree: true, characterData: true });
      this.isCapturing = true;
    } catch (err: any) {
      console.error('[CaptionExtractor] Erro start:', err);
    }
  }

  public stop() {
    if (!this.isCapturing) return;
    this.forceCommitActiveDraft('stop-capture');
    this.emittedHashes.clear();
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.isCapturing = false;
  }

  public reconnect() {
    if (this.isCapturing && this.observer) {
      try {
        this.observer.disconnect();
        this.observer.observe(document.body, { childList: true, subtree: true, characterData: true });
        console.log('[CaptionExtractor] Observer reconectado com sucesso.');
      } catch (err) {
        console.error('[CaptionExtractor] Erro ao reconectar observer:', err);
      }
    }
  }

  private generateId(): string {
    return 'seg-' + Math.random().toString(36).substring(2, 11);
  }

  private handleMutations(_mutations: MutationRecord[]) {
    this.lastMutationAt = Date.now();
    let containerFound: HTMLElement | null = null;
    for (const selector of MEET_SELECTORS.CAPTIONS_CONTAINERS) {
      const el = document.querySelector(selector) as HTMLElement;
      if (el && !isInsideSettingsOrMenu(el)) {
        containerFound = el;
        break;
      }
    }

    const state = MeetingDetector.detectState();
    
    // Se o estado não for ACTIVE, MAS houver um container e tiver texto ou draft ativo, permitimos.
    const hasActiveText = containerFound && containerFound.textContent && containerFound.textContent.trim().length > 0;
    
    if (state !== 'ACTIVE' && !hasActiveText && !this.activeDraft) {
      this.forceCommitActiveDraft('meeting-inactive');
      this.currentCaptureAllowed = false;
      this.captureBlockedReason = `Reunião inativa: ${state}`;
      return;
    }

    this.currentCaptureAllowed = true;
    this.captureBlockedReason = 'Nenhum';

    if (!containerFound) return;

    const blocks = containerFound.children;
    if (blocks.length === 0) {
      this.processBlockElement(containerFound);
      return;
    }
    for (let i = 0; i < blocks.length; i++) {
      this.processBlockElement(blocks[i] as HTMLElement);
    }
  }

  private processBlockElement(blockEl: HTMLElement) {
    const rawText = (blockEl.innerText || '').trim();
    if (!rawText) return;

    let speaker = 'Desconhecido';
    for (const sel of MEET_SELECTORS.SPEAKER_NAMES) {
      const el = blockEl.querySelector(sel);
      if (el) {
        speaker = (el.textContent || '').trim();
        break;
      }
    }

    let text = '';
    const textSegments: string[] = [];
    for (const sel of MEET_SELECTORS.CAPTION_TEXTS) {
      const nodes = blockEl.querySelectorAll(sel);
      if (nodes.length > 0) {
        nodes.forEach(node => {
          const t = (node.textContent || '').trim();
          if (t) textSegments.push(t);
        });
        break;
      }
    }

    if (textSegments.length > 0) {
      text = textSegments.join(' ');
    } else {
      text = rawText; // fallback simple
    }

    if (isMeetSystemText(text)) {
      this.systemTextFilteredCount++;
      this.lastSystemTextFiltered = text;
      return;
    }
    
    // Limpar
    let cleanedText = cleanSpeakerFromText(speaker, text);
    this.lastCleanedText = cleanedText;
    this.lastSpeakerCleaned = speaker;

    if (cleanedText.length < 2) return;

    const normText = normalizeForDedupe(cleanedText);
    const now = Date.now();
    
    // 1. Tentar fazer Upsert (Rolling Segment)
    const recentCommits = [...this.recentCommittedSegments].reverse(); // Do mais recente para o mais antigo
    let updatedCommitted = false;
    
    for (const seg of recentCommits) {
      if (now - seg.captured_at > 20000) continue; // Ignorar se muito antigo (20s)
      
      const isSameSpeaker = seg.speaker === speaker || seg.speaker === 'Desconhecido';
      
      if (isSameSpeaker && isExpansionOfCommittedSegment(seg.normalized_text || '', normText)) {
        // Encontramos um match! Vamos atualizar o segmento existente
        
        // Se a expansão for apenas o que o draft já tem, evitamos duplicar no DB excessivamente, 
        // mas devemos emitir o update.
        seg.text = cleanedText;
        seg.normalized_text = normText;
        seg.normalized_hash = hashText(normText);
        seg.captured_at = now;
        seg.updated_count = (seg.updated_count || 0) + 1;
        
        this.emittedHashes.add(seg.normalized_hash);
        
        this.lastSegmentUpdatedId = seg.id;
        this.updateReason = 'expansion-of-committed';
        this.isExpansionOfCommitted = true;
        this.segmentUpdatedCount++;
        
        // Limpar o draft atual, já que a nova fala foi engolida pelo commit anterior
        if (this.activeDraft) {
          this.activeDraft = null;
          this.activeDraftText = '';
          this.activeDraftSpeaker = '';
          this.emitDraftUpdated();
        }
        
        // Reiniciar timer para não comitar nada falso
        this.resetCommitTimer();
        
        this.onEvent({ type: 'transcript_segment_updated', segment: seg });
        updatedCommitted = true;
        break;
      }
    }
    
    if (updatedCommitted) {
      return; // Já resolvemos via Upsert
    }
    
    this.isExpansionOfCommitted = false;
    
    // 2. Se não foi update, tentamos atualizar o Draft ativo
    if (this.activeDraft) {
      const isSameSpeaker = this.activeDraft.speaker === speaker;
      const isExpansion = isExpansionOfSameCaption(this.activeDraft.normalized_text, normText);
      
      if (isSameSpeaker && (isExpansion || normText.includes(this.activeDraft.normalized_text))) {
        // Atualiza o draft
        this.activeDraft.text = cleanedText;
        this.activeDraft.normalized_text = normText;
        this.activeDraft.updated_at = now;
        
        this.activeDraftText = cleanedText;
        this.activeDraftSpeaker = speaker;
        this.activeDraftUpdatedAt = now;
        this.draftUpdateCount++;
        
        this.emitDraftUpdated();
        this.resetCommitTimer();
      } else {
        // Speaker trocou ou nova frase clara - Commit do draft anterior
        this.forceCommitActiveDraft('speaker-change-or-new-caption');
        
        // Tentar extrair sufixo se a nova frase tiver engolido a antiga
        let suffix = cleanedText;
        if (isSameSpeaker && this.lastCommittedText && normText.includes(normalizeForDedupe(this.lastCommittedText))) {
           suffix = extractNovelSuffix(this.lastCommittedText, cleanedText);
           this.novelSuffix = suffix;
        }
        
        if (suffix.length > 2) {
          this.startNewDraft(speaker, suffix, normalizeForDedupe(suffix), now);
        }
      }
    } else {
      // Nenhum draft ativo, cria um
      let suffix = cleanedText;
      const last = this.recentCommittedSegments.length > 0 ? this.recentCommittedSegments[this.recentCommittedSegments.length - 1] : null;
      if (last && (last.speaker === speaker || last.speaker === 'Desconhecido') && normText.includes(last.normalized_text || '')) {
         suffix = extractNovelSuffix(last.text, cleanedText);
         this.novelSuffix = suffix;
      }
      
      if (suffix.length > 2) {
        this.startNewDraft(speaker, suffix, normalizeForDedupe(suffix), now);
      }
    }
  }

  private startNewDraft(speaker: string, text: string, normText: string, now: number) {
    this.activeDraft = {
      id: this.generateId(),
      speaker,
      text,
      normalized_text: normText,
      started_at: now,
      updated_at: now,
      source_node_signature: '',
      status: 'live'
    };
    this.activeDraftText = text;
    this.activeDraftSpeaker = speaker;
    this.activeDraftUpdatedAt = now;
    
    this.emitDraftUpdated();
    this.resetCommitTimer();
  }

  private resetCommitTimer() {
    if (this.commitTimer) clearTimeout(this.commitTimer);
    // Regra de Commit: 3 segundos inativo (Tarefa 6)
    this.commitTimer = setTimeout(() => {
      this.forceCommitActiveDraft('timeout-3s');
    }, 3000);
  }

  private forceCommitActiveDraft(reason: string) {
    if (this.commitTimer) {
      clearTimeout(this.commitTimer);
      this.commitTimer = null;
    }
    
    if (!this.activeDraft) return;
    
    const draft = this.activeDraft;
    this.activeDraft = null;
    this.activeDraftText = '';
    this.activeDraftSpeaker = '';

    const hash = hashText(draft.normalized_text);
    
    if (draft.normalized_text.length < 2) {
      this.lastDiscardReason = 'too-short';
      return;
    }
    
    if (this.emittedHashes.has(hash)) {
      this.lastDiscardReason = 'already-committed';
      return;
    }
    
    this.emittedHashes.add(hash);
    this.lastCommitReason = reason;
    this.committedSegmentsCount++;

    const segment: TranscriptSegment = {
      id: draft.id,
      meeting_id: this.meetingId,
      timestamp: new Date(draft.started_at).toISOString(),
      speaker: draft.speaker || 'Desconhecido',
      text: draft.text,
      source: 'google-meet',
      captured_at: draft.updated_at,
      normalized_text: draft.normalized_text,
      normalized_hash: hash,
      dedupe_reason: reason,
      updated_count: 0
    };
    
    this.lastCommittedText = segment.text;
    this.lastCommittedId = segment.id;
    
    this.recentCommittedSegments.push(segment);
    if (this.recentCommittedSegments.length > 10) {
      this.recentCommittedSegments.shift();
    }

    this.onEvent({ type: 'transcript_segment_committed', segment });
  }

  private emitDraftUpdated() {
    if (this.activeDraft) {
      this.onEvent({ type: 'caption_draft_updated', draft: this.activeDraft });
    }
  }
}

```

---

## Arquivo: src\todeacordo\src\platforms\google-meet\detector.ts
```typescript
import { MEET_SELECTORS } from './selectors';

export type MeetingState = 'INACTIVE' | 'LOBBY' | 'ACTIVE';

export class MeetingDetector {
  /**
   * Identifica se a aba atual está em uma reunião ativa, lobby ou se não é do Meet.
   */
  static detectState(): MeetingState {
    const path = window.location.pathname;

    // Google Meet utiliza links no formato /abc-defg-hij ou slugs de apelido.
    // Se o pathname não começar com barra ou for muito curto, não é uma sala.
    if (!path.startsWith('/') || path.length < 5 || path === '/signup' || path === '/terms') {
      return 'INACTIVE';
    }

    // 1. Procura por qualquer botão de desligar/sair da chamada
    for (const selector of MEET_SELECTORS.LEAVE_CALL_BUTTONS) {
      if (document.querySelector(selector)) {
        return 'ACTIVE';
      }
    }

    // 2. Procura por outros indicadores fortes de chamada ativa (Chat, Participantes, Toolbar etc.)
    for (const selector of MEET_SELECTORS.ACTIVE_INDICATORS) {
      if (document.querySelector(selector)) {
        return 'ACTIVE';
      }
    }

    // 3. Se existe um container de legendas, estamos em uma chamada ativa
    for (const selector of MEET_SELECTORS.CAPTIONS_CONTAINERS) {
      if (document.querySelector(selector)) {
        return 'ACTIVE';
      }
    }

    // Se está em uma URL de sala, mas nenhum controle de reunião ativa está visível, assume Lobby
    return 'LOBBY';
  }

  /**
   * Verifica se as legendas estão ligadas usando seletores de botões ou presença de texto.
   */
  static areCaptionsEnabled(): boolean {
    // 1. Checa botões de toggle
    for (const selector of MEET_SELECTORS.CAPTIONS_TOGGLE_BUTTONS) {
      const btn = document.querySelector(selector);
      if (btn) {
        const isPressed = btn.getAttribute('aria-pressed') === 'true';
        if (isPressed) return true;

        if (btn.classList.contains('H2a7Sec') || btn.classList.contains('l47oze')) {
          return true;
        }
        
        // Verifica se tem classe indicando ativo no Google Meet
        if (btn.classList.contains('VfPpkd-Bz112c-LgbsSe-OWXEXe-INsHu')) {
          return true;
        }
      }
    }

    // 2. Heurística secundária: Verifica presença de containers VISÍVEIS ou com texto
    for (const selector of MEET_SELECTORS.CAPTIONS_CONTAINERS) {
      const container = document.querySelector(selector) as HTMLElement;
      if (container) {
        // Se tem texto, definitivamente está rodando
        if (container.textContent && container.textContent.trim().length > 0) {
          return true;
        }
        
        // Verifica se está visível no DOM
        const style = window.getComputedStyle(container);
        if (style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0') {
          // No meet, o container muitas vezes fica na tela invisível. Se está visível e tem dimensões, está ativo.
          if (container.getBoundingClientRect().height > 0) {
            return true;
          }
        }
      }
    }
    
    // 3. Heurística de fallback: procura spans de texto de fala diretamente
    for (const selector of MEET_SELECTORS.CAPTION_TEXTS) {
      if (document.querySelector(selector)) {
        return true;
      }
    }

    return false;
  }
}

```

---

## Arquivo: src\todeacordo\src\platforms\google-meet\participantExtractor.ts
```typescript
import { MEET_SELECTORS } from './selectors';

export class ParticipantExtractor {
  /**
   * Extração básica de participantes baseada em aria-labels comuns.
   * Em futuras fases será aprimorado com contagem e nomes reais.
   */
  static getParticipantsCount(): number | null {
    let btn: Element | null = null;
    for (const selector of MEET_SELECTORS.PARTICIPANTS_BUTTONS) {
      btn = document.querySelector(selector);
      if (btn) break;
    }
    if (!btn) return null;
    
    // Tenta extrair o número de participantes do texto ou aria-label (ex: "Participantes: 3")
    const label = btn.getAttribute('aria-label') || btn.textContent || '';
    const match = label.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }
}

```

---

## Arquivo: src\todeacordo\src\platforms\google-meet\probe.ts
```typescript
export interface ProbeResult {
  visibleTextNodesCount: number;
  ariaLiveCount: number;
  roleStatusLogCount: number;
  possibleCaptionContainersCount: number;
  lastRawText: string;
  candidateSelector: string;
  isVisible: boolean;
  className: string;
  tagName: string;
}

export class CaptionProbe {
  /**
   * Realiza uma busca manual e instantânea no DOM buscando nós que
   * se comportam ou têm atributos de container de legendas.
   */
  static scan(): ProbeResult {
    console.log('[ToDeAcordo][CaptionProbe] Iniciando varredura manual do DOM.');
    
    let visibleTextNodesCount = 0;
    let ariaLiveCount = 0;
    let roleStatusLogCount = 0;
    let possibleCaptionContainersCount = 0;
    let lastRawText = '';
    let candidateSelector = 'Nenhum';
    let isVisible = false;
    let className = '';
    let tagName = '';

    const allElements = document.querySelectorAll('*');
    const candidates: HTMLElement[] = [];

    allElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      
      // 1. Verificar aria-live
      const ariaLive = htmlEl.getAttribute('aria-live');
      if (ariaLive && (ariaLive === 'polite' || ariaLive === 'assertive')) {
        ariaLiveCount++;
      }

      // 2. Verificar role
      const role = htmlEl.getAttribute('role');
      if (role && (role === 'status' || role === 'log')) {
        roleStatusLogCount++;
      }

      // 3. Contagem de nós com texto visível
      const text = (htmlEl.innerText || '').trim();
      let isElVisible = false;
      try {
        const style = window.getComputedStyle(htmlEl);
        isElVisible = style.display !== 'none' && style.visibility !== 'hidden' && htmlEl.offsetWidth > 0;
      } catch (e) {
        // Ignora erros de elementos que não suportam getComputedStyle (ex: SVG ou shadow-root)
      }

      if (isElVisible && text.length > 0) {
        visibleTextNodesCount++;
      }

      // 4. Heurística de container de legenda
      let matchesHeuristic = false;
      
      if (
        htmlEl.classList.contains('a4cQT') || 
        htmlEl.classList.contains('VbKzg') || 
        htmlEl.getAttribute('jsname') === 'tX9u1b' ||
        htmlEl.classList.contains('KjMtvf') ||
        htmlEl.classList.contains('i3PoEd') ||
        htmlEl.classList.contains('X49Xn')
      ) {
        matchesHeuristic = true;
      }

      // Se tem aria-live e está visível, e tem texto relevante
      if (ariaLive && isElVisible && text.length > 0 && htmlEl.tagName !== 'BODY' && htmlEl.tagName !== 'HTML') {
        matchesHeuristic = true;
      }

      if (matchesHeuristic) {
        possibleCaptionContainersCount++;
        candidates.push(htmlEl);
      }
    });

    // Se achou candidatos, escolhe o mais provável que contém texto
    if (candidates.length > 0) {
      const textCandidates = candidates.filter(el => el.innerText && el.innerText.trim().length > 0);
      const target = textCandidates[textCandidates.length - 1] || candidates[candidates.length - 1];
      
      if (target) {
        lastRawText = (target.innerText || '').trim();
        isVisible = true;
        className = target.className;
        tagName = target.tagName;
        
        // Determina seletor simplificado
        if (target.id) {
          candidateSelector = `#${target.id}`;
        } else {
          const jsname = target.getAttribute('jsname');
          if (jsname) {
            candidateSelector = `[jsname="${jsname}"]`;
          } else {
            candidateSelector = target.className.split(' ').filter(Boolean).map(c => `.${c}`).join('');
          }
        }
      }
    }

    console.log('[ToDeAcordo][CaptionProbe] Varredura concluída.', {
      visibleTextNodesCount,
      ariaLiveCount,
      roleStatusLogCount,
      possibleCaptionContainersCount,
      lastRawText,
      candidateSelector
    });

    return {
      visibleTextNodesCount,
      ariaLiveCount,
      roleStatusLogCount,
      possibleCaptionContainersCount,
      lastRawText,
      candidateSelector,
      isVisible,
      className,
      tagName
    };
  }
}

```

---

## Arquivo: src\todeacordo\src\platforms\google-meet\selectors.ts
```typescript
/**
 * Seletores do Google Meet com múltiplos fallbacks.
 */
export const MEET_SELECTORS = {
  // Botões de controle de saída
  LEAVE_CALL_BUTTONS: [
    'button[aria-label*="Sair da chamada"]',
    'button[aria-label*="Leave call"]',
    'button[data-tooltip*="Sair da chamada"]',
    'button[data-tooltip*="Leave call"]',
    '[jsname="Ry41Wb"]',
    '[jscontroller="Ry41Wb"]'
  ],

  // Outros indicadores de reunião ativa
  ACTIVE_INDICATORS: [
    'button[aria-label*="Chat com todos" i]',
    'button[aria-label*="Chat with everyone" i]',
    'button[aria-label*="Mostrar todos" i]',
    'button[aria-label*="Show everyone" i]',
    '[jscontroller="x37nNd"]', // Toolbar inferior inteira
    '[aria-label*="Atividades" i]',
    '[aria-label*="Activities" i]'
  ],

  // Botão de alternar legendas (CC)
  CAPTIONS_TOGGLE_BUTTONS: [
    'button[aria-label*="legenda" i]',
    'button[aria-label*="caption" i]',
    'button[data-tooltip*="legenda" i]',
    'button[data-tooltip*="caption" i]',
    '[jscontroller="r49Sxf"]',
    '[jsname="r49Sxf"]'
  ],

  // Containers principais de legendas
  CAPTIONS_CONTAINERS: [
    '.a4cQT',
    '.VbKzg',
    '[jsname="tX9u1b"]',
    '.KjMtvf',
    '.i3PoEd',
    '.X49Xn'
  ],

  // Elementos internos de fala
  CAPTION_TEXTS: [
    '.CNusmb',
    'span.zs7s8d',
    '.T2hybc',
    '.waN44b'
  ],

  // Elementos contendo o falante
  SPEAKER_NAMES: [
    '.jO7h3c',
    '.zs7s8d',
    '.xt4G2',
    '.yt5B2'
  ],

  // Botões de lista de participantes
  PARTICIPANTS_BUTTONS: [
    'button[aria-label*="Participantes"]',
    'button[aria-label*="Everyone"]',
    'button[aria-label*="participantes"]'
  ]
};

```

---

## Arquivo: src\todeacordo\src\sidepanel\index.tsx
```typescript
import { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import type { TranscriptSegment, ConsensusObject, MeetingSession, LiveCaptionDraft } from '../types';
import { generateConsensusFromTranscript } from '../ai/consensusExtractor';
import { saveMeeting, getActiveMeeting } from '../storage/meetingStorage';
import { saveTranscriptSegment, getTranscriptForMeeting } from '../storage/transcriptStorage';
import { saveConsensus, getConsensusForMeeting } from '../storage/consensusStorage';
import { logEvent } from '../audit/auditLogger';
import { getUsage, incrementUsage } from '../storage/usageStorage';


interface ProbeResult {
  visibleTextNodesCount: number;
  ariaLiveCount: number;
  roleStatusLogCount: number;
  possibleCaptionContainersCount: number;
  lastRawText: string;
  candidateSelector: string;
  isVisible: boolean;
  className: string;
  tagName: string;
}

interface TelemetryData {
  activeTabUrl: string;
  contentScriptConnected: boolean;
  meetingState: string;
  captionsEnabled: boolean;
  mutationObserverActive: boolean;
  observedRoot: string;
  lastMutationAt: number;
  // Telemetria refatorada
  activeDraftText: string;
  activeDraftSpeaker: string;
  activeDraftUpdatedAt: number;
  committedSegmentsCount: number;
  draftUpdateCount: number;
  lastCommitReason: string;
  lastDiscardReason: string;
  lastCleanedText: string;
  // Rolling Segment
  lastCommittedText: string;
  lastCommittedId: string;
  lastSegmentUpdatedId: string;
  updateReason: string;
  isExpansionOfCommitted: boolean;
  novelSuffix: string;
  segmentUpdatedCount: number;

  emittedHashesCount: number;
  systemTextFilteredCount: number;
  lastSystemTextFiltered: string;
  currentCaptureAllowed: boolean;
  captureBlockedReason: string;
}

const SidePanel = () => {
  const [meetingState, setMeetingState] = useState<'INACTIVE' | 'LOBBY' | 'ACTIVE' | 'UNKNOWN'>('UNKNOWN');
  const [captionsEnabled, setCaptionsEnabled] = useState<boolean>(false);
  const [isCapturing, setIsCapturing] = useState<boolean>(false);
  const [segments, setSegments] = useState<TranscriptSegment[]>([]);
  const [liveDraft, setLiveDraft] = useState<LiveCaptionDraft | null>(null);
  // Debug & Probe
  const [debugMode, setDebugMode] = useState<boolean>(false);
  const [telemetry, setTelemetry] = useState<TelemetryData | null>(null);
  const [probeResult, setProbeResult] = useState<ProbeResult | null>(null);
  const [probeError, setProbeError] = useState<string>('');
  
  // Paywall State
  const [usage, setUsage] = useState({ count: 0, limit: 3 });

  const openPaywall = (feature: string) => {
    const url = `https://todeacordo.com.br/app?showPaywall=true&feature=${encodeURIComponent(feature)}`;
    chrome.tabs.create({ url });
  };
  
  const [activeMeeting, setActiveMeeting] = useState<MeetingSession | null>(null);
  const [consensus, setConsensus] = useState<Partial<ConsensusObject> | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationError, setGenerationError] = useState<string>('');
  
  const [isEditingConsensus, setIsEditingConsensus] = useState<boolean>(false);
  const [editedConsensus, setEditedConsensus] = useState<Partial<ConsensusObject> | null>(null);
  
  const endOfListRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    endOfListRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [segments]);

  // Atualiza telemetria a cada 1.5s
  useEffect(() => {
    if (!debugMode) return;
    
    const updateTelemetry = () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]?.id) {
          chrome.tabs.sendMessage(tabs[0].id, { type: 'GET_STATUS' }, (response: any) => {
            if (chrome.runtime.lastError) {
              setTelemetry(prev => ({
                ...(prev || {
                  activeTabUrl: '',
                  contentScriptConnected: false,
                  meetingState: 'UNKNOWN',
                  captionsEnabled: false,
                  mutationObserverActive: false,
                  observedRoot: '',
                  lastMutationAt: 0,
                  activeDraftText: '',
                  activeDraftSpeaker: '',
                  activeDraftUpdatedAt: 0,
                  committedSegmentsCount: 0,
                  draftUpdateCount: 0,
                  lastCommitReason: '',
                  lastDiscardReason: '',
                  lastCleanedText: '',
                  lastSpeakerCleaned: '',
                  lastCommittedText: '',
                  lastCommittedId: '',
                  lastSegmentUpdatedId: '',
                  updateReason: '',
                  isExpansionOfCommitted: false,
                  novelSuffix: '',
                  segmentUpdatedCount: 0,
                  emittedHashesCount: 0,
                  systemTextFilteredCount: 0,
                  lastSystemTextFiltered: '',
                  currentCaptureAllowed: false,
                  captureBlockedReason: 'Sem Conexão'
                }),
                contentScriptConnected: false
              }));
              return;
            }
            if (response) {
              setTelemetry(response);
            }
          });
        }
      });
    };

    updateTelemetry();
    const interval = setInterval(updateTelemetry, 1500);
    return () => clearInterval(interval);
  }, [debugMode]);


  useEffect(() => {
    const loadMeeting = async () => {
      const meeting = await getActiveMeeting();
      if (meeting) {
        if (meeting.status === 'active') {
          setActiveMeeting(meeting);
          
          if (meeting.transcript_segment_ids.length > 0) {
            const allSegments = await getTranscriptForMeeting(meeting.id);
            setSegments(allSegments);
          }

          if (meeting.consensus_object_id) {
            const consObj = await getConsensusForMeeting(meeting.id);
            if (consObj) setConsensus(consObj);
          }
        }
      }
      
      const usageData = await getUsage();
      setUsage(usageData);
      await logEvent(meeting?.id || 'manual', 'sidepanel_restored');
    };
    loadMeeting();
    const ensureMeeting = async (state: string, contentScriptMeetingId?: string) => {
      let meeting = await getActiveMeeting();
      
      // If we have an active meeting but its ID is different from what the content script reports,
      // it means it's a stuck meeting from a previous session. We must end it.
      if (meeting && contentScriptMeetingId && meeting.id !== contentScriptMeetingId) {
          meeting.status = 'ended';
          meeting.ended_at = Date.now();
          meeting.is_active = false;
          await saveMeeting(meeting);
          meeting = undefined;
          
          // Limpar a interface imediatamente se a reunião antiga encerrou
          setActiveMeeting(null);
          setSegments([]);
          setConsensus(null);
      }

      if (state !== 'ACTIVE') return;

      if (!meeting) {
        // Create new meeting
        const newId = contentScriptMeetingId || crypto.randomUUID();
        meeting = {
          id: newId,
          platform: 'google-meet',
          source_platform: 'google-meet',
          title: 'Reunião do Google Meet',
          started_at: Date.now(),
          status: 'active',
          is_active: true,
          participants: [],
          transcript_segment_ids: [],
          created_at: Date.now(),
          updated_at: Date.now(),
        };
        await saveMeeting(meeting);
        setActiveMeeting(meeting);
        setSegments([]); // Clear old UI segments!
        setConsensus(null);
        await logEvent(meeting.id, 'sidepanel_opened');
        await logEvent(meeting.id, 'meeting_detected');
      } else {
        setActiveMeeting(meeting);
      }
    };

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'GET_STATUS' }, (response: any) => {
          if (chrome.runtime.lastError) return;
          if (response) {
            setMeetingState(response.meetingState);
            setCaptionsEnabled(response.captionsEnabled);
            setIsCapturing(response.mutationObserverActive);
            ensureMeeting(response.meetingState, response.meetingId);
          }
        });
      }
    });

    const listener = (message: any) => {
      if (message.type === 'MEET_STATUS_UPDATE') {
        setMeetingState(message.state);
        setCaptionsEnabled(message.captionsEnabled);
        setIsCapturing(message.isCapturing);
        ensureMeeting(message.state, message.meetingId);

        if (message.state === 'UNKNOWN' || message.state === 'INACTIVE') {
          getActiveMeeting().then(async (meeting) => {
             if (meeting && meeting.status === 'active') {
               meeting.status = 'ended';
               meeting.ended_at = Date.now();
               meeting.is_active = false;
               await saveMeeting(meeting);
               await logEvent(meeting.id, 'meeting_ended');
               setActiveMeeting(null);
               setSegments([]);
               setConsensus(null);
             }
          });
        }
      } else if (message.type === 'CAPTURE_AUTO_STOPPED') {
        setIsCapturing(false);
        console.log(`[ToDeAcordo][SidePanel] Captura interrompida automaticamente: ${message.reason}`);
        getActiveMeeting().then(m => m && logEvent(m.id, 'capture_stopped'));
      } else if (message.type === 'caption_draft_updated') {
        setLiveDraft(message.draft);
      } else if (message.type === 'transcript_segment_committed') {
        const seg = message.segment;
        setLiveDraft(null);
        
        setSegments((prev) => {
          const isDuplicate = prev.some(s => 
            s.id === seg.id || 
            (seg.normalized_hash && s.normalized_hash === seg.normalized_hash)
          );
          if (isDuplicate) return prev;
          
          getActiveMeeting().then(async (meeting) => {
            if (meeting) {
              seg.meeting_id = meeting.id;
              await saveTranscriptSegment(seg);
              if (!meeting.transcript_segment_ids.includes(seg.id)) {
                meeting.transcript_segment_ids.push(seg.id);
                meeting.updated_at = Date.now();
                await saveMeeting(meeting);
              }
              await logEvent(meeting.id, 'transcript_segment_captured');
            }
          });

          return [...prev, seg];
        });
      } else if (message.type === 'transcript_segment_updated') {
        const seg = message.segment;
        
        setSegments((prev) => {
          const index = prev.findIndex(s => s.id === seg.id);
          if (index === -1) return prev;
          
          const newSegments = [...prev];
          newSegments[index] = seg;
          
          getActiveMeeting().then(async (meeting) => {
            if (meeting) {
              await saveTranscriptSegment(seg);
              meeting.updated_at = Date.now();
              await saveMeeting(meeting);
            }
          });

          return newSegments;
        });
      }
    };

    chrome.runtime.onMessage.addListener(listener);
    return () => chrome.runtime.onMessage.removeListener(listener);
  }, []);

  const handleCaptureScreenshot = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.windowId) {
        chrome.tabs.captureVisibleTab(activeTab.windowId, { format: 'jpeg', quality: 80 }, (dataUrl) => {
          if (chrome.runtime.lastError) {
            console.error('Erro ao capturar tela:', chrome.runtime.lastError);
            alert('Não foi possível capturar a tela.');
            return;
          }
          if (dataUrl && consensus) {
            const updated = { ...consensus, attachments: [...(consensus.attachments || []), dataUrl] };
            setConsensus(updated as ConsensusObject);
            if (activeMeeting) {
              saveConsensus(updated as ConsensusObject).catch(console.error);
            }
          }
        });
      }
    });
  };

  const handleRunProbe = () => {
    setProbeError('');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'RUN_PROBE' }, (response: any) => {
          if (chrome.runtime.lastError) {
            setProbeError('Não foi possível comunicar.');
            return;
          }
          if (response?.status === 'OK') {
            setProbeResult(response.result);
          }
        });
      }
    });
  };

  const handleScanNow = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, { type: 'SCAN_NOW' }, (response: any) => {
          if (chrome.runtime.lastError) {
            alert('Erro de comunicação.');
            return;
          }
          if (response?.status === 'EMPTY') {
            alert('Nenhuma legenda detectada no DOM.');
          }
        });
      }
    });
  };

  const handleGenerateUnderstanding = async () => {
    if (segments.length === 0) {
      setGenerationError('Nenhuma fala capturada ainda. Ligue as legendas do Google Meet para começar.');
      setIsGenerating(false);
      return;
    }
    
    setGenerationError('');
    setIsGenerating(true);
    if (activeMeeting) logEvent(activeMeeting.id, 'consensus_generation_started');
    
    try {
      const result = await generateConsensusFromTranscript({
        meetingId: activeMeeting?.id || 'manual',
        sourcePlatform: activeMeeting?.source_platform || 'google-meet',
        participants: activeMeeting?.participants || [],
        segments: segments
      });
      
      const consensusObj: ConsensusObject = {
        id: result.id || crypto.randomUUID(),
        meeting_id: result.meeting_id || activeMeeting?.id || 'manual',
        title: result.title || activeMeeting?.title || 'Reunião sem título',
        created_at: result.created_at || Date.now(),
        transcript_segments: result.transcript_segments || segments,
        ...result,
        source_platform: activeMeeting?.source_platform || 'google-meet',
        updated_at: Date.now(),
        participants: activeMeeting?.participants || [],
        consensus_versions: [],
        current_version: 1,
        status: 'draft',
        audit_events: []
      };
      
      if (activeMeeting) {
        await saveConsensus(consensusObj);
        activeMeeting.consensus_object_id = consensusObj.id;
        activeMeeting.updated_at = Date.now();
        await saveMeeting(activeMeeting);
        await logEvent(activeMeeting.id, 'consensus_generated');
      }
      setConsensus(consensusObj);
      const newUsage = await incrementUsage();
      setUsage(newUsage);
    } catch (err: any) {
      if (err.message === 'Failed to fetch' || err.message.includes('fetch')) {
        setGenerationError('Backend local não encontrado.');
      } else {
        setGenerationError('Erro ao gerar entendimento: ' + err.message);
      }
      if (activeMeeting) logEvent(activeMeeting.id, 'consensus_generation_error', { error: err.message });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExportMarkdown = () => {
    if (!consensus) return;
    let md = `# Entendimento da Reunião\n\n`;
    if (consensus.summary) md += `## Resumo\n${consensus.summary}\n\n`;
    
    const addList = (title: string, items: any[] | undefined) => {
      if (items && items.length > 0) {
        md += `## ${title}\n`;
        items.forEach(i => md += `- ${typeof i === 'string' ? i : i.text}\n`);
        md += '\n';
      }
    };
    
    addList('Combinados', consensus.agreements);
    addList('Decisões', consensus.decisions);
    addList('Obrigações', consensus.obligations);
    addList('Responsáveis', consensus.responsible_parties);
    addList('Prazos', consensus.deadlines);
    addList('Pendências', consensus.pending_items);
    addList('Dúvidas Abertas', consensus.open_questions);
    addList('Pontos sem Consenso', consensus.disputed_points);
    
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Entendimento_da_Reuniao.md';
    a.click();
    URL.revokeObjectURL(url);
    if (activeMeeting) logEvent(activeMeeting.id, 'markdown_exported');
  };


  const startEditing = () => {
    setEditedConsensus(JSON.parse(JSON.stringify(consensus)));
    setIsEditingConsensus(true);
  };

  const handleEditItem = (key: keyof ConsensusObject, index: number, value: string) => {
    if (!editedConsensus) return;
    const newItems = [...(editedConsensus[key] as any[])];
    newItems[index] = { ...newItems[index], text: value };
    setEditedConsensus({ ...editedConsensus, [key]: newItems });
  };

  const handleRemoveItem = (key: keyof ConsensusObject, index: number) => {
    if (!editedConsensus) return;
    const newItems = [...(editedConsensus[key] as any[])];
    newItems.splice(index, 1);
    setEditedConsensus({ ...editedConsensus, [key]: newItems });
  };

  const saveEditedConsensus = async () => {
    if (!editedConsensus || !activeMeeting) return;
    const finalConsensus = { ...editedConsensus, status: 'consensus_obtained' as any, updated_at: Date.now() };
    await saveConsensus(finalConsensus as ConsensusObject);
    setConsensus(finalConsensus);
    setIsEditingConsensus(false);
    await logEvent(activeMeeting.id, 'consensus_edited_and_obtained');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 flex flex-col">
      <header className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-blue-600">ToDeAcordo</h1>
          <p className="text-xs text-slate-500">MVP 1 - Google Meet Adapter</p>
        </div>
        <button 
          onClick={() => setDebugMode(!debugMode)}
          className={`text-xs px-2 py-1 rounded transition-colors ${debugMode ? 'bg-blue-100 text-blue-800' : 'text-slate-400 hover:text-slate-600 underline'}`}
        >
          {debugMode ? 'Fechar Debug' : 'Debug'}
        </button>
      </header>

      <div className="mb-4">
        {meetingState === 'INACTIVE' && (
          <div className="bg-slate-200 text-slate-700 p-3 rounded-md text-sm text-center">
            Abra o Google Meet para iniciar.
          </div>
        )}
        
        {meetingState === 'LOBBY' && (
          <div className="bg-yellow-100 text-yellow-800 p-3 rounded-md text-sm text-center">
            Aguardando você entrar na sala do Meet.
          </div>
        )}

        {meetingState === 'ACTIVE' && !captionsEnabled && (
          <div className="bg-red-100 border border-red-200 text-red-800 p-3 rounded-md text-sm text-center font-medium shadow-sm">
            🚨 Ative as legendas do Google Meet (CC) para o ToDeAcordo capturar a conversa.
          </div>
        )}

        {meetingState === 'ACTIVE' && captionsEnabled && (
          <div className="bg-blue-50 border border-blue-100 text-blue-800 p-2.5 rounded-md text-[11px] leading-relaxed shadow-sm">
            💡 <strong>Legendas do Meet ativas!</strong> Se a transcrição capturar palavras erradas, certifique-se de que o idioma da legenda no Meet está configurado para <strong>Português</strong>.
          </div>
        )}
      </div>

      <main className="flex-1 flex flex-col gap-4 overflow-hidden">
        {consensus ? (
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-slate-200 p-4 overflow-y-auto flex flex-col gap-4 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <div className="flex flex-col">
                <h2 className="text-lg font-bold text-slate-800">Entendimento da Reunião</h2>
                <span className="text-[10px] font-medium text-slate-400">Plano Free: {usage.count}/{usage.limit} Acordos neste mês</span>
              </div>
              <div className="flex gap-2">
              <button 
                onClick={() => {
                  if (usage.count >= usage.limit) {
                    openPaywall('Novos Acordos (Limite Excedido)');
                  } else {
                    handleGenerateUnderstanding();
                  }
                }}
                disabled={isGenerating || segments.length === 0}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg shadow-sm transition-all transform active:scale-95 flex justify-center items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Processando...
                  </>
                ) : (
                  <>✨ Atualizar Entendimento</>
                )}
              </button>
              
              <button 
                onClick={handleCaptureScreenshot}
                disabled={!isCapturing}
                className="bg-slate-800 hover:bg-slate-900 disabled:bg-slate-300 text-white p-3 rounded-lg shadow-sm transition-all flex items-center justify-center"
                title="Capturar Screenshot do Slide"
              >
                📸
              </button>
            </div>
            </div>
            
            {consensus.summary && (
              <div>
                <h3 className="font-semibold text-blue-700 text-sm">Resumo</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-1">{consensus.summary}</p>
              </div>
            )}
            
            {consensus.agreements && consensus.agreements.length > 0 && (
              <div>
                <h3 className="font-semibold text-blue-700 text-sm">Combinados</h3>
                <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm">
                  {consensus.agreements.map((item: any, i: number) => <li key={i} title={item.evidence_quote}>{item.text || item}</li>)}
                </ul>
              </div>
            )}
            
            {consensus.decisions && consensus.decisions.length > 0 && (
              <div>
                <h3 className="font-semibold text-blue-700 text-sm">Decisões</h3>
                <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm">
                  {consensus.decisions.map((item: any, i: number) => <li key={i} title={item.evidence_quote}>{item.text || item}</li>)}
                </ul>
              </div>
            )}
            
            {consensus.obligations && consensus.obligations.length > 0 && (
              <div>
                <h3 className="font-semibold text-blue-700 text-sm">Obrigações</h3>
                <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm">
                  {consensus.obligations.map((item: any, i: number) => <li key={i} title={item.evidence_quote}>{item.text || item}</li>)}
                </ul>
              </div>
            )}

            {consensus.pending_items && consensus.pending_items.length > 0 && (
              <div>
                <h3 className="font-semibold text-orange-600 text-sm">Pendências</h3>
                <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm">
                  {consensus.pending_items.map((item: any, i: number) => <li key={i} title={item.evidence_quote}>{item.text || item}</li>)}
                </ul>
              </div>
            )}
            
            {consensus.responsible_parties && consensus.responsible_parties.length > 0 && (
              <div>
                <h3 className="font-semibold text-blue-700 text-sm">Responsáveis</h3>
                <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm">
                  {consensus.responsible_parties.map((item: any, i: number) => <li key={i} title={item.evidence_quote}>{item.text || item}</li>)}
                </ul>
              </div>
            )}
            
            {consensus.deadlines && consensus.deadlines.length > 0 && (
              <div>
                <h3 className="font-semibold text-blue-700 text-sm">Prazos</h3>
                <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm">
                  {consensus.deadlines.map((item: any, i: number) => <li key={i} title={item.evidence_quote}>{item.text || item}</li>)}
                </ul>
              </div>
            )}
            
            {consensus.open_questions && consensus.open_questions.length > 0 && (
              <div>
                <h3 className="font-semibold text-purple-600 text-sm">Dúvidas Abertas</h3>
                <ul className="list-disc pl-5 mt-1 text-slate-600 text-sm">
                  {consensus.open_questions.map((item: any, i: number) => <li key={i} title={item.evidence_quote}>{item.text || item}</li>)}
                </ul>
              </div>
            )}

            {isEditingConsensus ? (
              <div className="mt-4 p-4 border border-blue-200 bg-blue-50 rounded flex flex-col gap-3">
                <h3 className="font-bold text-blue-800">Modo de Edição</h3>
                <p className="text-xs text-blue-600 mb-2">Faça os ajustes necessários no acordo antes de salvá-lo definitivamente.</p>
                
                {['agreements', 'decisions', 'obligations', 'pending_items', 'responsible_parties', 'deadlines'].map(key => {
                  const items = editedConsensus?.[key as keyof ConsensusObject] as any[] || [];
                  if (items.length === 0) return null;
                  return (
                    <div key={key} className="mb-2">
                      <h4 className="font-semibold text-sm capitalize mb-1">{key.replace('_', ' ')}</h4>
                      <div className="flex flex-col gap-2">
                        {items.map((item, idx) => (
                          <div key={idx} className="flex gap-2 items-start">
                            <textarea 
                              className="flex-1 text-sm p-2 border rounded"
                              value={item.text || item}
                              onChange={(e) => handleEditItem(key as keyof ConsensusObject, idx, e.target.value)}
                              rows={2}
                            />
                            <button onClick={() => handleRemoveItem(key as keyof ConsensusObject, idx)} className="text-red-500 hover:text-red-700 text-lg px-2 mt-1" title="Excluir">🗑️</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
                
                <div className="flex gap-2 mt-4">
                  <button onClick={() => setIsEditingConsensus(false)} className="flex-1 bg-slate-300 hover:bg-slate-400 text-slate-800 py-2 rounded font-medium">Cancelar</button>
                  <button onClick={saveEditedConsensus} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded font-medium">✅ Salvar Versão Definitiva</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-4">
                {consensus.status === 'consensus_obtained' && (
                  <div className="bg-green-100 border border-green-200 text-green-800 p-2 rounded text-center text-sm font-bold shadow-sm mb-2">
                    ✅ Acordo Definitivo
                  </div>
                )}
                
                {consensus.status !== 'consensus_obtained' && (
                  <button 
                    onClick={startEditing}
                    className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 px-4 rounded transition-colors shadow-sm"
                  >
                    ✏️ Revisar e Editar Acordo
                  </button>
                )}

                <div className="flex gap-2 mb-2">
                  <button 
                    onClick={() => {
                      if (usage.count >= usage.limit) {
                        openPaywall('PDF Corporativo Premium');
                      } else if (activeMeeting) {
                        chrome.tabs.create({ url: chrome.runtime.getURL(`index.html?route=/meeting/${activeMeeting.id}`) });
                      }
                    }}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium py-2 px-2 rounded transition-colors shadow-sm flex items-center justify-center gap-1 border border-slate-200"
                    title={usage.count >= usage.limit ? "Recurso Pro" : "Gerar PDF do Acordo"}
                  >
                    <span>📄</span> PDF Oficial
                  </button>
                  <button 
                    onClick={() => {
                      if (usage.count >= usage.limit) {
                        openPaywall('Link Mágico WhatsApp');
                      } else if (activeMeeting) {
                        const validationLink = `https://todeacordo.com.br/index.html?route=/valida/${activeMeeting.id}`;
                        navigator.clipboard.writeText(validationLink);
                        alert('Link de confirmação do WhatsApp copiado para sua área de transferência!');
                      }
                    }}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium py-2 px-2 rounded transition-colors shadow-sm flex items-center justify-center gap-1 border border-slate-200"
                    title={usage.count >= usage.limit ? "Recurso Pro" : "Copiar Link WhatsApp"}
                  >
                    <span>💬</span> Zap/Aceite
                  </button>
                </div>
                  <button 
                    onClick={() => {
                      if (activeMeeting) {
                        chrome.tabs.create({ url: chrome.runtime.getURL(`index.html?route=/meeting/${activeMeeting.id}`) });
                      } else {
                        chrome.tabs.create({ url: chrome.runtime.getURL(`index.html`) });
                      }
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 px-2 rounded transition-colors shadow-md text-center mb-2"
                  >
                    ✨ Ver no Dashboard Completo
                  </button>
                  <button 
                    onClick={handleExportMarkdown}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium py-2 px-2 rounded transition-colors shadow-sm text-center"
                    title="Exportar Markdown Bruto (Grátis)"
                  >
                    📝 Exportar Texto Simples
                  </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex flex-col h-screen bg-white font-sans text-slate-800">
              <header className="bg-white border-b border-slate-200 p-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs">
                    ✓
                  </div>
                  <span className="font-bold text-slate-800 tracking-tight">ToDeAcordo</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isCapturing ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`} />
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {meetingState === 'ACTIVE' ? 'Pronto' : 'Aguardando'}
                  </span>
                </div>
              </header>

              <div className="flex-1 bg-white overflow-hidden flex flex-col animate-fadeIn">
                <div className="p-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                  <h2 className="text-sm font-bold text-slate-700">Transcrição ao Vivo</h2>
                  <div className="flex gap-2">
                    <span className={`flex h-2 w-2 rounded-full ${captionsEnabled ? 'bg-green-500 animate-pulse' : 'bg-red-400'}`}></span>
                    <button 
                      onClick={() => chrome.tabs.create({ url: chrome.runtime.getURL('index.html') })}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200 transition-colors"
                    >
                      📊 Meu Painel
                    </button>
                  </div>
                </div>

                <div className="flex-1 bg-white p-3 overflow-y-auto flex flex-col gap-2 min-h-[200px]">
                  {segments.length === 0 ? (
                    <div className="text-center my-auto flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
                      <div className="w-12 h-12 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center text-xl mb-3 shadow-inner">
                        CC
                      </div>
                      <p className="text-sm font-bold text-slate-700 mb-1">
                        Ouvindo a reunião
                      </p>
                      <p className="text-sm text-slate-500 mt-2 mb-4 text-center">
                        Fale algo na reunião para ver a transcrição ao vivo aqui.
                      </p>
                      
                      <div className="bg-amber-50 border border-amber-100 rounded text-left p-3 flex flex-col gap-1 mb-3">
                        <p className="text-[10px] text-amber-900 font-bold">🌎 Está capturando em outro idioma?</p>
                        <p className="text-[9px] text-amber-800 leading-tight">
                          No Meet, clique em <strong>Três pontos &gt; Legendas</strong> e selecione o idioma de entrada como <strong>Português (Brasil)</strong>.
                        </p>
                      </div>
                      
                      <div className="bg-indigo-50 border border-indigo-100 rounded text-left p-3 flex gap-2">
                        <span className="text-indigo-500 text-sm">🔒</span>
                        <p className="text-[10px] text-indigo-700 leading-tight">
                          <strong>Privacidade garantida:</strong> O ToDeAcordo não grava áudio. Ele usa exclusivamente o texto gerado pelas legendas oficiais da chamada.
                        </p>
                      </div>
                    </div>
                  ) : (
                    segments.map((seg) => (
                      <div key={seg.id} className="text-sm py-2 animate-fadeIn border-b border-slate-50 last:border-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="font-bold text-slate-900 text-xs">{seg.speaker && seg.speaker !== 'undefined' && seg.speaker !== 'Unknown' ? seg.speaker : 'Desconhecido'}</span>
                          <span className="text-[10px] text-slate-400">
                            {new Date(seg.captured_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">{seg.text}</p>
                      </div>
                    ))
                  )}
                  
                  {isCapturing && liveDraft && (
                    <div className="text-sm pb-2 opacity-70 italic animate-pulse border-l-2 border-green-500 pl-2">
                      <div className="font-semibold text-green-700">{(liveDraft.speaker && liveDraft.speaker !== 'undefined' && liveDraft.speaker !== 'Unknown') ? liveDraft.speaker : 'Desconhecido'} <span className="text-xs font-normal opacity-50">(Capturando...)</span></div>
                      <div className="text-slate-600 mt-1">{liveDraft.text}</div>
                    </div>
                  )}
                  
                  <div ref={endOfListRef} />
                </div>
              </div>

              <div className="p-4 bg-white border-t border-slate-200 shrink-0">
                {generationError && (
                  <div className="mb-3 p-3 bg-amber-50 text-amber-800 rounded border border-amber-200 text-xs flex gap-2 items-start">
                    <span className="mt-0.5">⚠️</span>
                    <p>{generationError}</p>
                  </div>
                )}
                <button
                  onClick={handleGenerateUnderstanding}
                  disabled={isGenerating || segments.length === 0}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Analisando conversa...
                    </>
                  ) : (
                    'Gerar Entendimento Automático'
                  )}
                </button>
              </div>

              {isCapturing && (
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-green-600 font-medium animate-pulse">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  Capturando legendas...
                </div>
              )}
            </div>
          </>
        )}

        {/* Debug Mode */}
        {debugMode && (
          <div className="bg-slate-900 text-green-400 p-3 rounded-lg text-xs font-mono overflow-y-auto max-h-[300px] flex flex-col gap-3">
            <div>
              <h3 className="font-bold text-white border-b border-slate-800 pb-1 mb-2">Diagnóstico / Telemetria</h3>
              {consensus && (
                <div className="flex flex-col gap-1 text-[11px] mb-3 pb-3 border-b border-slate-800">
                  <p className="text-white font-semibold">Fase 5.3 (Anti-Alucinação):</p>
                  <p><span className="text-slate-400">meeting_id:</span> {consensus.meeting_id}</p>
                  <p><span className="text-slate-400">generated_at:</span> {consensus.generated_at ? new Date(consensus.generated_at).toLocaleTimeString() : 'N/A'}</p>
                  <p><span className="text-slate-400">provider:</span> {consensus.provider}</p>
                  <p><span className="text-slate-400">model:</span> {consensus.model}</p>
                  <p><span className="text-slate-400">is_mock:</span> {String(consensus.is_mock)}</p>
                  <p><span className="text-slate-400">transcript_segment_count:</span> {consensus.transcript_segment_count}</p>
                  <p><span className="text-slate-400">transcript_char_count:</span> {consensus.transcript_char_count}</p>
                  <p><span className="text-slate-400">confidence_score:</span> {consensus.confidence_score}</p>
                </div>
              )}
              {telemetry ? (
                <div className="flex flex-col gap-1 text-[11px]">
                  <p><span className="text-slate-400">activeTabUrl:</span> {telemetry.activeTabUrl}</p>
                  <p><span className="text-slate-400">contentScriptConnected:</span> {String(telemetry.contentScriptConnected)}</p>
                  <p><span className="text-slate-400">meetingState:</span> {telemetry.meetingState}</p>
                  <p><span className="text-slate-400">captionsEnabled:</span> {String(telemetry.captionsEnabled)}</p>
                  <p><span className="text-slate-400">mutationObserverActive:</span> {String(telemetry.mutationObserverActive)}</p>
                  <p><span className="text-slate-400">observedRoot:</span> {telemetry.observedRoot}</p>
                  <p><span className="text-slate-400">lastMutationAt:</span> {telemetry.lastMutationAt > 0 ? new Date(telemetry.lastMutationAt).toLocaleTimeString() : 'Nunca'}</p>
                  
                  <p className="text-white font-semibold mt-2 border-t border-slate-800 pt-1">Draft & Commit (Refatoração):</p>
                  <p><span className="text-slate-400">activeDraftSpeaker:</span> {telemetry.activeDraftSpeaker}</p>
                  <p><span className="text-slate-400">activeDraftText:</span> {telemetry.activeDraftText}</p>
                  <p><span className="text-slate-400">activeDraftUpdatedAt:</span> {telemetry.activeDraftUpdatedAt}</p>
                  <p><span className="text-slate-400">committedSegmentsCount:</span> {telemetry.committedSegmentsCount}</p>
                  <p><span className="text-slate-400">draftUpdateCount:</span> {telemetry.draftUpdateCount}</p>
                  <p className="text-yellow-300"><span className="text-slate-400">lastCommitReason:</span> {telemetry.lastCommitReason}</p>
                  <p className="text-red-300"><span className="text-slate-400">lastDiscardReason:</span> {telemetry.lastDiscardReason}</p>
                  <p className="text-white font-semibold mt-2 border-t border-slate-800 pt-1">Rolling Segment (Upsert):</p>
                  <p><span className="text-slate-400">segmentUpdatedCount:</span> {telemetry.segmentUpdatedCount}</p>
                  <p><span className="text-slate-400">lastSegmentUpdatedId:</span> {telemetry.lastSegmentUpdatedId}</p>
                  <p><span className="text-slate-400">updateReason:</span> {telemetry.updateReason}</p>
                  <p><span className="text-slate-400">isExpansionOfCommitted:</span> {String(telemetry.isExpansionOfCommitted)}</p>
                  <p><span className="text-slate-400">novelSuffix:</span> {telemetry.novelSuffix || '(nenhum)'}</p>
                  <p className="text-green-300"><span className="text-slate-400">lastCommittedId:</span> {telemetry.lastCommittedId}</p>
                  <p className="text-green-300 whitespace-pre-wrap"><span className="text-slate-400">lastCommittedText:</span> {telemetry.lastCommittedText}</p>

                  <p className="text-white font-semibold mt-2 border-t border-slate-800 pt-1">Filtro de Sistema & Captura:</p>
                  <p><span className="text-slate-400">currentCaptureAllowed:</span> {String(telemetry.currentCaptureAllowed)}</p>
                  <p className="text-red-300"><span className="text-slate-400">captureBlockedReason:</span> {telemetry.captureBlockedReason}</p>
                  <p><span className="text-slate-400">systemTextFilteredCount:</span> {telemetry.systemTextFilteredCount}</p>
                  <p className="text-yellow-400"><span className="text-slate-400">lastSystemTextFiltered:</span> {telemetry.lastSystemTextFiltered || '(nenhuma)'}</p>
                  <p><span className="text-slate-400">emittedHashesCount:</span> {telemetry.emittedHashesCount}</p>
                </div>
              ) : (
                <p className="text-slate-500">Aguardando telemetria...</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-white border-b border-slate-800 pb-1 mb-1">Ações Manuais</h3>
              <div className="flex gap-2 flex-wrap">
                <button 
                  onClick={handleScanNow} 
                  className="bg-green-800 hover:bg-green-700 text-white px-2 py-1 rounded text-[10px]"
                >
                  ⚡ Capturar texto visível agora
                </button>
                <button 
                  onClick={handleRunProbe} 
                  className="bg-blue-800 hover:bg-blue-700 text-white px-2 py-1 rounded text-[10px]"
                >
                  🔍 Executar Caption Probe
                </button>
              </div>
            </div>

            {probeError && <p className="text-red-400 text-[10px]">{probeError}</p>}

            {probeResult && (
              <div>
                <h3 className="font-bold text-white border-b border-slate-800 pb-1 mb-2">Resultado do Probe</h3>
                <div className="flex flex-col gap-1 text-[11px]">
                  <p><span className="text-slate-400">visibleTextNodesCount:</span> {probeResult.visibleTextNodesCount}</p>
                  <p><span className="text-slate-400">ariaLiveCount:</span> {probeResult.ariaLiveCount}</p>
                  <p><span className="text-slate-400">roleStatusLogCount:</span> {probeResult.roleStatusLogCount}</p>
                  <p><span className="text-slate-400">possibleCaptionContainersCount:</span> {probeResult.possibleCaptionContainersCount}</p>
                  <p><span className="text-slate-400">candidateSelector:</span> {probeResult.candidateSelector}</p>
                  <p><span className="text-slate-400">isVisible:</span> {String(probeResult.isVisible)}</p>
                  <p><span className="text-slate-400">tagName:</span> {probeResult.tagName}</p>
                  <p className="whitespace-pre-wrap"><span className="text-slate-400">lastRawText:</span> {probeResult.lastRawText || '(vazio)'}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<SidePanel />);
}

```

---

## Arquivo: src\todeacordo\src\storage\auditStorage.ts
```typescript
import { getDB } from './db';
import type { AuditEvent } from '../audit/auditTypes';

export const saveAuditEvent = async (event: AuditEvent): Promise<void> => {
  const db = await getDB();
  await db.put('audit', event);
};

export const getAuditEventsForMeeting = async (meetingId: string): Promise<AuditEvent[]> => {
  const db = await getDB();
  const events = await db.getAllFromIndex('audit', 'by-meeting', meetingId);
  return events.sort((a, b) => a.timestamp - b.timestamp);
};

```

---

## Arquivo: src\todeacordo\src\storage\consensusStorage.ts
```typescript
import { getDB } from './db';
import { supabase } from './supabaseClient';
import type { ConsensusObject } from '../types';

export const saveConsensus = async (consensus: ConsensusObject): Promise<void> => {
  const db = await getDB();
  await db.put('consensus', consensus);

  // Sync to Supabase if configured
  if (supabase) {
    try {
      const { error } = await supabase
        .from('consensus')
        .upsert({
          id: consensus.id,
          meeting_id: consensus.meeting_id,
          data: consensus,
          updated_at: new Date().toISOString()
        });
      if (error) {
        console.error('Error syncing consensus to Supabase:', error);
      } else {
        console.log(`[SupabaseSync] Consensus ${consensus.id} synced successfully.`);
      }
    } catch (err) {
      console.error('Failed to sync consensus to Supabase:', err);
    }
  }
};

export const getConsensus = async (id: string): Promise<ConsensusObject | undefined> => {
  const db = await getDB();
  const localData = await db.get('consensus', id);

  // Sync/fetch latest version from Supabase if online
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('consensus')
        .select('data')
        .eq('id', id)
        .single();
      
      if (!error && data && data.data) {
        const remoteConsensus = data.data as ConsensusObject;
        await db.put('consensus', remoteConsensus);
        return remoteConsensus;
      }
    } catch (err) {
      console.error('Failed to load consensus from Supabase:', err);
    }
  }

  return localData;
};

export const getAllConsensus = async (): Promise<ConsensusObject[]> => {
  const db = await getDB();
  return db.getAll('consensus');
};

export const getConsensusForMeeting = async (meetingId: string): Promise<ConsensusObject | undefined> => {
  const db = await getDB();
  const localData = await db.getAllFromIndex('consensus', 'by-meeting', meetingId);
  let result = localData.length > 0 ? localData[localData.length - 1] : undefined;

  // Try fetching latest from Supabase if online
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('consensus')
        .select('data')
        .eq('meeting_id', meetingId)
        .order('updated_at', { ascending: false })
        .limit(1);
      
      if (!error && data && data.length > 0 && data[0].data) {
        const remoteConsensus = data[0].data as ConsensusObject;
        await db.put('consensus', remoteConsensus);
        result = remoteConsensus;
      }
    } catch (err) {
      console.error('Failed to load consensus from Supabase for meeting:', err);
    }
  }

  return result;
};

export const clearConsensusForMeeting = async (meetingId: string): Promise<void> => {
  const db = await getDB();
  const tx = db.transaction('consensus', 'readwrite');
  const items = await tx.store.index('by-meeting').getAllKeys(meetingId);
  for (const key of items) {
    await tx.store.delete(key);
  }
  await tx.done;

  if (supabase) {
    try {
      await supabase
        .from('consensus')
        .delete()
        .eq('meeting_id', meetingId);
    } catch (err) {
      console.error('Failed to clear consensus from Supabase:', err);
    }
  }
};

```

---

## Arquivo: src\todeacordo\src\storage\db.ts
```typescript
import { openDB } from 'idb';
import type { DBSchema, IDBPDatabase } from 'idb';
import type { MeetingSession, TranscriptSegment, ConsensusObject } from '../types';
import type { AuditEvent } from '../audit/auditTypes';

interface ToDeAcordoDB extends DBSchema {
  meetings: {
    key: string;
    value: MeetingSession;
  };
  transcripts: {
    key: string;
    value: TranscriptSegment;
    indexes: { 'by-meeting': string };
  };
  consensus: {
    key: string;
    value: ConsensusObject;
    indexes: { 'by-meeting': string };
  };
  audit: {
    key: string;
    value: AuditEvent;
    indexes: { 'by-meeting': string };
  };
}

const DB_NAME = 'ToDeAcordoDB';
const DB_VERSION = 1;

let dbPromise: Promise<IDBPDatabase<ToDeAcordoDB>> | null = null;

export const getDB = () => {
  if (!dbPromise) {
    dbPromise = openDB<ToDeAcordoDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('meetings')) {
          db.createObjectStore('meetings', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('transcripts')) {
          const transcriptStore = db.createObjectStore('transcripts', { keyPath: 'id' });
          transcriptStore.createIndex('by-meeting', 'meeting_id');
        }
        if (!db.objectStoreNames.contains('consensus')) {
          const consensusStore = db.createObjectStore('consensus', { keyPath: 'id' });
          consensusStore.createIndex('by-meeting', 'meeting_id');
        }
        if (!db.objectStoreNames.contains('audit')) {
          const auditStore = db.createObjectStore('audit', { keyPath: 'id' });
          auditStore.createIndex('by-meeting', 'meeting_id');
        }
      },
    });
  }
  return dbPromise;
};

```

---

## Arquivo: src\todeacordo\src\storage\meetingStorage.ts
```typescript
import { getDB } from './db';
import type { MeetingSession } from '../types';

export const saveMeeting = async (meeting: MeetingSession): Promise<void> => {
  const db = await getDB();
  await db.put('meetings', meeting);
};

export const getMeeting = async (id: string): Promise<MeetingSession | undefined> => {
  const db = await getDB();
  return db.get('meetings', id);
};

export const getAllMeetings = async (): Promise<MeetingSession[]> => {
  const db = await getDB();
  return db.getAll('meetings');
};

export const getActiveMeeting = async (): Promise<MeetingSession | undefined> => {
  const db = await getDB();
  const all = await db.getAll('meetings');
  return all.find(m => m.status === 'active' || m.is_active);
};

export const clearMeeting = async (id: string): Promise<void> => {

  const meeting = await getMeeting(id);
  if (meeting) {
    meeting.status = 'cleared';
    meeting.is_active = false;
    await saveMeeting(meeting);
  }
};

```

---

## Arquivo: src\todeacordo\src\storage\supabaseClient.ts
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const isSupabaseConfigured = () => !!supabase;

```

---

## Arquivo: src\todeacordo\src\storage\transcriptStorage.ts
```typescript
import { getDB } from './db';
import type { TranscriptSegment } from '../types';

export const saveTranscriptSegment = async (segment: TranscriptSegment): Promise<void> => {
  const db = await getDB();
  await db.put('transcripts', segment);
};

export const getTranscriptForMeeting = async (meetingId: string): Promise<TranscriptSegment[]> => {
  const db = await getDB();
  const segments = await db.getAllFromIndex('transcripts', 'by-meeting', meetingId);
  return segments.sort((a, b) => a.captured_at - b.captured_at);
};

export const clearTranscriptsForMeeting = async (meetingId: string): Promise<void> => {
  const db = await getDB();
  const tx = db.transaction('transcripts', 'readwrite');
  const segments = await tx.store.index('by-meeting').getAllKeys(meetingId);
  for (const key of segments) {
    await tx.store.delete(key);
  }
  await tx.done;
};

```

---

## Arquivo: src\todeacordo\src\storage\usageStorage.ts
```typescript
export interface WaitlistLead {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  role: string;
  attempted_feature: string;
  source_meeting_id?: string;
  created_at: number;
}

const USAGE_KEY = 'todeacordo_usage_count';
const TRANSCRIPT_USAGE_KEY = 'todeacordo_transcript_usage_count';
const WAITLIST_KEY = 'todeacordo_waitlist';
const FREE_LIMIT = 3;
const TRANSCRIPT_LIMIT = 20;

// Check if running inside a Chrome Extension
const isExtension = typeof chrome !== 'undefined' && !!chrome.storage && !!chrome.storage.local;

// Função auxiliar para pegar o mês atual em YYYY-MM
const getCurrentMonthKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
};

export const getUsage = async (): Promise<{ count: number; limit: number }> => {
  if (isExtension) {
    return new Promise((resolve) => {
      chrome.storage.local.get([USAGE_KEY], (result) => {
        const data = (result[USAGE_KEY] || {}) as Record<string, number>;
        const monthKey = getCurrentMonthKey();
        resolve({ count: data[monthKey] || 0, limit: FREE_LIMIT });
      });
    });
  } else {
    try {
      const raw = localStorage.getItem(USAGE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      const monthKey = getCurrentMonthKey();
      return { count: data[monthKey] || 0, limit: FREE_LIMIT };
    } catch (e) {
      console.error('Error reading localStorage usage:', e);
      return { count: 0, limit: FREE_LIMIT };
    }
  }
};

export const getTranscriptUsage = async (): Promise<{ count: number; limit: number }> => {
  if (isExtension) {
    return new Promise((resolve) => {
      chrome.storage.local.get([TRANSCRIPT_USAGE_KEY], (result) => {
        const data = (result[TRANSCRIPT_USAGE_KEY] || {}) as Record<string, number>;
        const monthKey = getCurrentMonthKey();
        resolve({ count: data[monthKey] || 0, limit: TRANSCRIPT_LIMIT });
      });
    });
  } else {
    try {
      const raw = localStorage.getItem(TRANSCRIPT_USAGE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      const monthKey = getCurrentMonthKey();
      return { count: data[monthKey] || 0, limit: TRANSCRIPT_LIMIT };
    } catch (e) {
      console.error('Error reading localStorage transcript usage:', e);
      return { count: 0, limit: TRANSCRIPT_LIMIT };
    }
  }
};

export const incrementUsage = async (): Promise<{ count: number; limit: number }> => {
  if (isExtension) {
    return new Promise((resolve) => {
      chrome.storage.local.get([USAGE_KEY], (result) => {
        const data = (result[USAGE_KEY] || {}) as Record<string, number>;
        const monthKey = getCurrentMonthKey();
        data[monthKey] = (data[monthKey] || 0) + 1;
        chrome.storage.local.set({ [USAGE_KEY]: data }, () => resolve({ count: data[monthKey], limit: FREE_LIMIT }));
      });
    });
  } else {
    try {
      const raw = localStorage.getItem(USAGE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      const monthKey = getCurrentMonthKey();
      data[monthKey] = (data[monthKey] || 0) + 1;
      localStorage.setItem(USAGE_KEY, JSON.stringify(data));
      return { count: data[monthKey], limit: FREE_LIMIT };
    } catch (e) {
      console.error('Error writing localStorage usage:', e);
      return { count: 0, limit: FREE_LIMIT };
    }
  }
};

export const incrementTranscriptUsage = async (): Promise<{ count: number; limit: number }> => {
  if (isExtension) {
    return new Promise((resolve) => {
      chrome.storage.local.get([TRANSCRIPT_USAGE_KEY], (result) => {
        const data = (result[TRANSCRIPT_USAGE_KEY] || {}) as Record<string, number>;
        const monthKey = getCurrentMonthKey();
        data[monthKey] = (data[monthKey] || 0) + 1;
        chrome.storage.local.set({ [TRANSCRIPT_USAGE_KEY]: data }, () => resolve({ count: data[monthKey], limit: TRANSCRIPT_LIMIT }));
      });
    });
  } else {
    try {
      const raw = localStorage.getItem(TRANSCRIPT_USAGE_KEY);
      const data = raw ? JSON.parse(raw) : {};
      const monthKey = getCurrentMonthKey();
      data[monthKey] = (data[monthKey] || 0) + 1;
      localStorage.setItem(TRANSCRIPT_USAGE_KEY, JSON.stringify(data));
      return { count: data[monthKey], limit: TRANSCRIPT_LIMIT };
    } catch (e) {
      console.error('Error writing localStorage transcript usage:', e);
      return { count: 0, limit: TRANSCRIPT_LIMIT };
    }
  }
};

export const addLeadToWaitlist = async (lead: Omit<WaitlistLead, 'id' | 'created_at'>): Promise<void> => {
  if (isExtension) {
    return new Promise((resolve) => {
      chrome.storage.local.get([WAITLIST_KEY], (result) => {
        const leads: WaitlistLead[] = Array.isArray(result[WAITLIST_KEY]) ? result[WAITLIST_KEY] : [];
        leads.push({
          ...lead,
          id: crypto.randomUUID(),
          created_at: Date.now()
        });
        chrome.storage.local.set({ [WAITLIST_KEY]: leads }, () => resolve());
      });
    });
  } else {
    try {
      const raw = localStorage.getItem(WAITLIST_KEY);
      const leads = raw ? JSON.parse(raw) : [];
      leads.push({
        ...lead,
        id: crypto.randomUUID(),
        created_at: Date.now()
      });
      localStorage.setItem(WAITLIST_KEY, JSON.stringify(leads));
    } catch (e) {
      console.error('Error writing localStorage waitlist:', e);
    }
  }
};

export const getWaitlist = async (): Promise<WaitlistLead[]> => {
  if (isExtension) {
    return new Promise((resolve) => {
      chrome.storage.local.get([WAITLIST_KEY], (result) => {
        resolve(Array.isArray(result[WAITLIST_KEY]) ? result[WAITLIST_KEY] : []);
      });
    });
  } else {
    try {
      const raw = localStorage.getItem(WAITLIST_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Error reading localStorage waitlist:', e);
      return [];
    }
  }
};

```

---

## Arquivo: src\todeacordo\src\test\setup.ts
```typescript
import '@testing-library/jest-dom';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

```

---

## Arquivo: src\todeacordo\src\types\index.ts
```typescript
import type { AuditEvent } from '../audit/auditTypes';

export type ConsensusStatus = 'draft' | 'pending_review' | 'changes_requested' | 'consensus_obtained' | 'disputed' | 'archived';

export interface LiveCaptionDraft {
  id: string;
  speaker: string | null;
  text: string;
  normalized_text: string;
  started_at: number;
  updated_at: number;
  source_node_signature: string;
  status: 'live' | 'committed' | 'discarded';
}

export interface TranscriptSegment {
  id: string;
  meeting_id: string;
  timestamp: string;
  speaker: string | null;
  text: string;
  source: string;
  captured_at: number;
  
  // Opcionais para Auditoria e Deduplicação rígida
  normalized_text?: string;
  normalized_hash?: string;
  dedupe_reason?: string;
  raw_source_text?: string;
  updated_count?: number;
}

export interface ConsensusVersion {
  version: number;
  created_at: number;
  content: any;
}

export interface ConsensusItem {
  id?: string; // Adicionado ID único para tracking de ressalvas item a item
  text: string;
  evidence_quote?: string;
  status?: 'accepted' | 'rejected' | 'needs_adjustment';
  objection_note?: string;
}

export const evaluateTrafficLight = (partialConsensus: Partial<ConsensusObject>) => {
  const redFlagsWords = ["talvez", "depois", "a gente vê", "mais ou menos", "depende", "pode ser", "vamos alinhar"];
  
  const allTexts = [
    ...(partialConsensus.agreements || []).map(a => typeof a === 'string' ? a : a.text),
    ...(partialConsensus.decisions || []).map(a => typeof a === 'string' ? a : a.text),
    ...(partialConsensus.obligations || []).map(a => typeof a === 'string' ? a : a.text),
  ].join(' ').toLowerCase();

  const foundFlags = redFlagsWords.filter(word => allTexts.includes(word));
  const missing = [];
  
  if (!partialConsensus.agreements || partialConsensus.agreements.length === 0) missing.push('acordos');
  if (!partialConsensus.obligations || partialConsensus.obligations.length === 0) missing.push('obrigações');
  
  // Calculate score 0-100
  let score = 100;
  score -= foundFlags.length * 15;
  score -= missing.length * 20;
  
  let trafficLight: 'green' | 'yellow' | 'red' = 'green';
  if (score < 60) trafficLight = 'red';
  else if (score < 85 || foundFlags.length > 0) trafficLight = 'yellow';

  partialConsensus.confidence_score = Math.max(0, score);
  partialConsensus.traffic_light = trafficLight;
  partialConsensus.red_flags = foundFlags;
  partialConsensus.missing_elements = missing;
};

export interface ConsensusObject {
  id: string;
  meeting_id: string;
  source_platform: string;
  title: string;
  created_at: number;
  updated_at: number;
  participants: string[];
  transcript_segments: TranscriptSegment[];
  consensus_versions: ConsensusVersion[];
  clarity_score?: number;
  risk_flags?: {
    type: string;
    text: string;
    evidence_quote?: string;
    severity: 'low' | 'medium' | 'high';
  }[];
  current_version: number;
  status: ConsensusStatus;
  provider?: string;
  model?: string;
  is_mock?: boolean;
  generated_at?: number;
  input_hash?: string;
  consensus_hash?: string; // SHA-256 final document
  validation_hash?: string; // SHA-256 post-signature
  transcript_char_count?: number;
  transcript_segment_count?: number;
  
  // Semáforo e Red Flags (Fase 10D)
  confidence_score?: number; // 0 a 100
  traffic_light?: 'green' | 'yellow' | 'red';
  red_flags?: string[];
  missing_elements?: string[];
  
  // Fase 10E: Risk Map e Próximo Passo
  next_step?: string;
  risk_map?: {
    scope: 'low' | 'medium' | 'high';
    deadline: 'low' | 'medium' | 'high';
    budget: 'low' | 'medium' | 'high';
    responsibility: 'low' | 'medium' | 'high';
  };
  
  summary?: string;
  agreements?: ConsensusItem[];
  decisions?: ConsensusItem[];
  obligations?: ConsensusItem[];
  pending_items?: ConsensusItem[];
  responsible_parties?: ConsensusItem[];
  deadlines?: ConsensusItem[];
  open_questions?: ConsensusItem[];
  disputed_points?: ConsensusItem[];
  
  attachments?: string[];
  validationLink?: string;
  validatedBy?: Array<{
    name: string;
    ip: string;
    timestamp: number;
  }>;
  signatures?: Array<{
    name: string;
    timestamp: number;
    image: string; // Base64 data URL
    accepted_version: number;
    document_hash: string;
  }>;
  
  audit_events: AuditEvent[];
}


export interface MeetingSession {
  id: string;
  platform: string;
  source_platform: string;
  meeting_url?: string;
  meeting_code?: string;
  title: string;
  started_at: number;
  ended_at?: number;
  status: 'active' | 'ended' | 'cleared';
  is_active: boolean; // deprecated by status, but kept for compatibility
  participants: string[];
  transcript_segment_ids: string[];
  consensus_object_id?: string;
  created_at: number;
  updated_at: number;
}

```

---

## Arquivo: src\todeacordo\src\viral\BeforeAfterLab.tsx
```typescript
export default function BeforeAfterLab() {
  const examples = [
    {
      bad: "Depois vemos isso.",
      good: "Responsável: não identificado. Prazo: não definido. Risco: Alto."
    },
    {
      bad: "Fica combinado então que vocês entregam semana que vem.",
      good: "Obrigação: Entregar [O Quê?]. Prazo: Semana que vem (Dia X). Risco: Escopo aberto."
    },
    {
      bad: "Dá pra fazer sim.",
      good: "Obrigação assumida verbalmente, mas não formalizada no escopo de faturamento."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">O Laboratório do Mal-Entendido</h1>
        <p className="text-lg text-slate-500 mb-16 text-center max-w-2xl mx-auto">Veja como a nossa IA traduz frases perigosas em trilhas de auditoria claras.</p>

        <div className="grid gap-8">
          {examples.map((ex, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 bg-red-50 p-6 rounded-2xl w-full">
                <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-3">O que você ouve</div>
                <div className="text-xl text-slate-800 font-medium italic">"{ex.bad}"</div>
              </div>
              <div className="text-4xl text-slate-300">→</div>
              <div className="flex-1 bg-indigo-50 p-6 rounded-2xl w-full border border-indigo-100">
                <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">O que o ToDeAcordo lê</div>
                <div className="text-slate-800 font-medium">{ex.good}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/waitlist" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-xl transition-transform active:scale-95 text-lg inline-block">
            Quero testar nas minhas reuniões
          </a>
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\viral\CompetitorPositioning.tsx
```typescript
export default function CompetitorPositioning() {
  const competitor = window.location.pathname.split('/').pop()?.replace(/-/g, ' ');
  
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
          ToDeAcordo vs {competitor}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8 capitalize">
          Por que o ToDeAcordo é diferente do {competitor}?
        </h1>
        <p className="text-xl text-slate-500 mb-16 max-w-2xl mx-auto leading-relaxed">
          Ferramentas de transcrição ajudam você a <strong className="text-slate-800">lembrar</strong> o que foi dito. O ToDeAcordo ajuda você a <strong className="text-slate-800">validar</strong> o que foi combinado.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-400 mb-6 capitalize">{competitor} (Transcrição)</h3>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start gap-3"><span>🎙️</span> Foca em gravar áudio/vídeo.</li>
              <li className="flex items-start gap-3"><span>📝</span> Gera um bloco de texto gigante.</li>
              <li className="flex items-start gap-3"><span>🤖</span> O bot entra na sala (Assusta o cliente).</li>
              <li className="flex items-start gap-3"><span>🤷‍♂️</span> O cliente não assina nem concorda com nada.</li>
            </ul>
          </div>
          <div className="bg-indigo-600 p-8 rounded-3xl border border-indigo-500 shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-6">ToDeAcordo (Consensus Closing)</h3>
            <ul className="space-y-4 text-indigo-100">
              <li className="flex items-start gap-3"><span>🤫</span> Sem áudio. Lê legendas. Invisível.</li>
              <li className="flex items-start gap-3"><span>🎯</span> Gera só obrigações, riscos e prazos.</li>
              <li className="flex items-start gap-3"><span>🔗</span> Cria um link validável.</li>
              <li className="flex items-start gap-3"><span>✍️</span> O cliente clica, assina e sela o escopo.</li>
            </ul>
          </div>
        </div>

        <a href="/waitlist" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-xl transition-transform active:scale-95 text-lg inline-block">
          Testar ToDeAcordo (Beta)
        </a>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\viral\MisunderstandingCalculator.tsx
```typescript
import { useState } from 'react';

export default function MisunderstandingCalculator() {
  const [contractValue, setContractValue] = useState(10000);
  const [reworkHours, setReworkHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(150);

  const totalMonthlyCost = (reworkHours * hourlyRate) + (contractValue * 0.05); // Assume 5% risk of churn/discount

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white tracking-tight mb-6">Quanto custa um mal-entendido?</h1>
          <p className="text-xl text-slate-400">Calcule o prejuízo invisível das reuniões sem validação.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-700">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Valor médio do contrato (R$)</label>
                <input type="number" value={contractValue} onChange={e => setContractValue(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-indigo-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Horas de retrabalho no mês</label>
                <input type="number" value={reworkHours} onChange={e => setReworkHours(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-indigo-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Valor da sua hora (R$)</label>
                <input type="number" value={hourlyRate} onChange={e => setHourlyRate(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-indigo-500 outline-none" />
              </div>
            </div>
          </div>

          <div className="bg-indigo-600 p-10 rounded-3xl shadow-2xl border border-indigo-500 relative overflow-hidden text-white text-center flex flex-col justify-center min-h-[400px]">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl">💸</div>
            <h3 className="text-xl font-medium text-indigo-200 mb-2 relative z-10">Prejuízo Mensal Estimado</h3>
            <div className="text-6xl font-black tracking-tight mb-4 relative z-10 text-white">
              R$ {totalMonthlyCost.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
            </div>
            <p className="text-indigo-200 mb-10 relative z-10">Esse é o custo de "achar que ficou claro".</p>
            
            <a href="/waitlist" className="bg-white hover:bg-indigo-50 text-indigo-900 font-bold py-4 px-8 rounded-xl transition-transform active:scale-95 shadow-lg relative z-10 text-lg">
              Estancar o Prejuízo no Beta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\viral\NotAMinuteMicrosite.tsx
```typescript
export default function NotAMinuteMicrosite() {
  return (
    <div className="min-h-screen bg-[#111827] text-slate-200 py-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-red-500/30">
          Manifesto
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
          Ata de reunião morreu.
        </h1>
        <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          Ninguém lê. Ninguém responde. E quando o escopo estoura, ela não te defende.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-16">
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold text-slate-400 mb-6 flex items-center gap-2"><span className="text-slate-500">❌</span> A Era da Ata</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3"><span>→</span> Registra o passado ("Fulano disse X").</li>
              <li className="flex items-start gap-3"><span>→</span> É um e-mail longo e morto.</li>
              <li className="flex items-start gap-3"><span>→</span> Aceite presumido (Se não reclamar, aceitou).</li>
            </ul>
          </div>
          <div className="bg-indigo-900/20 p-8 rounded-3xl border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><span className="text-indigo-400">✅</span> A Era do ToDeAcordo</h3>
            <ul className="space-y-4 text-indigo-200">
              <li className="flex items-start gap-3"><span>→</span> Foca no futuro ("Fulano fará X até o dia Y").</li>
              <li className="flex items-start gap-3"><span>→</span> É um link seguro de validação.</li>
              <li className="flex items-start gap-3"><span>→</span> Aceite explícito (Com Rubrica e Hash).</li>
            </ul>
          </div>
        </div>

        <a href="/waitlist" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-xl transition-transform active:scale-95 text-lg inline-block">
          Junte-se à Revolução (Beta)
        </a>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\viral\ProgrammaticSeoPage.tsx
```typescript
import { useCases } from '../data/useCases';

export default function ProgrammaticSeoPage() {
  const slug = window.location.pathname.split('/').pop();
  const useCase = useCases.find(uc => uc.slug === slug) || useCases[0];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-indigo-500/30">
            {useCase.persona}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            {useCase.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {useCase.pain}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`/demo/${useCase.slug}`} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-indigo-600/20 transition-transform active:scale-95 text-lg">
              Ver Demo: {useCase.cta}
            </a>
            <a href="/waitlist" className="bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold py-4 px-8 rounded-xl transition-colors text-lg">
              Entrar no Beta Grátis
            </a>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Before */}
          <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">✕</span>
              <h3 className="text-2xl font-bold text-red-900">Como é hoje (O Risco)</h3>
            </div>
            <div className="font-mono text-sm bg-white p-6 rounded-xl border border-red-100 whitespace-pre-wrap text-slate-600 leading-relaxed shadow-sm">
              {useCase.beforeTranscript}
            </div>
            <p className="mt-4 text-red-700 font-medium text-sm">
              Resultado: Semanas depois, o cliente exige algo que não estava no escopo, gerando retrabalho ou prejuízo.
            </p>
          </div>

          {/* After */}
          <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">✓</span>
              <h3 className="text-2xl font-bold text-green-900">Com ToDeAcordo</h3>
            </div>
            <div className="font-mono text-sm bg-white p-6 rounded-xl border border-green-200 shadow-lg shadow-green-100/50 whitespace-pre-wrap text-slate-800 leading-relaxed border-l-4 border-l-green-500">
              {useCase.afterConsensus}
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold">🟢 Validado pelo Cliente</span>
            </div>
            <p className="mt-4 text-green-800 font-medium text-sm">
              Resultado: As duas partes confirmam o entendimento na mesma hora. Sem margem para interpretações.
            </p>
          </div>
        </div>
      </section>
      
      {/* Feature Vote */}
      <section className="bg-slate-50 py-20 px-6 border-t border-slate-200">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Ajude a moldar o futuro</h3>
          <p className="text-slate-500 mb-6 text-sm">Qual recurso é mais crítico para o seu dia a dia?</p>
          {/* FeatureVote import here if connected */}
        </div>
      </section>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\viral\PublicRoaster.tsx
```typescript
import { useState } from 'react';

export default function PublicRoaster() {
  const [text, setText] = useState('');
  const [roasted, setRoasted] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleRoast = () => {
    if (!text) return;
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setRoasted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4 text-center">O Roast da sua Reunião</h1>
        <p className="text-lg text-slate-400 mb-12 text-center max-w-2xl mx-auto">Cole o resumo da sua última call e veja o que a nossa IA acha das suas promessas vazias.</p>

        {!roasted ? (
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl">
            <textarea 
              value={text} 
              onChange={e => setText(e.target.value)} 
              placeholder="Ex: Alinhamos que vamos entregar a primeira versão semana que vem. O design fica pro João dar uma olhada depois."
              className="w-full h-48 bg-slate-900 border border-slate-600 rounded-xl p-4 text-white focus:border-indigo-500 outline-none mb-6 resize-none"
            />
            <button onClick={handleRoast} disabled={analyzing} className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-colors disabled:opacity-50">
              {analyzing ? '🔥 Achando os buracos no escopo...' : '🔥 Fazer o Roast'}
            </button>
          </div>
        ) : (
          <div className="bg-slate-800 p-8 rounded-3xl border border-red-500 shadow-xl shadow-red-900/20">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">🚨</span>
              <div>
                <h3 className="text-2xl font-bold text-white">Score de Clareza: 22/100</h3>
                <p className="text-red-400">Um desastre esperando para acontecer.</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="bg-red-900/20 border border-red-800/50 p-4 rounded-xl">
                <p className="text-red-300 font-bold mb-1">Risco Detectado: Prazos Falsos</p>
                <p className="text-slate-400 text-sm">"Semana que vem" não é um prazo. É terça? É sexta às 18h?</p>
              </div>
              <div className="bg-red-900/20 border border-red-800/50 p-4 rounded-xl">
                <p className="text-red-300 font-bold mb-1">Risco Detectado: Responsabilidade Vaga</p>
                <p className="text-slate-400 text-sm">"Pro João dar uma olhada". O João sabe disso? Ele vai revisar ou aprovar?</p>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8 text-center">
              <p className="text-white font-bold mb-4">Pare de fechar acordos assim.</p>
              <a href="/waitlist" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl transition-colors inline-block">
                Instalar Extensão (Beta)
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\viral\WallOfConfusion.tsx
```typescript
export default function WallOfConfusion() {
  const cards = [
    { text: "Depois a gente vê como fica essa parte.", risk: "Escopo aberto de alta periculosidade." },
    { text: "Acho que dá pra fazer.", risk: "Dá pra fazer não significa que está no orçamento atual." },
    { text: "Fica combinado então.", risk: "O que ficou combinado? Zero detalhamento." },
    { text: "Semana que vem eu te dou um toque.", risk: "Efeito 'Ghosting' potencializado." }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-4 text-center tracking-tight">O Mural da Confusão</h1>
        <p className="text-lg text-slate-500 mb-16 text-center max-w-2xl mx-auto">As frases mais perigosas faladas diariamente em reuniões corporativas.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 transform transition hover:-translate-y-1">
              <p className="text-xl font-medium text-slate-800 italic mb-6">"{c.text}"</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Risco Detectado</p>
                <p className="text-sm text-slate-600">{c.risk}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-indigo-600 p-12 rounded-3xl shadow-xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ouviu algo pior hoje?</h2>
          <p className="text-indigo-200 mb-8">Envie a pérola que você ouviu na última call e ajude nossa IA a detectar os piores mal-entendidos.</p>
          <form onSubmit={e => { e.preventDefault(); alert('Enviado!'); }} className="max-w-md mx-auto flex flex-col gap-4">
            <input required placeholder="Digite a frase aqui..." className="w-full bg-indigo-700/50 border border-indigo-400 rounded-xl p-4 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white" />
            <button type="submit" className="bg-white text-indigo-900 font-bold py-4 rounded-xl shadow hover:bg-slate-50 transition-colors">
              Adicionar ao Mural
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: src\todeacordo\src\viral\WhatsAppViralKit.tsx
```typescript
import { copyBank } from '../data/copyBank';

export default function WhatsAppViralKit() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copiado para a área de transferência!');
  };

  return (
    <div className="min-h-screen bg-green-50 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-900 mb-4 text-center">Kit Viral de WhatsApp</h1>
        <p className="text-lg text-green-700 mb-12 text-center">Use as copys abaixo para engajar clientes, enviar entendimentos e convidar parceiros.</p>

        <div className="space-y-6">
          {copyBank.whatsapp.map((msg, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-green-200">
              <p className="text-slate-800 text-lg mb-4 whitespace-pre-wrap">"{msg.replace('[LINK]', 'https://todeacordo.com.br/valida/meet-demo')}"</p>
              <div className="flex gap-4">
                <button onClick={() => handleCopy(msg.replace('[LINK]', 'https://todeacordo.com.br/valida/meet-demo'))} className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 px-6 rounded-lg transition-colors text-sm">
                  Copiar
                </button>
                <a href={`https://wa.me/?text=${encodeURIComponent(msg.replace('[LINK]', 'https://todeacordo.com.br/valida/meet-demo'))}`} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm flex items-center gap-2">
                  <span>📱</span> Enviar no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

```

---

## Arquivo: api\chat_agent.js
```javascript
import { createClient } from "@supabase/supabase-js";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log("[chat_agent supabase mode]", {
  hasSupabaseUrl: !!SUPABASE_URL,
  hasServiceRole: !!SUPABASE_SERVICE_ROLE_KEY,
  usingAdminClient: !!SUPABASE_SERVICE_ROLE_KEY
});

const supabase = (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY)
  ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
  : null;

// Helper function to update metadata context summary asynchronously
async function updateContextSummaryIfNeeded(leadId, currentLead, chatHistoryMsgs) {
  if (!leadId || !chatHistoryMsgs || chatHistoryMsgs.length < 4) return;
  try {
    const prompt = `Resuma as informações operacionais cruciais sobre este lead com base na conversa a seguir.
Foque em: restrições, decisões (ex: "é prospect_parceiro", "não é cliente final", "atua em direito imobiliário"), objetivos ou novos combinados.
Seja extremamente curto (máximo de 3 frases).

Conversa:
${chatHistoryMsgs.map(m => `${m.role === 'user' ? 'Usuário' : 'Copiloto'}: ${m.content}`).join("\n")}

Retorne APENAS o resumo operacional em texto corrido.`;

    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        temperature: 0.3,
        messages: [{ role: "user", content: prompt }]
      })
    });
    
    if (response.ok) {
      const data = await response.json();
      const summary = data?.choices?.[0]?.message?.content?.trim();
      if (summary) {
        const metadata = currentLead.metadata || {};
        metadata.context_summary = summary;
        
        await supabase
          .from("taxmanagers_leads")
          .update({ metadata })
          .eq("id", leadId);
          
        console.log("[chat_agent] Updated metadata.context_summary for lead", leadId);
      }
    }
  } catch (e) {
    console.error("Failed to update context summary:", e);
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: true, message: "Method not allowed" });
  }

  const { lead: initialLead, messages, userMessage } = req.body || {};

  if (!initialLead) {
    return res.status(400).json({ error: true, message: "Missing lead details" });
  }

  if (!supabase) {
    return res.status(500).json({ error: true, message: "Configuração Supabase incompleta no backend" });
  }

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: true, message: "Missing Groq API Key configuration" });
  }

  let lead = initialLead;
  let agentProfile = null;
  let agentOutputs = null;
  let interactions = [];
  const leadId = lead.id;

  // Fetch latest data from Supabase if leadId exists
  if (leadId) {
    try {
      const { data: dbLead, error: dbLeadError } = await supabase
        .from("taxmanagers_leads")
        .select("*")
        .eq("id", leadId)
        .single();
      if (!dbLeadError && dbLead) {
        lead = dbLead;
      }

      const { data: profileData } = await supabase
        .from("taxmanagers_agent_profiles")
        .select("*")
        .eq("lead_id", leadId)
        .maybeSingle();
      agentProfile = profileData;

      const { data: outputsData } = await supabase
        .from("taxmanagers_agent_outputs")
        .select("*")
        .eq("lead_id", leadId)
        .maybeSingle();
      agentOutputs = outputsData;

      const { data: interactionsData } = await supabase
        .from("taxmanagers_interactions")
        .select("*")
        .eq("lead_id", leadId)
        .order("created_at", { ascending: false });
      if (interactionsData) {
        interactions = interactionsData;
      }

      console.log("[chat_agent timeline debug]", {
        lead_id: leadId,
        interactions_count: interactions?.length || 0,
        interactions_preview: interactions?.slice(0, 3)?.map(i => ({
          id: i.id,
          type: i.type,
          direction: i.direction,
          content: i.content,
          created_at: i.created_at
        }))
      });
    } catch (err) {
      console.error("Error fetching latest lead/agent data in backend:", err);
    }
  }

  const metadata = lead.metadata || {};

  // Build context summary details
  const contextSummaryText = metadata.context_summary ? `\nResumo operacional acumulado do lead: ${metadata.context_summary}` : "";

  // Determine lead role using metadata.lead_type
  let leadType = metadata.lead_type || metadata.lead_role;
  let leadTypePromptStr = "";

  if (leadType) {
    leadTypePromptStr = `Tipo do lead definido pelo sistema: ${leadType}. Não altere essa classificação sem solicitação explícita do usuário.`;
  } else {
    // If not present, IA suggests a classification but marks as hypothesis
    const cargo = (lead?.cargo || "").toLowerCase();
    const empresa = (lead?.empresa || "").toLowerCase();

    const partnerKeywords = [
      "advogado", "advogada", "consultor", "consultora", "contador", "contadora", 
      "tax", "fiscal", "tributario", "tributaria", "advisory", "partner", "socio", 
      "socia", "founder", "cfo", "controller", "diretor fiscal", "diretora fiscal", 
      "financeiro", "financeira", "boutique", "escritorio", "direito", "contabilidade"
    ];

    const isPartnerRelated = partnerKeywords.some(kw => cargo.includes(kw) || empresa.includes(kw));
    let suggestedRole = "indefinido";
    if (isPartnerRelated) {
      suggestedRole = "prospect_parceiro";
    } else {
      const companyKeywords = [
        "industria", "industrial", "varejo", "varejista", "agro", "agronegocio", 
        "energia", "construcao", "incorporadora", "logistica", "grupo", "holding", 
        "comercio", "comercial", "servicos", "transportadora", "distribuidora", "fabrica"
      ];
      const isCompanyRelated = companyKeywords.some(kw => cargo.includes(kw) || empresa.includes(kw));
      if (isCompanyRelated) {
        suggestedRole = "cliente_final_empresa";
      }
    }
    leadType = suggestedRole;
    leadTypePromptStr = `lead_type ausente. Sugestão: ${suggestedRole}. Marque esta classificação claramente como uma hipótese.`;
  }

  // Format blocks
  const oficialDataBlock = `====================================
DADOS ESTRUTURADOS - FONTE OFICIAL
====================================
lead_id: ${lead.id || "N/A"}
nome: ${lead.nome || "N/A"}
cargo: ${lead.cargo || "N/A"}
empresa: ${lead.empresa || "N/A"}
email: ${lead.email || "N/A"}
telefone: ${lead.telefone || "N/A"}
url: ${lead.url || "N/A"}
linkedin_key: ${lead.linkedin_key || "N/A"}
status: ${lead.status || "N/A"}
import_status: ${lead.import_status || "N/A"}
lead_type: ${leadType}
metadata: ${JSON.stringify(metadata, null, 2)}
`;

  const cloneIaBlock = `====================================
CLONE IA
====================================
agent_profile: ${agentProfile ? JSON.stringify(agentProfile, null, 2) : "N/A"}
agent_outputs:
- perfil_operacional: ${agentOutputs?.perfil_operacional || "N/A"}
- tese: ${agentOutputs?.tese || "N/A"}
- icp: ${agentOutputs?.icp || "N/A"}
- lista_empresas: ${agentOutputs?.lista_empresas || "N/A"}
- mensagens: ${agentOutputs?.mensagens || "N/A"}
- cadencia: ${agentOutputs?.cadencia || "N/A"}
- next_actions: ${agentOutputs?.next_actions || "N/A"}
`;

  let timelineBlockStr = "Sem conteúdo textual disponível na timeline.";
  if (interactions && interactions.length > 0) {
    const formatted = interactions
      .map(item => {
        const timeStr = item.created_at || "N/A";
        const contentStr = item.content ? item.content : "Sem conteúdo textual disponível na timeline.";
        return `- [${timeStr}] [${item.type || "N/A"}]: ${contentStr}`;
      })
      .filter(Boolean);
    if (formatted.length > 0) {
      timelineBlockStr = formatted.join("\n");
    }
  }
  const timelineBlock = `### TIMELINE DO LEAD
${timelineBlockStr}
`;

  // Build chat history for Groq (Limit to last 6 messages to avoid rate limits / token overflow)
  let chatHistoryToUse = messages || [];
  if (chatHistoryToUse.length > 6) {
    chatHistoryToUse = chatHistoryToUse.slice(-6);
  }

  const chatHistoryStr = chatHistoryToUse.map(msg => `${msg.role === 'assistant' ? 'Copiloto' : 'Usuário'}: ${msg.content}`).join("\n");
  const chatHistoryBlock = `====================================
CHAT HISTORY / ORIENTAÇÕES DO USUÁRIO
====================================
${chatHistoryStr || "Nenhum histórico ou orientação anterior."}
`;

  const attachmentsBlock = `====================================
ANEXOS PROCESSADOS
====================================
${JSON.stringify(metadata.attachments_processed || [], null, 2)}
`;

    const rulesBlock = `====================================
REGRAS DO SISTEMA
====================================
- Nunca invente fatos.
- Nunca trate hipótese como fato.
- Nunca altere lead_type definido pelo sistema.
- Se faltar informação, diga que falta.
- Se o lead_type for prospect_parceiro, não vender como cliente final.
- Se o lead_type for cliente_final_empresa, focar na empresa e tese tributária.
- Se qualquer anexo em attachments_processed tiver processed = false (ou se o anexo foi recebido mas não extraído/processado), você DEVE incluir a seguinte frase no início de sua resposta (na seção FATOS OBSERVADOS ou DIAGNÓSTICO):
  "Recebi indicação de anexo, mas o conteúdo visual ainda não foi extraído pelo sistema."
- Se houver processed = true em qualquer anexo, use explicitamente o conteúdo extraído dos anexos para responder e personalizar a análise.
- Proibir resposta final perguntando "O que você acha?". O agente deve recomendar uma ação.
- Para prospect_parceiro, não assumir automaticamente que a empresa dele é o cliente final. A pessoa pode ser parceiro potencial, originador, especialista de nicho, dono de relacionamento ou canal comercial.
- ${leadTypePromptStr}
`;

  const userQueryBlock = `====================================
PERGUNTA DO USUÁRIO
====================================
${userMessage || "Analise o lead com base nas informações fornecidas."}
`;

  // Build the final single message representing the user query blocks
  const fullPromptContext = `${oficialDataBlock}

${cloneIaBlock}

${timelineBlock}

${chatHistoryBlock}

${attachmentsBlock}

${rulesBlock}

${userQueryBlock}`;

  const conversation = [
    {
      role: "system",
      content: `Você é o Copiloto de Prospecção Tributária da TaxManagers.
Você está conversando com o Alexandre (operador master da TaxManagers) sobre como tratar o lead.

---
REGRA DE PRIORIDADE DE INTENÇÃO (MÁXIMA PRIORIDADE):
Se a pergunta ou instrução do usuário for curta e pontual, como "consegue ver?", "coloquei na timeline", "sugere mensagem?", "como respondo?":
NUNCA use o formato completo/dossiê (com FATOS OBSERVADOS, DIAGNÓSTICO, etc). Responda de forma cirúrgica, prática e direta.

Para perguntas sobre "consegue ver a timeline?":
- ATENÇÃO: O conteúdo da timeline ESTÁ no seu contexto, na seção "### TIMELINE DO LEAD". Leia essa seção!
- Se a seção "### TIMELINE DO LEAD" contiver os dados reais (ex: notas de reunião, resumos): responda iniciando exatamente com "Sim. Pelo conteúdo da timeline, os pontos principais são: " e complete com o resumo cirúrgico do que você leu.
- APENAS se a seção "### TIMELINE DO LEAD" disser explicitamente "Sem conteúdo textual disponível", responda: "Não recebi o conteúdo da timeline no contexto. Consigo apenas ver que ele foi mencionado."

---
REGRAS ADICIONAIS E CRÍTICAS DE CONTEXTO E FLUXO:

1. REGRA DE VERIFICAÇÃO DE CONTEXTO
Nunca minta dizendo que leu um arquivo se a seção TIMELINE DO LEAD ou ANEXOS PROCESSADOS não tiver o conteúdo real.
Se o usuário perguntar se você consegue ver, LEIA os blocos fornecidos. Se os blocos contiverem as informações, resuma-as. Se não contiverem, use a frase de fallback acima.

2. REGRA DE PÓS-REUNIÃO E ORDEM CRONOLÓGICA DA TIMELINE
A timeline deve ser interpretada em ordem cronológica. Dê prioridade absoluta aos registros mais recentes. A resposta deve considerar a anotação mais recente como fonte principal de verdade. Quando houver conflito entre uma anotação antiga e uma anotação nova, prevalece a anotação mais recente.
Se a mensagem do usuário OU a anotação MAIS RECENTE da timeline contiver expressões como: "fiz reunião", "tive reunião", "conversei com", "falamos sobre", "na reunião", "quando falei", "não fez sentido", "reunião que tivemos", "resumo da reunião", "após a reunião", "acabamos de falar", "ele participou", "na reunião ele disse", "tivemos a reunião", "depois da reunião" ou similares, você deve considerar o estágio mental do lead obrigatoriamente como "pós_reunião".
Sob a condição "pós_reunião":
- É PROIBIDO dizer ou sugerir que a reunião ainda acontecerá. Anotações antigas sobre agendamento devem ser tratadas apenas como histórico superado.
- NÃO USE as frases: "a reunião será", "aguardar a reunião", "preparar para a reunião", "reunião agendada", "discutir na reunião de hoje" ou similares.
- Priorize estruturar sua resposta contendo: resumo executivo, sinais de interesse, objeções, pendências, próximo passo concreto e mensagem de follow-up.

3. REGRA DE RESPOSTA PARA "COLOQUEI RESUMO NA TIMELINE"
Quando o usuário disser que colocou um resumo na timeline:
- Verifique se o conteúdo textual da timeline de fato veio no contexto.
- Se veio, resuma os pontos principais e sugira o próximo passo (NÃO repita o dossiê completo).
- Se não veio, diga explicitamente que o conteúdo não foi recebido e peça para reenviar ou verificar a integração.

4. REGRAS DE FIT E OBJEÇÕES DA TIMELINE
- Se a anotação mais recente contiver "não fez sentido", isso DEVE ser tratado como sinal negativo forte de fit comercial. NÃO transforme "não fez sentido" em "precisa de mais esclarecimentos", salvo se o usuário pedir tentativa de recuperação.
- Para perguntas como "é bom prospect_parceiro agora?" (ou similares sobre fit), responda de forma decisiva com uma destas opções: "bom fit", "fit moderado", "baixo fit imediato" ou "descartado por ora".
- Se a timeline mais recente indicar que o Clone IA não fez sentido para o lead, classifique como "baixo fit imediato". A mensagem sugerida deve ser de follow-up elegante (relacionamento/educação), não uma nova tentativa agressiva de venda.
- PROIBIDO repetir a área de atuação antiga (ex: "direito imobiliário") se a anotação mais recente indicar expressamente outra atuação (ex: Civil, Criminal, etc). A anotação mais recente prevalece sobre sugestões anteriores da IA.

---
INSTRUÇÕES CRÍTICAS DE ANÁLISE E FORMATO:

1. CLASSIFICAÇÃO INTERNA DA INTENÇÃO DO USUÁRIO
Antes de responder, você deve classificar internamente a intenção da pergunta em uma destas categorias:
- analise_lead
- melhorar_mensagem
- criar_mensagem
- criar_followup
- corrigir_dado
- definir_proximo_movimento
- responder_duvida

NÃO exiba essa classificação no texto da resposta final, a menos que o usuário peça explicitamente.

2. REGRAS DE FORMATO CONFORME A INTENÇÃO CLASSIFICADA:

Se a intenção for "melhorar_mensagem":
- NÃO repita FATOS OBSERVADOS, DIAGNÓSTICO, HIPÓTESES ou SCORE.
- Entregue diretamente uma versão melhorada da mensagem.
- Explique em até 3 bullets objetivos o que foi melhorado.
- Preserve a intenção comercial do usuário, mas melhore a clareza, força, concisão e aderência ao tipo de lead.

Se a intenção for "criar_mensagem":
- Entregue a mensagem pronta para envio.
- Limite máximo de 700 caracteres.
- Tom consultivo, direto, comercial e sem exagero.
- Evite linguagem institucional genérica.
- PROIBIDO usar frases vazias/institucionais como: "gostaria de apresentar uma oportunidade", "aumentar sua receita", "soluções inovadoras", "transformar seu negócio", "o que você acha?".

Se a intenção for "criar_followup":
- Entregue apenas o follow-up.
- Tom leve, direto e natural (não parecer cobrança).
- Limite máximo de 500 caracteres.

Se a intenção for "analise_lead" (ou se nenhuma das intenções cirúrgicas de mensagem/followup acima for o foco principal da pergunta):
Toda resposta deve seguir estritamente a ordem e títulos abaixo (sendo direta, cirúrgica e prática):
FATOS OBSERVADOS
DIAGNÓSTICO
HIPÓTESES
CONFIANÇA DAS INFORMAÇÕES
SCORE COMERCIAL
CLONE IA RECOMENDADO
PRÓXIMO MOVIMENTO
MENSAGEM SUGERIDA

3. DIRETRIZES DE CONTEÚDO CONFORME O TIPO DE LEAD (lead_type):

A) Se lead_type for "prospect_parceiro":
- Oriente a mensagem para venda de parceria com a TaxManagers, e NÃO para venda de consultoria tributária direta à empresa do lead.
- Posicione a TaxManagers como uma infraestrutura comercial-tributária completa para o parceiro, composta por:
  * Clone IA comercial-tributário;
  * Base própria de prospecção com aproximadamente 20.000 contatos;
  * Metodologia de abordagem;
  * Apoio na originação de oportunidades;
  * Retaguarda técnica sênior;
  * Apoio na qualificação, quantificação, validação e condução operacional das oportunidades;
  * Suporte para cumprimento de obrigações acessórias quando aplicável;
  * Possibilidade de o parceiro atuar sem depender exclusivamente da própria carteira pessoal.
- A mensagem deve deixar claro que a TaxManagers ajuda o parceiro a estruturar uma operação, e não apenas oferece um software.

B) Se o lead for contador, professor, consultor, advogado, tributarista, CFO, controller ou profissional com rede e autoridade (autoridade técnica):
- Valorize a autoridade técnica do prospect.
- Destaque o potencial de rede e a possibilidade de transformar conhecimento e relacionamento em operação comercial lucrativa.
- Enfatize o uso da estrutura da TaxManagers para originar e conduzir oportunidades e a parceria com retaguarda (não contratação de software).
- Exemplo de tom/direção: "Vi sua atuação como contador e professor e queria te apresentar uma possibilidade de parceria com a TaxManagers. Estamos estruturando uma operação com IA, base própria de prospecção e retaguarda técnica sênior para apoiar parceiros na originação e condução de oportunidades tributárias. Acho que pode conversar bem com seu perfil. Você teria 15 minutos na quinta ou sexta?"

C) Se lead_type for "cliente_final_empresa":
- NÃO venda parceria, clone do parceiro ou adesão à TaxManagers.
- Foque o teor em: diagnóstico tributário, saneamento fiscal, créditos, Reforma Tributária, riscos operacionais, oportunidades de caixa e reunião técnica.

4. REGRAS PARA "CLONE IA RECOMENDADO":
- Para "prospect_parceiro", o Clone IA sempre se aplica. NUNCA responda "Clone IA não se aplica", "Não se aplica nesse caso", ou "Não há clone recomendado" sem oferecer uma recomendação preliminar. Se faltar informação, use a fórmula: "Recomendação preliminar: Clone IA de Originação Comercial-Tributária para parceiro [perfil do lead]."
- Se o prospect_parceiro atuar em direito imobiliário, sugerir: "Clone IA de Originação Imobiliário-Tributária." A tese deste clone deve conectar obrigatoriamente o direito imobiliário com: Reforma Tributária, holdings, locações, compra e venda, sucessório, regularização, incorporação, estruturação patrimonial e oportunidades tributárias conduzidas com retaguarda TaxManagers. Exemplo de tese: "Usar a autoridade do parceiro em direito imobiliário para abrir conversas sobre impactos tributários em holdings, locações, sucessório, compra e venda, incorporação e estruturação patrimonial, com apoio técnico e operacional da TaxManagers na identificação, qualificação e condução das oportunidades."
- Exemplo para contador/professor: "Clone IA de Originação Contábil-Tributária, voltado a apoiar o parceiro na prospecção, qualificação e condução inicial de oportunidades tributárias junto a empresas da base TaxManagers ou da sua rede."

5. HIERARQUIA DE FATOS E HIPÓTESES:
- NUNCA invente setor, atuação, interesse ou dor do prospect.
- Separe sempre claramente o que é fato observado, o que é hipótese comercial e o que é sugestão de abordagem.
- Se não houver dados suficientes, use explicitamente: "Não encontrei informação suficiente para afirmar isso. A recomendação abaixo é preliminar."

6. REGRA DE NÃO REPETIÇÃO EM PEDIDOS PONTUAIS:
- Quando o usuário fizer pedidos pontuais como:
  * "consegue ver?"
  * "coloquei na timeline"
  * "sugere mensagem?"
  * "melhore a mensagem"
  * "como respondo?"
  * "o que mando agora?"
  o Copiloto NÃO deve responder com o relatório completo (a estrutura com todas as seções de FATOS, DIAGNÓSTICO, HIPÓTESES, SCORE e CLONE), salvo se o usuário pedir explicitamente uma análise completa. Nesses casos, responda de forma cirúrgica, prática e diretamente orientada ao próximo passo.

7. NUNCA finalize com perguntas abertas como "O que você acha?". Recomende uma ação concreta no Próximo Movimento (se aplicável ao formato).`
    },
    {
      role: "user",
      content: fullPromptContext
    }
  ];

  console.log("[chat_agent request]", {
    lead_id: leadId,
    hasLead: !!lead,
    chatHistoryLength: chatHistoryToUse?.length || 0,
    timelineLength: interactions?.length || 0,
    promptLength: conversation[0]?.content?.length || 0,
    hasGroqKey: !!GROQ_API_KEY
  });

  try {
    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.25,
        messages: conversation
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[chat_agent] Groq main model failed:", {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });

      // Fallback model
      const fallbackResponse = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          temperature: 0.25,
          messages: conversation
        })
      });

      if (!fallbackResponse.ok) {
        const fbErrorText = await fallbackResponse.text();
        console.error("[chat_agent] Groq fallback model failed:", {
          status: fallbackResponse.status,
          statusText: fallbackResponse.statusText,
          error: fbErrorText
        });
        throw new Error("Both Groq models failed");
      }
      
      const data = await fallbackResponse.json();
      const content = data?.choices?.[0]?.message?.content || "";
      
      // Update summary in background
      if (leadId) {
        updateContextSummaryIfNeeded(leadId, lead, [...chatHistoryToUse, { role: "user", content: userMessage }, { role: "assistant", content }]);
      }

      return res.status(200).json({ error: false, content });
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content || "";
    
    // Update summary in background
    if (leadId) {
      updateContextSummaryIfNeeded(leadId, lead, [...chatHistoryToUse, { role: "user", content: userMessage }, { role: "assistant", content }]);
    }

    return res.status(200).json({ error: false, content });
  } catch (err) {
    console.error("[chat_agent]", err);
    return res.status(500).json({
      error: true,
      message: err.message || "Internal server error"
    });
  }
}

```

---

## Arquivo: api\personalize_agent.js
```javascript
import { createClient } from "@supabase/supabase-js";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function fallbackResponse(lead, reason) {
  const nome = lead?.nome || "este lead";
  const empresa = lead?.empresa || "a empresa";
  const cargo = lead?.cargo || "decisor";

  return {
    error: true,
    reason,
    short_note: `Olá ${nome}, vi sua atuação como ${cargo} em ${empresa}. Tenho uma hipótese tributária objetiva para avaliar oportunidade fiscal sem pedir documentos sensíveis neste primeiro contato.`,
    long_email: `Olá ${nome}, tudo bem?\n\nMapeei uma hipótese inicial para ${empresa}: avaliar oportunidades fiscais e pontos de saneamento tributário que podem gerar caixa, reduzir risco ou melhorar a preparação para a transição IBS/CBS.\n\nA ideia é começar por uma leitura executiva, sem pedido de SPED ou arquivo sensível no primeiro contato.\n\nSe fizer sentido, posso te mostrar um diagnóstico inicial em poucos minutos.`,
    article_pitch: `Para ${empresa}, eu começaria por um mapa rápido de riscos e oportunidades fiscais: créditos, classificação, transição da reforma e pontos de caixa oculto.`,
    strategy_summary: `Fallback estruturado gerado sem IA externa. Lead: ${nome}. Empresa: ${empresa}. Cargo: ${cargo}.`,
    next_step: "Revisar manualmente e enviar como abordagem inicial."
  };
}

async function processVisionImage(base64Image, type) {
  if (!base64Image) return null;
  const isProfile = type === "profile";
  const resultType = isProfile ? "profile_print" : "contact_print";

  const emptyEntities = {
    nome: "",
    cargo: "",
    empresa: "",
    email: "",
    telefone: "",
    linkedin: ""
  };

  if (!GROQ_API_KEY || GROQ_API_KEY.includes("YOUR_") || GROQ_API_KEY === "") {
    return {
      type: resultType,
      processed: false,
      reason: "image_received_but_not_processed",
      ocr_text: "",
      visual_summary: "",
      extracted_entities: emptyEntities
    };
  }

  try {
    const promptText = isProfile 
      ? "Extraia todo o texto visível deste print de perfil (LinkedIn), incluindo formação, cargo, descrição, empresa e histórico de carreira. Retorne o texto extraído em formato de OCR limpo e um resumo visual."
      : "Extraia todo o texto visível deste print de contato, incluindo e-mails, telefones, aniversários ou redes sociais. Retorne o texto extraído em formato de OCR limpo e um resumo visual.";

    const response = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.2-11b-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: promptText
              },
              {
                type: "image_url",
                image_url: {
                  url: base64Image
                }
              }
            ]
          }
        ],
        temperature: 0.1
      })
    });

    if (response.ok) {
      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content || "";
      if (!content) {
        return {
          type: resultType,
          processed: false,
          reason: "vision_api_error",
          ocr_text: "",
          visual_summary: "",
          extracted_entities: emptyEntities
        };
      }
      return {
        type: resultType,
        processed: true,
        reason: null,
        ocr_text: content,
        visual_summary: `Processamento do anexo de ${isProfile ? "perfil" : "contato"} concluído com sucesso.`,
        extracted_entities: emptyEntities
      };
    } else {
      const errText = await response.text();
      console.error(`Groq Vision failed for ${type}:`, errText);
      return {
        type: resultType,
        processed: false,
        reason: "vision_api_error",
        ocr_text: "",
        visual_summary: "",
        extracted_entities: emptyEntities
      };
    }
  } catch (err) {
    console.error(`Error in processVisionImage for ${type}:`, err);
    return {
      type: resultType,
      processed: false,
      reason: "vision_api_error",
      ocr_text: "",
      visual_summary: "",
      extracted_entities: emptyEntities
    };
  }
}

function buildPrompt(lead, contextExtra, agentProfile, agentOutputs, interactions, leadType, leadTypePromptStr) {
  const metadata = lead?.metadata || {};

  // 1. Oficial data block
  const oficialDataBlock = `====================================
DADOS ESTRUTURADOS - FONTE OFICIAL
====================================
lead_id: ${lead.id || "N/A"}
nome: ${lead.nome || "N/A"}
cargo: ${lead.cargo || "N/A"}
empresa: ${lead.empresa || "N/A"}
email: ${lead.email || "N/A"}
telefone: ${lead.telefone || "N/A"}
url: ${lead.url || "N/A"}
linkedin_key: ${lead.linkedin_key || "N/A"}
status: ${lead.status || "N/A"}
import_status: ${lead.import_status || "N/A"}
lead_type: ${leadType}
metadata: ${JSON.stringify(metadata, null, 2)}
`;

  // 2. Clone IA block
  const cloneIaBlock = `====================================
CLONE IA
====================================
agent_profile: ${agentProfile ? JSON.stringify(agentProfile, null, 2) : "N/A"}
agent_outputs:
- perfil_operacional: ${agentOutputs?.perfil_operacional || "N/A"}
- tese: ${agentOutputs?.tese || "N/A"}
- icp: ${agentOutputs?.icp || "N/A"}
- lista_empresas: ${agentOutputs?.lista_empresas || "N/A"}
- mensagens: ${agentOutputs?.mensagens || "N/A"}
- cadencia: ${agentOutputs?.cadencia || "N/A"}
- next_actions: ${agentOutputs?.next_actions || "N/A"}
`;

  // 3. Timeline block
  let timelineBlockStr = "Nenhuma atividade ou interação registrada na timeline.";
  if (interactions && interactions.length > 0) {
    timelineBlockStr = interactions.map(item => {
      const date = item.created_at ? new Date(item.created_at).toLocaleDateString("pt-BR") : "N/A";
      return `- [${date}] (${item.type}): ${item.content || ""}`;
    }).join("\n");
  }
  const timelineBlock = `====================================
TIMELINE / ATIVIDADES
====================================
${timelineBlockStr}
`;

  // 4. Chat history block
  const chatHistoryBlock = `====================================
CHAT HISTORY / ORIENTAÇÕES DO USUÁRIO
====================================
${lead?.chat_history || "Nenhum histórico ou orientação anterior."}
`;

  // 5. Attachments block
  const attachmentsBlock = `====================================
ANEXOS PROCESSADOS
====================================
${JSON.stringify(metadata.attachments_processed || [], null, 2)}
`;

  // Segment instructions based on the leadType
  let roleContextInstruction = "";
  if (leadType === "prospect_parceiro") {
    roleContextInstruction = `
O lead é classificado como **prospect_parceiro** (um advogado, contador ou consultor que queremos atrair para o ecossistema).
Portanto, o Clone IA sendo personalizado representa a **demonstração do próprio Clone IA comercial-tributário desse parceiro**.
Suas mensagens geradas ("short_note", "long_email", "article_pitch") devem ser escritas *da perspectiva do clone do prospect parceiro* direcionadas a potenciais *clientes finais* (empresas operacionais, diretores financeiros, CFOs).
Por exemplo:
- "short_note": Mensagem rápida no LinkedIn escrita por ${lead?.nome || "este profissional"} para um decisor de indústria/varejo, sugerindo avaliar oportunidades de saneamento fiscal sem pedir documentos sensíveis.
- "long_email": E-mail estruturado escrito por ${lead?.nome || "este profissional"} para o CFO de uma empresa operacional apresentando teses de transição da Reforma Tributária ou recuperação tributária focada em gerar caixa.
- "article_pitch": Uma provocação rápida ou tese sobre créditos fiscais que o clone dele enviaria.
- "strategy_summary": Explicação técnica do posicionamento de mercado que o Clone IA de ${lead?.nome || "este profissional"} adotará.
- "next_step": Próxima ação recomendada para o operador master (Alexandre) apresentar esse clone em modo demo para o prospect e fechar a adesão.`;
  } else if (leadType === "cliente_final_empresa") {
    roleContextInstruction = `
O lead é classificado como **cliente_final_empresa** (uma indústria, varejo, agro, etc.).
Portanto, o Clone IA sendo personalizado representa o clone comercial de um parceiro ativo (ou da TaxManagers) prospectando essa empresa.
Suas mensagens geradas devem abordar diretamente esta empresa (${lead?.empresa || "empresa alvo"}) com foco nas teses fiscais mais adequadas para o segmento dela.`;
  } else {
    roleContextInstruction = `
O papel do lead é indefinido. Estruture abordagens sugerindo a hipótese provável.`;
  }

  const rulesBlock = `====================================
REGRAS
====================================
- Nunca invente fatos.
- Nunca trate hipótese como fato.
- Nunca altere lead_type definido pelo sistema.
- Se faltar informação, diga que falta.
- Se o lead_type for prospect_parceiro, não vender como cliente final.
- Se o lead_type for cliente_final_empresa, focar na empresa e tese tributária.
- Se qualquer anexo em attachments_processed tiver processed = false (ou se o anexo foi recebido mas não extraído/processado), você DEVE obrigatoriamente incluir a seguinte frase no início de strategy_summary:
  "Recebi indicação de anexo, mas o conteúdo visual ainda não foi extraído pelo sistema."
- Se houver processed = true em qualquer anexo, você DEVE usar de forma explícita e clara o conteúdo extraído dos anexos para personalizar:
  - short_note
  - long_email
  - strategy_summary
  - next_step
- Não prometa recuperação garantida nas abordagens.
- Não peça SPED/EFD no primeiro contato.
- Importante: Se o histórico de conversas ou observações contiverem regras explícitas (ex: "ele trabalha com direito imobiliário", "não oferecer tese federal geral", "foco em parcerias comerciais", "não é cliente final"), você DEVE respeitar rigorosamente essas diretrizes na personalização das mensagens.
- Use linguagem executiva, curta, concreta e persuasiva.
- ${leadTypePromptStr}
`;

  return `
Você é o motor de personalização de Clones IA da TaxManagers.
A TaxManagers não vende "CRM com IA". A TaxManagers cria Clones IA comerciais-tributários que operam antes da contratação do serviço de parceria. O CRM é apenas a interface. O produto é o Clone IA.

Instrução de Contexto para o Papel:
${roleContextInstruction}

${oficialDataBlock}

${cloneIaBlock}

${timelineBlock}

${chatHistoryBlock}

${attachmentsBlock}

${rulesBlock}

====================================
TAREFA
====================================
Gere a estratégia de abordagem do lead.
A observação adicional do operador é: ${contextExtra || "Nenhuma"}
Retorne SOMENTE JSON válido, sem qualquer tipo de markdown ou texto externo.

Formato obrigatório do JSON:
{
  "short_note": "...",
  "long_email": "...",
  "article_pitch": "...",
  "strategy_summary": "...",
  "next_step": "..."
}
`;
}

async function callGroq(model, prompt) {
  const response = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      temperature: 0.45,
      messages: [
        {
          role: "system",
          content: "Você gera JSON válido para prospecção B2B tributária. Não use markdown. Retorne exclusivamente o JSON puro."
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Groq ${model} failed: ${response.status} ${text}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content || "{}";
  
  // Clean JSON formatting if LLM wrapped it in markdown code blocks
  let cleanContent = content.trim();
  if (cleanContent.startsWith("```json")) {
    cleanContent = cleanContent.slice(7);
  } else if (cleanContent.startsWith("```")) {
    cleanContent = cleanContent.slice(3);
  }
  if (cleanContent.endsWith("```")) {
    cleanContent = cleanContent.slice(0, -3);
  }
  cleanContent = cleanContent.trim();

  return JSON.parse(cleanContent);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: true, message: "Method not allowed" });
  }

  console.log("[personalize_agent body keys]", Object.keys(req.body || {}));

  const { lead: initialLead, context_extra, profile_image, contact_image } = req.body || {};
  const profile_image_base64 = profile_image;
  const contact_image_base64 = contact_image;

  console.log("[personalize_agent attachments]", {
    has_profile_image: !!profile_image_base64,
    has_contact_image: !!contact_image_base64,
    profile_image_size: profile_image_base64?.length || 0,
    contact_image_size: contact_image_base64?.length || 0
  });

  if (!initialLead) {
    return res.status(400).json(fallbackResponse({}, "missing_lead"));
  }

  if (!GROQ_API_KEY) {
    return res.status(200).json(fallbackResponse(initialLead, "missing_groq_api_key"));
  }

  let lead = initialLead;
  let agentProfile = null;
  let agentOutputs = null;
  let interactions = [];
  const leadId = lead.id;

  // Fetch latest data from Supabase if leadId is available
  if (leadId) {
    try {
      const { data: dbLead } = await supabase
        .from("taxmanagers_leads")
        .select("*")
        .eq("id", leadId)
        .single();
      if (dbLead) {
        lead = dbLead;
      }

      const { data: profileData } = await supabase
        .from("taxmanagers_agent_profiles")
        .select("*")
        .eq("lead_id", leadId)
        .maybeSingle();
      agentProfile = profileData;

      const { data: outputsData } = await supabase
        .from("taxmanagers_agent_outputs")
        .select("*")
        .eq("lead_id", leadId)
        .maybeSingle();
      agentOutputs = outputsData;

      const { data: interactionsData } = await supabase
        .from("taxmanagers_interactions")
        .select("*")
        .eq("lead_id", leadId)
        .order("created_at", { ascending: false });
      if (interactionsData) {
        interactions = interactionsData;
      }
    } catch (err) {
      console.error("Error fetching latest lead/agent data in personalize_agent backend:", err);
    }
  }

  // Process attachments if they are in the request payload
  const attachmentsProcessed = [];
  if (profile_image_base64) {
    const resImg = await processVisionImage(profile_image_base64, "profile");
    if (resImg) attachmentsProcessed.push(resImg);
  }
  if (contact_image_base64) {
    const resImg = await processVisionImage(contact_image_base64, "contact");
    if (resImg) attachmentsProcessed.push(resImg);
  }

  if (attachmentsProcessed.length > 0) {
    const currentMetadata = lead.metadata || {};
    // Clean flag so we know it has been processed
    const updatedMetadata = {
      ...currentMetadata,
      has_profile_attachment: profile_image_base64 ? false : currentMetadata.has_profile_attachment,
      has_contact_attachment: contact_image_base64 ? false : currentMetadata.has_contact_attachment,
      attachments_processed: [
        ...(currentMetadata.attachments_processed || []).filter(
          item => !attachmentsProcessed.some(newItem => newItem.type === item.type)
        ),
        ...attachmentsProcessed
      ]
    };
    
    try {
      await supabase
        .from("taxmanagers_leads")
        .update({ metadata: updatedMetadata })
        .eq("id", leadId);
      lead.metadata = updatedMetadata;
      console.log("[personalize_agent] Saved attachments_processed to Supabase for lead", leadId);
    } catch (dbErr) {
      console.error("Error updating lead metadata with attachments_processed:", dbErr);
    }
  }

  const metadata = lead.metadata || {};

  // Determine lead role using metadata.lead_type
  let leadType = metadata.lead_type || metadata.lead_role;
  let leadTypePromptStr = "";

  if (leadType) {
    leadTypePromptStr = `Tipo do lead definido pelo sistema: ${leadType}. Não altere essa classificação sem solicitação explícita do usuário.`;
  } else {
    // If not present, suggest classification as hypothesis
    const cargo = (lead?.cargo || "").toLowerCase();
    const empresa = (lead?.empresa || "").toLowerCase();

    const partnerKeywords = [
      "advogado", "advogada", "consultor", "consultora", "contador", "contadora", 
      "tax", "fiscal", "tributario", "tributaria", "advisory", "partner", "socio", 
      "socia", "founder", "cfo", "controller", "diretor fiscal", "diretora fiscal", 
      "financeiro", "financeira", "boutique", "escritorio", "direito", "contabilidade"
    ];

    const isPartnerRelated = partnerKeywords.some(kw => cargo.includes(kw) || empresa.includes(kw));
    let suggestedRole = "indefinido";
    if (isPartnerRelated) {
      suggestedRole = "prospect_parceiro";
    } else {
      const companyKeywords = [
        "industria", "industrial", "varejo", "varejista", "agro", "agronegocio", 
        "energia", "construcao", "incorporadora", "logistica", "grupo", "holding", 
        "comercio", "comercial", "servicos", "transportadora", "distribuidora", "fabrica"
      ];
      const isCompanyRelated = companyKeywords.some(kw => cargo.includes(kw) || empresa.includes(kw));
      if (isCompanyRelated) {
        suggestedRole = "cliente_final_empresa";
      }
    }
    leadType = suggestedRole;
    leadTypePromptStr = `lead_type ausente. Sugestão: ${suggestedRole}. Marque esta classificação claramente como uma hipótese.`;
  }

  const prompt = buildPrompt(lead, context_extra, agentProfile, agentOutputs, interactions, leadType, leadTypePromptStr);

  const models = [
    "llama-3.3-70b-versatile",
    "llama-3.1-8b-instant"
  ];

  for (const model of models) {
    try {
      const result = await callGroq(model, prompt);

      return res.status(200).json({
        error: false,
        model,
        short_note: result.short_note || "",
        long_email: result.long_email || "",
        article_pitch: result.article_pitch || "",
        strategy_summary: result.strategy_summary || "",
        next_step: result.next_step || "",
        updated_metadata: lead.metadata
      });
    } catch (err) {
      console.error("[personalize_agent]", model, err);
    }
  }

  return res.status(200).json(fallbackResponse(lead, "groq_failed"));
}

```

---

## Arquivo: api\todeacordo-consensus.js
```javascript
// Vercel Serverless Function para o ToDeAcordo
// Substitui o express do backend/server.js

const LLAMA_API_URL = process.env.LLAMA_API_URL || 'https://api.groq.com/openai/v1/chat/completions';
const LLAMA_API_KEY = process.env.LLAMA_API_KEY || '';
const LLAMA_MODEL = process.env.LLAMA_MODEL || 'llama-3.3-70b-versatile';

const SYSTEM_PROMPT = `Você é um assistente de extração de dados estritamente baseado no transcript fornecido.
Extraia da conversa as decisões, obrigações, prazos e pendências.

REGRAS CRÍTICAS E OBRIGATÓRIAS DE GROUNDING (ANTI-ALUCINAÇÃO):
1. USE EXCLUSIVAMENTE o texto fornecido em "Transcrição". 
2. IGNORE qualquer conhecimento prévio sobre ToDeAcordo, MVP, Manifest V3, OpenAI, Edge Function, Groq, Supabase, backend ou similares. Se esses termos não aparecerem literalmente no transcript, eles não podem existir na resposta.
3. NÃO INVENTE decisões, combinados, responsáveis, prazos ou obrigações que não foram explicitamente falados.
4. Para cada item adicionado nas listas, você DEVE extrair um "evidence_quote" exato (literal) do trecho da transcrição que sustenta essa extração. Se não houver fala clara que sustente a extração, DESCARTAR o item.
5. Se o transcript estiver confuso, curto, fragmentado ou insuficiente para extrair acordos firmes, retorne as listas VAZIAS e um confidence_score baixo (0 a 30).
6. Retorne APENAS JSON válido, sem markdown.

Formato JSON esperado:
{
  "title": "string (resumo em até 5 palavras do assunto principal falado, ou 'Entendimento insuficiente')",
  "summary": "string (resumo estrito do que foi falado. Se insuficiente, diga 'A conversa capturada não contém elementos suficientes.')",
  "agreements": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "decisions": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "obligations": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "pending_items": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "responsible_parties": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "deadlines": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "open_questions": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "disputed_points": [{"text": "string", "evidence_quote": "string exata do transcript"}],
  "confidence_score": 0 a 100
}`;

function normalizeString(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^\w\sÀ-ÿ]/g, '').replace(/\s+/g, ' ').trim();
}

function validateItems(items, normalizedTranscript) {
  if (!Array.isArray(items)) return [];
  return items.filter(item => {
    if (!item.text || !item.evidence_quote) return false;
    const normalizedQuote = normalizeString(item.evidence_quote);
    if (!normalizedQuote || normalizedQuote.length < 5) return false;
    return normalizedTranscript.includes(normalizedQuote);
  });
}

export default async function handler(req, res) {
  // CORS setup
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Health check
  if (req.method === 'GET') {
    return res.status(200).json({ ok: true, service: 'todeacordo-vercel-backend' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { meeting_id, source_platform, participants, transcript_segments } = req.body;

    if (!transcript_segments || transcript_segments.length === 0) {
      return res.status(400).json({ error: 'Nenhum segmento fornecido' });
    }

    const conversationText = transcript_segments.map(s => `${s.speaker}: ${s.text}`).join('\n');
    const charCount = conversationText.length;
    const segmentCount = transcript_segments.length;

    // Gate
    if (segmentCount < 3 && charCount < 50) {
      return res.status(200).json({
        title: "Entendimento insuficiente",
        summary: "A conversa capturada é muito curta para extrair combinados firmes.",
        agreements: [],
        decisions: [],
        obligations: [],
        pending_items: [],
        responsible_parties: [],
        deadlines: [],
        open_questions: [],
        disputed_points: [],
        confidence_score: 0,
        model: LLAMA_MODEL,
        provider: 'vercel-edge',
        is_mock: false,
        generated_at: Date.now(),
        transcript_char_count: charCount,
        transcript_segment_count: segmentCount
      });
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: `Contexto da reunião:\nID: ${meeting_id}\nPlataforma: ${source_platform}\nParticipantes: ${participants.join(', ')}\n\nTranscrição:\n${conversationText}` }
    ];

    const llamaResponse = await fetch(LLAMA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LLAMA_API_KEY}`
      },
      body: JSON.stringify({
        model: LLAMA_MODEL,
        messages: messages,
        temperature: 0.1,
        max_tokens: 2000,
        response_format: { type: "json_object" }
      })
    });

    if (!llamaResponse.ok) {
      throw new Error(`Llama API error: ${llamaResponse.status}`);
    }

    const data = await llamaResponse.json();
    let parsedContent;
    try {
      parsedContent = JSON.parse(data.choices[0].message.content);
    } catch (e) {
      throw new Error('Falha ao parsear JSON da LLM');
    }

    const normalizedTranscript = normalizeString(conversationText);

    // Filter hallucinated items
    parsedContent.agreements = validateItems(parsedContent.agreements, normalizedTranscript);
    parsedContent.decisions = validateItems(parsedContent.decisions, normalizedTranscript);
    parsedContent.obligations = validateItems(parsedContent.obligations, normalizedTranscript);
    parsedContent.pending_items = validateItems(parsedContent.pending_items, normalizedTranscript);
    parsedContent.responsible_parties = validateItems(parsedContent.responsible_parties, normalizedTranscript);
    parsedContent.deadlines = validateItems(parsedContent.deadlines, normalizedTranscript);
    parsedContent.open_questions = validateItems(parsedContent.open_questions, normalizedTranscript);
    parsedContent.disputed_points = validateItems(parsedContent.disputed_points, normalizedTranscript);

    const totalItemsCount = 
      parsedContent.agreements.length +
      parsedContent.decisions.length +
      parsedContent.obligations.length +
      parsedContent.pending_items.length +
      parsedContent.responsible_parties.length +
      parsedContent.deadlines.length +
      parsedContent.open_questions.length +
      parsedContent.disputed_points.length;

    if (totalItemsCount === 0) {
      parsedContent.title = "Entendimento insuficiente";
      parsedContent.summary = "A conversa capturada não contém elementos suficientes para formar combinados claros, ou todas as extrações falharam na validação textual.";
      parsedContent.confidence_score = 0;
    }

    res.status(200).json({
      ...parsedContent,
      model: LLAMA_MODEL,
      provider: 'vercel-edge',
      is_mock: false,
      generated_at: Date.now(),
      transcript_char_count: charCount,
      transcript_segment_count: segmentCount
    });

  } catch (error) {
    console.error('[Vercel ToDeAcordo] Erro interno:', error);
    res.status(500).json({ error: error.message });
  }
}

```

---

## Arquivo: api\transcribe.js
```javascript
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return res.status(500).json({ error: 'GROQ_API_KEY is not configured.' });
    }

    const { audio, mimetype } = req.body;
    if (!audio) {
      return res.status(400).json({ error: 'Missing audio base64 payload' });
    }

    const buffer = Buffer.from(audio, 'base64');
    
    // Create FormData for Groq API
    const formData = new FormData();
    const blob = new Blob([buffer], { type: mimetype || 'audio/webm' });
    formData.append('file', blob, 'audio.webm');
    formData.append('model', 'whisper-large-v3');
    formData.append('language', 'pt');
    formData.append('response_format', 'json');

    const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`
      },
      body: formData
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Groq API Error:', data);
      return res.status(response.status).json({ error: 'Groq API Error', details: data });
    }

    return res.status(200).json({
      text: data.text,
      speaker: 'Speaker', // Whisper without diarization doesn't know the speaker
      timestamp: new Date().toISOString()
    });

  } catch (err) {
    console.error('Transcription error:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
}

```

---

## Arquivo: api\vps-proxy\[...path].js
```javascript
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req, res) {
  const VPS_BASE = "http://147.15.112.40:5000";

  // Captura tudo depois de /api/vps-proxy/
  const { path = [] } = req.query;
  const targetPath = Array.isArray(path) ? path.join("/") : path;
  const targetUrl = `${VPS_BASE}/${targetPath}`;

  // Headers de CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const fetchOptions = {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (req.method === "POST" && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(targetUrl, fetchOptions);

    // Stream da resposta
    const contentType = response.headers.get("content-type") || "application/json";
    res.setHeader("Content-Type", contentType);
    res.status(response.status);

    const text = await response.text();
    return res.send(text);
  } catch (err) {
    console.error("[VPS Proxy] Erro ao conectar com a VPS:", err.message);
    return res.status(502).json({
      error: "Erro de gateway: não foi possível conectar à VPS.",
      detail: err.message,
    });
  }
}

```

---
