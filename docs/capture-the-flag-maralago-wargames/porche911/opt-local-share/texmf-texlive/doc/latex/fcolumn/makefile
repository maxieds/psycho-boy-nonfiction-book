.SUFFIXES: .dtx .glo .gls .idx .ind .ins .pdf .sty .tex
DIST=fcolumn.dtx fcolumn.ins fcolumn.pdf makefile README

.ins.sty:
	pdftex $<

.dtx.glo:
	pdflatex $<

.dtx.idx:
	pdflatex $<

.glo.gls:
	makeindex -s gglo.ist -o fcolumn.gls fcolumn.glo

.idx.ind:
	makeindex -s gind.ist -o fcolumn.ind fcolumn.idx

.dtx.pdf:
	pdflatex $<

.tex.pdf:
	pdflatex $<

all: fcolumn.pdf

install:
	pdftex fcolumn.ins

dist: $(DIST)
	mkdir FCv1.4.2temp ; cp $(DIST) FCv1.4.2temp/ ; tar -czf fcolumn.tgz FCv1.4.2temp/ ; rm -r FCv1.4.2temp/

fcolumn.pdf: fcolumn.dtx fcolumn.gls fcolumn.ind fcolumn.sty
fcolumn.glo  fcolumn.idx: fcolumn.dtx
fcolumn.ind: fcolumn.idx
fcolumn.gls: fcolumn.glo

.PHONY: clean
clean:
	-rm fcolumn.aux fcolumn.glo fcolumn.gls fcolumn.idx fcolumn.ilg fcolumn.ind \
     fcolumn.log fcolumn.out fcolumn.pdf fcolumn.sty fcolumn.tgz
