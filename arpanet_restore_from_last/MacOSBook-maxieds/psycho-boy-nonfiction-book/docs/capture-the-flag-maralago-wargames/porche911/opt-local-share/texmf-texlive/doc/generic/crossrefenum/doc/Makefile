crossrefenum.pdf: crossrefenum-doc.tex
	context $< && mv crossrefenum-doc.pdf $@

crossrefenum-doc.tex: crossrefenum.md ../CHANGELOG.md \
					TEMPLATE_crossrefenum.context fixes.lua
	pandoc -s -o $@ -t context \
		--template=TEMPLATE_crossrefenum.context \
		-L fixes.lua \
		crossrefenum.md ../CHANGELOG.md
