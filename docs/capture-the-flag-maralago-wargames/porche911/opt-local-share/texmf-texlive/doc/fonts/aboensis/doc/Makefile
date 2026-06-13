
pdf :
	xelatex aboensis.tex
	bibtex aboensis
	xelatex aboensis.tex
	xelatex aboensis.tex
	xelatex aboensis.tex

once : 
	xelatex aboensis.tex

clean :
	rm -f aboensis.aux
	rm -f aboensis.log
	rm -f aboensis.bbl
	rm -f aboensis.toc
	rm -f aboensis.blg
	rm -f missfont.log

dist :
	rm -rf /tmp/aboensis
	mkdir /tmp/aboensis
	mkdir /tmp/aboensis/doc
	mkdir /tmp/aboensis/doc/pics
	cp aboensis.tex /tmp/aboensis/doc
	cp ab_symbols.tex /tmp/aboensis/doc
	cp aboensis.bib /tmp/aboensis/doc
	cp Makefile /tmp/aboensis/doc
	cp pics/* /tmp/aboensis/doc/pics
	cp ../Aboensis.glyphs /tmp/aboensis/
	cp ../Aboensis-Regular.otf /tmp/aboensis
	cp ../aboensis.sty /tmp/aboensis
	cp ../README /tmp/aboensis
	cp ../MANIFEST-Aboensis.txt /tmp/aboensis
	cp ../ccby4.txt /tmp/aboensis
	cp ../OFL.txt /tmp/aboensis
	cp ../lppl.txt /tmp/aboensis
	cp aboensis.pdf /tmp/aboensis
	cd /tmp/ ; zip -r aboensis.zip aboensis
