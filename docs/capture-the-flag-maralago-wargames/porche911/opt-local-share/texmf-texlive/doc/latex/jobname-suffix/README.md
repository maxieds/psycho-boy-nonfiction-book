# jobname-suffix
LaTeX package to achieve different outputs based on the filename

### Compiling

#### Running tests

Run tests with

```bash
l3build check
```

To override a test's output (for example if you changed the test), run

```bash
l3build save jobname-suffix-001
```

## Missing `l3build`

If your system does not have `l3build` installed into the system path,
you may need to access it directly. For example, on my system it is located
at `/usr/share/texmf-dist/scripts/l3build/l3build.lua` and can be
directly invoked.
