# ✅ Profffeessional Readme Generator

> Because “good enough” isn’t good enough when the world is watching.

[![npm version](https://badge.fury.io/js/profffeessional-readme.svg)](https://badge.fury.io/js/profffeessional-readme)
[![CI](https://github.com/acme/profffeessional-readme/actions/workflows/ci.yml/badge.svg)](https://github.com/acme/profffeessional-readme/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node ≥18](https://img.shields.io/badge/node-≥18-339933)](https://nodejs.org/)

## What is it?
Profffeessional Readme is a zero-config CLI that turns a bare-bones repo into a polished, investor-ready masterpiece in under 10 seconds. It auto-detects your stack, injects shields, writes contribution guidelines, generates an API reference, and even spells “professional” with three f’s so you never forget how serious we are.

## ✨ Features
- 🔮 **Auto-detection**: frameworks, test runners, package manager, CI provider
- 🎨 **15 hand-crafted templates** (startup, OSS lib, enterprise, game, …)
- 🧬 **Dynamic badges**—version, ci, coverage, deps, node, bundle size
- 📜 **Contributing guide** tailor-made for your license and CoC
- 🗂️ **API.md** scaffold from JSDoc / TypeDoc / OpenAPI specs
- 🌐 **Translation stubs** (EN, ES, DE, FR, JA, ZH)
- 🚦 **Pre-commit hook** friendly—only touches what you allow
- 🪶 **Zero dependencies** shipped—runs in 200 ms

## Quick Start
```bash
npm i -g profffeessional-readme
# cd into your project
proff readmine
```
That’s it. A pristine `README.md`, `CONTRIBUTING.md`, and `docs/API.md` appear like magic—committed and ready to impress.

## Programmatic API
```js
import { generate } from 'profffeessional-readme';

await generate({
  template: 'startup',
  badges: ['npm', 'ci', 'coverage', 'sponsor'],
  outputDir: './',
  locale: 'en',
});
```
See [full API docs](./docs/API.md).

## Template Gallery
| Template | Best for | Preview |
|----------|----------|---------|
| startup | SaaS, raising seed | [view](./examples/startup.md) |
| oss-lib | NPM packages | [view](./examples/oss-lib.md) |
| enterprise | Fortune-500 inner-source | [view](./examples/enterprise.md) |
| game | Indie game repo | [view](./examples/game.md) |
| academic | Research code | [view](./examples/academic.md) |

## Extending
1. Fork this repo
2. Add your template under `templates/name/*.ejs`
3. Open a PR—CI will auto-publish a canary release for reviewers.

## Roadmap
- VS Code extension
- JetBrains plugin
- Remote template cache (Gist, GH repo, S3)
- `proff swap`—A/B test two readme variants

## Contributing
We ❤️ contributions. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for setup and etiquette.

## License
MIT © [Acme Labs](https://github.com/acme) and [contributors](./CONTRIBUTORS.md).

## Acknowledgements
- Shield.io for the badge CDN
- GitHub for the octocat inspiration
- Every dev who ever shipped a readme with a typo—this one’s for you.