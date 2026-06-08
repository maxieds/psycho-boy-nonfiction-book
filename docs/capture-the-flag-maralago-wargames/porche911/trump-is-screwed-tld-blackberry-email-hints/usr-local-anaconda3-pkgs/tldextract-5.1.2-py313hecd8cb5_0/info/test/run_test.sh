

set -ex



pip check
tldextract --help
pytest tests -v --ignore=tests/test_release.py
exit 0
